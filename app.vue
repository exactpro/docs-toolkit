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

<script setup>
import { resolveURL } from 'ufo'
const config = useToolkitConfig()

const siteDescription = config?.seo?.description ?? null

useSeoMeta({
  titleTemplate: (title) => {
    if (title) return `${title} | ${config.title}`
    return config.title
  },
  description: siteDescription,
  ogDescription: siteDescription,
  generator: '@exactpro/docs-web-toolkit',
  ogSiteName: config.title,
  ogUrl: computed(() => resolveURL(config.seo.baseUrl, useRoute().path))
})

useHead({
  meta: [
    {
      name: 'keywords',
      content: config?.seo?.keywords?.join(', ') ?? ''
    }
  ]
})
</script>

<template>
  <NuxtPage />
</template>
