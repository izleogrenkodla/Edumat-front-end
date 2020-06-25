<template>
  <form class="login-form">
    <h1 class="login-form__header">{{ header }}</h1>
    <p>
      {{ text }} <a :href="href" class="login-form__link">{{ link }}</a>
    </p>
    <base-input
      v-model="input"
      placeholder="Podaj adres email"
      rules="required|email"
      class="login-form__input"
      name="email"
    />
    <p class="login-form__or">lub</p>
    <base-button outline class="login-form__social">
      <img src="@/assets/icons/google.svg" alt="Google" />
      Użyj konta Google
    </base-button>
    <base-button outline class="login-form__social">
      <img src="@/assets/icons/facebook.svg" alt="Facebook" />
      Użyj konta Facebook
    </base-button>
    <base-button outline class="login-form__submit">
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
  },
  computed: {
    header() {
      return this.purpose === 'login' ? 'Zaloguj się' : 'Zarejestruj się';
    },
    text() {
      return this.purpose === 'login' ? 'Nie masz konta?' : 'Masz już konto?';
    },
    href() {
      return this.purpose === 'login' ? '/#/rejestracja' : '/#/logowanie';
    },
    link() {
      return this.purpose === 'login' ? 'Utwórz konto' : 'Zaloguj się';
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped src="./LoginForm.scss" />
