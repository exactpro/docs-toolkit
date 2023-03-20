<template>
  <div class="default" :class="mode">
    <slot />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Notice',
  props: {
    note: Boolean,
    info: Boolean,
    warning: Boolean
  },
  setup(props) {
    return {
      mode: props.note
        ? ('note' as const)
        : props.info
        ? ('info' as const)
        : props.warning
        ? ('warning' as const)
        : ''
    }
  }
})
</script>

<style scoped>
.default {
  @apply border border-l-8 px-3 rounded-md;
}

.note {
  @apply bg-yellow-50 border-yellow-600;
}

.info {
  @apply bg-blue-50 border-accent;
}

.warning {
  @apply bg-error-50 border-error;
}
</style>
