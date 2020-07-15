import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import exam from '@/store/modules/exam';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    exam,
  },
});
