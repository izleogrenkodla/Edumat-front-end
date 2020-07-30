<template>
  <main>
    <main-layout>
      <user-header
        :header="user ? `Dzień dobry, ${user.name}` : 'Miło Cię widzieć!'"
        subHeader="Jak Ci mija dzień?"
        textButton="Wróc"
        page="leaderboard"
      />
      <h1 class="header">Ranking</h1>
      <section class="ranking__podium">
        <hooper
          class="ranking__hooper"
          style="height:100%"
          :settings="settings"
        >
          <slide
            v-for="(user, index) in users.slice(0, 3)"
            :key="user.id"
            :index="index"
          >
            <ranking-podium-card
              v-bind="user"
              :place="index + 1"
              :class="index === 0 ? 'ranking__card' : 0"
            />
          </slide>
        </hooper>
      </section>
      <section class="ranking__list">
        <ul>
          <ranking-list-item
            v-for="(user, index) in users.slice(2)"
            :key="user.id"
            v-bind="user"
            :place="index + 4"
          />
        </ul>
      </section>
    </main-layout>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { Hooper, Slide } from 'hooper';

export default {
  name: 'Ranking',
  components: {
    Hooper,
    Slide,
  },
  data: () => ({
    settings: {
      centerMode: true,
      itemsToShow: 1.1,
      trimWhiteSpace: true,
      mouseDrag: false,
      wheelControl: false,
      initialSlide: 1,
      breakpoints: {
        768: {
          itemsToShow: 3,
        },
      },
    },
    users: [
      {
        id: 1,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 2,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 3,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 4,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 5,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 6,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 7,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 8,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 9,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 10,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
      {
        id: 11,
        name: 'Pieseł Piesełowski',
        image:
          'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        badges: [
          {
            id: 1,
            name: 'Kochany matematyk',
            icon: 'heart',
          },
          {
            id: 2,
            name: 'Vip',
            icon: 'test',
          },
          {
            id: 3,
            name: 'Król matmy!',
            icon: 'crown',
          },
        ],
        points: 12345,
        level: 23,
      },
    ],
  }),
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
};
</script>
<style lang="scss" scoped src="./Ranking.scss" />
