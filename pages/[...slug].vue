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
  <EpPageMeta :doc="doc" />
  <NuxtLayout>
    <div class="px-4 print:px-8 mt-10 mb-96 print:mb-0">
      <EpLayoutBreadcrumbs />
      <article class="mb-10">
        <ContentRenderer v-if="doc && doc._type === 'markdown'" :value="doc">
          <ContentRendererMarkdown :value="doc" class="gevamu-prose" />
          <nav
            class="justify-center grid sm:grid-cols-2 gap-8 items-start mt-32 print:hidden"
          >
            <EpLayoutSurroundDocCard
              v-if="doc.before"
              :doc="doc.before"
              direction="before"
            />
            <EpLayoutSurroundDocCard
              v-if="doc.after"
              :doc="doc.after"
              direction="after"
            />
          </nav>
        </ContentRenderer>
        <div v-else-if="doc" class="gevamu-prose w-screen">
          <h1>{{ doc._dir.title }} pages</h1>
          <!-- TODO: Generate index page -->
        </div>
      </article>
      <EpLayoutGithubActions v-if="doc" :doc="doc" class="print:hidden" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import {
  ParsedContent,
  MarkdownParsedContent
} from '@nuxt/content/dist/runtime/types'

import { withoutTrailingSlash } from 'ufo'

// TODO: check how to use native type instead of DocParsedContent
interface DocParsedContent extends MarkdownParsedContent {
  _dir: { title: string }
}

export default defineComponent({
  name: 'ContentPage',
  setup() {
    definePageMeta({
      layout: 'docs'
    })

    const route = useRoute()
    const toc = useToc()
    const { data: doc } = useAsyncData('page-data' + route.path, async () => {
      const docPromise = queryContent<DocParsedContent>(route.path).findOne()
      const surroundPromise = queryContent()
        .only(['_path', '_draft', 'title', 'description', '_partial'])
        .where({ _partial: false, _draft: false })
        .findSurround(withoutTrailingSlash(route.path), {
          before: 1,
          after: 1
        })
      const [doc, surround] = await Promise.all([docPromise, surroundPromise])
      return {
        ...doc,
        before: surround[0] as ParsedContent,
        after: surround[1] as ParsedContent
      }
    })
    toc.value = doc.value?.body?.toc ?? null

    const { data: breadcrumbs } = useBreadcrumbs()

    return {
      doc,
      breadcrumbs
    }
  }
})
</script>

<style>
.gevamu-prose :where(h1, h2, h3, h4, h5, h6) a {
  @apply no-underline;
}
</style>
