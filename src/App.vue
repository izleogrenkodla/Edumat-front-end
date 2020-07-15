<template>
  <div id="app">
    <main-navigation />
    <main class="app-page">
      <transition name="page-fade" mode="out-in">
        <router-view  v-if="dataReady"/>
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
    await this.$store.dispatch('auth/autoLogin');
    this.dataReady = true;
  },
};
</script>
