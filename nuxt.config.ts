// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/content",
    "@vueuse/nuxt"
  ],
  content: {
    documentDriven: true,
  },
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [200, 300, 400, 500, 600, 700, 800, 900], // Heading font
        styles: ['normal', 'italic'],
      },
      {
        name: 'Plus Jakarta Sans',
        provider: 'google',
        weights: [200, 300, 400, 500, 600, 700, 800, 900], // Body font
        styles: ['normal', 'italic'],
      },
    ],
  },
  compatibilityDate: "2024-12-16"
})