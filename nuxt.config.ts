// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "node:url";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  alias: {
    '#types': fileURLToPath(new URL('./types', import.meta.url)),
    '#constants': fileURLToPath(new URL('./constants', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url))
  },

  css: [
      '~/assets/css/main.css'
  ],

  eslint: {
      config: {
          stylistic: true
      }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-quasar-ui'
  ]
})
