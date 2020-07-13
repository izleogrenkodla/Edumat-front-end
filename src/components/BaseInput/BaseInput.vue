<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="name"
    tag="div"
    class="base-input"
    :vid="vid"
    mode="eager"
  >
    <label v-if="label" class="base-input__label" :for="name">
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
      :class="[
        searchIcon ? 'base-input__inner--with-icon' : '',
        bold ? 'base-input__inner--bold' : ''
      ]"
      :placeholder="placeholder ? placeholder : label"
      autocomplete="off"
      :autofocus="autofocus"
    />
    <svg
      v-if="searchIcon"
      class="base-input__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="21.164"
      height="21.166"
      viewBox="0 0 21.164 21.166"
    >
      <path
        id="Path_311"
        data-name="Path 311"
        d="M20.737,18.669,16.264,14.2A8.969,8.969,0,0,0,8.974,0,8.975,8.975,0,0,0,0,8.974a8.963,8.963,0,0,0,14.194,7.29l4.473,4.474a1.463,1.463,0,0,0,2.069-2.069ZM4.7,13.25a6.048,6.048,0,1,1,4.275,1.771A6.009,6.009,0,0,1,4.7,13.25Z"
        transform="translate(-0.001 0)"
        fill="#d8d8d8"
      />
    </svg>
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
    },
    searchIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    bold: {
      type: Boolean,
      required: false,
      default: false,
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    vid: {
      type: String,
      required: false,
      default: '',
    },
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
        }
        case 'text': {
          this.localType = 'password';
          break;
        }
        default: {
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseInput.scss" />
