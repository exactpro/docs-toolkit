/*
 * Copyright 2023 Exactpro (Exactpro Systems Limited)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Toc, MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

/**
 *
 * Provides table of contents reference
 *
 * @returns Table of contents reference
 */
export function useToc() {
  return useState<Toc | null>('toc', () => null)
}

/**
 *
 * Automatically updates table of contents when document is changed
 *
 * @param doc Document to extract table of contents from
 * @returns Function to stop watching document
 */
export function useTocUpdate(doc: Ref<MarkdownParsedContent | null>) {
  const toc = useToc()

  function updateToc() {
    if (doc.value) {
      toc.value = doc.value?.body?.toc ?? null
    }
  }

  const stopWatchDoc = watch(doc, () => {
    updateToc()
  })

  onMounted(() => {
    updateToc()
  })

  onBeforeUnmount(() => {
    stopWatchDoc()
  })

  return stopWatchDoc
}
