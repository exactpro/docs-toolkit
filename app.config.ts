import type { ModuleOptions } from 'nuxt-icon'

interface ExactproDocsOptions {
  title?: string
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    exactproDocs?: ExactproDocsOptions
    // TODO: Workaround for nuxt-icon types module, delete when https://github.com/nuxt-modules/icon/pull/63 is resolved
    nuxtIcon?: ModuleOptions
  }
}

export default defineAppConfig({
  exactproDocs: {
    title: 'Exactpro Docs'
  },
  // TODO: Workaround for nuxt-icon types module, delete when https://github.com/nuxt-modules/icon/pull/63 is resolved
  nuxtIcon: {}
})
