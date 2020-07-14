<template>
  <div class="reset-password-email">
    <validation-observer>
      <base-input
        class="reset-password-email__input"
        placeholder="Twój email"
        :value="value"
        rules="required|confirmed:confirmation|email"
        bold
        id="email"
        name="email"
        @input="$emit('input', $event)"
        autofocus
      />
      <base-input
        class="reset-password-email__input"
        placeholder="Powtórz email"
        v-model.trim="repeatEmail"
        bold
        id="repeatEmail"
        name="repeatEmail"
        vid="confirmation"
      />
    </validation-observer>
    <p class="reset-password-email__hint">
      Tutaj podaj adres adres e-mail na którym zostało utworzone konto
      edumat.pl. W razie problemów napisz do nas na pomoc@edumat.pl.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResetPasswordEmail',
  data: () => ({
    repeatEmail: '',
  }),
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./ResetPasswordEmail.scss" />
