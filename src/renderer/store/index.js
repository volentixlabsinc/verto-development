import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state: {
    userKey: "",
    loggedin: false,
    keys: []
  },
  actions: {
    save({
      commit
    }, key) {
      commit("save", key);
    },
    login(context, bool) {
      context.commit("LOGIN", bool);
    },
    setKeys(context, newkeys) {
      context.commit("KEYS", newkeys);
    }
  },
  mutations: {
    save(state, key) {
      state.userKey = key;
    },
    LOGIN(state, bool) {
      state.loggedin = bool;
    },
    KEYS(state, newkeys) {
      state.keys = newkeys;
    }
  }
})
