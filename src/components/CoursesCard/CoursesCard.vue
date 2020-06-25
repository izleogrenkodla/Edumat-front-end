<template>
  <div class="courses-card">
    <base-button
      icon="arrow-b-r"
      type="text"
      class="main-sidebar__button"
      url="/kursy"
      full-width
      border-bottom
    >
      Rozpoczęte kursy
    </base-button>
    <div class="courses-card__courses">
      <img
        class="courses-card__courses-icon"
        alt=""
        src="/img/sidebar/courses.svg"
      />
      <div class="courses-card__courses-content">
        <h6 class="courses-card__courses-heading">
          Brak kursów!
        </h6>
        <h6 class="courses-card__courses-text">
          Pracujemy nad tym!
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesCard',
};
</script>

<style lang="scss" scoped src="./CoursesCard.scss" />
