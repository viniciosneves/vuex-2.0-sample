import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import Categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({

  state,
  mutations,
  modules: {
    Categories
  }

})
