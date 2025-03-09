// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@unocss/nuxt', 'v-gsap-nuxt'],
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
})