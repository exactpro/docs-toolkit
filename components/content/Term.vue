<template>
  <span
    ref="el"
    class="underline transition-all"
    :class="{
      'bg-accent-50 bg-opacity-25 rounded': isHighlighted
    }"
    @mouseover="revealContent"
    @mouseleave="onMouseLeave"
    @click="revealContent"
  >
    {{ term }}
  </span>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Term',
  props: {
    term: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const el = ref<HTMLElement | null>(null)
    const { model: popup, isFocused } = useTermPopup()

    const { data: termContent } = await useAsyncData(
      `term/${props.term}`,
      () => {
        return queryContent('terms')
          .where({
            $or: [{ title: props.term }, { alias: { $contains: props.term } }]
          })
          .findOne()
      }
    )

    return {
      el,
      termContent,
      revealContent: () => {
        isFocused.value = true
        popup.value = {
          show: true,
          ref: el.value,
          content: termContent
        }
      },
      onMouseLeave: () => {
        isFocused.value = false
      },
      isHighlighted: computed(() => {
        return popup.value.show && popup.value.ref === el.value
      })
    }
  }
})
</script>
