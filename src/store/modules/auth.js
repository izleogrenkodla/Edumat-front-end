import loginUser from '@/API/cognito/loginUser';
import router from '@/router/';

export default {
  namespaced: true,
  state: {
    isLogged: false,
    user: null,
    error: false,
    errorMessage: false,
    token: false,
  },
  getters: {
    isUserLogged (state) {
      return state.isLogged;
    },
  },
  mutations: {
    SET_USER (state, payload) {
      const user = payload.reduce((userAccumulator, attribute) => ({
        ...userAccumulator,
          [attribute.Name === 'custom:education'
            ? 'education'
            : attribute.Name]: attribute.Value,
        }), {},
      );
      router.push('/');

      state.isLogged = true;
      state.user = {
        ...user,
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
    SET_ERROR (state, payload) {
      state.error = true;
      state.errorMessage = payload;
      console.log(payload);
    },
    SET_TOKEN (state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
    },
    LOGOUT (state) {
      state.isLogged = false;
      state.user = null;
    },
  },
  actions: {
    async login ({ commit }, { email, password } = payload) {
      try {
        const response = await loginUser(email, password);
        commit('SET_USER', response);
      } catch(err) {
        commit('SET_ERROR', err);
      }
    },
    logout ({ commit }) {
      commit('LOGOUT');
    },
    setToken ({ commit }, payload) {
      commit('SET_TOKEN', payload);
    }
  },
};
