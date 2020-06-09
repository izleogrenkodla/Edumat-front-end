<template>
  <main class="elaborations__container container">
    <base-user-header header="Miło Cię widzieć!" subHeader="Zaraz wszystko ogarniesz!" />
    <h1 class="elaborations__header">Opracowania</h1>
    <div class="elaborations__content">
      <base-dropdown
        v-for="topic in topics"
        :key="topic.name"
        bigArrow
        listOnTop
      >
        <template v-slot:button>
          <base-elaboration-topic :topic="topic"/>
        </template>
        <template v-slot:items>
          <base-dropdown-item v-for="lesson in topic.lessons" :key="lesson">
            {{ lesson }}
          </base-dropdown-item>
        </template>
      </base-dropdown>
    </div>
  </main>
</template>

<script>
import { topics } from '@/assets/data/elaboration-topics.json';

export default {
  name: 'Elaborations',
  data: () => ({ topics }),
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

  &__content {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    }
  }
}
</style>
