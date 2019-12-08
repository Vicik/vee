import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import echarts from 'echarts'
import './assets/css/reset.css'
import './assets/css/fonts/iconfont.css'
import Routers from 'vue-router'

const originalPush = Routers.prototype.push
Routers.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
