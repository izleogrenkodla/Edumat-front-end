<template>
  <li 
    class="base-dropdown-item"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseDropdownItem',
}
</script>

<style lang="scss" scoped src="./BaseDropdownItem.scss" />
