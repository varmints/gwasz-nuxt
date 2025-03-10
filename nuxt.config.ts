// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@unocss/nuxt', 'v-gsap-nuxt', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Inter Tight', provider: 'fontsource' }, { name: 'Marker Felt', provider: 'local' }],
  },
  compatibilityDate: '2024-11-01',
})
