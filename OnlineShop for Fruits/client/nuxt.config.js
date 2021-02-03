const URL = "http://localhost:3000"
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/custom-style.css'},
      { rel: 'stylesheet', href: '/css/footer.css'},
      { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css'},
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'}
    ],
    script: [
      { src: '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js' },
      { src: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js' },
      { src: '//code.jquery.com/jquery-1.11.1.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    baseURL: URL
  },
  proxy: {
    "/api": URL /* change port from 3000 to 9000 */
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          propertyName: "token" /*in [client, brower, cookei] store token until User can with brower enter in App*/
        },
        logout: true
      }
    }
  }
}
