export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script:[
      {src: "/js/jquery-2.1.4.min.js"},
      {src: "/js/bootstrap.min.js"},
      {src: "/js/owl.carousel.js"},
      {src: "/js/revolution-slider/js/jquery.themepunch.tools.min.js"},
      {src: "/js/revolution-slider/js/jquery.themepunch.revolution.min.js"},
      {src: "/js/script.js"}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {  rel:"stylesheet" ,href:"/css/bootstrap.min.css"},
      {  rel:"stylesheet",href:"/js/revolution-slider/css/settings.css"},
      {  rel:"stylesheet",href:"/css/owl.carousel.css",},
      {  rel:"stylesheet",href:"/css/font-awesome.css"},
      { rel:"stylesheet", href:"/css/main.css"},
      { rel:"stylesheet", href:"/css/header.css"}

    
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
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
