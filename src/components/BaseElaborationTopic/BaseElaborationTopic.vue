<template>
  <div class="base-elaboration-topic">
    <img
      class="base-elaboration-topic__image"
      :src="`/img/math-symbols/${topic.section}.svg`"
      alt=""
    />
    <div class="base-elaboration-topic__text">
      <p class="base-elaboration-topic__text__name">{{ topic.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseElaborationTopic',
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./BaseElaborationTopic.scss" />
