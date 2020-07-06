<template>
  <main class="registration__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="registration__logo--mobile" />
    <div class="registration__form__wrapper">
      <login-form
        @click="handleClick"
        purpose="registration"
        :step="step"
        v-bind="user"
        :isError="isError"
        @submit="handleClick"
      >
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="registration"
            v-bind="user"
            @input="user.email = $event"
            @error="isError = true"
            @deleteError="isError = false"
          />
          <register-name
            v-else-if="step === 1"
            v-bind="user"
            @input="user.name = $event"
            @select="user.education = $event"
            @gender="user.gender = $event"
            @error="isError = true"
            @deleteError="isError = false"
          />
          <register-image v-else-if="step === 2" @upload="user.image = $event" v-bind="user" />
          <register-password
            v-else-if="step === 3"
            v-bind="user"
            @input="user.password = $event"
            @error="isError = true"
            @deleteError="isError = false"
          />
          <verification-code
            v-else-if="step === 4"
            v-bind="user"
            @input="user.verificationCode = $event"
            @error="isError = true"
            @deleteError="isError = false"
          />
        </transition>
      </login-form>
      <router-link to="/" class="registration__link" v-if="step === 0">
        Wróc do strony głownej
      </router-link>
      <base-button v-else @click="step -= 1" text type="primary" class="registration__link">
        Wróć
      </base-button>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="registration__logo" />
  </main>
</template>

<script>
import registerUser from '@/helpers/registerUser';
import confirmUser from '@/helpers/confirmUser';

export default {
  name: 'Registration',
  data: () => ({
    step: 0,
    user: {
      email: '',
      password: '',
      name: '',
      gender: '',
      education: '',
      image: '',
      verificationCode: [],
    },
    isError: false,
  }),
  methods: {
    handleClick() {
      const {
        email, name, gender, education, image, password, verificationCode,
      } = this.user;
      switch (this.step) {
        case 0:
          if (email && !this.isError) {
            this.step += 1;
          }
          break;
        case 1:
          if (name && gender !== '' && education) {
            this.step += 1;
          }
          break;
        case 2:
          if (image) {
            this.step += 1;
          }
          break;
        case 3:
          if (password) {
            this.step += 1;
            registerUser(this.user);
          }
          break;
        case 4:
          if (verificationCode.length === 6) {
            this.step += 1;
            confirmUser(this.user);
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./Registration.scss" />
