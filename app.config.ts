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

import type { ModuleOptions } from 'nuxt-icon'
import type { DeepPartial } from './utils/DeepPartial'
import type { RobotsTxtOptions } from './server/routes/robots.txt'

interface SocialLinkConfigOptions {
  url: string
  customIcon?: string
  disabled?: boolean
}

interface ContactConfigOptions {
  type: 'email' | 'phone'
  contact: string
}

interface ExactproDocsOptions {
  /**
   * Title of the documentation.
   * It will be displayed in the header and in the browser tab.
   */
  title: string
  /**
   * Configuration for GitHub integration
   */
  github: {
    /**
     * Link to the repository on GitHub
     */
    repoLink?: string
    /**
     * Name of the default branch on GitHub
     *
     * @default 'master'
     */
    branch: string
    /**
     * Path to the directory with documentation files on GitHub
     * Specify if the documentation is stored in a subdirectory of the repository.
     *
     * @default '/'
     */
    docsDir: string
  }
  seo?: {
    robots?: RobotsTxtOptions[]
    sitemap?: {
      baseUrl?: string
    }
    verificationMetaTags?: {
      name: string
      content: string
    }[]
  }
  gtag?: {
    measurementId?: string
  }
  social?: {
    githhub?: SocialLinkConfigOptions
    facebook?: SocialLinkConfigOptions
    twitter?: SocialLinkConfigOptions
    linkedin?: SocialLinkConfigOptions
    youtube?: SocialLinkConfigOptions
  }
  contacts: ContactConfigOptions[]
}

declare module 'nuxt/schema' {
  interface AppConfigInput {
    exactproDocs?: DeepPartial<ExactproDocsOptions>
    // TODO: Workaround for nuxt-icon types module, delete when https://github.com/nuxt-modules/icon/pull/63 is resolved
    nuxtIcon?: ModuleOptions
  }
}

export default defineAppConfig({
  exactproDocs: {
    title: 'Exactpro Docs',
    github: {
      repoLink: undefined as string | undefined,
      branch: 'master',
      docsDir: '/'
    },
    social: {
      githhub: {
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
  } as ExactproDocsOptions,
  // TODO: Workaround for nuxt-icon types module, delete when https://github.com/nuxt-modules/icon/pull/63 is resolved
  nuxtIcon: {}
})
