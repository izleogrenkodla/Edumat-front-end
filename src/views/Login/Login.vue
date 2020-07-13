<template>
  <main class="login__container container container--medium">
    <div class="login__form-wrapper">
      <transition name="fade-form">
        <p class="login__error" v-if="isError">
          {{ errorMessage }}
        </p>
      </transition>
      <login-form
        purpose="login"
        @click="handleClick"
        :step="step"
        :isError="isError"
        @submit="handleClick"
      >
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="login"
            @input="user.email = $event"
            @error="isError = true"
            @deleteError="isError = false"
          />
          <login-password
            v-else
            name="Pieseł Piesełowski"
            image="https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg"
            @input="user.password = $event"
            v-bind="user"
            @error="isError = true"
            @deleteError="isError = false"
          />
        </transition>
      </login-form>
      <router-link to="/" class="login__link" v-if="step === 0">
        Wróc do strony głownej
      </router-link>
      <base-button
        v-else
        @click="step -= 1"
        text
        type="primary"
        class="login__link"
      >
        Wróć
      </base-button>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    step: 0,
    user: {
      email: JSON.parse(localStorage.getItem('userRegistration')).email || '',
      password: '',
    },
  }),
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
      isError: (state) => state.auth.error,
      errorMessage: (state) => state.auth.errorMessage,
    }),
  },
  methods: {
    handleClick() {
      const { email, password } = this.user;

      switch (this.step) {
        case 0: {
          email && !this.isError ? (this.step += 1) : false;
          break;
        }
        case 1: {
          if (password) {
            this.$store.dispatch('auth/login', { email, password });
          }
          break;
        }
        default: {
          break;
        }
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
<style lang="scss" scoped src="./Login.scss" />
