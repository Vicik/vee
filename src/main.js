import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/fonts/iconfont.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
