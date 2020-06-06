<template>
  <div class="base-tabs">
    <tab-button
      v-for="(tab, index) in data"
      :key="tab"
      @setActive="currentTab = index"
      :isActive="currentTab === index"
      :align="align"
      :style="{ flex: `${ 100 / perRow }%` }"
    >
      {{ tab }}
    </tab-button>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
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

<style lang="scss" scoped src="./Tabs.scss" />
