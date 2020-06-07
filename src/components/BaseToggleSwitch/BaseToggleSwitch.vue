<template>
  <label class="base-switch" :for="switchID">
    <slot></slot>
    <div class="base-switch__wrapper">
      <input type="checkbox" class="base-switch__checkbox" :id="switchID" v-model="checked" />
      <div
        :class="[size === 'big' && 'base-switch__indicator--big', 'base-switch__indicator']"
      ></div>
    </div>
  </label>
</template>

<script>
import { uuid } from '@/helpers/';

export default {
  name: 'BaseToggleSwitch',
  data: () => ({
    checked: false,
  }),
  props: {
    size: {
      type: String,
      required: false,
      default: 'small',
    },
  },
  computed: {
    switchID() {
      return uuid();
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseToggleSwitch.scss" />
