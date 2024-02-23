// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/supabase'],
  devtools: { enabled: true },
  supabase:{
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions:{
      login: '/auth',
      callback: '/confirm',
      exclude: ['/', '/property/*']
    }
  },

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/styles/main.scss" as *; '
        }
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

})
