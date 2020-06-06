<template>
  <button 
    :class="[ {isActive }, 'tab-button']" 
    @click="$emit('setActive')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TabButton',
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped src="./TabButton.scss"/>
