
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
      {rel:'stylesheet',href:'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'},
      {rel:'stylesheet',href:'/css/header.css'},
      {rel:'stylesheet',href:'/css/custome-style.css'},
      {rel:'stylesheet',href:'/css/footer.css'},
      {rel:'stylesheet',href:'/css/custome.css'},

      {rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'StyleSheet', href:'//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'}
      




    ],
    script:[
      {src:'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'},
      {src:'//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'},
      {src:'/js/header.js'},
      {src: '//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'},
      {src:'//code.jquery.com/jquery-1.11.1.min.js'}

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
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
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
  }
}
