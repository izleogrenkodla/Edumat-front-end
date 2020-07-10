<template>
  <div id="app">
    <main-navigation />
    <main class="app-page">
      <transition name="page-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import autoLoginUser from '@/API/cognito/autoLoginUser';

export default {
  name: 'App',
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
    }),
  },
  mounted() {
    console.log('object');
    this.$store.dispatch('auth/autoLogin');
  },
};
</script>
