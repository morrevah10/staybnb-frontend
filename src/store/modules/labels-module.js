// import { stayService } from "../../services/stay-service.js";
import { labelService } from "../../services/label-service.js";

export default {
  state: {
    labels: null,
  },
  getters: {},
  actions: {
    loadLabels({ commit }) {
      labelService
        .query()
        .then((labels) => {
          commit({ type: "setLabels", labels });
          return labels;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    setLabels(state, { labels }) {
      state.labels = labels;
    },
  },
};
