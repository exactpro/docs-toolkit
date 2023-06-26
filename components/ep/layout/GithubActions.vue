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
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { resolveURL } from 'ufo'

const props = defineProps<{
  doc: Pick<ParsedContent, string>
}>()

const githubInfo = useAppConfig().exactproDocs.github!

const editPath = resolveURL(
  githubInfo.repoLink!,
  'edit',
  githubInfo.branch!,
  githubInfo.docsDir!,
  props.doc._source,
  props.doc._file
)

const createIssuePath = resolveURL(githubInfo.repoLink!, '/issues/new/choose')
</script>

<template>
  <div
    v-if="githubInfo.repoLink"
    class="flex justify-end gap-4 flex-wrap items-center"
  >
    <a :href="editPath" class="github-action-button">
      <Icon
        class="w-4 h-4 mr-2 text-primary"
        name="heroicons:pencil-square-solid"
      />
      <span>Edit this page</span>
    </a>
    <a :href="createIssuePath" class="github-action-button">
      <Icon
        class="w-4 h-4 mr-2 text-error"
        name="heroicons:chat-bubble-left-20-solid"
      />
      <span>Create issue</span>
    </a>
  </div>
</template>

<style>
.github-action-button {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center;
}
</style>
