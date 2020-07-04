<template>
  <form class="login-form" @submit.prevent>
    <div>
      <h1 class="login-form__header">{{ header }}</h1>
      <transition name="fade-form" mode="out-in">
        <p v-if="step < 1">
          {{ text }}
          <router-link :to="href" class="login-form__link">{{ link }}</router-link>
        </p>
      </transition>
    </div>
    <slot></slot>
    <base-button outline class="login-form__submit" type="button" @click="$emit('click')">
      Dalej
    </base-button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    input: '',
  }),
  props: {
    purpose: {
      type: String,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  computed: {
    header() {
      if (this.purpose === 'login') {
        return 'Zaloguj się';
      }
      if (this.purpose === 'registration') {
        return 'Zarejestruj się';
      }
      if (this.purpose === 'resetPassword') {
        return 'Odzyskaj konto';
      }
      return '';
    },
    text() {
      if (this.purpose === 'login') {
        return 'Nie masz konta?';
      }
      if (this.purpose === 'registration') {
        return 'Masz już konto?';
      }
      if (this.purpose === 'resetPassword') {
        return 'Masz inny problem?';
      }
      return '';
    },
    href() {
      if (this.purpose === 'login') {
        return '/rejestracja';
      }
      if (this.purpose === 'registration') {
        return '/logowanie';
      }
      if (this.purpose === 'resetPassword') {
        return '/kontakt';
      }
      return '';
    },
    link() {
      if (this.purpose === 'login') {
        return 'Utwórz konto';
      }
      if (this.purpose === 'registration') {
        return 'Zaloguj się';
      }
      if (this.purpose === 'resetPassword') {
        return 'Napisz do nas!';
      }
      return '';
    },
  },
};
</script>
<style lang="scss" scoped src="./LoginForm.scss" />
