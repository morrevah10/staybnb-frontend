import { httpService } from "../../services/http.service.js";
import { ordersService } from "../../services/order-service.js";

export default {
  state: {

  },
  getters: {
    getOrders({ orders }) {
      return orders
    },

    getStatus({ status }) {
      return status;
    },
  },
  actions: {
    async loadOrders({ commit }) {
      try {
        console.log('load orders')
        const orders = await ordersService.getOrders()
        console.log('orders', orders)
        commit({ type: "setOrders", orders })
        console.log("load from stor", orders)
        return orders
      } catch (err) {
        console.log(err)
        throw err
      }
    },

    async sendReservation({ commit }, { stay, reservation, user }) {
      let currOrder = ordersService.makeOrder(stay, reservation, user);

      const newOrder = await ordersService.addOrder(currOrder)
      // let copyUser = JSON.parse(JSON.stringify(user))
      console.log("currOrder from module", newOrder)
      // commit({ type: "setOrder"}, newOrder )
      commit({ type: "addOrder", newOrder})
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      console.log("set orders from user module", orders)
      state.orders = orders
      console.log("set order from user module", state.orders)
    },
    // setOrder(state, { currOrder }) {
    //   console.log("set order from user module", currOrder)
    //   state.currOrder = currOrder
    //   console.log("set order from user module", state.currOrder)
    // },
    addOrder({ orders }, { newOrder }) {
      console.log('new order', newOrder)
      orders.unshift(newOrder)
    },
  },
};
