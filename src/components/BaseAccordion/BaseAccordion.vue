<template>
  <div class="base-accordion" @keyup.esc="close">
    <button
      type="button"
      class="base-accordion__button"
      :class="[isActive ? 'base-accordion__button--active' : '']"
      @click="(isActive = !isActive), $emit('click')"
      aria-controls="base-accordion__content"
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
        class="base-accordion__arrow"
        :class="arrowSize === 'small' ? 'base-accordion__arrow--small' : ''"
        :style="{ transform }"
      >
        <g transform="rotate(90 8.472 8.472)" fill="#131330">
          <rect width="11.661" height="2.29" rx="1.145" transform="rotate(135 3.13 6.393)" />
          <rect width="11.661" height="2.29" rx="1.145" transform="rotate(45 .81 1.956)" />
        </g>
      </svg>
    </button>
    <ul
      class="base-accordion__content"
      :class="[isActive ? 'base-accordion__content--active' : '']"
      :style="{ maxHeight: isActive ? `${listHeight}px` : 0 }"
      v-if="hasSlot"
      aria-label="Kontent listy"
      :aria-hidden="isActive ? 'false' : 'true'"
      ref="list"
    >
      <slot name="items"></slot>
    </ul>
    <ul
      class="base-accordion__content"
      v-else
      aria-label="Kontent listy"
      :aria-hidden="isActive ? 'false' : 'true'"
    >
      <base-accordion-item @click="close()">
        No content
      </base-accordion-item>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseAccordion',
  provide() {
    return {
      accordion: this,
    };
  },
  data: () => ({
    isActive: false,
    listHeight: 0,
  }),
  props: {
    text: {
      type: String,
      required: false,
      default: 'Select',
    },
    hasArrow: {
      type: Boolean,
      required: false,
      default: true,
    },
    arrowSize: {
      type: String,
      required: false,
      default: 'big',
    },
    helpfulText: {
      type: String,
      required: false,
      default: 'Otwórz listę',
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
      if (this.isActive) {
        return 'rotate(0deg)';
      }
      return 'rotate(-90deg)';
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
    // scrollHeight list + padding-top size
    this.listHeight = this.$refs.list.scrollHeight + 35;
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>

<style lang="scss" src="./BaseAccordion.scss" />
