<template>
  <div class="login-password">
    <div class="login-password__user">
      <img :src="image" :alt="`${name} - zdjęcie profilowe`" class="login-password__user__image" />
      <div>
        <p class="login-password__user__name">{{ name }}</p>
        <p class="login-password__user__nickname">{{ email }}</p>
      </div>
    </div>
    <base-input
      class="login-password__input"
      placeholder="Podaj hasło"
      v-model.trim="password"
      type="password"
      bold
      autofocus
      rules="required"
      id="password"
      name="password"
      @input="$emit('input', password)"
      @error="$emit('error')"
      @deleteError="$emit('deleteError')"
    />
    <div class="login-password__buttons">
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
<style lang="scss" scoped src="./LoginPassword.scss" />
