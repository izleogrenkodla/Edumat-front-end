<template>
  <main class="registration__container container container--medium">
    <img src="@/assets/images/mobile-logo.svg" alt="Edumat" class="registration__logo--mobile" />
    <div class="registration__form__wrapper">
      <login-form @click="step += 1" purpose="registration" :step="step" v-bind="user">
        <transition name="fade-form" mode="out-in">
          <login-email
            v-if="step === 0"
            purpose="registration"
            v-bind="user"
            @blur="user.email = $event"
          />
          <register-name
            v-else-if="step === 1"
            v-bind="user"
            @blur="user.name = $event"
            @select="user.education = $event"
            @gender="user.gender = $event"
          />
          <register-image v-else-if="step === 2" @upload="user.image = $event" v-bind="user" />
          <register-password v-else-if="step === 3" v-bind="user" @blur="user.password = $event" />
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
    },
  }),
};
</script>
<style lang="scss" scoped src="./Registration.scss" />
