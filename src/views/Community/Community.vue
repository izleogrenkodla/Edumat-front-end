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
                : ''
            "
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
      <user-post
        v-for="question in questions"
        :key="question.id"
        :post="question"
        purpose="social"
      />
      <base-button
        outline
        @click="$store.dispatch('community/loadMore')"
        class="community__show-more"
      >
        Pokaż więcej
      </base-button>
    </main-layout>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { questions } from '@/assets/data/questions.json';

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
          type: 'answer',
          options: ['Wszystkie', 'Z odpowiedzią', 'Bez odpowiedzi'],
        },
      ],
      activeFilters: {
        level: 'Wszystkie poziomy',
        category: 'Każda kategoria',
        answer: 'Wszystkie',
      },
      activeBadge: {},
      questions,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      isLogged: (state) => state.auth.isLogged,
      comingBadges: (state) => state.community.comingBadges,
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
