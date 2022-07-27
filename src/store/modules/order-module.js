
import {ordersService} from '../../services/order-service.js'

export default {
  state: {
    orders:null,
    currOrder:null,
  },
  getters: {
    getOrder({orders}) {
      return orders
    }
  },
  actions: {
    loadOrders({ commit }) {
      ordersService
        .query()
        .then((orders) => {
          commit({ type: "getOrders", orders });
          return orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReservation({commit},{stay,reservation}){
      console.log("from order module",stay,reservation)
      ordersService.makeOrder()
    }
  },
  mutations: {
    getOrders(state, { orders }) {
      state.orders = orders;
    },
    // setOrder(state,)
  },
}

