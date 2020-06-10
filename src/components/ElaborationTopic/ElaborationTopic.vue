<template>
  <div class="elaboration-topic">
    <img
      class="elaboration-topic__image"
      :src="`/img/math-symbols/${topic.section}.svg`"
      alt=""
    />
    <div class="elaboration-topic__text">
      <p class="elaboration-topic__text__name">{{ topic.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElaborationTopic',
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./ElaborationTopic.scss" />
