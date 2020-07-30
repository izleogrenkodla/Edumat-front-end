<template>
  <router-link
    :to="`profil/${id}`"
    class="ranking-podium-card"
    :class="`ranking-podium-card--${medal}`"
  >
    <div class="ranking-podium-card__image-wrapper">
      <img :src="image" :alt="name" class="ranking-podium-card__image" />
      <span
        class="ranking-podium-card__place"
        :class="`ranking-podium-card__place--${medal}`"
      ></span>
    </div>
    <p class="ranking-podium-card__name">{{ name }}</p>
    <p class="ranking-podium-card__points">
      <span>{{ points }} pkt.</span>
      <span class="ranking-podium-card__line" />
      <span>{{ place }}. miejsce</span>
    </p>
    <div class="ranking-podium-card__badges">
      <base-badge
        :badge="badge"
        v-for="badge in badges"
        :key="badge.name"
        class="ranking-podium-card__badge"
      />
    </div>
    <base-button
      type="primary"
      class="ranking-podium-card__button"
      :url="`profil/${id}`"
    >
      Zobacz profil
    </base-button>
  </router-link>
</template>

<script>
export default {
  name: 'RankingPodiumCard',
  data: () => ({}),
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    place: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    badges: {
      type: Array,
      required: true,
    },
  },
  computed: {
    medal() {
      switch (this.place) {
        case 1:
          return 'first';
        case 2:
          return 'second';
        case 3:
          return 'third';
        default:
          return '';
      }
    },
  },
  mounted() {
    if (this.place === 1) {
      this.place = 2;
    } else if (this.place === 2) {
      this.place = 1;
    }
  },
};
</script>
<style lang="scss" scoped src="./RankingPodiumCard.scss" />
