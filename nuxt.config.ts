import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [join(currentDir, './assets/css/prose.css')],
  app: {
    head: {
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
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon'],
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
