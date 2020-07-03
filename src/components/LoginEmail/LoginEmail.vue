<template>
  <div class="login-email">
    <base-input
      v-model="email"
      placeholder="Podaj adres email"
      rules="required|email"
      class="login-email__input"
      name="email"
      bold
    />
    <p class="login-email__or">lub</p>
    <base-button outline class="login-email__social">
      <img src="@/assets/icons/google.svg" alt="Google" class="login-email__social__icon" />
      Użyj konta Google
    </base-button>
    <base-button outline class="login-email__social">
      <img src="@/assets/icons/facebook.svg" alt="Facebook" class="login-email__social__icon" />
      Użyj konta Facebook
    </base-button>
  </div>
</template>

<script>
export default {
  name: 'LoginEmail',
  data: () => ({
    email: '',
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
      return this.purpose === 'login' ? '/rejestracja' : '/logowanie';
    },
    link() {
      return this.purpose === 'login' ? 'Utwórz konto' : 'Zaloguj się';
    },
  },
};
</script>
<style lang="scss" scoped src="./LoginEmail.scss" />
