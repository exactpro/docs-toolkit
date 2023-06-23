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

import type { RobotsTxtOptions } from './server/routes/robots.txt'

declare global {
  interface ExactproDocsRobotsTxtOptions extends RobotsTxtOptions {}
  interface ExactproDocsSocialLinkConfigOptions {
    /**
     * Link to the social network
     */
    url?: string
    /**
     * Name of the icon to override the default icon
     *
     * @see {@link https://icones.js.org/ | Icônes}
     */
    customIcon?: string
    /**
     * Hide the link
     *
     * @default false
     */
    disabled?: boolean
  }

  interface ExactproDocsContactConfigOptions {
    type: 'email' | 'phone'
    contact: string
  }
}

export default defineNuxtSchema({
  appConfig: {
    exactproDocs: {
      /**
       * Title of the documentation.
       * It will be displayed in the header and in the browser tab.
       *
       * @type {string}
       */
      title: 'Exactpro Documentation',
      /**
       * Configuration for GitHub integration
       */
      github: {
        /**
         * Link to the repository on GitHub
         *
         * @default undefined
         * @type {?string}
         */
        repoLink: undefined,
        /**
         * Name of the default branch on GitHub
         *
         */
        branch: 'master',
        /**
         * Path to the directory with documentation files on GitHub
         * Specify if the documentation is stored in a subdirectory of the repository.
         *
         */
        docsDir: '/'
      },
      seo: {
        /**
         * Configuration for robots.txt
         * @see {@link https://github.com/nuxt-modules/robots | Example of configuration}
         * @type {ExactproDocsRobotsTxtOptions[]}
         */
        robots: [],
        sitemap: {
          /**
           * Base URL for sitemap. All links in sitemap will be relative to this URL.
           *
           * @example 'https://exactpro.github.io'
           * @type {?string}
           */
          baseUrl: undefined
        },
        /**
         * Meta tags for verification of the site by search engines
         *
         * @see {@link https://support.google.com/webmasters/answer/9008080?hl=en#meta_tag_verification | Verify your site ownership }
         * @type {{ name: string, content: string }[]}
         */
        verificationMetaTags: []
      },
      gtag: {
        /**
         * Measurement ID for Google Analytics
         *
         * @type {?string}
         */
        measurementId: undefined
      },
      social: {
        /**
         * Link to the GitHub social media page
         *
         * @type {ExactproDocsSocialLinkConfigOptions}
         */
        github: {
          url: 'https://github.com/exactpro'
        },
        /**
         * Link to the Facebook social media page
         *
         * @type {ExactproDocsSocialLinkConfigOptions}
         */
        facebook: {
          url: 'https://www.facebook.com/exactpro/',
          customIcon: undefined,
          disabled: false
        },
        /**
         * Link to the Twitter social media page
         *
         * @type {ExactproDocsSocialLinkConfigOptions}
         */
        twitter: {
          url: 'https://twitter.com/exactpro',
          customIcon: undefined,
          disabled: false
        },
        /**
         * Link to the LinkedIn social media page
         *
         * @type {ExactproDocsSocialLinkConfigOptions}
         */
        linkedin: {
          url: 'https://www.linkedin.com/company/exactpro-systems-llc?trk=biz-companies-cym',
          customIcon: undefined,
          disabled: false
        },
        /**
         * Link to the YouTube social media page
         *
         * @type {ExactproDocsSocialLinkConfigOptions}
         */
        youtube: {
          url: 'https://www.youtube.com/c/exactprosystems',
          customIcon: undefined,
          disabled: false
        }
      },
      /**
       * Footer contacts list
       *
       * @type {ExactproDocsContactConfigOptions[]}
       */
      contacts: []
    }
  }
})
