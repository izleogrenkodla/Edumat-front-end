<template>
  <main class="registration__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="registration__logo--mobile" />
    <div class="registration__form__wrapper">
      <login-form @click="step += 1" purpose="registration" :step="step">
        <transition name="fade-form" mode="out-in">
          <login-email v-if="step === 0" purpose="registration"/>
          <register-name v-else-if="step === 1" />
          <register-image v-else-if="step === 2" />
          <register-password v-else-if="step === 3" />
        </transition>
      </login-form>
      <router-link to="/" class="registration__link" v-if="step === 0"
        >Wróc do strony głownej</router-link
      >
      <base-button v-else @click="step -= 1" text type="primary" class="registration__link">
        Wróć
      </base-button>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="registration__logo" />
  </main>
</template>

<script>
export default {
  name: 'Registration',
  data: () => ({ step: 0 }),
};
</script>
<style lang="scss" scoped src="./Registration.scss" />
