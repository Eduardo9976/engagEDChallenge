// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-quasar-ui'
  ],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Rick and Morty',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.prod.website-files.com/634e147dba65922bc49a6f65/637be4dbb0754dbbf5adb646_Favicon.png' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  alias: {
    '#types': fileURLToPath(new URL('./types', import.meta.url)),
    '#constants': fileURLToPath(new URL('./constants', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url))
  },
  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: true
    }
  }
})
