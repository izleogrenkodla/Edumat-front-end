<template>
  <main class="login__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="login__logo--mobile" />
    <div class="login__form__wrapper">
      <login-form purpose="login" />
      <a href="/" class="login__link">Wróc do strony głownej</a>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="login__logo" />
  </main>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({}),
  methods: {},
};
</script>
<style lang="scss" scoped src="./Login.scss" />
