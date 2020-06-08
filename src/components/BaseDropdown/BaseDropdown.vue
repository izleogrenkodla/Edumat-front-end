<template>
  <div 
    class="base-dropdown" 
    @keyup.esc="close"
  >
    <button
      type="button"
      class="base-dropdown__button"
      :class="[
        grayBackground ? 'base-dropdown__button--gray' : '',
        isActive ? 'base-dropdown__button--active' : '',
        hasBorder ? 'base-dropdown__button--bordered' : '',
      ]"
      @click="isActive = !isActive"
    >
      {{ text }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.944"
        height="9.865"
        class="base-dropdown__arrow"
        :style="{ transform: isActive ? `rotate(180deg)` : 'rotate(0)' }"
      >
        <g transform="rotate(90 8.472 8.472)" fill="#131330">
          <rect width="11.661" height="2.29" rx="1.145" transform="rotate(135 3.13 6.393)" />
          <rect width="11.661" height="2.29" rx="1.145" transform="rotate(45 .81 1.956)" />
        </g>
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul 
        class="base-dropdown__content"
        v-if="isActive && hasSlot"
      >
        <slot></slot>
      </ul>
      <base-dropdown-item v-else-if="isActive && !hasSlot">
        No content
      </base-dropdown-item>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',
  data: () => ({
    activeOption: null,
    isActive: false,
  }),
  props: {
    text: {
      type: String,
      required: false,
      default: 'Select'
    },
    grayBackground: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    hasSlot() {
      if (this.$slots.default) {
        return this.$slots.default.length > 0;
      }

      return false;
    }
  },
  methods: {
    close() {
      this.isActive = false;
    },
    handleClick(item) {
      this.activeOption = item;
      this.close();
    },
    handleOutsideClick({ target }) {
      const isClickInside = this.$el.contains(target);

      if (!isClickInside) {
        this.close();
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>

<style lang="scss" scoped src="./BaseDropdown.scss" />
