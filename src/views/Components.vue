<template>
  <main class="components container components__container">
    <h1>Components</h1>
    <div class="components__row">
      <h2 class="components__heading">Inputs</h2>
      <base-input
        v-model="input"
        placeholder="Adres email default"
        rules="required|email"
        class="components__input"
      />
      <base-input
        v-model="inputTwo"
        placeholder="Adres email + search icon"
        rules="required|email"
        class="components__input"
        searchIcon
      />
       <base-input
        v-model="inputThree"
        placeholder="Adres email + label"
        rules="required|email"
        label="Adres email"
        class="components__input"
      />
    </div>
    <div class="components__row">
      <h2 class="components__heading">small buttons</h2>
      <div class="components__listing">
        <base-button
          size="small"
        >
          Default
        </base-button>
        <base-button
          type="primary"
          size="small"
        >
          Default primary
        </base-button>
        <base-button
          type="secondary"
          size="small"
        >
          Default secondary
        </base-button>
        <base-button
          outline
          size="small"
        >
          Outline default
        </base-button>
        <base-button
          type="primary"
          outline
          size="small"
        >
          Outline primary
        </base-button>
        <base-button
          type="secondary"
          outline
          size="small"
        >
          Outline secondary
        </base-button>
        <base-button
          text
          size="small"
        >
          Text default
        </base-button>
        <base-button
          type="primary"
          text
          size="small"
        >
          Text primary
        </base-button>
        <base-button
          type="secondary"
          text
          size="small"
        >
          Text secondary
        </base-button>
      </div>
    </div>
    <div class="components__row">
      <h2 class="components__heading">Medium buttons</h2>
      <div class="components__listing">
        <base-button>
          Default
        </base-button>
        <base-button
          type="primary"
        >
          Default primary
        </base-button>
        <base-button
          type="secondary"
        >
          Default secondary
        </base-button>
        <base-button
          outline
        >
          Outline default
        </base-button>
        <base-button
          type="primary"
          outline
        >
          Outline primary
        </base-button>
        <base-button
          type="secondary"
          outline
        >
          Outline secondary
        </base-button>
        <base-button
          text
        >
          Text default
        </base-button>
        <base-button
          type="primary"
          text
        >
          Text primary
        </base-button>
        <base-button
          type="secondary"
          text
        >
          Text secondary
        </base-button>
      </div>
    </div>
    <div class="components__row">
      <h2 class="components__heading">Large buttons</h2>
      <div class="components__listing">
        <base-button
          size="big"
        >
          Default
        </base-button>
        <base-button
          type="primary"
          size="big"
        >
          Default primary
        </base-button>
        <base-button
          type="secondary"
          size="big"
        >
          Default secondary
        </base-button>
        <base-button
          outline
          size="big"
        >
          Outline default
        </base-button>
        <base-button
          type="primary"
          outline
          size="big"
        >
          Outline primary
        </base-button>
        <base-button
          type="secondary"
          outline
          size="big"
        >
          Outline secondary
        </base-button>
        <base-button
          text
          size="big"
        >
          Text default
        </base-button>
        <base-button
          type="primary"
          text
          size="big"
        >
          Text primary
        </base-button>
        <base-button
          type="secondary"
          text
          size="big"
        >
          Text secondary
        </base-button>
      </div>
      <h2 class="components__heading">Tabs</h2>
      <tabs/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Components',
  data: () => ({
    input: '',
    inputTwo: '',
    inputThree: '',
  }),
};
</script>

<style lang="scss">
  .components {
    margin: 150px auto 0 auto;

    h1 {
      font-size: 26px;
      font-weight: bold;
      text-transform: uppercase;
    }

    &__container {
      max-width: 800px;
    }

    &__row {
      margin: 5rem 0;
    }

    &__input {
      margin: 0 0 2rem 0
    }

    &__listing {
      display: flex;
      flex-wrap: wrap;

      & > * {
        margin: 0 1rem 1rem 0;
      }
    }

    &__heading {
      margin: 0 0 2rem 0;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
</style>
