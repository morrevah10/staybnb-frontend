import {ordersService} from '../../services/order-service.js'

export default {
  state: {
    orders:[],
    currOrder:null,
    
  },
  getters: {
    getOrder({orders}) {
      return orders
      // console.log("get orders from dash",orders)
    }
  },
  actions: {
    loadOrders({ commit }) {
      ordersService
        .query()
        .then((orders) => {
          commit({ type: "getOrders", orders });
          console.log("load from stor",orders)
          return orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReservation({commit},{stay,reservation,user}){
      console.log("from order module-sendReservation",stay,reservation,user)
      let order =ordersService.makeOrder(stay,reservation,user)
      // commit({type:"setOrder",order})
    }
  },
  mutations: {
    getOrders(state, { orders }) {
      state.orders = orders;
      console.log("get order from stor",state.orders)
    },
    // setOrder(state,{order}){
    //   console.log("orders from set order-stor befor clike",state.orders)
    //   state.currOrder=order
    //   state.orders.push(order)
    //   console.log("order from set order-stor",state.currOrder)
    //   console.log("orders from set order-stor befor clike",state.orders)

    // }
  },
}