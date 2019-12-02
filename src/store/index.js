import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
  actions: {
    incrementCount({ commit }) {
      commit("INCREMENT_COUNT");
    },
    updateBucketName({ commit }, newBucketName) {
      commit("SET_BUCKET_NAME", newBucketName);
    }
  },
  modules: {}
});
