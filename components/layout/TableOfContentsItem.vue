<template>
  <li>
    <a :href="'#' + link.id">
      <div
        class="hover:translate-x-2 py-1 transition-all"
        :class="{
          'text-accent-700': isActive,
          'font-semibold': link.depth === 2,
          'pl-2': link.depth === 3,
          'pl-3': link.depth === 4,
          'pl-4': link.depth === 5,
          'pl-5': link.depth >= 6
        }"
      >
        {{ link.text }}
      </div>
    </a>
    <ul v-if="link.children && link.children.length">
      <TableOfContentsItem
        v-for="l in link.children"
        :key="l.id"
        :active="active"
        :link="l"
      />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TocLink } from '@nuxt/content/dist/runtime/types'

export default defineComponent({
  name: 'TableOfContentsItem',
  props: {
    link: {
      type: Object as () => TocLink,
      required: true
    },
    active: {
      type: Array as () => string[],
      default: () => []
    }
  },
  computed: {
    isActive() {
      return this.active.findIndex((h) => h === this.link.id) > -1
    }
  }
})
</script>
