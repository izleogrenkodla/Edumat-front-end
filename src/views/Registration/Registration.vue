<template>
  <main class="registration__container container container--medium">
    <div class="registration__form-wrapper">
      <login-form
        purpose="registration"
        :step="step"
        v-bind="user"
        :isError="genderError || educationError"
        :error="errorMessage"
        @submit="handleSubmit"
      >
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="registration"
            v-bind="user"
            v-model.trim="user.email"
          />
          <register-name
            v-else-if="step === 1"
            v-bind="user"
            @name="user.name = $event"
            @education="user.education = $event"
            @gender="user.gender = $event"
            :educationError="educationError"
            :genderError="genderError"
            @submit="handleSubmit"
          />
          <register-image
            v-else-if="step === 2"
            v-bind="user"
            v-model="user.picture"
          />
          <register-password
            v-else-if="step === 3"
            v-bind="user"
            @password="user.password = $event.trim()"
            @checkbox="terms = $event"
            :terms="terms"
          />
          <verification-code
            v-else-if="step === 4"
            v-bind="user"
            v-model="user.verificationCode"
          />
        </transition>
      </login-form>
      <router-link to="/" class="registration__link" v-if="step === 0">
        Wróc do strony głownej
      </router-link>
      <base-button
        v-else
        @click="handleGoBack"
        text
        type="primary"
        class="registration__link"
      >
        Wróć
      </base-button>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Registration',
  data: () => {
    const localStorageUser = JSON.parse(
      localStorage.getItem('userRegistration'),
    );
    return {
      step: parseInt(localStorage.getItem('registrationStep'), 10) || 0,
      user: {
        email: localStorageUser?.email || '',
        password: '',
        name: localStorageUser?.name || '',
        gender: localStorageUser?.gender || '',
        education: localStorageUser?.education || '',
        picture: localStorageUser?.picture || '',
        verificationCode: localStorageUser?.verificationCode || ['', '', '', '', '', ''],
      },
      unauthenticatedUser: {},
      educationError: false,
      genderError: false,
      terms: false,
    };
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
      isError: (state) => state.auth.error,
      errorMessage: (state) => state.auth.errorMessage,
    }),
  },
  methods: {
    async handleSubmit(invalid) {
      this.$store.dispatch('auth/setUserToLocalStorage', this.user);
      if (!invalid) {
        switch (this.step) {
          case 0:
            this.step += 1;
            break;
          case 1: {
            const { gender, education } = this.user;
            this.genderError = !gender;
            this.educationError = !education;
            if (!this.genderError && !this.educationError) {
              this.step += 1;
            }
            break;
          }
          case 2:
            this.step += 1;
            break;
          case 3:
            await this.$store.dispatch('auth/register', this.user);
            if (this.isError) {
              this.user.password = '';
            } else {
              this.step += 1;
            }
            break;
          case 4:
            this.$store.dispatch('auth/confirm', this.user);
            break;
          default:
            break;
        }
      }
    },
    handleGoBack() {
      this.step -= 1;
    },
  },
  watch: {
    step() {
      this.$store.dispatch('auth/setStep', this.step);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.isLogged) {
        next('/');
      } else {
        vm.$store.dispatch('auth/deleteError');
        next();
      }
    });
  },
};
</script>
<style lang="scss" scoped src="./Registration.scss" />
