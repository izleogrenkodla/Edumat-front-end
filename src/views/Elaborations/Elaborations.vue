<template>
  <main class="elaborations__container container">
    <user-header header="Miło Cię widzieć!" subHeader="Zaraz wszystko ogarniesz!" />
    <h1 class="elaborations__header">Opracowania</h1>
    <div class="elaborations__content">
      <base-dropdown
        v-for="topic in topics"
        :key="topic.name"
        bigArrow
        listOnTop
      >
        <template v-slot:button>
          <elaboration-topic :topic="topic"/>
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
<style lang="scss" scoped src="./Elaborations.scss"/>
