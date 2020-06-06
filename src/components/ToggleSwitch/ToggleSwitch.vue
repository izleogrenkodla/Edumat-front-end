<template>
  <label class="switch" for="switch">
    <slot></slot>
    <div class="switch__wrapper">
      <input type="checkbox" class="switch__checkbox" id="switch" />
      <div class="switch__indicator"></div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'ToggleSwitch',
};
</script>
<style lang="scss" scoped src="./ToggleSwitch.scss" />
