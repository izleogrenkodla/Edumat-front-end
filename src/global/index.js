import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import ElaborationTopic from '@/components/ElaborationTopic/ElaborationTopic.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import UserHeader from '@/components/UserHeader/UserHeader.vue';

// Dynamic import of our components
const components = require.context('@/components/', true);
components.keys().map(component => {
  if (!component.endsWith('.vue')) {
    return;
  }

  const componentName = component.split('/').pop().replace(/\.vue$/, '');
  Vue.component(componentName, components(component).default);
});

// Components from libraries
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
Vue.component('elaboration-topic', ElaborationTopic);
Vue.component('sidebar', Sidebar);
Vue.component('user-header', UserHeader);
