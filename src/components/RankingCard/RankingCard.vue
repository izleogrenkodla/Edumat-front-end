<template>
  <div class="ranking-card">
    <base-button
      type="text"
      url="/ranking"
      icon="arrow-b-r"
      full-width
      border-bottom
    >
      Ranking
    </base-button>
    <div class="ranking-card__content">
      <img
        class="ranking-card__content-icon"
        alt=""
        src="/img/sidebar/trophy.svg"
      />
      <p class="ranking-card__content-text">
        {{ `${user.pointsToNewLvl}pkt. do` }}
        <span>
          {{ `${user.nextLevel} miejsca!` }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankingCard',
  props: {
    user: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped src="./RankingCard.scss" />
