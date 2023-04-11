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

<script setup lang="ts">
const props = defineProps<{
  term: string
}>()

const el = ref<HTMLElement | null>(null)
const { model: popup, isFocused, debugInfo } = useTermPopup()

const { data: termContent, error: termFetchError } = useAsyncData(
  `term/${props.term}`,
  () =>
    queryContent('_terms')
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
