<template>
  <section class="elaboration-solution">
    <p class="elaboration-solution__answer" :style="{ color: answer.color }">{{ answer.text }}</p>
    <p v-if="!isGoodAnswer" class="elaboration-solution__good-answer">
      Prawidłowa odpowiedź to: <strong>{{ answer.goodAnswer }}</strong>
    </p>
    <div class="elaboration-solution__image" v-if="solution.img">
      <p class="elaboration-solution__image__description">
        <slot name="image-description">{{ solution.img.description }}</slot>
      </p>
      <img
        :src="solution.img.src"
        :alt="solution.img.alt"
        class="elaboration-solution__image__content"
      />
    </div>
    <p class="elaboration-solution__comment">
      <slot name="comment">{{ solution.comment }}</slot>
    </p>
  </section>
</template>

<script>
export default {
  name: 'ElaborationSolution',
  props: {
    solution: {
      type: Object,
      required: true,
    },
    isGoodAnswer: {
      type: Boolean,
      required: false,
      default: null,
    },
    goodAnswer: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    answer() {
      if (this.isGoodAnswer) {
        return {
          text: 'Dobrze',
          color: getComputedStyle(document.documentElement).getPropertyValue('--ui-success'),
        };
      }
      if (this.isGoodAnswer === false) {
        return {
          text: 'Ups!',
          color: getComputedStyle(document.documentElement).getPropertyValue('--ui-error'),
          goodAnswer: this.goodAnswer,
        };
      }
      return '';
    },
  },
};
</script>
<style lang="scss" scoped src="./ElaborationSolution.scss" />
