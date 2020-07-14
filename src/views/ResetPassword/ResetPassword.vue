<template>
  <main class="reset-password__container container container--medium">
    <div class="reset-password__form__wrapper">
      <login-form purpose="resetPassword" :step="step" @submit="handleSubmit">
        <transition name="fade-form" mode="out-in">
          <reset-password-email v-if="step === 0" v-model.trim="user.email" />
          <verification-code
            v-if="step === 1"
            v-bind="user"
            v-model="verificationCode"
          />
        </transition>
      </login-form>
      <router-link to="/" class="reset-password__link" v-if="step === 0">
        Wróc do strony głownej
      </router-link>
      <base-button
        v-else
        @click="step -= 1"
        text
        type="primary"
        class="reset-password__link"
      >
        Wróć
      </base-button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ResetPassword',
  data: () => ({
    step: 0,
    user: { email: '' },
    verificationCode: ['', '', '', '', '', ''],
  }),
  methods: {
    handleSubmit() {
      if (this.step < 1) {
        this.step += 1;
      }
    },
  },
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
