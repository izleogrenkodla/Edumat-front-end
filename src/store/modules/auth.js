export default {
  namespaced: true,
  state: {
    isLogged: false,
    user: null,
  },
  mutations: {
    LOGIN(state) {
      state.isLogged = true;
      state.user = {
        name: 'Pieseł Piesełowski',
        email: 'piesel@gmail.com',
        rankingPlace: 1,
      };
    },
    LOGOUT(state) {
      state.isLogged = false;
      state.user = null;
    },
  },
  actions: {
    login({ commit }) {
      commit('LOGIN');
    },
    logout({ commit }) {
      commit('LOGOUT');
    }
  },
};
