<template>
  <div class="dropdown">
    <button
      type="button"
      class="dropdown__active-option dropdown__item"
      @click="isActive = !isActive"
      :style="{
        borderRadius: isActive ? `25px 25px 0 0` : '25px',
        transition: isActive
          ? 'border-radius var(--time)'
          : 'border-radius var(--time) var(--time--short)'
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
    <div class="dropdown__content" :style="{ transform: isActive ? `scaleY(1)` : 'scaleY(0)' }">
      <button
        v-for="item in items"
        :key="item"
        class="dropdown__item"
        type="button"
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
  data() {
    return {
      items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
      activeOption: 'Default option',
      isActive: false,
    };
  },
  methods: {
    handleClick(item) {
      this.activeOption = item;
      this.isActive = false;
    },
  },
};
</script>
<style lang="scss" scoped src="./Dropdown.scss" />
