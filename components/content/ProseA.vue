<script setup lang="ts">

import wTrailingSlash from '../../utils/wTrailingSlash'

defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <NuxtLink :href="wTrailingSlash(href)" :target="target">
    <slot />
  </NuxtLink>
</template>