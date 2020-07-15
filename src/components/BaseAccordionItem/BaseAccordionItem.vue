<template>
  <li
    class="base-accordion-item"
    @click="$emit('click'), handleClick()"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseAccordionItem',
  inject: ['accordion'],
  methods: {
    handleClick() {
      this.accordion.close();
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseAccordionItem.scss" />
