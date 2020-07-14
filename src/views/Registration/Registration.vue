<template>
  <main class="registration__container container container--medium">
    <div class="registration__form-wrapper">
      <transition name="fade-form">
        <p class="login__error" v-if="error">
          {{ error }}
        </p>
      </transition>
      <login-form
        purpose="registration"
        :step="step"
        v-bind="user"
        :isError="isError"
        @submit="handleSubmit"
      >
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="registration"
            v-bind="user"
            @input="user.email = $event"
          />
          <register-name
            v-else-if="step === 1"
            v-bind="user"
            @input="user.name = $event"
            @select="user.education = $event"
            @gender="user.gender = $event"
            :educationError="educationError"
            :genderError="genderError"
          />
          <register-image
            v-else-if="step === 2"
            @upload="user.picture = $event"
            v-bind="user"
          />
          <register-password
            v-else-if="step === 3"
            v-bind="user"
            @input="user.password = $event"
            @checkbox="terms = $event"
            :value="terms"
          />
          <verification-code
            v-else-if="step === 4"
            v-bind="user"
            @input="user.verificationCode = $event"
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
import registerUser from '@/API/cognito/registerUser';
import confirmUser from '@/API/cognito/confirmUser';
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
        verificationCode: localStorageUser?.verificationCode || '',
      },
      unauthenticatedUser: {},
      educationError: false,
      genderError: false,
      isError: false,
      terms: false,
      error: '',
    };
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
    }),
  },
  methods: {
    handleSubmit() {
      localStorage.setItem(
        'userRegistration',
        JSON.stringify({ ...this.user, password: '' }),
      );

      if (this.step === 3) {
        const register = async () => {
          try {
            await registerUser(this.user);
          } catch (error) {
            this.error = error.message;
          }
        };
        register();
      }

      if (this.step === 4 && this.user.verificationCode.length === 6) {
        const confirm = async () => {
          try {
            await confirmUser(this.user);
            this.$router.push('logowanie');
          } catch (error) {
            this.error = error.message;
          }
        };
        confirm();
      } else {
        this.isError = true;
      }
      this.step += 1;
    },
    handleGoBack() {
      this.step -= 1;
      this.isError = false;
      this.terms = false;
    },
  },
  watch: {
    step() {
      localStorage.setItem('registrationStep', this.step);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.isLogged) {
        next('/');
      } else {
        next();
      }
    });
  },
};
</script>
<style lang="scss" scoped src="./Registration.scss" />
