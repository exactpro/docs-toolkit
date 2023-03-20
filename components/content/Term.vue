<script setup lang="ts">
const props = defineProps<{
  term: string
}>()

const el = ref<HTMLElement | null>(null)
const { model: popup, isFocused, debugInfo } = useTermPopup()

const { data: termContent, error: termFetchError } = useAsyncData(
  `term/${props.term}`,
  () =>
    queryContent('terms')
      .where({
        $or: [{ title: props.term }, { alias: { $contains: props.term } }]
      })
      .findOne()
)

if (termFetchError.value)
  /* eslint-disable no-console */
  console.error(
    createError({
      statusCode: 404,
      statusMessage: `Term "${props.term}" not found`,
      cause: termFetchError.value.cause,
      unhandled: false
    })
  )

function revealContent() {
  isFocused.value = true
  debugInfo.value = { desiredTerm: props.term }
  popup.value = {
    show: true,
    ref: el.value,
    content: termContent
  }
}

function onMouseLeave() {
  isFocused.value = false
}

const isHighlighted = computed(() => {
  return popup.value.show && popup.value.ref === el.value
})
</script>

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
    <slot />
  </span>
</template>
