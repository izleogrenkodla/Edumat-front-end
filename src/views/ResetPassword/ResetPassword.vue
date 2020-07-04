<template>
  <main class="reset-password__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="reset-password__logo--mobile" />
    <div class="reset-password__form__wrapper">
      <login-form @click="step += 1" purpose="resetPassword" :step="step">
        <transition name="fade-form" mode="out-in">
          <reset-password-email v-if="step === 0" @input="userData.email = $event" />
          <reset-password-code v-if="step === 1" v-bind="userData" />
        </transition>
      </login-form>
      <router-link to="/" class="reset-password__link" v-if="step === 0">
        Wróc do strony głownej
      </router-link>
      <base-button v-else @click="step -= 1" text type="primary" class="reset-password__link">
        Wróć
      </base-button>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="reset-password__logo" />
  </main>
</template>

<script>
export default {
  name: 'ResetPassword',
  data: () => ({
    step: 0,
    userData: { email: 'asdkjaskl' },
  }),
  watch: {
    step(nextStep) {
      if (nextStep > 1) {
        this.$router.push('/logowanie');
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./ResetPassword.scss" />
