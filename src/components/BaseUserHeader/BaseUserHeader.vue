<template>
  <header class="base-user-header">
    <h1 class="base-user-header__text">{{ header }}</h1>
    <h2 class="base-user-header__subtext">{{ subHeader }}</h2>
    <base-button class="base-user-header__button" outline white>{{ textButton }}</base-button>
  </header>
</template>

<script>
export default {
  name: 'BaseUserHeader',
  data() {
    return {};
  },
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
  methods: {},
};
</script>
<style lang="scss" scoped src="./BaseUserHeader.scss" />
