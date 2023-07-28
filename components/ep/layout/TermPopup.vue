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
const { model, isFocused, debugInfo } = useTermPopup()
const coords = computed(() => {
  const bounds = model.value.ref?.getBoundingClientRect()
  return {
    top: (bounds?.bottom ?? 0) + window.scrollY + 5 + 'px',
    left: (bounds?.left ?? 0) + window.scrollX + 'px',
    transition: 'all 0.3s ease'
  }
})
let hideTimer: NodeJS.Timeout
watch(isFocused, (v) => {
  if (v) {
    clearTimeout(hideTimer)
  } else {
    hideTimer = setTimeout(() => {
      if (!isFocused.value) model.value.show = false
    }, 200)
  }
})

function onMouseEnter() {
  isFocused.value = true
}
function onMouseLeave() {
  isFocused.value = false
}
</script>

<template>
  <Transition name="term-popup">
    <div
      v-show="model.show"
      class="term-popup gevamu-prose"
      :style="coords"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div class="bg-accent text-white text-right text-sm -mx-2 -mt-2 mb-2">
        <button class="mx-1 mb-1" @click="model.show = false">
          <Icon
            name="heroicons:x-mark"
            size="2em"
            class="inline-block hover:scale-150 transition-transform"
          />
        </button>
      </div>
      <ContentRenderer v-if="model.content" :value="model.content">
        <ContentRendererMarkdown :value="model.content" />
      </ContentRenderer>
      <div v-else class="text-error">
        Term "{{ debugInfo.desiredTerm }}" is not found
      </div>
    </div>
  </Transition>
</template>

<style>
.term-popup {
  @apply absolute max-w-md p-2
        bg-accent-50 bg-opacity-20 backdrop-blur
        rounded-md border-accent border-2 border-t-8
        shadow-2xl;
}
.term-popup h1 {
  @apply text-lg font-semibold;
}
</style>

<style>
.term-popup-enter-active,
.term-popup-leave-active {
  transition: opacity 0.3s ease;
}

.term-popup-enter-from,
.term-popup-leave-to {
  opacity: 0;
}
</style>
