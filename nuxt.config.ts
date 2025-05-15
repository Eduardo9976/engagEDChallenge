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
