<template>
  <section class="elaboration-task">
    <div class="elaboration-task__image" v-if="task.img">
      <p class="elaboration-task__image__description" v-katex:auto>
        <slot name="image-description">{{ task.img.description }}</slot>
      </p>
      <img :src="task.img.src" :alt="task.img.alt" class="elaboration-task__image__content" />
    </div>
    <p class="elaboration-task__question">
      <slot name="question">{{ task.question }}</slot>
    </p>
    <div class="elaboration-task__answers">
      <base-button
        v-for="(answer, index) in task.answers"
        :key="answer"
        class="elaboration-task__answer"
        text
        @click="handleClick(index)"
      >
        <strong class="elaboration-task__answer__letter">{{ letters[index] }}.</strong>
        <span v-katex:auto>
          {{ answer }}
        </span>
      </base-button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ElaborationTask',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    letters: () => ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  methods: {
    handleClick(index) {
      const isGoodAnswer = this.letters[index] === this.task.goodAnswer;
      this.$emit('answer', isGoodAnswer);
    },
  },
};
</script>
<style lang="scss" scoped src="./ElaborationTask.scss" />
