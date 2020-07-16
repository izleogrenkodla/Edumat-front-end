<template>
  <header
    class="user-header"
    :class="`user-header--${page}`"
  >
    <h1 class="user-header__text">{{ header }}</h1>
    <h2 class="user-header__subtext">{{ subHeader }}</h2>
    <base-button
      class="user-header__button"
      outline
      white
      @click="$router.go(-1)"
      v-if="$route.path !== '/'"
      :url="url"
    >
      {{ textButton }}
    </base-button>
  </header>
</template>

<script>
export default {
  name: 'UserHeader',
  props: {
    header: {
      type: String,
      required: true,
    },
    subHeader: {
      type: String,
      required: false,
    },
    textButton: {
      type: String,
      required: false,
      default: 'Wróć',
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
    page: {
      type: String,
      required: false,
      default: 'home-page',
    },
  },
};
</script>
<style lang="scss" scoped src="./UserHeader.scss" />
