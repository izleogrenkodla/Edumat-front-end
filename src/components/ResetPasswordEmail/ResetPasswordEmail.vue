<template>
  <div class="reset-password-email">
    <base-input
      v-model="email"
      placeholder="Twój email"
      rules="required|email"
      class="reset-password-email__input"
      name="reset-password-email"
      bold
      id="reset-password-email"
      @input="$emit('input', $event)"
    />
    <base-input
      v-model="repeatEmail"
      placeholder="Powtórz email"
      rules="required|email"
      class="reset-password-email__input"
      name="repeatEmail"
      bold
      id="repeatEmail"
      @input="$emit('input', $event)"
    />
    <p class="reset-password-email__hint">
      Tutaj podaj adres adres e-mail na którym zostało utworzone konto edumat.pl. W razie problemów
      napisz do nas na pomoc@edumat.pl.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResetPasswordEmail',
  data: () => ({
    email: '',
    repeatEmail: '',
  }),
};
</script>
<style lang="scss" scoped src="./ResetPasswordEmail.scss" />
