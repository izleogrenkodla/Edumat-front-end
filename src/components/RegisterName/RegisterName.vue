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
      @blur="$emit('blur', name)"
      autofocus
    />
    <base-dropdown hasBorder class="register-name__dropdown">
      <template v-slot:header>
        <span :class="classes">{{ school }}</span>
      </template>
      <template v-slot:items>
        <base-dropdown-item>
          <base-button
            @click="school = 'Szkoła podstawowa'"
            title="Szkoła podstawowa"
            aria-label="Szkoła podstawowa"
            class="register-name__button"
            text
          >
            Szkoła podstawowa
          </base-button></base-dropdown-item
        >
        <base-dropdown-item>
          <base-button
            @click="school = 'Liceum'"
            title="Liceum"
            aria-label="Liceum"
            class="register-name__button"
            text
          >
            Liceum
          </base-button></base-dropdown-item
        >
      </template>
    </base-dropdown>
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
  </div>
</template>

<script>
export default {
  name: 'RegisterName',
  data: () => ({
    activeTab: null,
    name: '',
    school: 'Szkoła',
  }),
  computed: {
    classes() {
      return this.school === 'Szkoła'
        ? 'register-name__dropdown__option--default'
        : 'register-name__dropdown__option';
    },
  },
  methods: {
    handleClick(event) {
      this.activeTab = event;
      this.$emit('gender', event);
    },
  },
  watch: {
    school(school) {
      this.$emit('select', school);
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
