<template>
  <main class="registration__container container container--medium">
    <div class="registration__form-wrapper">
      <transition name="fade-form">
        <p class="registration__error" v-if="error">
          {{ error }}
        </p>
      </transition>
      <login-form
        purpose="registration"
        :step="step"
        v-bind="user"
        :isError="genderError || educationError"
        @submit="handleSubmit"
      >
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="registration"
            v-bind="user"
            v-model="user.email"
          />
          <register-name
            v-else-if="step === 1"
            v-bind="user"
            @name="user.name = $event"
            @education="user.education = $event"
            @gender="user.gender = $event"
            :educationError="educationError"
            :genderError="genderError"
          />
          <register-image
            v-else-if="step === 2"
            v-bind="user"
            v-model="user.picture"
          />
          <register-password
            v-else-if="step === 3"
            v-bind="user"
            @password="user.password = $event"
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
        verificationCode: localStorageUser?.verificationCode || ['', '', '', '', '', ''],
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
        case 3: {
          const register = async () => {
            try {
              await registerUser(this.user);
              this.error = '';
              this.step += 1;
            } catch (error) {
              this.error = error.message;
              this.user.password = '';
            }
          };
          register();
          break;
        }
        case 4:
          if (this.user.verificationCode.length === 6) {
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
          break;
        default:
          break;
      }
    },
    handleGoBack() {
      this.step -= 1;
      this.error = '';
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
