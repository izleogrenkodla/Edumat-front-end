<template>
  <div class="elaboration-topic">
    <img
      class="elaboration-topic__image"
      :src="`/img/math-symbols/${topic.section}.svg`"
      :alt="topic.section"
    />
    <p class="elaboration-topic__name">{{ topic.name }}</p>
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
