<template>
  <li
    class="base-dropdown-item"
    @click="$emit('click'), handleClick()"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseDropdownItem',
  inject: ['dropdown'],
  methods: {
    handleClick() {
      this.dropdown.close();
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseDropdownItem.scss" />
