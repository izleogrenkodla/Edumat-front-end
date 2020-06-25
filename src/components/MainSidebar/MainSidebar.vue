<template>
  <aside class="main-sidebar">
    <div class="main-sidebar__row main-sidebar__row--profile">
      <profile-card :user="user" />
    </div>
    <div class="main-sidebar__row main-sidebar__row--badges">
      <badges-card :badges="user.badges" />
    </div>
    <div class="main-sidebar__row">
      <courses-card />
    </div>
    <div class="main-sidebar__row main-sidebar__row--full">
      <category-tile
        mode="elaboration"
        link="/opracowania"
        helpText="Opracowania"
      >
        Opracowania
      </category-tile>
      <category-tile
        mode="formula"
        link="/wzory"
        helpText="Wzory"
      >
        Wzory
      </category-tile>
      <category-tile
        mode="generator"
        link="/generator"
        helpText="Generator matur"
      >
        Geneator matur
      </category-tile>
      <category-tile
        mode="article"
        link="/artykuly"
        helpText="Artykuy"
      >
        Artykuły
      </category-tile>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainSidebar',
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
};
</script>

<style lang="scss" src="./MainSidebar.scss" />
