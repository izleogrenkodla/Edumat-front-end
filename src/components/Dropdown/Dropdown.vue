<template>
  <div class="dropdown" @keyup.esc="close">
    <button
      type="button"
      class="dropdown__active-option dropdown__item"
      @click="isActive = !isActive"
      :style="{
        borderRadius: isActive ? `25px 25px 0 0` : '25px',
      }"
    >
      {{ activeOption }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.944"
        height="9.865"
        class="dropdown__arrow"
        :style="{ transform: isActive ? `scaleY(-1)` : 'scaleY(1)' }"
      >
        <g transform="rotate(90 8.472 8.472)" fill="#131330">
          <rect width="11.661" height="2.29" rx="1.145" transform="rotate(135 3.13 6.393)" />
          <rect width="11.661" height="2.29" rx="1.145" transform="rotate(45 .81 1.956)" />
        </g>
      </svg>
    </button>
    <div class="dropdown__content" :style="{ opacity: isActive ? 1 : 0 }">
      <button
        v-for="item in items"
        :key="item"
        class="dropdown__item"
        type="button"
        :disabled="!isActive"
        @click="handleClick(item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data: () => ({
    activeOption: 'Default option',
    isActive: false,
  }),
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
  props: {
    items: {
      type: Array,
      required: true,
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
<style lang="scss" scoped src="./Dropdown.scss" />
