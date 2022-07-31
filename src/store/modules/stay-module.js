import { stayService } from "../../services/stay-service.js";
// import { labelService } from "../../services/label-service.js";

export default {
  state: {
    stays: null,
    currStay: null,
    filterBy: null,
    date: {
      start: new Date(),
      end: new Date(Date.now()+ 86400000) 
    },
    guests: {
      adults: 1,
      children: 0,
      total: 1
    },
    stayToOrder: {
      date: {
        start: new Date(),
        end: new Date(Date.now()+ 86400000) 
      },
      guests: {
        adults: 1,
        children: 0,
        total: 1
      }
    }
  },
  getters: {
    staysToDisplay({stays}) {
      return stays;
    },
    getStayToOrder({stayToOrder}) {
      return stayToOrder
    },
    getFilterBy({filterBy}){
      return filterBy
    },
    getGuests({guests}){
      return guests
    },
    getDate({date}){
      return date
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
        console.log('filter by - in the store',filterBy )
        const stays = await stayService.query(filterBy)
        console.log('hello')
        commit({ type: "setStays", stays })
      } catch {
        console.log('failed to get filtered stays')
      }
    },
    // async LabelFilter({ commit }, { filterBy }) {
    //   try {
    //     const stays = await stayService.query(filterBy)
    //     // commit({ type: "setStays", stays })
    //   } catch {
    //     console.log('failed to get filtered stays')
    //   }
    // },
    setStayToOrder({ commit }, { date, guests }) {
      commit({ type: "setStayToOrder", date, guests})
    },
     updateGuests({commit},{guests}) { 
        // console.log('in the action -', guests )
        commit({type: "updateGuests", guests})
     },
     updateDate({commit},{date}) { 
        console.log('in the action -', date )
        commit({type: "updateDate", date})
     }
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    updateGuests(state, { guests }){
      console.log("mutation",  guests)
      state.guests = JSON.parse(JSON.stringify(guests))
    }, 
    updateDate(state, { date }){
      console.log("mutation",  date)
      state.date = JSON.parse(JSON.stringify(date))
      state.date ={
        start: new Date(state.date.start),
        end: new Date(state.date.end)
      } 
      console.log('state.date', state.date)
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
