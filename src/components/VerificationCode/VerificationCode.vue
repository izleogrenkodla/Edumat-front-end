<template>
  <div class="verification-code">
    <div class="verification-code__inputs">
      <div
        class="verification-code__input__wrapper"
        v-for="(field, index) in value"
        :key="index"
      >
        <input
          class="verification-code__input"
          maxlength="1"
          type="text"
          :value="value[index]"
          @input="handleChange($event, index)"
          ref="input"
          @paste="handlePaste"
        />
      </div>
    </div>
    <p class="verification-code__hint">
      Tutaj wpisz PIN, który został wysłany Tobie na email {{ email }}. Masz
      problemy z PINem?
      <base-button
        text
        type="primary"
        class="verification-code__button"
        @click="sendMailAgain"
      >
        Wyślij jeszcze raz
      </base-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'VerificationCode',
  props: {
    value: {
      type: Array,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(event, index) {
      this.$emit('input', [...this.value.slice(0, index), event.target.value, ...this.value.slice(index + 1, 6)]);
      if (index < this.$refs.input.length - 1) {
        this.$refs.input[index + 1].focus();
      }
    },
    sendMailAgain() {
      console.log('mail has been sent');
    },
    handlePaste(event) {
      const code = event.clipboardData.getData('text').trim();
      for (let i = 0; i < this.fields.length; i += 1) {
        this.$set(this.fields, i, code[i]);
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./VerificationCode.scss" />
