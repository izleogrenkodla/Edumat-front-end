<template>
  <div class="base-tabs">
    <base-tab-button
      v-for="(tab, index) in data"
      :key="tab"
      :isActive="activeTab === index"
      :align="align"
      :style="{ flex: `${100 / perRow}%` }"
      @click="handleClick(index)"
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
  },
  methods: {
    handleClick(index) {
      this.$emit('click', index);
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseTabs.scss" />
