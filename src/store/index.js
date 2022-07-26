import { createStore } from 'vuex'
import stayStore from './modules/stay-module'
import labelStore from './modules/labels-module'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayStore,
    labelStore
  },
})

export default store
