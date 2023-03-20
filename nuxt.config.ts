// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/prose.css'],
  app: {
    head: {
      titleTemplate: '%s | Gevamu docs',
      title: 'Gevamu docs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Documentation for Gevamu payment solution'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    sources: {
      terms: {
        prefix: '/terms',
        driver: 'fs',
        base: 'content-terms'
      }
    },
    highlight: {
      theme: 'one-dark-pro'
    }
  }
})
