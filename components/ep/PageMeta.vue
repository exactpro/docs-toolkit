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

const props = defineProps<{
  doc: Pick<ParsedContent, string> | null
}>()

const title = computed<string>(() => props.doc?.title ?? '')
const description = computed<string>(() => props.doc?.description ?? '')

const config = useAppConfig()
const verificationMetaTags = config.exactproDocs.seo?.verificationMetaTags
</script>

<template>
  <Head>
    <template v-if="title">
      <Title>{{ title }}</Title>
      <Meta property="og:title" :content="title" />
    </template>
    <template v-if="description">
      <Meta name="description" :content="description" />
      <Meta property="og:description" :content="description" />
    </template>
    <Meta
      v-for="(verification, index) of verificationMetaTags"
      :key="index"
      :name="verification.name"
      :content="verification.content"
    />
  </Head>
</template>
