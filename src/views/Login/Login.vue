<template>
  <main class="login__container container container--medium">
    <div class="login__form__wrapper">
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
      <router-link to="/" class="login__link" v-if="step === 0">Wróc do strony głownej</router-link>
      <base-button v-else @click="step -= 1" text type="primary" class="login__link">
        Wróć
      </base-button>
    </div>
  </main>
</template>

<script>
import loginUser from '@/API/cognito/loginUser';

export default {
  name: 'Login',
  data: () => ({
    step: 0,
    user: {
      email: '',
      password: '',
    },
    isError: false,
  }),
  methods: {
    handleClick() {
      const { email, password } = this.user;
      switch (this.step) {
        case 0:
          if (email && !this.isError) {
            this.step += 1;
          }
          break;
        case 1:
          if (password) {
            loginUser(email, password)
              .then((res) => {
                const user = res.reduce(
                  (userAccumulator, attribute) => ({
                    ...userAccumulator,
                    [attribute.Name === 'custom:education'
                      ? 'education'
                      : attribute.Name]: attribute.Value,
                  }),
                  {},
                );
                this.$store.dispatch('auth/login', user);
                this.$router.push('/');
              })
              .catch((err) => console.log(err));
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./Login.scss" />
