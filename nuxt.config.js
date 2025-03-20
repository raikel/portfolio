export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Raikel Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    bodyAttrs: {
      'data-spy': 'scroll',
      'data-target': '.site-navbar-target',
      'data-offset': '300'
    },
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
    }, {
      rel: 'stylesheet',
      href: 'css/animate.css'
    }, {
      rel: 'stylesheet',
      href: 'css/aos.css'
    }, {
      rel: 'stylesheet',
      href: 'css/flaticon.css'
    }, {
      rel: 'stylesheet',
      href: 'css/icomoon.css'
    }, {
      rel: 'stylesheet',
      href: 'css/style.css'
    }],
    __dangerouslyDisableSanitizers: ['script'],
    script: [{
      src: 'https://www.googletagmanager.com/gtag/js?id=G-0N5CFQNDGB',
      defer: true
    }, {
      innerHTML:
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0N5CFQNDGB');`,
      type: 'text/javascript',
      charset: 'utf-8'
    }, {
      src: 'js/jquery.min.js',
      body: true
    }, {
      src: 'js/jquery-migrate-3.0.1.min.js',
      body: true
    }, {
      src: 'js/bootstrap.min.js',
      body: true
    }, {
      src: 'js/jquery.easing.1.3.js',
      body: true
    }, {
      src: 'js/jquery.waypoints.min.js',
      body: true
    }, {
      src: 'js/aos.js',
      body: true
    }, {
      src: 'js/jquery.animateNumber.min.js',
      body: true
    }, {
      src: 'js/main.js',
      body: true
    }]
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
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
};
