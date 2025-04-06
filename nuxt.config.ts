// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@unocss/nuxt', 'v-gsap-nuxt', '@nuxt/icon', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/sitemap', 'nuxt-gtag'],
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
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Gwasz' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pracownia Gwasz' },
        { property: 'og:image', content: 'https://gwasz.pl/images/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
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
        name: 'pl',
        iso: 'pl-PL',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'en',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'pl',
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  gtag: {
    id: 'G-0GJY8GZRXW', // Replace with your actual Google Analytics ID when you have one
  },
  site: {
    url: 'https://gwasz.pl',
    name: 'Pracownia Gwasz',
  },
  sitemap: {
    xsl: '/sitemap.xsl',
    sitemaps: true,
    urls: [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date().toISOString(),
        alternatives: [
          {
            hreflang: 'pl',
            href: 'https://gwasz.pl/',
          },
          {
            hreflang: 'en',
            href: 'https://gwasz.pl/en/',
          },
        ],
      },
    ],
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
