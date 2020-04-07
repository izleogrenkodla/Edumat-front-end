import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

import './registerServiceWorker';
import './styles/main.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
