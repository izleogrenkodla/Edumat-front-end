<template>
  <label
    class="base-checkbox"
    :for="checkboxID"
    :style="{ flexDirection: type === 'checkbox' ? 'row-reverse' : 'row' }"
  >
    <slot></slot>
    <div class="base-checkbox__wrapper">
      <input type="checkbox" class="base-checkbox__checkbox" :id="checkboxID" v-model="checked" />
      <div
        :class="[
          'base-checkbox__indicator',
          type === 'checkbox'
            ? `base-checkbox__indicator--checkbox ${
                size === 'big' ? 'base-checkbox__indicator--checkbox--big' : ''
              }`
            : `base-checkbox__indicator--switch ${
                size === 'big' ? 'base-checkbox__indicator--switch--big' : ''
              }`
        ]"
      ></div>
      <svg
        class="base-checkbox__icon"
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        v-if="type === 'checkbox'"
        :style="{ opacity: checked ? 1 : 0 }"
      >
        <path
          d="m173.9 439.4-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0l112.1 112.09 240.1-240.09c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.4c-9.998 9.997-26.207 9.997-36.204-1e-3z"
        />
      </svg>
    </div>
  </label>
</template>

<script>
import { uuid } from '@/helpers/';

export default {
  name: 'BaseCheckbox',
  data: () => ({
    checked: false,
  }),
  props: {
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
  },
  computed: {
    checkboxID() {
      return uuid();
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseCheckbox.scss" />
