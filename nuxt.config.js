module.exports = {  
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  head: {
    title: 'fence-calc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'fence calculator' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  telemetry: false
}