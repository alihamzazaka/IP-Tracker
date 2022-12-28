import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ipResponse: "",
  },
  getters: {
    getdetailedInfo() {
      return store.state.ipResponse;
    },
  },
  mutations: {
    getdetailedInfo(state, detailedInfo) {
      store.state.ipResponse = detailedInfo;
    },
  },
  actions: {
    getdetailedInfo(context, ip) {
      fetch("http://ip-api.com/batch", {
        method: "POST",
        body: JSON.stringify(ip),
      })
        .then((response) => response.json())
        .then((data) => {
          store.commit("getdetailedInfo", data);
        });
    },
  },
});
