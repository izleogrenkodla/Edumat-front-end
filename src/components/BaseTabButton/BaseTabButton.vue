<template>
  <button
    class="base-tab-button"
    :class="[
      isActive ? 'base-tab-button--active' : '',
      isActive && highlightFont ? 'base-tab-button--highlight' : '',
      size === 'small' ? 'base-tab-button--small' : '',
      size === 'big' ? 'base-tab-button--big' : '',
      align === 'left' ? 'base-tab-button--left' : '',
      align === 'right' ? 'base-tab-button--right' : '',
      bold ? 'base-tab-button--bold' : ''
    ]"
    @click="$emit('click')"
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
    size: {
      type: String,
      default: 'normal',
      required: false,
    },
    highlightFont: {
      type: Boolean,
      default: false,
      required: false,
    },
    bold: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseTabButton.scss" />
