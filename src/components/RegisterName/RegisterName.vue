<template>
  <div class="register-name">
    <h2 class="register-name__header">Jak się nazywasz?</h2>
    <base-input
      :value="name"
      placeholder="Imię"
      rules="required"
      class="register-name__input"
      bold
      id="name"
      name="name"
      @input="$emit('name', $event)"
      autofocus
    />
    <div class="register-name__dropdown-wrapper">
      <base-dropdown
        hasBorder
        class="register-name__dropdown"
        @keydown="handleKeyDown"
      >
        <template v-slot:header>
          <span :class="classes">{{ education || 'Szkoła' }}</span>
        </template>
        <template v-slot:items>
          <base-dropdown-item>
            <base-button
              @click="$emit('education', 'Szkoła podstawowa')"
              title="Szkoła podstawowa"
              aria-label="Szkoła podstawowa"
              class="register-name__button"
              text
              role="option"
              ref="dropdownItem1"
            >
              Szkoła podstawowa
            </base-button>
          </base-dropdown-item>
          <base-dropdown-item>
            <base-button
              @click="$emit('education', 'Liceum')"
              title="Liceum"
              aria-label="Liceum"
              class="register-name__button"
              text
              role="option"
              ref="dropdownItem2"
            >
              Liceum
            </base-button>
          </base-dropdown-item>
        </template>
      </base-dropdown>
      <transition name="fade-form">
        <span
          class="register-name__error"
          v-if="educationError && education === ''"
        >
          Wybierz szkołę
        </span>
      </transition>
    </div>
    <div class="register-name__tabs-wrapper">
      <base-tabs
        :data="['Mężczyzna', 'Kobieta', 'Inne']"
        :activeTab="activeTab || defaultActiveTab"
        :perRow="3"
        @click="handleClick"
        @keyLeft="handleKeyLeft"
        @keyRight="handleKeyRight"
        @focus="activeTab = activeTab || 0"
        class="register-name__tabs"
        size="small"
        highlightFont
        bold
        role="radio"
      />
      <transition name="fade-form">
        <span
          class="register-name__error"
          v-if="genderError && activeTab === null"
        >
          Wybierz płeć
        </span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterName',
  data: () => ({
    activeTab: null,
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    educationError: {
      type: Boolean,
      required: false,
      default: false,
    },
    genderError: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      return this.education === ''
        ? 'register-name__option--default'
        : 'register-name__option';
    },
    defaultActiveTab() {
      if (this.gender === 'man') {
        return 0;
      }
      if (this.gender === 'woman') {
        return 1;
      }
      if (this.gender === 'other') {
        return 2;
      }
      return null;
    },
  },
  methods: {
    handleClick(event) {
      this.activeTab = event;
      let gender = '';
      if (event === 0) gender = 'man';
      else if (event === 1) gender = 'woman';
      else gender = 'other';
      this.$emit('gender', gender);
    },
    handleKeyLeft() {
      if (this.activeTab <= 0) {
        this.activeTab = 2;
      } else {
        this.activeTab += -1;
      }
    },
    handleKeyRight() {
      if (this.activeTab >= 2) {
        this.activeTab = 0;
      } else {
        this.activeTab += 1;
      }
    },
    handleKeyDown() {
      const dropdownItems = [
        this.$refs.dropdownItem1.$el,
        this.$refs.dropdownItem2.$el,
      ];

      if (document.activeElement === dropdownItems[0]) {
        dropdownItems[1].focus();
      } else {
        dropdownItems[0].focus();
      }
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
<style lang="scss" scoped src="./RegisterName.scss" />
