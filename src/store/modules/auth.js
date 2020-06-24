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
        name: 'Pieseł',
        lastName: 'Piesełowski',
        education: 'Liceum',
        email: 'piesel@gmail.com',
        rankingPlace: 2,
        lvl: 80,
        points: 1000,
        pointsToNewLvl: 273,
        nextLevel: 1,
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'vip',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
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
