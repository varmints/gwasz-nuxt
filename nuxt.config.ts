// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@unocss/nuxt', 'v-gsap-nuxt', '@nuxt/icon', '@nuxtjs/i18n', '@nuxt/image'],
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
      meta: [{ name: 'apple-mobile-web-app-title', content: 'Gwasz' }],
    },
  },
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Inter Tight', provider: 'fontsource', subsets: ['latin', 'latin-ext'] }, { name: 'Marker Felt', provider: 'local' }],
  },
  i18n: {
    baseUrl: 'https://gwasz.pl',
    locales: [
      {
        code: 'pl',
        language: 'pl-PL',
      },
      {
        code: 'en',
        language: 'en-US', // Will be used as "catchall" locale by default
      },
    ],
    defaultLocale: 'pl',
    vueI18n: './i18n.config.ts',
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