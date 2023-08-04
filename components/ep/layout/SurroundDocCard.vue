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

<script lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { withTrailingSlash } from '../../../utils/navigation'
export default {
  name: 'EpLayoutSurroundDocCard'
}
</script>

<script setup lang="ts">
defineProps<{
  doc: ParsedContent
  direction: 'before' | 'after'
}>()

const config = useToolkitConfig().prevNextCards!
</script>

<template>
  <NuxtLink
    :to="withTrailingSlash(doc._path ?? '')"
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 break-words"
  >
    <div>
      <div v-if="direction === 'before'" class="mb-2">
        <span
          class="bg-secondary-100 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >
          <Icon name="ic:sharp-arrow-back-ios" class="leading-4 mb-1" />Previous
          <!--TODO: shink flexbox -->
        </span>
      </div>
      <div v-else class="mb-2">
        <span
          class="bg-secondary-100 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >Next

          <Icon name="ic:sharp-arrow-forward-ios" class="leading-4 mb-1" />
        </span>
      </div>
      <h4 class="text-xl font-bold">{{ doc.title }}</h4>
      <p v-if="config.description?.display !== 'hidden'" class="break-words">
        {{ doc.description }}
      </p>
    </div>
  </NuxtLink>
</template>
