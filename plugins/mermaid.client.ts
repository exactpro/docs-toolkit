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

import type { Mermaid } from 'mermaid'
// @ts-ignore 2307
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'

declare module '#app' {
  interface NuxtApp {
    $mermaid: Mermaid
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $mermaid: Mermaid
  }
}

export default defineNuxtPlugin(() => {
  mermaid.initialize({
    startOnLoad: false
  })

  return {
    provide: {
      mermaid: mermaid as Mermaid
    }
  }
})
