// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@unocss/nuxt', 'v-gsap-nuxt', '@nuxt/icon'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Inter Tight', provider: 'fontsource' }, { name: 'Marker Felt', provider: 'local' }],
  },
  vgsap: {
    presets: [
      {
        name: 'spin',
        modifiers: 'infinitely.to',
        value: { rotate: '360deg', ease: 'linear', duration: 16 },
      },
    ],
  },
  compatibilityDate: '2024-11-01',
})
