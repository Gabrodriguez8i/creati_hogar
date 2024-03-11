// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/supabase', '@nuxt/image','@samk-dev/nuxt-vcalendar', 'nuxt-paypal'],
  devtools: { enabled: false },
  supabase:{
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions:{
      login: '/auth',
      callback: '/confirm',
      exclude: ['/', '/property/*']
    }
  },
  plugins: [
    '@/plugins/utilsBase',
],
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
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
    
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dkte5phor/image/upload/v1708991590/',
      format: ['webp']
    }
  },
  runtimeConfig:{
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    ENDPOINT_SECRET: process.env.ENDPOINT_SECRET,
    public:{
      STRIPE_KEY: process.env.STRIPE_KEY
    }
  },
  paypal: {
    clientId: 'test',
  },

})
