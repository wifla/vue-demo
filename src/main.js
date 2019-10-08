import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router/index'

import store from './vuex/index'

import 'font-awesome/css/font-awesome.min.css'
import VePie from 'v-charts/lib/pie.common.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component(VePie.name, VePie)




export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
