<template>
  <div class="register-name">
    <h2 class="register-name__header">Jak się nazywasz?</h2>
    <base-input
      v-model="name"
      placeholder="Imię"
      rules="required"
      class="register-name__input"
      bold
      id="name"
      name="name"
      @input="$emit('input', name)"
      @error="$emit('error')"
      @deleteError="$emit('deleteError')"
      autofocus
    />
    <div class="register-name__dropdown__wrapper">
      <base-dropdown hasBorder class="register-name__dropdown">
        <template v-slot:header>
          <span :class="classes">{{ education }}</span>
        </template>
        <template v-slot:items>
          <base-dropdown-item>
            <base-button
              @click="education = 'Szkoła podstawowa'"
              title="Szkoła podstawowa"
              aria-label="Szkoła podstawowa"
              class="register-name__button"
              text
              type="button"
            >
              Szkoła podstawowa
            </base-button>
          </base-dropdown-item>
          <base-dropdown-item>
            <base-button
              @click="education = 'Liceum'"
              title="Liceum"
              aria-label="Liceum"
              class="register-name__button"
              text
              type="button"
            >
              Liceum
            </base-button>
          </base-dropdown-item>
        </template>
      </base-dropdown>
      <transition name="fade-form" @enter="$emit('error')" @leave="$emit('deleteError')">
        <span class="register-name__error" v-if="educationError && education === 'Szkoła'">
          Wybierz szkołę
        </span>
      </transition>
    </div>
    <div class="register-name__tabs__wrapper">
      <base-tabs
        :data="['Mężczyzna', 'Kobieta', 'Inne']"
        :activeTab="activeTab"
        :perRow="3"
        @click="handleClick"
        class="register-name__tabs"
        size="small"
        highlightFont
        bold
      />
      <transition name="fade-form" @enter="$emit('error')" @leave="$emit('deleteError')">
        <span class="register-name__error" v-if="genderError && activeTab === null">
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
    name: '',
    education: 'Szkoła',
    activeTab: null,
  }),
  props: {
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
      return this.education === 'Szkoła'
        ? 'register-name__dropdown__option--default'
        : 'register-name__dropdown__option';
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
  },
  watch: {
    education(education) {
      this.$emit('select', education);
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
