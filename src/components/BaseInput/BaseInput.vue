<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="name"
    tag="div"
    class="base-input"
  >
    <label class="base-input__label" :for="name">
      {{ label }}
    </label>
    <input
      :type="type === 'password' ? localType : type"
      :value="value"
      :disabled="disabled"
      :id="name"
      @input="updateValue"
      @change="updateValue"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      class="base-input__inner"
      :class="{ 'base-input__inner--normal-placeholder' : placeholder }"
      :placeholder="placeholder ? placeholder : label"
      autocomplete="off"
    />
    <transition name="fade-form">
      <span class="base-input__error" v-if="errors[0]">
        {{ errors[0] }}
      </span>
    </transition>
  </validation-provider>
</template>

<script>
export default {
  name: 'BaseInput',
  data: () => ({
    localType: 'password',
  }),
  props: {
    value: {
      type: [String, Number],
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    name: {
      type: String,
      required: false,
      default: 'Field',
    },
    rules: {
      type: [String, Object],
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
    changeInputType() {
      switch (this.localType) {
        case 'password': {
          this.localType = 'text';
          break;
        };
        case 'text': {
          this.localType = 'password';
          break;
        };
        default: {
          break;
        };
      };
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseInput.scss" />
