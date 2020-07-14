<template>
  <div
    class="base-tabs"
    :style="{ gridTemplateColumns: `repeat(${perRow},1fr)` }"
    :role="wrapperRole"
    @keydown.left="$emit('keyLeft')"
    @keydown.right="$emit('keyRight')"
    @keydown.up.prevent="$emit('keyLeft')"
    @keydown.down.prevent="$emit('keyRight')"
    @keyup.enter="$emit('submit')"
    tabindex="0"
  >
    <base-tab-button
      v-for="(tab, index) in data"
      :key="tab"
      :isActive="activeTab === index"
      :align="align"
      :tabindex="-1"
      @click="handleClick(index)"
      @focus="$emit('focus')"
      :size="size"
      :bold="bold"
      :highlightFont="highlightFont"
      :role="role"
    >
      {{ tab }}
    </base-tab-button>
  </div>
</template>

<script>
export default {
  name: 'BaseTabs',
  props: {
    data: {
      type: Array,
      required: false,
    },
    perRow: {
      type: Number,
      required: false,
      default: 2,
    },
    align: {
      type: String,
      required: false,
      default: '',
    },
    activeTab: {
      type: Number,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: 'normal',
    },
    highlightFont: {
      type: Boolean,
      required: false,
      default: false,
    },
    bold: {
      type: Boolean,
      required: false,
      default: false,
    },
    role: {
      type: String,
      required: false,
      default: 'tab',
    },
  },
  computed: {
    wrapperRole() {
      return this.role === 'tab' ? 'tablist' : 'radiogroup';
    },
  },
  methods: {
    handleClick(index) {
      this.$emit('click', index);
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseTabs.scss" />
