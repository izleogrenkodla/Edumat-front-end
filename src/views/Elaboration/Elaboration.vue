<template>
  <main class="elaboration__container container container--medium">
    <div class="elaboration__header">
      <h1>{{ topic.header }}</h1>
      <base-button
        class="elaboration__header__button"
        outline
        @click="$router.go(-1)"
      >
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
        :data="['Zadanie', 'Rozwiązanie']"
        :perRow="2"
        class="elaboration__test__tabs"
      />
      <div class="elaboration__test__buttons">
        <base-button outline @click="prevTask">Poprzedni przykład</base-button>
        <base-button type="primary" @click="nextTask">Następny przykład</base-button>
      </div>
    </section>
  </main>
</template>

<script>
import { topic } from '@/assets/data/elaboration-topic.json';

export default {
  name: 'Elaboration',
  data: () => ({ topic, currentTask: 1, amountOfTasks: 3 }),
  methods: {
    prevTask() {
      if (this.currentTask > 1) {
        this.currentTask -= 1;
      }
    },
    nextTask() {
      if (this.currentTask < this.amountOfTasks) {
        this.currentTask += 1;
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./Elaboration.scss" />
