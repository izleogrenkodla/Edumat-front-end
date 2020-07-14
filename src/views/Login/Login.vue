<template>
  <main class="login__container container container--medium">
    <div class="login__form-wrapper">
      <transition name="fade-form">
        <p class="login__error" v-if="isError">
          {{ errorMessage }}
        </p>
      </transition>
      <login-form purpose="login" :step="step" @submit="handleSubmit">
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="login"
            v-model="user.email"
          />
          <login-password
            v-else
            name="Pieseł Piesełowski"
            image="https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg"
            v-model="user.password"
            v-bind="user"
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
      email: JSON.parse(localStorage.getItem('userRegistration'))?.email || '',
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
    handleSubmit() {
      if (this.step === 1) {
        this.$store.dispatch('auth/login', this.user).then(() => {
          if (this.isError) {
            this.user.password = '';
          }
        });
      }
      if (this.step < 1) {
        this.step += 1;
        localStorage.setItem(
          'userRegistration',
          JSON.stringify({ email: this.user.email }),
        );
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
