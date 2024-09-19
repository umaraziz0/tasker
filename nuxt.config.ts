// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    'dayjs-nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
  ],
});
