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
const isFullscreen = ref(false)

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}
</script>

<template>
  <div v-if="!isFullscreen" @click="toggleFullscreen">
    <slot />
  </div>
  <Teleport v-else to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click="toggleFullscreen"
    >
      <div class="absolute inset-0 bg-black opacity-50" />
      <div class="relative z-10">
        <slot />
      </div>
    </div>
  </Teleport>
</template>
