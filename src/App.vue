<template>
  <div id="app">
    <main-navigation />
    <main class="app-page">
      <transition name="page-fade" mode="out-in">
        <router-view v-if="!isLogged || dataReady" />
      </transition>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      dataReady: false,
    };
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch('auth/autoLogin');
    } finally {
      this.dataReady = true;
    }
  },
};
</script>
