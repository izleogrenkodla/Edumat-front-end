<template>
  <main class="login__container container container--medium">
    <div class="login__form-wrapper">
      <login-form
        purpose="login"
        :step="step"
        @submit="handleSubmit"
        :error="errorMessage"
      >
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="login"
            :value="user.email.trim().toLowerCase()"
            @input="user.email = $event"
          />
          <login-password
            v-else
            name="Pieseł Piesełowski"
            image="https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg"
            v-model.trim="user.password"
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
    async handleSubmit(invalid) {
      if (!invalid) {
        if (this.step === 1) {
          await this.$store.dispatch('auth/login', this.user);
          if (this.isError) {
            this.user.password = '';
          } else {
            this.$router.push('/');
          }
        }
        if (this.step < 1) {
          this.step += 1;
          this.$store.dispatch('auth/setUserToLocalStorage', {
            email: this.user.email,
          });
          this.$store.dispatch('auth/deleteStep');
        }
      }
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
<style lang="scss" scoped src="./Login.scss" />
