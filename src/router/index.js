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
    component: () => import(
      /* webpackChunkName: "search-results-page" */ '../views/SearchResults/SearchResults.vue'
    ),
  },
  {
    path: '/generator',
    name: 'Generator',
    component: () => import(
      /* webpackChunkName: "generator-page" */ '../views/Generator/Generator.vue'
    ),
  },
  {
    path: '/spolecznosc',
    name: 'Community',
    component: () => import(
      /* webpackChunkName: "community-page" */ '../views/Community/Community.vue'
    ),
  },
  {
    path: '/opracowania',
    name: 'Elaborations',
    component: () => import(/* webpackChunkName: "elaborations-page" */ '../views/Elaborations/Elaborations.vue'),
  },
  {
    path: '/opracowanie/:slug',
    name: 'Elaboration',
    component: () => import(/* webpackChunkName: "elaboration-page" */ '../views/Elaboration/Elaboration.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      const isValid = (param) => {
        const elaborations = ['cyfry-i-liczby'];
        return elaborations.includes(param);
      };
      if (!isValid(to.params.slug)) {
        next({ name: 'NotFound' }); // TODO 404 page
      } else {
        next();
      }
    },
  },
  {
    path: '/pytania/:slug',
    name: 'question',
    component: () => import(/* webpackChunkName: "question-page" */ '../views/Question/Question.vue'),
    props: true,
  },
  {
    path: '/logowanie',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login-page" */ '../views/Login/Login.vue'),
  },
  {
    path: '/rejestracja',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration-page" */ '../views/Registration/Registration.vue'),
  },
  {
    path: '/odzyskaj-konto',
    name: 'ResetPassword',
    component: () => import(
      /* webpackChunkName: "reset-password-page" */ '../views/ResetPassword/ResetPassword.vue'
    ),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found-page" */ '../views/NotFound/NotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
