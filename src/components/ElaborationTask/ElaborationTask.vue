<template>
  <section class="elaboration-task">
    <div class="elaboration-task__image" v-if="task.img">
      <p class="elaboration-task__image__description" v-katex:auto>
        <slot name="image-description">{{ task.img.description }}</slot>
      </p>
      <img
        :src="task.img.src"
        :alt="task.img.alt"
        class="elaboration-task__image__content"
      />
    </div>
    <p class="elaboration-task__question">
      <slot name="question">{{ task.question }}</slot>
    </p>
    <div class="elaboration-task__answers" v-if="task.answers">
      <base-radio
        v-for="answer in task.answers"
        :key="answer"
        class="elaboration-task__answer"
        @input="handleAnswer"
        v-model="userAnswer"
        :radioValue="answer"
      >
        <span v-katex:auto>
          {{ answer }}
        </span>
      </base-radio>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ElaborationTask',
  data: () => ({
    userAnswer: '',
  }),
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleAnswer() {
      const isGoodAnswer = this.userAnswer === this.task.goodAnswer;
      this.$emit('answer', isGoodAnswer);
    },
  },
};
</script>
<style lang="scss" scoped src="./ElaborationTask.scss" />
