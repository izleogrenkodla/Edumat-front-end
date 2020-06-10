<template>
  <li
    class="base-dropdown-item"
    :class="classes"
    @click="$emit('click'), handleClick()"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseDropdownItem',
  props: {
    classes: {
      type: [String, Array],
      required: false,
      default: '',
    },
  },
  inject: ['dropdown'],
  methods: {
    handleClick() {
      this.dropdown.close();
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseDropdownItem.scss" />
