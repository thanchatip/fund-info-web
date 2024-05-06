// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
