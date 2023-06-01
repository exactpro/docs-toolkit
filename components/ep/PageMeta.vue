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
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  doc: Pick<ParsedContent, string> | null
}>()

const config = useAppConfig()
const verificationMetaTags = config.exactproDocs.seo?.verificationMetaTags
</script>

<template>
  <Head>
    <Title>{{ doc ? doc.title : '' }}</Title>
    <Meta
      v-for="verification of verificationMetaTags"
      :name="verification.name"
      :content="verification.content"
    />
  </Head>
</template>
