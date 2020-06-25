<template>
  <div class="category-tile">
    <router-link
      :to="link"
      :aria-label="helpText"
      :title="helpText"
      :class="[
        mode === 'elaboration' ? 'category-tile__link--elaboration' : '',
        mode === 'formula' ? 'category-tile__link--formula' : '',
        mode === 'generator' ? 'category-tile__link--generator' : '',
        mode === 'article' ? 'category-tile__link--article' : '',
      ]"
      class="category-tile__link"
    >
      <figure class="category-tile__icon">
        <img
          class="category-tile__icon-inner"
          alt=""
          :src="`/img/sidebar/${mode}.svg`"
        />
      </figure>
      <p class="category-tile__text">
        <slot></slot>
      </p>
      <img
        class="category-tile__arrow"
        alt=""
        src="/img/sidebar/arrow-right.svg"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CategoryTile',
  props: {
    mode: {
      type: String,
      required: false,
    },
    helpText: {
      type: String,
      required: false,
      default: 'link'
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./CategoryTile.scss" />
