// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@twicpics/components/nuxt3',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    'nuxt-swiper',

  ],
  twicpics: {
    domain: `https://teja2.twic.pics`,
    anticipation: 0.5,
    step: 50,
  },
  ui: {
    icons: ['basil'],
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    // download: true,
    // outputDir: 'assets',
    // stylePath: 'fonts.css',
    // fontsDir: 'fonts',
    // overwriting: true,
    // fontsPath: 'fonts',
    families: {
      'Rethink Sans': {
        wght: '400..800',
        ital: '400..800',
      },
      'Eczar': {
        wght: '400..800',
      },
    },
  },
})
