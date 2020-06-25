<template>
  <div class="main-layout">
    <div
      class="container main-layout__inner"
      :class="[
        !isLogged ? 'container--medium' : false,
      ]"
    >
      <section class="main-layout__content">
        <slot></slot>
      </section>
      <main-sidebar
        v-if="isLogged"
        class="main-layout__sidebar"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainLayout',
  computed: {
    ...mapState({
      isLogged: state => state.auth.isLogged,
    }),
  },
};
</script>

<style lang="scss" src="./MainLayout.scss" />
