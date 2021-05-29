import Vue from 'vue'
import App from './App.vue'
import router from './router'

//使得mock生效
import './mock'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: function (h) {
    return h(App)
  },
  router
}).$mount('#app')
