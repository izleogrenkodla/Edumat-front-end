<template>
  <section class="elaboration-solution">
    <p class="elaboration-solution__answer" :style="{ color: answer.color }">
      {{ answer.text }}
    </p>
    <p v-if="!isGoodAnswer" class="elaboration-solution__good-answer">
      Prawidłowa odpowiedź to: <strong>{{ answer.goodAnswer }}</strong>
    </p>
    <div class="elaboration-solution__image" v-if="solution.img">
      <p class="elaboration-solution__image__description" v-katex:auto :key="currentTask">
        {{ solution.img.description }}
      </p>
      <img
        :src="solution.img.src"
        :alt="solution.img.alt"
        class="elaboration-solution__image__content"
      />
    </div>
    <p class="elaboration-solution__comment" v-katex:auto :key="currentTask">
      {{ solution.comment }}
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
    currentTask: {
      type: Number,
      required: true,
    },
  },
  computed: {
    answer() {
      if (this.isGoodAnswer) {
        return {
          text: 'Brawo, udało Ci się',
          color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color'),
        };
      }
      if (this.isGoodAnswer === false) {
        return {
          text: 'Nie tym razem!',
          color: getComputedStyle(document.documentElement).getPropertyValue('--ui-warning'),
          goodAnswer: this.goodAnswer,
        };
      }
      return { goodAnswer: this.goodAnswer };
    },
  },
};
</script>
<style lang="scss" scoped src="./ElaborationSolution.scss" />
