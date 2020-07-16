<template>
  <main class="community__container">
    <main-layout>
      <user-header
        :header="user ? `Dzień dobry, ${user.name}` : 'Miło Cię widzieć!'"
        subHeader="Jak Ci mija dzień?"
        textButton="Zadaj pytanie"
        url="pytania"
      />
      <section class="community__badges section" v-if="isLogged">
        <div class="community__progress">
          <base-badge :badge="activeBadge" class="community__badge" />
          <div class="community__wrapper">
            <h1 class="community__header">Odznaka "{{ activeBadge.name }}"</h1>
            <div class="community__progress-description">
              <p>{{ activeBadge.description }}</p>
              <p>{{ activeBadge.progress }}%</p>
            </div>
            <div class="community__progress-bar">
              <span
                class="community__progress-bar community__progress-bar--inner"
                :style="{
                  width: `${activeBadge.progress}%`
                }"
              />
            </div>
          </div>
        </div>
        <ul class="community__coming-badges">
          <button
            v-for="badge in comingBadges"
            :key="badge.id"
            @click="setActiveBadge(badge.id)"
            :title="badge.name"
            class="community__coming-badge"
            :class="
              badge.id === activeBadge.id
                ? 'community__coming-badge--active'
                : ''"
          >
            <img
              class="community__icon"
              alt=""
              :src="`/img/badges/${badge.icon}.svg`"
            />
          </button>
        </ul>
      </section>
      <h1 class="header">Ostatnie pytania</h1>
      <div class="community__filters">
        <base-accordion
          v-for="filter in filters"
          :key="filter.type"
          class="community__base-accordion"
          arrowSize="small"
        >
          <template slot="header">
            {{ activeFilters[filter.type] }}
          </template>
          <template slot="items">
            <base-accordion-item
              v-for="option in filter.options"
              :key="option"
              class="community__base-accordion-item"
              @click="changeFilter(filter.type, option)"
            >
              {{ option }}
            </base-accordion-item>
          </template>
        </base-accordion>
      </div>
      <section
        class="section community__section"
        v-for="lastQuestion in lastQuestions"
        :key="lastQuestion.id"
      >
        <div class="community__status">
          <span class="community__time">{{ lastQuestion.time }}</span>
          <img
            v-if="lastQuestion.checked"
            class="community__check"
            src="/img/icons/white-check.svg"
            alt="Zweryfikowana odpowiedź"
          />
        </div>
        <div class="community__flex">
          <div class="community__author">
            <img
              class="community__avatar"
              :src="lastQuestion.author.picture"
              alt="Avatar użytkownika"
              :title="lastQuestion.author.name"
            />
            <p class="community__author-name">{{ lastQuestion.author.name }}</p>
            <p class="community__date">{{ lastQuestion.date }}</p>
          </div>
          <button class="community__options">
            <span class="community__circle"></span>
            <span class="community__circle"></span>
            <span class="community__circle"></span>
          </button>
        </div>
        <p v-katex:auto class="community__content">
          {{ lastQuestion.content }}
        </p>
        <div class="community__flex">
          <div class="community__topic">
            <img
              :src="lastQuestion.topic.image"
              :alt="lastQuestion.topic.name"
              class="community__topic-image"
            />
            <p class="community__topic-name">{{ lastQuestion.topic.name }}</p>
          </div>
          <base-button outline class="community__answer">
            Odpowiedź
          </base-button>
        </div>
      </section>
    </main-layout>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex);

export default {
  name: 'Community',
  data() {
    return {
      filters: [
        {
          type: 'level',
          options: ['Wszystkie poziomy', 'Szkoła podstawowa', 'Liceum'],
        },
        {
          type: 'category',
          options: ['Każda kategoria', 'Wielomiany', 'Ułamki', 'Całki'],
        },
        {
          type: 'something',
          options: ['Wszystkie', 'Wszystkie2', 'Wszystkie3'],
        },
      ],
      activeFilters: {
        level: 'Wszystkie poziomy',
        category: 'Każda kategoria',
        something: 'Wszystkie',
      },
      activeBadge: {},
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      isLogged: (state) => state.auth.isLogged,
      comingBadges: (state) => state.community.comingBadges,
      lastQuestions: (state) => state.community.lastQuestions,
    }),
  },
  methods: {
    changeFilter(filter, option) {
      this.activeFilters[filter] = option;
    },
    setActiveBadge(id) {
      [this.activeBadge] = this.comingBadges.filter((badge) => badge.id === id);
    },
  },

  mounted() {
    [this.activeBadge] = this.comingBadges;
  },
};
</script>
<style lang="scss" scoped src="./Community.scss" />
