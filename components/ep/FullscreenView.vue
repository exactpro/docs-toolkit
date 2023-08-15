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
defineSlots<{
  default: {
    onClick: () => void
    isFullscreen: boolean
  }
}>()

const isFullscreen = ref(false)

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}
</script>

<template>
  <slot :on-click="toggleFullscreen" :is-fullscreen="isFullscreen" />
  <Teleport to="body">
    <div
      v-if="isFullscreen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="absolute inset-0 bg-black opacity-50"
        @click="toggleFullscreen"
      />
      <Icon
        class="fullscreen-view__button--close"
        name="heroicons:x-mark"
        size="3rem"
        @click="toggleFullscreen"
      />
      <div class="relative z-10">
        <slot :on-click="() => {}" :is-fullscreen="isFullscreen" />
      </div>
    </div>
  </Teleport>
</template>

<style>
.fullscreen-view__button--close {
  @apply absolute top-0 right-0 m-4
          text-neutral-400 hover:text-neutral-500 transition-colors
          cursor-pointer z-20 drop-shadow-lg;
}
</style>
