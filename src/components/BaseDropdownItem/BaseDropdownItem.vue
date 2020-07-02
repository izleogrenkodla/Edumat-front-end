<template>
  <li
    class="base-dropdown-item"
    :class="[
      ...classes,
      this.divinder ? 'base-dropdown-item--divinder' : '',
    ]"
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
    divinder: {
      type: Boolean,
      required: false,
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

<style lang="scss" src="./BaseDropdownItem.scss" />
