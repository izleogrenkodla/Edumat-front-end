<template>
  <div class="register-password">
    <div class="register-password__user">
      <div class="register-password__user__circle" />
      <p class="register-password__user__name">pieselowski@gmail.com</p>
    </div>
    <base-input
      class="register-password__input"
      placeholder="Podaj hasło"
      v-model="password"
      type="password"
      bold
      id="password"
      name="password"
    />
    <base-input
      class="register-password__input"
      placeholder="Powtórz hasło"
      v-model="repeatPassword"
      type="password"
      bold
      id="repeatPassword"
      name="repeatPassword"
    />
    <base-checkbox type="switch" class="register-password__switch" v-model="rememberPassword">
      Zapamiętaj hasło
    </base-checkbox>
    <base-checkbox class="register-password__checkbox" v-model="terms">
      <p class="register-password__terms">
        Oświadczam, że zapoznałem się i akceptuję
        <router-link to="/regulamin">Regulamin</router-link> Edumat. Oświadczam, że zapoznałem się z
        <router-link to="/rodo">informacją o danych osobowych w Edumat</router-link>.
      </p>
    </base-checkbox>
  </div>
</template>

<script>
export default {
  name: 'RegisterPassword',
  data: () => ({
    password: '',
    repeatPassword: '',
    rememberPassword: false,
    terms: false,
  }),
};
</script>
<style lang="scss" scoped src="./RegisterPassword.scss" />
