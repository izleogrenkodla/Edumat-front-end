<template>
  <button
    class="base-tab-button"
    :class="[
      isActive ? 'base-tab-button--active' : '',
      align === 'left' ? 'base-tab-button--left' : '',
      align === 'right' ? 'base-tab-button--right' : '',
    ]"
    @click="$emit('setActive')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseTabButton',
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
    align: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseTabButton.scss" />
