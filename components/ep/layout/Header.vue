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
import { filename } from 'pathe/utils'

const glob = import.meta.glob<{ default: string }>(
  '~/assets/theme/header-bg.*',
  {
    eager: true
  }
)
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const background = images['header-bg'] ?? ''

defineProps<{
  showContentTree?: boolean
}>()

defineEmits({
  'update:showContentTree'(payload: boolean) {
    return typeof payload === 'boolean'
  }
})
</script>

<template>
  <header class="w-full backdrop-blur">
    <div class="relative">
      <div
        class="e-header__background"
        :style="{
          backgroundImage: `url(${background})`
        }"
      />
      <div class="w-full flex justify-between items-center px-2 md:px-4">
        <div class="flex items-center">
          <button
            class="w-7 h-w-7 text-white lg:hidden"
            @click="$emit('update:showContentTree', !showContentTree)"
          >
            <Icon
              v-if="showContentTree"
              name="heroicons:x-mark"
              class="w-full h-full"
            />
            <Icon v-else name="heroicons:bars-3" class="w-full h-full" />
          </button>
          <NuxtLink to="/" class="flex items-center w-fit gap-2">
            <ExactproDocsLogo class="w-40 m-2" />
            <span
              class="px-2 py-1 rounded-lg bg-accent-700 text-gray-50 font-semibold text-sm"
            >
              Docs
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.e-header__background {
  @apply bg-primary opacity-95 absolute h-full w-full -z-10;
  background-position: top left;
  background-size: cover;
}
</style>
