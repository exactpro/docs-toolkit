<!--
  ~ Copyright 2023 Exactpro (Exactpro Systems Limited)
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->

<template>
  <ul>
    <TableOfContentsItem
      v-for="link in toc.links"
      :key="link.id"
      :link="link"
      :active="headersToHighlight"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Toc, TocLink } from '@nuxt/content/dist/runtime/types'
import TableOfContentsItem from './TableOfContentsItem.vue'

export default defineComponent({
  name: 'TableOfContents',
  components: {
    TableOfContentsItem
  },
  props: {
    toc: {
      type: Object as () => Toc,
      required: true
    }
  },
  data() {
    return {
      headersToHighlight: [] as string[],
      observer: null as IntersectionObserver | null
    }
  },
  watch: {
    toc() {
      setTimeout(() => {
        this.setupObserver()
      }, 100)
    }
  },
  mounted() {
    this.setupObserver()
  },
  methods: {
    isHighlighted(id: string) {
      return this.headersToHighlight.findIndex((h) => h === id) > -1
    },
    setupObserver() {
      const highlightMap = new Map<string, boolean>()
      if (this.observer) {
        this.observer.disconnect()
      } else {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            highlightMap.set(entry.target.id, entry.isIntersecting)
          })
          this.headersToHighlight = Array.from(highlightMap.keys()).filter(
            (id) => highlightMap.get(id)
          )
        })
      }

      const observer = this.observer
      const observeLinks = (links: TocLink[]) => {
        links.forEach((link) => {
          const el = document.getElementById(link.id)
          if (el) observer.observe(el)
          if (link.children) observeLinks(link.children)
        })
      }
      observeLinks(this.toc.links)
    }
  }
})
</script>
