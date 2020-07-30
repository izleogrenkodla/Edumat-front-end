<template>
  <li class="ranking-list-item">
    <span class="ranking-list-item__place">{{ place }}.</span>
    <router-link :to="`profil/${id}`" class="ranking-list-item__wrapper">
      <div class="ranking-list-item__user-data">
        <img :src="image" :alt="name" class="ranking-list-item__image" />
        <p class="ranking-list-item__name">{{ name }}</p>
        <span class="ranking-list-item__line" />
        <p class="ranking-list-item__points">{{ points }} pkt.</p>
      </div>
      <div class="ranking-list-item__badges">
        <base-badge
          :badge="badge"
          v-for="badge in badges"
          :key="badge.name"
          class="ranking-list-item__badge"
        />
      </div>
      <base-button
        type="primary"
        class="ranking-list-item__button"
        :url="`profil/${id}`"
      >
        Zobacz profil
      </base-button>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'RankingListItem',
  data: () => ({}),
  props: {
    place: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
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
    image: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped src="./RankingListItem.scss" />
