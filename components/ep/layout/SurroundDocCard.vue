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
export default {
  name: 'EpLayoutSurroundDocCard'
}
</script>

<script setup lang="ts">
defineProps<{
  doc: ParsedContent
  direction: 'before' | 'after'
}>()
</script>

<template>
  <NuxtLink :to="doc._path" class="transition-transform hover:scale-95">
    <div>
      <div v-if="direction === 'before'">
        <Icon name="ic:sharp-arrow-back-ios" />Previous
      </div>
      <div v-else>
        Next<Icon name="ic:sharp-arrow-forward-ios" />
      </div>
      <h4 class="text-xl font-bold">{{ doc.title }}</h4>
      <p>{{ doc.description }}</p>
    </div>
  </NuxtLink>
</template>
