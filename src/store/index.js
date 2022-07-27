import { createStore } from 'vuex'
import stayStore from './modules/stay-module'
import orderModal from './modules/order-module'
// import labelStore from './modules/labels-module'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayStore,
    orderModal
    // labelStore
  },
})

export default store
