<template>
  <li
    class="base-dropdown-item"
    :class="[
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
