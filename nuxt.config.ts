// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'preline-nuxt3',
      script: [
        {
          src: '/assets/preline/dist/preline.js',
          defer: true,
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
