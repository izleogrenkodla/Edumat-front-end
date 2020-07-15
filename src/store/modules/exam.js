import router from '@/router/';

export default {
  namespaced: true,
  state: {
    currentExam: null,
  },
  getters: {
    
  },
  mutations: {
    SET_EXAM(state, payload) {
      state.currentExam = payload;
      router.push('/egzamin');
    },
  },
  actions: {
    async generateExam({ commit }, payload) {
      try {
        // Async Axios stuff HERE 
        commit('SET_EXAM', payload);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
