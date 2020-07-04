<template>
  <div class="login-password">
    <div class="login-password__user">
      <img :src="image" :alt="`${name} - zdjęcie profilowe`" class="login-password__user__image" />
      <div>
        <p class="login-password__user__name">{{ name }}</p>
        <p class="login-password__user__nickname">{{ nickname }}</p>
      </div>
    </div>
    <base-input
      class="login-password__input"
      placeholder="Podaj hasło"
      v-model="password"
      type="password"
      bold
      id="password"
      name="password"
    />
    <div class="login-password__buttons">
      <base-checkbox type="switch" class="login-password__switch" v-model="rememberPassword">
        Zapamiętaj hasło
      </base-checkbox>
      <base-button text class="login-password__reset" url="odzyskaj-konto">
        Zresetuj hasło
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPassword',
  data: () => ({
    password: '',
    rememberPassword: false,
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    nickname: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./LoginPassword.scss" />
