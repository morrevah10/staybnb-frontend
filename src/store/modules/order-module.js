import { ordersService } from "../../services/order-service.js"

export default {
  state: {
    // orders:[],
    // currOrder:null,
    user: null,
  },
  getters: {
    getOrder({ orders }) {
      return orders
      // console.log("get orders from dash",orders)
    },
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
      console.log("from order module-sendReservation", stay, reservation, user)
      let order = ordersService.makeOrder(stay, reservation, user)
      console.log("from order module", order)
      console.log("from order module", user)
      // let copyUser = JSON.parse(JSON.stringify(user))
      // commit({ type: "setOrderToTrip", order, copyUser })
    },
  },
  mutations: {
    // setOrderToTrip(order, user) {
    //   // console.log("user.trips from order store",user.trips);
    //   if (!user) {
    //     log("no user")
    //   }
    //   user.trips.push(order)
    //   console.log("order and user after clike from order stor", order, user)
    // },

    getOrders(state, { orders }) {
      state.orders = orders
      console.log("get order from stor", state.orders)
    },

    // setOrder(state,{user}){
    //   state.user = user;
    //   console.log("get order from stor",state.user)
    // }
    // setOrder(state,{order}){
    //   console.log("orders from set order-stor befor clike",state.orders)
    //   state.currOrder=order
    //   state.orders.push(order)
    //   console.log("order from set order-stor",state.currOrder)
    //   console.log("orders from set order-stor befor clike",state.orders)

    // }
  },
}
