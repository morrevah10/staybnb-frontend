
import {ordersService} from '../../services/order-service.js'

export default {
  state: {
    orders:[],
    currOrder:null,
  },
  getters: {
    order({orders}) {
      console.log("from getters",orders)
      // return orders
    },

  },
  actions: {
    loadOrders({ commit }) {
      ordersService
        .query()
        .then((orders) => {
          commit({ type: "getOrders", orders });
          console.log("order from service",orders)
          return orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReservation({commit},{stay,reservation}){
      // console.log("from order module-sendReservation",stay,reservation)
      let order =ordersService.makeOrder(stay,reservation)
      // console.log("from order module  order",order)
      // commit({type:"setOrder",order})
    }
  },
  mutations: {
    getOrders(state, { orders }) {
      state.orders = orders;
    },
    // setOrder(state,{order}){
    //   state.currOrder=order
    //   state.orders.push(order)
      // console.log("order from set order-stor",state.currOrder)
      // console.log("orders from set order-stor",state.orders)
    // }
  },
}

