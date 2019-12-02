import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    bucketName: ""
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count++;
    },
    SET_BUCKET_NAME(state, newBucketName) {
      state.bucketName = newBucketName;
    }
  },
  getters: {
    GET_COUNT_ALPHA(state) {
      switch (state.count) {
        case 1:
          return "One";
        case 2:
          return "Two";
        default:
          return state.count;
      }
    }
  },
  actions: {
    incrementCount({ commit }) {
      commit("INCREMENT_COUNT");
    },
    updateBucketName({ commit }, newBucketName) {
      commit("SET_BUCKET_NAME", newBucketName);
    }
  },
  plugins: [vuexLocal.plugin],
  modules: {}
});
