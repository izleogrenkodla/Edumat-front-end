<template>
  <div class="register-password">
    <div class="register-password__user">
      <img
        :src="image"
        alt="Domyślne zdjęcie profilowe - chłopak"
        class="register-password__user__image"
      />
      <p class="register-password__user__name">{{ email }}</p>
    </div>
    <base-input
      class="register-password__input"
      placeholder="Podaj hasło"
      v-model="password"
      type="password"
      bold
      id="password"
      name="password"
      @blur="checkPassword"
      autofocus
    />
    <base-input
      class="register-password__input"
      placeholder="Powtórz hasło"
      v-model="repeatPassword"
      type="password"
      bold
      id="repeatPassword"
      name="repeatPassword"
      @blur="checkPassword"
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
  props: {
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    checkPassword() {
      if (this.password === this.repeatPassword) {
        this.$emit('blur', this.password);
      } else console.log('object');
    },
  },
  mounted() {
    const input = document.querySelector('[autofocus]');
    if (input) {
      input.focus();
    }
  },
};
</script>
<style lang="scss" scoped src="./RegisterPassword.scss" />
