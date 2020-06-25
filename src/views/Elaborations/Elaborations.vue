<template>
  <div class="elaborations__container">
    <main-layout>
      <user-header
        header="Miło Cię widzieć!"
        subHeader="Zaraz wszystko ogarniesz!"
      />
      <h1 class="elaborations__header">
        Opracowania
      </h1>
      <div class="elaborations__content">
        <base-accordion
          v-for="topic in topics"
          :key="topic.name"
          :helpfulText="topic.name"
        >
          <template slot="header">
            <elaboration-topic :topic="topic"/>
          </template>
          <template slot="items">
            <base-accordion-item
              v-for="lesson in topic.lessons"
              :key="lesson"
              classes="elaborations__base-accordion-item"
              @click="$router.push(`/opracowanie/${lesson}`)"
            >
              {{ lesson }}
            </base-accordion-item>
          </template>
        </base-accordion>
      </div>
    </main-layout>
  </div>
</template>

<script>
import { topics } from '@/assets/data/elaboration-topics.json';

export default {
  name: 'Elaborations',
  data: () => ({ topics }),
};
</script>
<style lang="scss" scoped src="./Elaborations.scss"/>
