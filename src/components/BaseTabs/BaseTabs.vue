<template>
  <div class="base-tabs" :style="{ gridTemplateColumns: `repeat(${perRow},1fr)` }">
    <base-tab-button
      v-for="(tab, index) in data"
      :key="tab"
      :isActive="activeTab === index"
      :align="align"
      @click="handleClick(index)"
      :size="size"
      :bold="bold"
      :highlightFont="highlightFont"
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
      default: 0,
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
  },
  methods: {
    handleClick(index) {
      this.$emit('click', index);
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseTabs.scss" />
