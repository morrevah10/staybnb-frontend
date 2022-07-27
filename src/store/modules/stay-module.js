import { stayService } from "../../services/stay-service.js";
// import { labelService } from "../../services/label-service.js";

export default {
  state: {
    stays: null,
    currStay: null,
    filterBy: null,
    stayToOrder: null
  },
  getters: {
    staysToDisplay({ txt, byAmenity, stays }) {
      if (!stays) return;

      const regex = new RegExp(txt, "i");
      let filteredStays = stays.filter((stay) => regex.test(stay.name));

      // byAmenity
      // if (byAmenity && byAmenity.length) {
      //   filteredStays = filteredStays.filter((stay) =>
      //     byAmenity.some((amenity) => stay.amenities.includes(amenity))
      //   );
      // }

      return filteredStays;
    },
    getStayToOrder({stayToOrder}) {
      return stayToOrder
    }
  },
  actions: {
    loadStays({ commit }) {
      stayService
        .query()
        .then((stays) => {
          commit({ type: "setStays", stays });
          return stays;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // saveStay({ commit }, { stay }) {
    //   let actionType = stay._id ? "updateStay" : "addStay";
    //   return stayService
    //     .saveStay(stay)
    //     .then((savedStay) => {
    //       commit({ type: actionType, stay: savedStay });
    //       return savedStay;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // removeStay({ commit }, { stayId }) {
    //   return stayService
    //     .removeStay(stayId)
    //     .then(() => {
    //       commit({ type: "removeStay", stayId });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

    async setFilter({ commit }, { filterBy }) {
      try {
        const stays = await stayService.query(filterBy)
        commit({ type: "setStays", stays })
      } catch {
        console.log('failed to get filtered stays')
      }
    },
    setStayToOrder({ commit }, { date, guests }) {
      commit({ type: "setStayToOrder", date, guests})
    }
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    updateStay(state, { stay }) {
      const idx = state.stays.findIndex((t) => t._id === stay._id);
      state.stays.splice(idx, 1, stay);
    },
    addStay(state, { stay }) {
      state.stays.unshift(stay);
    },
    removeStay(state, { stayId }) {
      const idx = state.stays.findIndex((t) => t._id === stayId);
      state.stays.splice(idx, 1);
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    setStayToOrder(state, {date, guests}){
      state.stayToOrder = {
        date,
        guests
      }
      console.log("from stor",state.stayToOrder)
     
    }
  },
};
