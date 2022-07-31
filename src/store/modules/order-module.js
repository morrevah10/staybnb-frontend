import { httpService } from "../../services/http.service.js";
import { ordersService } from "../../services/order-service.js";

export default {
  state: {
    currOrder: null,
    // currOrder:null,
    // user: null,
  },
  getters: {
    getCurrOrder({ currOrder }) {
      return currOrder;
    },
  },
  actions: {
    loadOrders({ commit }) {
      ordersService
        .query()
        .then((orders) => {
          commit({ type: "getOrders", orders });
          console.log("load from stor", orders);
          return orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReservation({ commit }, { stay, reservation, user }) {
      let currOrder = ordersService.makeOrder(stay, reservation, user);

      // let copyUser = JSON.parse(JSON.stringify(user))
      console.log("currOrder from module", currOrder);
      commit({ type: "addOrderToTrip", currOrder });
      commit({ type: "setOrder", currOrder });
      commit({ type: "addOrder" }, currOrder);
    },
  },
  mutations: {
    setOrder(state, { currOrder }) {
      console.log("set order from user module", currOrder);
      state.currOrder = currOrder;
      console.log("set order from user module", state.currOrder);
    },
    addOrder(state) {
      console.log("add order from user module", state.currOrder);
      ordersService.addOrder(state.currOrder);
    },
  },
};
