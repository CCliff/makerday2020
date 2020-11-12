export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'makerday_2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src: '//www.midijs.net/lib/midi.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/base.scss',
  ],

  /*
   * StyleResources for global SCSS functions, mixins, and variables
   */
  styleResources: {
    scss: [
      'assets/scss/functions.scss',
      'assets/scss/variables.scss',
      'assets/scss/mixins.scss',
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/globalVars.js',
      ssr: true
    },
    {
      src: '~/plugins/nameClass.js',
      ssr: true
    },
    {
      src: '~/plugins/throttleHelper.js',
      ssr: false
    },
    {
      src: '~/plugins/eventBus.js',
      ssr: true,
    },
    {
      src: '~/plugins/midi.js',
      ssr: false,
    },
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
