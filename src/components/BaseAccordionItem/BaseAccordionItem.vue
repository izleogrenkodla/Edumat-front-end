<template>
  <li
    class="base-accordion-item"
    :class="classes"
    @click="$emit('click'), handleClick()"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseAccordionItem',
  props: {
    classes: {
      type: [String, Array],
      required: false,
      default: '',
    },
  },
  inject: ['accordion'],
  methods: {
    handleClick() {
      this.accordion.close();
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseAccordionItem.scss" />
