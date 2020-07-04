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
        autofocus
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
        <base-button size="small">
          Default
        </base-button>
        <base-button type="primary" size="small">
          Default primary
        </base-button>
        <base-button type="secondary" size="small">
          Default secondary
        </base-button>
        <base-button outline size="small">
          Outline default
        </base-button>
        <base-button type="primary" outline size="small">
          Outline primary
        </base-button>
        <base-button type="secondary" outline size="small">
          Outline secondary
        </base-button>
        <base-button text size="small">
          Text default
        </base-button>
        <base-button type="primary" text size="small">
          Text primary
        </base-button>
        <base-button type="secondary" text size="small">
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
        <base-button type="primary">
          Default primary
        </base-button>
        <base-button type="secondary">
          Default secondary
        </base-button>
        <base-button outline>
          Outline default
        </base-button>
        <base-button type="primary" outline>
          Outline primary
        </base-button>
        <base-button type="secondary" outline>
          Outline secondary
        </base-button>
        <base-button text>
          Text default
        </base-button>
        <base-button type="primary" text>
          Text primary
        </base-button>
        <base-button type="secondary" text>
          Text secondary
        </base-button>
      </div>
    </div>
    <div class="components__row">
      <h2 class="components__heading">Large buttons</h2>
      <div class="components__listing">
        <base-button size="big">
          Default
        </base-button>
        <base-button type="primary" size="big">
          Default primary
        </base-button>
        <base-button type="secondary" size="big">
          Default secondary
        </base-button>
        <base-button outline size="big">
          Outline default
        </base-button>
        <base-button type="primary" outline size="big">
          Outline primary
        </base-button>
        <base-button type="secondary" outline size="big">
          Outline secondary
        </base-button>
        <base-button text size="big">
          Text default
        </base-button>
        <base-button type="primary" text size="big">
          Text primary
        </base-button>
        <base-button type="secondary" text size="big">
          Text secondary
        </base-button>
      </div>
      <div class="components__row components__row--white-buttons">
        <h2 class="components__heading">White buttons</h2>
        <base-button white>
          Default white
        </base-button>
        <base-button outline white>
          Outline white
        </base-button>
        <base-button text white>
          Text white
        </base-button>
      </div>
      <div class="components__row components__row--dropdowns">
        <h2 class="components__heading">Dropdown</h2>
        <base-dropdown text="Normal version!" helpfulText="Normalna lista">
          <template v-slot:items>
            <base-dropdown-item>
              siema!
            </base-dropdown-item>
            <base-dropdown-item>
              siema!!
            </base-dropdown-item>
            <base-dropdown-item>
              siema!!!
            </base-dropdown-item>
          </template>
        </base-dropdown>
        <base-dropdown text="Empty!" helpfulText="Pusta lista" />
        <base-dropdown text="Gray version!" grayBackground helpfulText="Szara lista">
          <template v-slot:items>
            <base-dropdown-item>
              siema!
            </base-dropdown-item>
            <base-dropdown-item>
              siema!!
            </base-dropdown-item>
            <base-dropdown-item>
              siema!!!
            </base-dropdown-item>
          </template>
        </base-dropdown>
        <base-dropdown text="with border!" hasBorder helpfulText="Ramkowa lista">
          <template v-slot:items>
            <base-dropdown-item>
              siema!
            </base-dropdown-item>
            <base-dropdown-item>
              siema!!
            </base-dropdown-item>
            <base-dropdown-item>
              siema!!!
            </base-dropdown-item>
          </template>
        </base-dropdown>
      </div>
    </div>
    <div class="components__row">
      <h2 class="components__heading">Tabs</h2>
      <base-tabs :data="tabsData" :perRow="3" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Tabs align left</h2>
      <base-tabs :data="tabsData" :perRow="3" align="left" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Tabs align right</h2>
      <base-tabs :data="tabsData" :perRow="3" align="right" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Toggle switch with text</h2>
      <base-checkbox type="switch" v-model="checkboxChecked">
        Toogle switch
      </base-checkbox>
    </div>
    <div class="components__row">
      <h2 class="components__heading">Toggle switch without text</h2>
      <base-checkbox type="switch" v-model="checkboxChecked2" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Large Toggle switch without text</h2>
      <base-checkbox type="switch" size="big" v-model="checkboxChecked3" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Required checkbox with text</h2>
      <base-checkbox type="checkbox" required v-model="checkboxChecked4">
        Checkbox with text
      </base-checkbox>
    </div>
    <div class="components__row">
      <h2 class="components__heading">Checkbox without text</h2>
      <base-checkbox type="checkbox" v-model="checkboxChecked5" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Large Checkbox without text</h2>
      <base-checkbox type="checkbox" size="big" v-model="checkboxChecked6" />
    </div>
    <div class="components__row">
      <h2 class="components__heading">Radio</h2>
      <base-radio name="components" v-model="radioChecked" radioValue="1">Radio 1</base-radio>
      <base-radio name="components" v-model="radioChecked" radioValue="2">Radio 2</base-radio>
      <base-radio name="components" v-model="radioChecked" radioValue="3" size="big">
        Big Radio 3
      </base-radio>
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
    dropdownItems: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
    tabsData: ['Tab 1', 'Tab 2', 'Tab 3'],
    checkboxChecked: false,
    checkboxChecked2: false,
    checkboxChecked3: false,
    checkboxChecked4: false,
    checkboxChecked5: false,
    checkboxChecked6: false,
    radioChecked: '2',
  }),
};
</script>

<style lang="scss">
.components {
  margin: 0 auto;
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

    &--dropdowns {
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 2rem;

      .components__heading {
        width: 100%;
      }

      & > div {
        margin: 0 1rem 8rem 1rem;
      }
    }
    &--white-buttons {
      background-color: var(--text-color);
      padding: 30px;
      h2 {
        color: #fff;
      }
      & > * {
        margin: 0 1rem 1rem 0;
      }
    }
  }

  &__input {
    margin: 0 0 2rem 0;
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
  &__gray {
    background-color: #f5f5f5;
    width: 100%;
    height: 500px;
    padding: 50px;
  }
}
</style>
