// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/supabase', '@nuxt/image','@samk-dev/nuxt-vcalendar'],
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
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dkte5phor/image/upload/v1708991590/',
      format: ['webp']
    }
  }

})
