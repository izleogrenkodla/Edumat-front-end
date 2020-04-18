import Vue from 'vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseInput from '@/components/BaseInput/BaseInput.vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

Vue.component('base-button', BaseButton);
Vue.component('base-input', BaseInput);
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
