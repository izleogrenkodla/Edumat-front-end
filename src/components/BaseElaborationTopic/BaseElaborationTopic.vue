<template>
  <div class="base-elaboration-topic">
    <img
      class="base-elaboration-topic__image"
      :src="`/img/math-symbols/${topic.section}.svg`"
      alt=""
    />
    <div class="base-elaboration-topic__text">
      <p class="base-elaboration-topic__text__name">{{ topic.name }}</p>
      <p class="base-elaboration-topic__text__level" :class="levelClass">
        {{ topic.level }}
      </p>
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
  computed: {
    levelClass() {
      if (this.topic.level.includes('Materiał na')) {
        return 'base-elaboration-topic__text__level--extra';
      }
      switch (this.topic.level) {
        case 'Szkoła podstawowa':
          return 'base-elaboration-topic__text__level--primary-school';
        case 'Matura podstawowa':
          return 'base-elaboration-topic__text__level--basic';
        case 'Matura rozszerzona':
          return 'base-elaboration-topic__text__level--extended';
        default:
          return 'base-elaboration-topic__text__level';
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./BaseElaborationTopic.scss" />
