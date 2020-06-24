<template>
  <label class="base-radio__label" :for="radioID">
    <div class="base-radio__wrapper">
      <input
        type="radio"
        class="base-radio__radio"
        :id="radioID"
        :checked="value === radioValue"
        :name="name"
        :value="radioValue"
        @change="updateValue($event.target.value)"
      />
      <div class="base-radio__dot" :class="classes"></div>
    </div>
    <slot></slot>
  </label>
</template>

<script>
import { uuid } from '@/helpers/';

export default {
  name: 'BaseRadio',
  props: {
    value: {
      type: String,
      required: true,
    },
    radioValue: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: 'small',
    },
    name: {
      type: String,
      required: false,
      default: 'Checkbox',
    },
  },
  computed: {
    radioID() {
      return uuid();
    },
    classes() {
      return [this.size === 'big' ? 'base-radio__dot--big' : ''];
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
<style lang="scss" scoped src="./BaseRadio.scss" />
