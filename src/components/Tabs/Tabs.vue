<template>
  <div class="tabs">
    <tab-button
      v-for="(tab, index) in data"
      :key="tab"
      @setActive="currentTab = index"
      :isActive="currentTab === index"
    >
      {{ tab }}
    </tab-button>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    currentTab: 0,
  }),
};
</script>

<style lang="scss" scoped src="./Tabs.scss" />
