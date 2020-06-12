<template>
  <div class="base-dropdown" @keyup.esc="close">
    <button
      type="button"
      class="base-dropdown__button"
      :class="[
        grayBackground ? 'base-dropdown__button--gray' : '',
        isActive ? 'base-dropdown__button--active' : '',
        hasBorder ? 'base-dropdown__button--bordered' : '',
        listOnTop && isActive ? 'base-dropdown__button--active--on-top' : ''
      ]"
      @click="(isActive = !isActive), $emit('click')"
      aria-controls="base-dropdown__content"
      :aria-label="helpfulText"
      :title="helpfulText"
      :aria-expanded="isActive ? 'true' : 'false'"
    >
      <template v-if="hasHeaderSlot">
        <slot name="header"></slot>
      </template>
      <template v-else>
        {{ text }}
      </template>
      <svg
        v-if="hasArrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16.944 9.865"
        class="base-dropdown__arrow"
        :class="bigArrow ? 'base-dropdown__arrow--big' : ''"
        :style="{ transform }"
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
        :class="[
          listOnTop ? 'base-dropdown__content--on-top' : '',
          accordion ? 'base-dropdown__content--accordion' : '',
          accordion && isActive ? 'base-dropdown__content--accordion--active' : ''
        ]"
        v-if="(isActive && hasSlot) || accordion"
        aria-label="Kontent listy"
      >
        <slot name="items"></slot>
      </ul>
      <ul
        class="base-dropdown__content"
        v-else-if="isActive && !hasSlot"
        aria-label="Kontent listy"
      >
        <base-dropdown-item @click="close()">
          No content
        </base-dropdown-item>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',
  provide() {
    return {
      dropdown: this,
    };
  },
  data: () => ({
    activeOption: null,
    isActive: false,
  }),
  props: {
    text: {
      type: String,
      required: false,
      default: 'Select',
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
    hasArrow: {
      type: Boolean,
      required: false,
      default: true,
    },
    helpfulText: {
      type: String,
      required: false,
      default: 'Otwórz listę',
    },
    bigArrow: {
      type: Boolean,
      required: false,
      default: false,
    },
    listOnTop: {
      type: Boolean,
      required: false,
      default: false,
    },
    accordion: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    hasSlot() {
      if (this.$slots.items) {
        return this.$slots.items.length > 0;
      }

      return false;
    },
    hasHeaderSlot() {
      if (this.$slots) {
        if (this.$slots.header) {
          return true;
        }
      }

      return false;
    },
    transform() {
      if (this.bigArrow) {
        if (this.isActive) {
          return 'rotate(0deg)';
        }
        return 'rotate(-90deg)';
      }

      if (this.isActive) {
        return 'rotate(180deg)';
      }
      return 'rotate(0deg)';
    },
  },
  methods: {
    close() {
      this.isActive = false;
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

<style lang="scss" src="./BaseDropdown.scss" />
