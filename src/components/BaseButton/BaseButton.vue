<template>
  <component
    :is="componentType"
    :disabled="disabled"
    :class="classes"
    :to="url ? url : false"
    :title="title"
    :aria-label="title"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
    :type="buttonType"
  >
    <p class="base-button__text">
      <slot></slot>
    </p>
    <img
      v-if="icon"
      class="base-button__icon"
      alt=""
      :src="`/img/icons/${icon}.svg`"
    />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    url: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: '',
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: Boolean,
      required: false,
      default: false,
    },
    white: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonType: {
      type: String,
      required: false,
      default: 'button',
    },
  },
  computed: {
    componentType() {
      return this.url ? 'router-link' : 'button';
    },
    classes() {
      return [
        this.type === 'primary' ? 'base-button--primary' : '',
        this.type === 'secondary' ? 'base-button--secondary' : '',
        this.type === 'text' ? 'base-button--text' : '',
        this.size === 'big' ? 'base-button--big' : '',
        this.size === 'small' ? 'base-button--small' : '',
        this.disabled ? 'base-button--disabled' : '',
        this.outline ? 'base-button--outline' : '',
        this.text ? 'base-button--text' : '',
        this.white ? 'base-button--white' : '',
        this.icon ? 'base-button--icon-mode' : '',
        this.fullWidth ? 'base-button--full-width' : '',
        this.borderBottom ? 'base-button--border-bottom' : '',
      ];
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseButton.scss" />
