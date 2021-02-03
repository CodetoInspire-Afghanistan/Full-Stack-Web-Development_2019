export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900' },
      { rel: 'stylesheet', href:  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    {rel: 'stylesheet', href:'/css/style.css'},
    {rel: 'stylesheet', href:'/css/custom-style.css'}

    // {rel: 'stylesheet', href:'/css/bootstrap.min.css'}

    ],
    script: [
    {src:"/js/jquery.min.js"},
    {src:"/js/popper.js"},
    {src:"/js/bootstrap.min.js"},
    {src:"/js/main.js"},
    {src:"/js/js.js"}

    ],
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
