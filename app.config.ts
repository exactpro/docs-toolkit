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

export default defineAppConfig({
  exactproDocs: {
    title: 'Exactpro Documentation',
    prevNextCards: {
      description: {
        display: 'full',
        limit: 2
      }
    },
    github: {
      branch: 'master',
      docsDir: '/'
    },
    seo: {
      keywords: [],
      robots: [],
      verificationMetaTags: []
    },
    contacts: [],
    social: {
      github: {
        url: 'https://github.com/exactpro'
      },
      facebook: {
        url: 'https://www.facebook.com/exactpro/'
      },
      twitter: {
        url: 'https://twitter.com/exactpro'
      },
      linkedin: {
        url: 'https://www.linkedin.com/company/exactpro-systems-llc?trk=biz-companies-cym'
      },
      youtube: {
        url: 'https://www.youtube.com/c/exactprosystems'
      }
    }
  },
  nuxtIcon: {}
})
