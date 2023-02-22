<template>
  <ul>
    <TableOfContentsItem v-for="(link, index) in toc.links" :key="link.id" 
      :link="link" :active="headersToHighlight" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Toc, TocLink } from '@nuxt/content/dist/runtime/types';
import TableOfContentsItem from './TableOfContentsItem.vue';

export default defineComponent({
  name: 'TableOfContents',
  props: {
    toc: {
      type: Object as () => Toc,
      required: true
    } 
  },
  components: {
    TableOfContentsItem
  },
  data(){
    return{
			headersToHighlight: [] as string[],
			observer: null as IntersectionObserver | null
    }
  },
  methods:{
    isHighlighted(id: string){
      return this.headersToHighlight.findIndex(h => h === id) > -1
    },
		setupObserver(){
			const highlightMap = new Map<string, boolean>()
      if (this.observer) {
        this.observer.disconnect()
      } else {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            highlightMap.set(entry.target.id, entry.isIntersecting)
          })
          this.headersToHighlight = Array.from(highlightMap.keys())
            .filter(id => highlightMap.get(id))
        })
      }

      const observer = this.observer
      const observeLinks = (links: TocLink[]) => {
        links.forEach(link => {
          const el = document.getElementById(link.id)
          if (el) observer.observe(el)
          if (link.children) observeLinks(link.children)
        })
      }
      observeLinks(this.toc.links)
		}
  },
  watch: {
    toc(){
      setTimeout(() => {
        this.setupObserver()
      }, 100);
    }
  },
  mounted(){
    this.setupObserver()
  }
})
</script>

