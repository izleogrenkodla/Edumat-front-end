<template>
  <main class="registration__container container container--medium">
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
            :educationError="educationError"
            :genderError="genderError"
          />
          <register-image v-else-if="step === 2" @upload="user.picture = $event" v-bind="user" />
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
  </main>
</template>

<script>
import registerUser from '@/API/cognito/registerUser';
import confirmUser from '@/API/cognito/confirmUser';
import { mapState } from 'vuex';

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
      picture: '',
      verificationCode: [],
    },
    unauthenticatedUser: {},
    educationError: false,
    genderError: false,
    isError: false,
    error: '',
  }),
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
    }),
  },
  methods: {
    handleClick() {
      const {
        email, name, gender, education, picture, password, verificationCode,
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
          } else {
            if (gender === '') {
              this.genderError = true;
            }
            if (education === '') {
              this.educationError = true;
            }
          }
          break;
        case 2:
          if (picture) {
            this.step += 1;
          }
          break;
        case 3:
          if (password && !this.isError) {
            this.step += 1;
            registerUser(this.user)
              .then((user) => {
                this.unauthenticatedUser = user;
              })
              .catch((error) => {
                this.error = error.message;
              });
          }
          break;
        case 4:
          if (verificationCode.length === 6) {
            this.step += 1;
            confirmUser(this.user)
              .then(() => this.$router.push('logowanie'))
              .catch((err) => console.log(err));
          }
          break;
        default:
          break;
      }
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
