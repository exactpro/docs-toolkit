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
    title: 'Exactpro Docs Toolkit',
    github: {
      repoLink: 'https://github.com/exactpro/docs-toolkit',
      branch: 'master',
      docsDir: '/docs'
    },
    social: {
      github: {
        url: 'https://github.com/exactpro/docs-toolkit'
      }
    },
    contacts: [],
    seo: {
      description:
        'Documentation toolkit for Exactpro projects powered by Nuxt.js',
      baseUrl: 'https://exactpro.github.io/docs-toolkit',
      keywords: ['documentation', 'nuxt3', 'nuxt.js', 'vue.js', 'exactpro'],
      robots: [{ UserAgent: '*' }, { Allow: '/' }],
      verificationMetaTags: [
        // <meta name="google-site-verification" content="PYzR06VK4UIZvGdBkMh_TkqOu83QxapFJknyAR58yJA" />
        {
          name: 'google-site-verification',
          content: 'PYzR06VK4UIZvGdBkMh_TkqOu83QxapFJknyAR58yJA'
        }
      ]
    },
    gtag: {
      measurementId: 'G-BD6STVYLJK'
    }
  }
})
