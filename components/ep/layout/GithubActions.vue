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
  documentPath: string
  source: string
}>()

const { data: editBasePath } = useFetch(
  '/api/_docs-toolkit/github/edit-base-path'
)

const editPath = computed(() => {
  return `${editBasePath.value}/${props.source}/${props.documentPath}`
})
</script>

<template>
  <div
    v-if="useAppConfig().exactproDocs.github.repoLink"
    class="flex justify-end gap-4 flex-wrap items-center"
  >
    <a :href="editPath" class="github-action-button">
      <Icon
        class="w-4 h-4 mr-2 text-primary"
        name="heroicons:pencil-square-solid"
      />
      <span>Edit this page</span>
    </a>
    <a :href="editPath" class="github-action-button">
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
