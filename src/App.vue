<template>
  <div id="app">
    <main-navigation />
    <main class="app-page">
      <transition name="page-fade" mode="out-in">
        <router-view  v-if="!loading"/>
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
      loading: (state) => state.auth.loading,
    }),
  },
  mounted() {
    this.$store.dispatch('auth/autoLogin');
  },
};
</script>
