import { httpService } from "../../services/http.service.js"
import { ordersService } from "../../services/order-service.js"

export default {
  state: {
    currOrder: null,
    // currOrder:null,
    // user: null,
  },
  getters: {
    getCurrOrder({currOrder}){
      return currOrder
    }
  },
  actions: {
    loadOrders({ commit }) {
      ordersService
        .query()
        .then((orders) => {
          commit({ type: "getOrders", orders })
          console.log("load from stor", orders)
          return orders
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sendReservation({ commit }, { stay, reservation, user }) {
      // console.log("from order module-sendReservation", stay, reservation, user)
      let currOrder = ordersService.makeOrder(stay, reservation, user)
      // console.log("from order module", currOrder)
      // console.log("from order module", user)

      // let copyUser = JSON.parse(JSON.stringify(user))
      commit({ type: "addOrderToTrip", currOrder})
      commit({type:"addOrder"},currOrder)
      commit({ type: "setOrder", currOrder })
    },
  },
  mutations: {
    setOrder(state, { currOrder }) {
      state.currOrder = currOrder
    },
    addOrder({currOrder}){
      console.log("add order from user module",currOrder)
      ordersService.addOrder(currOrder)
    }
  },
}
