import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-page" */ '../views/Home.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "components-page" */ '../views/Components.vue'),
  },
  {
    path: '/wyniki-wyszukiwania',
    name: 'SearchResults',
    component: () => import(/* webpackChunkName: "search-results-page" */ '../views/SearchResults/SearchResults.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
