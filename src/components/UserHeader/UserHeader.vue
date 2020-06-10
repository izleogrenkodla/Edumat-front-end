<template>
  <header class="user-header">
    <h1 class="user-header__text">{{ header }}</h1>
    <h2 class="user-header__subtext">{{ subHeader }}</h2>
    <base-button
      class="user-header__button"
      outline
      white
      @click="$router.go(-1)"
      v-if="$route.path !== '/'"
      >{{ textButton }}</base-button
    >
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
  },
};
</script>
<style lang="scss" scoped src="./UserHeader.scss" />
