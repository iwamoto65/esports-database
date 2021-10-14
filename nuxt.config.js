require('dotenv').config()

export default {
  target: 'static',
  head: {
    title: 'eSportsデータベース',
    titleTemplate: '%s | eSports データベース',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'eスポーツデータベースは最新のeスポーツニュースやプロゲーマー、ストリーマーの情報をお届けします。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'ゲーミングデバイス,ゲーミングPC,ゲーミングマウス,ストリーマー,プロゲーマー',
      },
    ],
    link: [
      {
        hid: 'shortcut icon',
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico',
      },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        hid: 'icon',
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-192x192.png',
      },
    ],
  },
  css: ['modern-css-reset'],
  plugins: ['@/plugins/googleAnalytics'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-gtag',
      {
        id: process.env.GA_ID,
        debug: true,
      },
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FB_API_KEY,
          authDomain: process.env.FB_AUTH_DOMEIN,
          databaseURL: process.env.FB_DATABASE_URL,
          projectId: process.env.FB_PROJECT_ID,
          storageBucket: process.env.FB_STORAGE_BUCKET,
          messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
          appId: process.env.FB_APP_ID,
          measurementId: process.env.FB_MEASUREMENT_ID,
        },
        services: {
          database: true,
        },
      },
    ],
  ],
  build: {
    babel: {
      compact: true,
    },
  },
}
