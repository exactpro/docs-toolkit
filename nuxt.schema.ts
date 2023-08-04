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

// If new global type for config is required, add it to ./modules/docs-toolkit-config.ts
export type { RobotsTxtOptions as ExactproDocsRobotsTxtOptions } from './server/routes/robots.txt'

export interface ExactproDocsSocialLinkConfigOptions {
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

export interface ExactproDocsContactConfigOptions {
  type: 'email' | 'phone'
  contact: string
}

export default defineNuxtSchema({
  appConfig: {
    exactproDocs: {
      title: {
        $schema: {
          title: 'Title of the documentation.',
          description:
            'It will be displayed in the header and in the browser tab.',
          type: 'string',
          required: true
        }
      },
      prevNextCards: {
        $schema: {
          title: 'Configuration for previous and next pages cards'
        },
        description: {
          $schema: {
            title:
              'Display options for the description of the page in prev/next cards',
            type: 'object'
          },
          display: {
            $schema: {
              title:
                'Choose display type for the description of the page in prev/next cards',
              type: 'string',
              tsType: '"full" | "limited" | "hidden"',
              default: 'full'
            }
          },
          limit: {
            $schema: {
              title:
                'Limit of lines for the description of the page in prev/next cards',
              description: 'It will be used if display type is "limited"',
              type: 'number',
              default: 2
            }
          }
        }
      },
      github: {
        $schema: {
          title: 'Configuration for GitHub integration'
        },
        repoLink: {
          $schema: {
            title: 'Link to the repository on GitHub',
            type: 'string'
          }
        },
        branch: {
          $schema: {
            title: 'Name of the default branch on GitHub',
            type: 'string'
          }
        },
        docsDir: {
          $schema: {
            title: 'Path to the directory with documentation files on GitHub',
            description:
              'Specify if the documentation is stored in a subdirectory of the repository.',
            type: 'string'
          }
        }
      },
      seo: {
        $schema: {
          title: 'Configuration for SEO'
        },
        description: {
          $schema: {
            title: 'Description of the documentation',
            description:
              'It will be displayed in search results. If some page has a description, it will be used instead of this one.',
            type: 'string'
          }
        },
        baseUrl: {
          $schema: {
            title: 'Default base URL for SEO properties',
            description: [
              'It will be used as a default value for sitemap, robots.txt, and Open Graph tags.',
              '@example "https://exactpro.github.io"'
            ].join('\n'),
            type: 'string'
          }
        },
        keywords: {
          $schema: {
            title: 'Keywords for the documentation',
            description: [
              'They will be displayed in search results.',
              '@example ["keyword1", "keyword2"]'
            ].join('\n'),
            type: 'array',
            tsType: 'string[]'
          },
          $default: []
        },
        robots: {
          $schema: {
            title: 'Configuration for robots.txt',
            description:
              '@see {@link https://github.com/nuxt-modules/robots | Example of configuration}',
            type: 'array',
            tsType: 'ExactproDocsRobotsTxtOptions[]'
          },
          $default: []
        },
        sitemap: {
          $schema: {
            title: 'Configuration for sitemap.xml'
          },
          baseUrl: {
            $schema: {
              title: 'Base URL for sitemap',
              description: [
                'All links in sitemap will be relative to this URL.',
                '@example "https://exactpro.github.io"'
              ].join('\n'),
              type: 'string'
            }
          }
        },
        verificationMetaTags: {
          $schema: {
            title: 'Meta tags for verification of the site by search engines',
            description:
              '@see {@link https://support.google.com/webmasters/answer/9008080?hl=en#meta_tag_verification | Verify your site ownership }',
            type: 'array',
            tsType: '{ name: string, content: string }[]'
          },
          $default: []
        }
      },
      gtag: {
        measurementId: {
          $schema: {
            title: 'Measurement ID for Google Analytics',
            type: 'string'
          }
        }
      },
      social: {
        $schema: {
          title: 'Configuration for social media links'
        },
        github: {
          $schema: {
            title: 'Link to the GitHub social media page',
            type: 'object',
            tsType: 'ExactproDocsSocialLinkConfigOptions'
          }
        },
        facebook: {
          $schema: {
            title: 'Link to the Facebook social media page',
            type: 'object',
            tsType: 'ExactproDocsSocialLinkConfigOptions'
          }
        },
        twitter: {
          $schema: {
            title: 'Link to the Twitter social media page',
            type: 'object',
            tsType: 'ExactproDocsSocialLinkConfigOptions'
          }
        },
        linkedin: {
          $schema: {
            title: 'Link to the LinkedIn social media page',
            type: 'object',
            tsType: 'ExactproDocsSocialLinkConfigOptions'
          }
        },
        youtube: {
          $schema: {
            title: 'Link to the YouTube social media page',
            type: 'object',
            tsType: 'ExactproDocsSocialLinkConfigOptions'
          }
        }
      },
      contacts: {
        $schema: {
          title: 'List of contacts in the footer',
          type: 'array',
          tsType: 'ExactproDocsContactConfigOptions[]'
        },
        $default: []
      }
    }
  }
})
