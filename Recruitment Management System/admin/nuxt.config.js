const URL = "http://localhost:3000"
export default {
  mode: 'universal',
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script:[
      { src:"/js/jquery.min.js" },
      { src:"/js/popper.js" },
      { src:"/js/bootstrap.min.js" },
      { src:"/js/main.js" },
      { src:"/vendor/jquery/jquery-3.2.1.min.js" },
      { src:"/vendor/animsition/js/animsition.min.js" },
      { src:"/vendor/bootstrap/js/popper.js" },
      { src:"/vendor/bootstrap/js/bootstrap.min.js" },
      { src:"/vendor/select2/select2.min.js" },
      { src:"/vendor/daterangepicker/moment.min.js" },
      { src:"/vendor/daterangepicker/daterangepicker.js" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/custom-style.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/images/icons/favicon.ico' },
      { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/fonts/font-awesome-4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'},
      { rel: 'stylesheet', href: '/vendor/animate/animate.css' },
      { rel: 'stylesheet', href: '/vendor/css-hamburgers/hamburgers.min.css' },
      { rel: 'stylesheet', href: '/vendor/animsition/css/animsition.min.css' },
      { rel: 'stylesheet', href: '/vendor/select2/select2.min.css' },
      { rel: 'stylesheet', href: '/vendor/daterangepicker/daterangepicker.css' },
      { rel: 'stylesheet', href: '/css/util.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/form.css' }

    ]
    
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    baseURL: URL
  },

  proxy:{
    "/api": URL
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          propertyName: "token",
          logout:{ url:'api/auth/logout', method: 'post' }
        }
        // logout: true
      }
    },
    redirect: {
      login: '/login',
      home: '/'
    },
    plugins: [
      './plugins/auth'
    ]
  }
}
