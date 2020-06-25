<template>
  <div class="badges-card">
    <base-button
      icon="arrow-b-r"
      type="text"
      class="main-sidebar__button"
      url="/kursy"
      full-width
      border-bottom
    >
      Odznaki za odpowiedzi
    </base-button>
    <ul class="badges-card__list">
      <base-badge
        v-for="badge in badges"
        :key="badge.id"
        :badge="badge"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BadgesCard',
  props: {
    badges: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./BadgesCard.scss" />
