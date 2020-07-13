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

export default {
  name: 'App',
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
    }),
  },
  mounted() {
    this.$store.dispatch('auth/autoLogin');
  },
};
</script>
