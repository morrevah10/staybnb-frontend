import { stayService } from "../../services/stay-service.js";
// import { labelService } from "../../services/label-service.js";

export default {
  state: {
    stays: null,
    currStay: null,
    filterBy: null,
  },
  getters: {
    staysToDisplay({ txt, byAmenity, stays }) {
      if (!stays) return;

      const regex = new RegExp(txt, "i");
      let filteredStays = stays.filter((stay) => regex.test(stay.name));

      // byAmenity
      if (byAmenity && byAmenity.length) {
        filteredStays = filteredStays.filter((stay) =>
          byAmenity.some((amenity) => stay.amenities.includes(amenity))
        );
      }

      // if (bySort) {
      //   const sort = bySort.split(" - ");

      //   if (sort[0] === "Name") {
      //     console.log(1);
      //     if (sort[1] === "Increasing")
      //       filteredStays = filteredStays.sort((t1, t2) =>
      //         t1.name.localeCompare(t2.name)
      //       );
      //     else
      //       filteredStays = filteredStays.sort((t1, t2) =>
      //         t2.name.localeCompare(t1.name)
      //       );
      //   }

      //   if (sort[0] === "Price") {
      //     if (sort[1] === "Increasing")
      //       filteredStays = filteredStays.sort((t1, t2) => t1.price - t2.price);
      //     else
      //       filteredStays = filteredStays.sort((t1, t2) => t2.price - t1.price);
      //   }

      //   if (sort[0] === "Type") {
      //     if (sort[1] === "Increasing")
      //       filteredStays = filteredStays.sort((t1, t2) => t1.type - t2.type);
      //     else
      //       filteredStays = filteredStays.sort((t1, t2) => t2.type - t1.type);
      //   }
      // }

      return filteredStays;
    },
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
    saveStay({ commit }, { stay }) {
      let actionType = stay._id ? "updateStay" : "addStay";
      return stayService
        .saveStay(stay)
        .then((savedStay) => {
          commit({ type: actionType, stay: savedStay });
          return savedStay;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeStay({ commit }, { stayId }) {
      return stayService
        .removeStay(stayId)
        .then(() => {
          commit({ type: "removeStay", stayId });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setFilterBy({ commit }, { filterBy }) {
      stayService.query(filterBy).then((stays) => {
        commit({ type: "setStays", stays });
      });
    },
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
  },
};
