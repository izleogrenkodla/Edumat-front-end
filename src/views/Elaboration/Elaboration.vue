<template>
  <main class="elaboration__container container container--medium">
    <div class="elaboration__header">
      <h1>{{ topic.header }}</h1>
      <base-button class="elaboration__header__button" outline @click="$router.go(-1)">
        Wróć
      </base-button>
    </div>
    <section class="elaboration__section elaboration__in-brief">
      <h2 class="elaboration__section__header">
        <img
          src="@/assets/icons/clock.svg"
          alt="W skrócie"
          class="elaboration__section__header__icon"
        />
        W skrócie
      </h2>
      <component :is="`${slug}-in-brief`" />
    </section>
    <section class="elaboration__section elaboration__info">
      <h2 class="elaboration__section__header">
        <img
          src="@/assets/icons/info.svg"
          alt="Informacje"
          class="elaboration__section__header__icon"
        />
        Więcej informacji
      </h2>
      <component :is="`${slug}-info`" />
    </section>
    <section class="elaboration__section elaboration__test">
      <div class="elaboration__section__header__wrapper">
        <h2 class="elaboration__section__header">
          <img
            src="@/assets/icons/check.svg"
            alt="Sprawdź się"
            class="elaboration__section__header__icon"
          />
          Sprawdź się
        </h2>
        <div class="elaboration__section__header__counter">
          {{ currentTask }} / {{ amountOfTasks }}
        </div>
      </div>
      <base-tabs
        @click="currentTab = $event"
        :data="['Zadanie', 'Rozwiązanie']"
        :perRow="2"
        class="elaboration__test__tabs"
        :activeTab="currentTab"
      />
      <transition name="page-fade" mode="out-in">
        <elaboration-task
          :task="topic.tasks[currentTask - 1]"
          v-if="currentTab === 0"
          @answer="handleAnswer"
        />
        <elaboration-solution
          :solution="topic.solutions[currentTask - 1]"
          v-else
          :isGoodAnswer="isGoodAnswer"
          :goodAnswer="topic.tasks[currentTask - 1].goodAnswer"
        />
      </transition>
      <div class="elaboration__test__buttons">
        <base-button
          outline
          @click="prevTask"
          class="elaboration__test__button"
          :disabled="currentTask <= 1"
        >
          Poprzedni <span>przykład</span>
        </base-button>
        <base-button
          type="primary"
          @click="nextTask"
          class="elaboration__test__button"
          :disabled="currentTask >= amountOfTasks"
        >
          Następny <span>przykład</span>
        </base-button>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from 'vue';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex);

export default {
  name: 'Elaboration',
  data: () => ({
    topic: {},
    currentTask: 1,
    amountOfTasks: 0,
    currentTab: 0,
    isGoodAnswer: null,
  }),
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  methods: {
    prevTask() {
      if (this.currentTask > 1) {
        this.currentTask -= 1;
        this.currentTab = 0;
      }
    },
    nextTask() {
      if (this.currentTask < this.amountOfTasks) {
        this.currentTask += 1;
        this.currentTab = 0;
      }
    },
    handleAnswer(isGoodAnswer) {
      this.isGoodAnswer = isGoodAnswer;
      this.currentTab = 1;
    },
  },
  created() {
    const { topic } = require(`@/assets/data/elaboration-${this.$route.params.slug}.json`);
    this.topic = topic;
    this.amountOfTasks = this.topic.tasks.length;
  },
  beforeRouteUpdate(to, from, next) {
    const isValid = (param) => {
      const elaborations = ['cyfry-i-liczby'];
      return elaborations.includes(param);
    };
    if (!isValid(to.params.slug)) {
      next({ name: 'Home' }); // TODO 404 page
    } else {
      next();
    }
  },
};
</script>
<style lang="scss" scoped src="./Elaboration.scss" />
