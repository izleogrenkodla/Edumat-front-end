<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="{ required: required ? { allowFalse: false } : false }"
    :name="name"
    class="base-checkbox"
  >
    <label
      class="base-checkbox__label"
      :for="checkboxID"
      :style="{ flexDirection: type === 'checkbox' ? 'row-reverse' : 'row' }"
    >
      <slot></slot>
      <div
        class="base-checkbox__wrapper"
        :style="{
          margin: type === 'checkbox' ? '0 0.5rem 0 0' : '0 0 0 0.5rem'
        }"
      >
        <input
          type="checkbox"
          class="base-checkbox__checkbox"
          :id="checkboxID"
          :value="value"
          @change="updateValue($event.target.checked)"
        />
        <div class="base-checkbox__indicator" :class="classes"></div>
        <svg
          class="base-checkbox__icon"
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          v-if="type === 'checkbox'"
          :style="{ opacity: value ? 1 : 0 }"
        >
          <path
            d="m173.9 439.4-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0l112.1 112.09 240.1-240.09c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.4c-9.998 9.997-26.207 9.997-36.204-1e-3z"
          />
        </svg>
      </div>
    </label>
    <transition name="fade-form">
      <span class="base-checkbox__error" v-if="errors[0]">
        {{ errors[0] }}
      </span>
    </transition>
  </validation-provider>
</template>

<script>
import { uuid } from '@/helpers/';

export default {
  name: 'BaseCheckbox',
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: 'small',
    },
    type: {
      type: String,
      required: false,
      default: 'checkbox',
    },
    name: {
      type: String,
      required: false,
      default: 'Checkbox',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    checkboxID() {
      return uuid();
    },
    classes() {
      const classes = [];
      if (this.type === 'checkbox') {
        classes.push('base-checkbox__indicator--checkbox');
        if (this.size === 'big') {
          classes.push('base-checkbox__indicator--checkbox--big');
        }
      }
      if (this.type === 'switch') {
        classes.push('base-checkbox__indicator--switch');
        if (this.size === 'big') {
          classes.push('base-checkbox__indicator--switch--big');
        }
      }
      return classes;
    },
  },
  methods: {
    updateValue(checked) {
      this.$emit('input', checked);
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseCheckbox.scss" />
