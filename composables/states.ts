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

import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Ref } from 'vue'

export const useShowContentTree = () =>
  useState<boolean>('showContentTree', () => false)
export const useTermPopup = () => {
  const model = useState<{
    show: boolean
    ref: HTMLElement | null
    content: Ref<Pick<ParsedContent, string> | null>
  }>('term-popup', () => ({ show: false, ref: null, content: ref(null) }))

  const isFocused = useState(() => false)

  const debugInfo = useState<{
    desiredTerm: string
  }>(() => ({ desiredTerm: 'NO_TERM_PROVIDED' }))

  return {
    model,
    isFocused,
    debugInfo
  }
}
