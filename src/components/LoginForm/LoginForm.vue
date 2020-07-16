<template>
  <validation-observer slim v-slot="{ handleSubmit, invalid }">
    <form class="login-form" @submit.prevent="handleSubmit(onSubmit(invalid))">
      <span
        v-if="purpose === 'registration'"
        class="login-form__progress"
        :style="{ transform: `scaleX(${step * 0.33333})` }"
      />
      <transition name="fade-form">
        <p class="login-form__error" v-if="error">
          {{ error }}
        </p>
        <p class="login-form__loading" v-if="loading">
          Ładowanie
        </p>
      </transition>
      <div>
        <h1 class="login-form__header">{{ header }}</h1>
        <transition name="fade-form" mode="out-in">
          <p v-if="step < 1">
            {{ text }}
            <router-link :to="href" class="login-form__link">{{
              link
            }}</router-link>
          </p>
        </transition>
      </div>
      <slot></slot>
      <base-button
        outline
        class="login-form__submit"
        :class="invalid || isError ? 'login-form__submit--error' : ''"
        buttonType="submit"
      >
        Dalej
      </base-button>
    </form>
  </validation-observer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoginForm',
  props: {
    purpose: {
      type: String,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    isError: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    ...mapState({
      error: (state) => state.auth.errorMessage,
      loading: (state) => state.auth.loading,
    }),
    header() {
      if (this.purpose === 'login') {
        return 'Zaloguj się';
      }
      if (this.purpose === 'registration') {
        if (this.step === 3) {
          return `Witaj, ${this.name.split(' ')[0]}`;
        }
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
  methods: {
    onSubmit(invalid) {
      this.$emit('submit', invalid);
    },
  },
};
</script>
<style lang="scss" scoped src="./LoginForm.scss" />
