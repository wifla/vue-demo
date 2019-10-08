import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
// 创建 store 实例

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})