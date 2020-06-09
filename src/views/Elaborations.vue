<template>
  <main class="elaborations__container container">
    <base-user-header
      header="Miło Cię widzieć!"
      subHeader="Zaraz wszystko ogarniesz!"
    ></base-user-header>
    <h1 class="elaborations__header">Opracowania</h1>
    <base-dropdown>
      <template v-slot:button>
        <base-elaboration-topic></base-elaboration-topic>
      </template>
      <template v-slot:items>
        asd
      </template>
    </base-dropdown>
  </main>
</template>

<script>
export default {
  name: 'Elaborations',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.elaborations {
  &__header {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin: 3rem 0;
  }
}
</style>
