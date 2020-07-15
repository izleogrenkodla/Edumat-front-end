<template>
  <div class="generator">
    <main-layout>
      <user-header
        header="Miło Cię widzieć!"
        subHeader="Zaraz wszystko ogarniesz!"
      />
      <h1 class="generator__header">
        Generator matury
      </h1>
      <section class="generator-content">
        <h3 class="generator-content__heading">
          {{ stepInfo }}
        </h3>
        <div class="generator-content__inner">
          <transition name="fade-form">
            <div class="generator-content__question" v-if="currentStep === 1">
              <p class="generator-content__question-name">
                Wybierz poziom dla próbnej matury.
              </p>
              <div class="generator-content__question-items">
                <button 
                  class="generator-content__question-answer"
                  :class="[
                    exam.level === 'basic' ? 'generator-content__question-answer--active' : false,
                  ]"
                  @click="setLevel('basic')"
                >
                  Podstawowy
                </button>
                <button 
                  class="generator-content__question-answer"
                  :class="[
                    exam.level === 'expanded' ? 'generator-content__question-answer--active' : false,
                  ]"
                  @click="setLevel('expanded')"
                >
                  Rozszerzony
                </button>
              </div>
            </div>
            <div class="generator-content__question" v-if="currentStep === 2">
              <p class="generator-content__question-name">
                Wybierz ilość zadań
              </p>
              <div class="generator-content__question-items">
                <button 
                  class="generator-content__question-answer"
                  :class="[
                    exam.questions === 15 ? 'generator-content__question-answer--active' : false,
                  ]"
                  @click="setQuestionsAmount(15)"
                >
                  15 zadań
                </button>
                <button 
                  class="generator-content__question-answer"
                  :class="[
                    exam.questions === 30 ? 'generator-content__question-answer--active' : false,
                  ]"
                  @click="setQuestionsAmount(30)"
                >
                  30 zadań
                </button>
              </div>
            </div>
            <div class="generator-content__question" v-if="currentStep === 3">
              <p class="generator-content__question-name">
                Ile czasu potrzebujesz?
              </p>
              <div class="generator-content__question-items">
                <button 
                  class="generator-content__question-answer"
                  :class="[
                    exam.timeRequired === 60 ? 'generator-content__question-answer--active' : false,
                  ]"
                  @click="setTimeRequired(60)"
                >
                  60 minut
                </button>
                <button 
                  class="generator-content__question-answer"
                  :class="[
                    exam.timeRequired === 90 ? 'generator-content__question-answer--active' : false,
                  ]"
                  @click="setTimeRequired(90)"
                >
                  90 minut
                </button>
              </div>
            </div>
            <div class="generator-content__question" v-if="currentStep === 4">
              <p class="generator-content__question-name">
                Wszystko jest już gotowe!
              </p>
              <ul class="generator-content__question-list">
                <li class="generator-content__question-item">
                  <img
                    class="generator-content__question-item-icon"
                    alt=""
                    src="/img/icons/check.svg"
                  />
                  <p class="generator-content__question-item-text">
                    To jest pierwsza wskazówka. Miło Cię widzieć!
                  </p>
                </li>
                <li class="generator-content__question-item">
                  <img
                    class="generator-content__question-item-icon"
                    alt=""
                    src="/img/icons/check.svg"
                  />
                  <p class="generator-content__question-item-text">
                    To jest druga wskazówka. Miło Cię widzieć!
                  </p>
                </li>
                <li class="generator-content__question-item">
                  <img
                    class="generator-content__question-item-icon"
                    alt=""
                    src="/img/icons/check.svg"
                  />
                  <p class="generator-content__question-item-text">
                    To jest trzecia wskazówka. Miło Cię widzieć!
                  </p>
                </li>
              </ul>
            </div>
          </transition>
          <footer class="generator-content__actions">
            <base-button
              @click="goPrev()"
              outline
              :disabled="currentStep === 1"
              class="generator-content__actions-button"
            >
              Wróć
            </base-button>
            <base-button
              @click="goNext()"
              type="primary"
              :disabled="currentStep === 4"
              class="generator-content__actions-button"
              v-if="currentStep !== 4"
            >
              Dalej
            </base-button>
            <base-button
              v-else
              @click="generateExam()"
              type="primary"
              class="generator-content__actions-button"
            >
              Rozpocznij
            </base-button>
          </footer>
        </div>
      </section>
    </main-layout>
  </div>
</template>

<script>

export default {
  name: 'Generator',
  data: () => ({ 
    currentStep: 1,
    exam: {
      level: null,
      questions: null,
      timeRequired: null,
    },
    error: false,
  }),
  methods: {
    goNext() {
      if (this.currentStep !== 4) {
        if (this.validator()) {
          this.currentStep += 1;
        }
      }
    },
    goPrev() {
      if (this.currentStep !== 1) {
        this.currentStep -= 1;
      }
    },
    validator() {
      switch (this.currentStep) {
        case 1: {
          return this.exam.level ? true : false;
          break;
        };
        case 2: {
          return this.exam.questions ? true : false;
          break;
        };
        case 3: {
          return this.exam.timeRequired ? true : false;
          break;
        };
        default: {
          break;
        };
      };
    },
    setLevel(level) {
      this.exam.level = level;
    },
    setQuestionsAmount(amount) {
      this.exam.questions = amount;
    },
    setTimeRequired(time) {
      this.exam.timeRequired = time;
    },
    generateExam() {
      this.$store.dispatch('exam/generateExam', this.exam);
    },
  },
  computed: {
    stepInfo() {
      return this.currentStep === 4 ? 'Powodzenia' : `Pytanie ${ this.currentStep } z 4`;
    },
  },
};
</script>

<style lang="scss" scoped src="./Generator.scss"/>
