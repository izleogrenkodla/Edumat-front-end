<template>
  <div class="tabs">
    <tab-button
      v-for="(tab, index) in tabs"
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
  data() {
    return {
      currentTab: 0,
      tabs: ['Tab1', 'Tab2'],
    };
  },
};
</script>
<style lang="scss" scoped src="./Tabs.scss" />
