import loginUser from '@/API/cognito/loginUser';
import router from '@/router/';
import autoLoginUser from '../../API/cognito/autoLoginUser';
import signOut from '../../API/cognito/signOut';
import registerUser from '../../API/cognito/registerUser';
import confirmUser from '../../API/cognito/confirmUser';

export default {
  namespaced: true,
  state: {
    isLogged: false,
    user: null,
    error: false,
    errorMessage: '',
    token: false,
    loading: false,
  },
  getters: {
    isUserLogged(state) {
      return state.isLogged;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      const user = payload.reduce(
        (userAccumulator, attribute) => ({
          ...userAccumulator,
          [attribute.Name === 'custom:education'
            ? 'education'
            : attribute.Name]: attribute.Value,
        }),
        {},
      );
      state.isLogged = true;
      localStorage.removeItem('userRegistration');
      localStorage.removeItem('registrationStep');
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
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        nextBadge: {
          name: 'Pomocny na 5!',
          icon: 'test',
          description: 'Udziel 30 odpowiedzi na pytania innych użytkowników.',
          progress: 80,
        },
      };
    },
    SET_ERROR(state, payload) {
      state.error = true;
      state.errorMessage = payload;
      console.log(payload);
    },
    DELETE_ERROR(state) {
      state.error = false;
      state.errorMessage = '';
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
    },
    LOGOUT(state) {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem('token');
      signOut();
    },
    SET_USER_TO_LOCAL_STORAGE(state, payload) {
      localStorage.setItem(
        'userRegistration',
        JSON.stringify({ ...payload, password: '' }),
      );
    },
    SET_STEP(state, payload) {
      localStorage.setItem('registrationStep', payload);
    },
    DELETE_STEP() {
      localStorage.removeItem('registrationStep');
    },
    START_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.errorMessage = '';
    },
    END_LOADING(state) {
      state.loading = false;
    },
  },
  actions: {
    async login({ commit }, { email, password } = payload) {
      try {
        commit('START_LOADING');
        const response = await loginUser(email, password);
        commit('SET_USER', response);
      } catch (err) {
        commit('SET_ERROR', err);
      } finally {
        commit('END_LOADING');
      }
    },
    async autoLogin({ commit }) {
      try {
        commit('START_LOADING');
        const response = await autoLoginUser();
        commit('SET_USER', response);
      } catch (err) {
        commit('SET_ERROR', err);
      } finally {
        commit('END_LOADING');
      }
    },
    async register({ commit }, payload) {
      try {
        commit('START_LOADING');
        await registerUser(payload);
      } catch (err) {
        commit('SET_ERROR', err.message);
      } finally {
        commit('END_LOADING');
      }
    },
    async confirm({ commit }, payload) {
      try {
        commit('START_LOADING');
        await confirmUser(payload);
        router.push('logowanie');
      } catch (err) {
        commit('SET_ERROR', err);
      } finally {
        commit('END_LOADING');
      }
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
    setToken({ commit }, payload) {
      commit('SET_TOKEN', payload);
    },
    deleteError({ commit }) {
      commit('DELETE_ERROR');
    },
    setUserToLocalStorage({ commit }, payload) {
      commit('SET_USER_TO_LOCAL_STORAGE', payload);
    },
    setStep({ commit }, payload) {
      commit('SET_STEP', payload);
    },
    deleteStep({ commit }) {
      commit('DELETE_STEP');
    },
  },
};
