import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import exam from '@/store/modules/exam';
import community from '@/store/modules/community';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    exam,
    community,
  },
});
