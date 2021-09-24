import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vuesax from './plugins/vuesax'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vuesax,
  render: h => h(App)
}).$mount('#app')
