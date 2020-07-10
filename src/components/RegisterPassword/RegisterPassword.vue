<template>
  <div class="register-password">
    <div class="register-password__user">
      <img
        :src="picture"
        alt="Domyślne zdjęcie profilowe - chłopak"
        class="register-password__image"
      />
      <p class="register-password__name">{{ email }}</p>
    </div>
    <validation-observer>
      <base-input
        class="register-password__input"
        placeholder="Podaj hasło"
        v-model.trim="password"
        type="password"
        rules="required|confirmed:confirmation|min:6"
        bold
        id="password"
        name="password"
        @input="$emit('input', password)"
        @error="$emit('error')"
        @deleteError="$emit('deleteError')"
        autofocus
      />
      <base-input
        class="register-password__input"
        placeholder="Powtórz hasło"
        v-model.trim="repeatPassword"
        type="password"
        bold
        id="repeatPassword"
        name="repeatPassword"
        @input="$emit('input', repeatPassword)"
        @error="$emit('error')"
        @deleteError="$emit('deleteError')"
        vid="confirmation"
      />
    </validation-observer>
    <base-checkbox class="register-password__checkbox" v-model="terms" required>
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
    terms: false,
  }),
  props: {
    picture: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
