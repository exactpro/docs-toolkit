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

import { resolveURL } from 'ufo'
import { useToolkitConfig } from '../../composables/config'

const keysToTemplates = {
  UserAgent: (input: string) => `User-agent: ${input}`,
  CrawlDelay: (input: string) => `Crawl-delay: ${input}`,
  Disallow: (input: string) => `Disallow: ${input}`,
  Allow: (input: string) => `Allow: ${input}`,
  Host: (input: string) => `Host: ${input}`,
  Sitemap: (input: string) => `Sitemap: ${input}`,
  CleanParam: (input: string) => `Clean-param: ${input}`,
  Comment: (input: string) => `# ${input}`
}

export type RobotsTxtOptions = {
  [key in keyof typeof keysToTemplates]?: string
} & {
  BlankLine?: boolean
}

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  const lines: string[] = []
  const config = useToolkitConfig()
  for (const robotOptionsItem of config.seo?.robots ?? []) {
    for (const [key, value] of Object.entries(robotOptionsItem)) {
      if (typeof value === 'string') {
        lines.push(keysToTemplates[key as keyof typeof keysToTemplates](value))
      }
      // If BlankLine is true, add blank line
      if (typeof value === 'boolean' && value) {
        lines.push('')
      }
    }
  }
  if (config.seo?.sitemap?.baseUrl) {
    lines.push('')
    lines.push(
      `Sitemap: ${resolveURL(config.seo.sitemap.baseUrl, 'sitemap.xml')}`
    )
  }
  return lines.join('\n')
})
