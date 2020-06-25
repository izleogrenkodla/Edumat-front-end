<template>
  <li 
    class="base-badge"
    :title="badge.name"
    :aria-label="badge.name"
  >
    <img
      class="base-badge__icon"
      alt=""
      :src="`/img/badges/${badge.icon}.svg`"
    />
  </li>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    badge: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseBadge.scss" />