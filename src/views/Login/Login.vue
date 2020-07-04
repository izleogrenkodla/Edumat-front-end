<template>
  <main class="login__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="login__logo--mobile" />
    <div class="login__form__wrapper">
      <login-form purpose="login" @click="step += 1" :step="step">
        <transition name="fade-form" mode="out-in">
          <login-email v-if="step === 0" purpose="login" @blur="user.email = $event" />
          <login-password
            v-else
            name="Pieseł Piesełowski"
            image="https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg"
            @blur="user.password = $event"
            v-bind="user"
          />
        </transition>
      </login-form>
      <router-link to="/" class="login__link" v-if="step === 0">Wróc do strony głownej</router-link>
      <base-button v-else @click="step -= 1" text type="primary" class="login__link">
        Wróć
      </base-button>
    </div>
    <img src="@/assets/images/logo.svg" alt="Edumat" class="login__logo" />
  </main>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    step: 0,
    user: {
      email: '',
      password: '',
    },
    error: null,
  }),
};
</script>
<style lang="scss" scoped src="./Login.scss" />
