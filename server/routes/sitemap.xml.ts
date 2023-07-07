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

import { SitemapStream, streamToPromise } from 'sitemap'
import { joinURL, parseURL, withProtocol } from 'ufo'
import withTrailingSlash from '../../utils/wTrailingSlash'
import { serverQueryContent } from '#content/server'
const appConfig = useAppConfig()

const path = parseURL(appConfig.exactproDocs.seo?.sitemap?.baseUrl ?? '')

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event)
    .where({ _partial: false, _draft: false })
    .find()
  if (!path.host || !path.protocol) {
    throw new Error('host or protocol not found')
  }
  const sitemap = new SitemapStream({
    hostname: withProtocol(path.host, path.protocol)
  })

  for (const doc of docs) {
    if (!doc._path) {
      continue
    }
    sitemap.write({
      url: withTrailingSlash(joinURL(path.pathname, doc._path)),
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
