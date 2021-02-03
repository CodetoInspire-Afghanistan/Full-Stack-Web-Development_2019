export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src:"/js/solid.js" },
      { src:"/js/fontawesome.js" },
      { src:"/js/jquery.min.js" },
      { src:"/js/jquery-3.5.1.slim.min.js" },
      { src:"/js/popper.min.js" },
      { src:"/js/js.js" },
      { src:"/js/bootstrap.min.js" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/custom-style.css' },
        { rel: 'stylesheet', href: '/css/adminLayout.css' }
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
