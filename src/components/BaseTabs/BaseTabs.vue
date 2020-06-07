<template>
  <div class="base-tabs">
    <base-tab-button
      v-for="(tab, index) in data"
      :key="tab"
      @setActive="currentTab = index"
      :isActive="currentTab === index"
      :align="align"
      :style="{ flex: `${ 100 / perRow }%` }"
    >
      {{ tab }}
    </base-tab-button>
  </div>
</template>

<script>
export default {
  name: 'BaseTabs',
  data: () => ({
    currentTab: 0,
  }),
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
  },
};
</script>

<style lang="scss" scoped src="./BaseTabs.scss" />
