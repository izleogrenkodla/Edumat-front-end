<template>
  <div class="reset-password-code">
    <div class="reset-password-code__inputs">
      <div
        class="reset-password-code__input__wrapper"
        v-for="(field, index) in fields"
        :key="index"
      >
        <input
          class="reset-password-code__input"
          maxlength="1"
          type="text"
          :value="fields[index]"
          @input="handleChange($event, index)"
          ref="input"
        />
      </div>
    </div>
    <p class="reset-password-code__hint">
      Tutaj wpisz PIN, który został wysłany Tobie na email {{email}}. Masz problemy z PINem?
      <base-button text type="primary" class="reset-password-code__button" @click="sendMailAgain">
        Wyślij jeszcze raz
      </base-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResetPasswordCode',
  data: () => ({
    fields: ['', '', '', '', '', ''],
  }),
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(event, index) {
      this.fields[index] = event.target.value;
      if (index < this.$refs.input.length - 1) {
        this.$refs.input[index + 1].focus();
      }
    },
    sendMailAgain() {
      console.log('mail has been sent');
    },
  },
};
</script>
<style lang="scss" scoped src="./ResetPasswordCode.scss" />
