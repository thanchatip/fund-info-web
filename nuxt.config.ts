// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
  modules: ["nuxt-primevue"],
  build: {
    transpile: ["primevue"],
  },
  primevue: {
    usePrimeVue: true,
    components: {
      exclude: [],
    },
  },
  css: [
    "primevue/resources/themes/aura-light-purple/theme.css",
    "primevue/resources/primevue.css",
    //"@/assets/main.css",
    "primeicons/primeicons.css",
  ],
});
