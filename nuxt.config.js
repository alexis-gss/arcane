export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Arcane',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Showcase website for the Arcane series from the League Of Legends video game' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  },

  css: [
    '@/assets/css/reboot.css',
    '@/assets/scss/front.scss'
  ],
}
