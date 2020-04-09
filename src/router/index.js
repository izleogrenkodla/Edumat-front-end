import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
