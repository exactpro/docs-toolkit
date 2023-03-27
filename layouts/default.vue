<template>
  <EHeader class="sticky-top fixed" />
  <main class="mx-auto p-4 pt-24">
    <slot />
  </main>
</template>

<script lang="ts">
import EHeader from '../components/layout/EHeader.vue'

export default defineComponent({
  components: {
    EHeader
  }
})
</script>
