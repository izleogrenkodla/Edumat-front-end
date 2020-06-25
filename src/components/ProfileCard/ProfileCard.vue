<template>
  <div class="profile-card" v-if="user">
    <div class="profile-card__info">
      <img
        class="profile-card__info-avatar"
        alt=""
        src="/img/sidebar/prof.svg"
      />
      <div class="profile-card__info-content">
        <h5 class="profile-card__info-name">
          {{ user.name }}
        </h5>
        <p class="profile-card__info-education">
          {{ user.education }}
        </p>
      </div>
    </div>
    <div class="profile-card__level">
      <h6 class="profile-card__level-heading">
        <span>Znajomość matematyki</span>
        <span>
          {{ `${user.lvl}%` }}
        </span>
      </h6>
      <div class="profile-card__level-progress">
        <div 
          class="profile-card__level-progress-inner"
          :style="{ width: `${user.lvl}%` }"
        >
        </div>
      </div>
    </div>
    <ranking-card 
      v-if="mode === 'sidebar'" 
      :user="user"
    />
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    user: {
      type: Object,
      required: true,
      default: {},
    },
    mode: {
      type: String,
      required: false,
      default: 'sidebar'
    },
  },
};
</script>

<style lang="scss" scoped src="./ProfileCard.scss" />
