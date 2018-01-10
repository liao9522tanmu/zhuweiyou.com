import Vue from 'vue'
import router from './router'
import App from './app'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
