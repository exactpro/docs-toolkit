<template>
  <Header class="sticky-top fixed" />
  <main class="mx-auto p-4 pt-24">
    <slot />
  </main>
</template>

<script lang="ts">
import Header from '~~/components/layout/Header.vue';

export default defineComponent({
  components: {
    Header
  }
})
</script>