const URL = "http://localhost:3000"
export default {

  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" },
      { src:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" },
      { src:'/js/header.js'}
          ],
 
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/footer.css' },
      // { rel:'stylesheet',  href:'://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css', id:'bootstrap-css'},
      { rel:'stylesheet',  href:'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css', integrity:'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO', crossorigin:'anonymous'},
      { rel:'stylesheet',  href:'https://use.fontawesome.com/releases/v5.2.0/css/all.css', integrity:'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ', crossorigin:'anonymous'},
      // { rel:"icon", type:"image/png", href:"images/icons/favicon.ico"},
      { rel:"stylesheet", type:"text/css", href:"css/custom-style.css"},
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      
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
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    baseURL: URL
  },

  proxy: {
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
          propertyName: "token"
        },
        logout: true
      }
    }
  }
}
