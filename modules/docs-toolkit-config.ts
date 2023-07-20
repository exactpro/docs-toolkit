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

import { defineNuxtModule, createResolver, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const prefix = 'ExactproDocs'
    const typenamesWithoutPrefix = [
      'RobotsTxtOptions',
      'SocialLinkConfigOptions',
      'ContactConfigOptions'
    ]

    const typesPath = addTemplate({
      filename: 'types/docs-web-toolkit.d.ts',
      getContents: () =>
        [
          `import type { ${typenamesWithoutPrefix
            .map((type) => `${prefix}${type} as ${type}`)
            .join(', ')} } from '${resolve('../nuxt.schema.ts')}'`,
          'declare global {',
          ...typenamesWithoutPrefix.map(
            (type) => `  interface ${prefix}${type} extends ${type} {}`
          ),
          '}'
        ].join('\n')
    }).dst

    nuxt.hook('prepare:types', (options) => {
      options.references.push({
        path: typesPath
      })
    })
  }
})
