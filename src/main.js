import Vue from 'vue'
import App from './App.vue'
import SdkUI from '../index'

Vue.config.productionTip = false
Vue.use(SdkUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
