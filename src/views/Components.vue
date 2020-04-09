<template>
  <main class="components container components__container">
    <h1>Skończone komponenty</h1>
    <div class="components__row">
      <base-input
        v-model="input"
        placeholder="Adres email"
        rules="required|email"
        class="components__input"
      />
       <base-input
        v-model="input"
        placeholder="Adres email + label"
        rules="required|email"
        label="Adres email"
        class="components__input"
      />
    </div>
  </main>
</template>

<script>
const BaseInput = () => import('@/components/BaseInput/BaseInput.vue');

export default {
  name: 'Components',
  data: () => ({
    input: '',
  }),
  components: {
    BaseInput,
  },
};
</script>

<style lang="scss">
  .components {
    margin: 150px auto 0 auto;

    &__container {
      max-width: 600px;
    }

    &__row {
      margin: 3rem 0;
    }

    &__input {
      margin: 0 0 2rem 0
    }
  }
</style>
