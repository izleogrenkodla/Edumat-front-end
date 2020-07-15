<template>
  <main class="community__container">
    <main-layout>
      <user-header
        :header="user ? `Dzień dobry, ${user.name}` : 'Miło Cię widzieć!'"
        subHeader="Jak Ci mija dzień?"
        textButton="Zadaj pytanie"
        url="pytania"
      />
      <section class="community__badges section">
        <div class="community__progress">
          <base-badge :badge="user.nextBadge" class="community__badge" />
          <div class="community__wrapper">
            <h1 class="community__header">Odznaka "{{ user.nextBadge.name }}"</h1>
            <div class="community__progress-description">
              <p>{{ user.nextBadge.description }}</p>
              <p>{{ user.nextBadge.progress }}%</p>
            </div>
            <div class="community__progress-bar">
              <span
                class="community__progress-bar community__progress-bar--inner"
                :style="{
                  width: `${user.nextBadge.progress}%`
                }"
              />
            </div>
          </div>
        </div>
      </section>
    </main-layout>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Community',
  data: () => ({}),
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  methods: {},
};
</script>
<style lang="scss" scoped src="./Community.scss" />
