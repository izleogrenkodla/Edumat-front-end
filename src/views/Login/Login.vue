<template>
  <main class="login__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="login__logo--mobile" />
    <div class="login__form__wrapper">
      <login-form purpose="login" />
      <router-link to="/" class="login__link">Wróc do strony głownej</router-link>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="login__logo" />
  </main>
</template>

<script>
export default {
  name: 'Login',
};
</script>
<style lang="scss" scoped src="./Login.scss" />
