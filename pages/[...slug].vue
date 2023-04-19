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

<template>
  <Head>
    <Title>{{ doc ? doc.title : '' }}</Title>
  </Head>
  <NuxtLayout>
    <article class="px-4 mt-10 mb-96">
      <ContentRenderer v-if="doc && doc._type === 'markdown'" :value="doc">
        <ContentRendererMarkdown :value="doc" class="gevamu-prose" />
      </ContentRenderer>
      <div v-else-if="doc" class="gevamu-prose w-screen">
        <h1>{{ doc._dir.title }} pages</h1>
        <!-- TODO: Generate index page -->
      </div>
    </article>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'ContentPage',
  async setup() {
    definePageMeta({
      layout: 'docs'
    })
    const route = useRoute()
    const toc = useToc()
    const { data: doc } = await useAsyncData('page-data' + route.path, () => {
      return queryContent(route.path).findOne()
    })
    toc.value = doc.value?.body?.toc ?? null

    return {
      doc
    }
  }
})
</script>

<style>
.gevamu-prose :where(h1, h2, h3, h4, h5, h6) a {
  @apply no-underline;
}
</style>
