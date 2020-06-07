import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

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
