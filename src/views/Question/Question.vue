<template>
  <main>
    <main-layout>
      <div class="question__flex">
        <h1 class="question__header">Pytanie</h1>
        <base-button @click="$router.go(-1)" outline class="question__back">
          Wróć
        </base-button>
      </div>
      <user-post :post="question" purpose="question" />
      <base-button
        @click="$router.go(-1)"
        outline
        class="question__back--mobile"
      >
        Wróć
      </base-button>
      <h1 class="question__header">Odpowiedzi</h1>
      <user-post
        v-for="answer in question.answers"
        :key="answer.authorId"
        :post="answer"
        purpose="answer"
      />
      <section class="section question__ask">
        <p><span>Znasz</span> odpowiedź na pytanie?</p>
        <base-button outline>Odpowiedz</base-button>
      </section>
    </main-layout>
  </main>
</template>

<script>
import { question } from '@/assets/data/question.json';

export default {
  name: 'Question',
  data: () => ({ question }),
  computed: {
    timeAgo() {
      return this.question.date;
    },
  },
};
</script>
<style lang="scss" scoped src="./Question.scss" />
