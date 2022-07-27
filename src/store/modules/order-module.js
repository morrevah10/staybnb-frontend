
import {ordersService} from '../../services/order-service.js'

export default {
  state: {
    orders:null,
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
          commit({ type: "setOrders", orders });
          return orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
  },
}

