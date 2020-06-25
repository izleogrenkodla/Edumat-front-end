<template>
  <main class="registration__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="registration__logo--mobile" />
    <div class="registration__form__wrapper">
      <login-form purpose="registration" />
      <a href="/" class="registration__link">Wróc do strony głownej</a>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="registration__logo" />
  </main>
</template>

<script>
export default {
  name: 'Registration',
  data: () => ({}),
  methods: {},
};
</script>
<style lang="scss" scoped src="./Registration.scss" />
