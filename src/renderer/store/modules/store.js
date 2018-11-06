const mutations = {
  save(state, key) {
    state.userKey = key;
  }
}

const actions = {
  save({
    commit
  }, key) {
    commit("save", key);
  }
}

export default {
  mutations,
  actions
}
