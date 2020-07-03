<template>
  <form class="login-form" @submit.prevent>
    <div>
      <h1 class="login-form__header">{{ header }}</h1>
      <transition name="fade-form" mode="out-in">
        <p v-if="step < 2">
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
      return this.purpose === 'login' ? 'Zaloguj się' : 'Zarejestruj się';
    },
    text() {
      return this.purpose === 'login' ? 'Nie masz konta?' : 'Masz już konto?';
    },
    href() {
      return this.purpose === 'login' ? '/rejestracja' : '/logowanie';
    },
    link() {
      return this.purpose === 'login' ? 'Utwórz konto' : 'Zaloguj się';
    },
  },
};
</script>
<style lang="scss" scoped src="./LoginForm.scss" />
