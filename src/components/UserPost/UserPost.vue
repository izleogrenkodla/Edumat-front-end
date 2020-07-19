<template>
  <section class="section user-post">
    <span v-if="purpose === 'question'" class="user-post__line"/>
    <div class="user-post__status">
      <span class="user-post__time" v-if="purpose !== 'answer'">{{ timeAgo }}</span>
      <img
        v-if="post.verified"
        class="user-post__verified"
        src="/img/icons/white-check.svg"
        alt="Zweryfikowana odpowiedź"
        title="Zweryfikowana odpowiedź"
      />
    </div>
    <div class="user-post__flex">
      <div class="user-post__author">
        <img
          class="user-post__avatar"
          :src="post.authorPicture"
          alt="Avatar użytkownika"
          :title="post.authorName"
        />
        <p class="user-post__author-name">{{ post.authorName }}</p>
        <p class="user-post__date">{{ post.date }}</p>
        <p class="user-post__educational-stage" v-if="post.educationalStage">
          {{ post.educationalStage }}
        </p>
      </div>
      <button class="user-post__options">
        <span class="user-post__circle"></span>
        <span class="user-post__circle"></span>
        <span class="user-post__circle"></span>
      </button>
    </div>
    <p v-katex:auto class="user-post__content">
      {{ post.content }}
    </p>
    <div class="user-post__flex">
      <div class="user-post__topic" v-if="post.category">
        <img
          :src="`/img/math-symbols/${post.category}.svg`"
          :alt="post.category"
          class="user-post__topic-image"
        />
        <p class="user-post__topic-name">{{ post.category }}</p>
      </div>
      <base-button
        outline
        class="user-post__answer"
        :url="`pytanie/${post.id}`"
        v-if="purpose === 'social'"
      >
        Odpowiedź
      </base-button>
      <button class="user-post__likes" v-if="post.likes">
        <img src="/img/icons/like.svg" alt="Kciuk w górę" />
        <span>{{ post.likes.length }}</span>
      </button>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
import moment from 'moment';

moment.locale('pl');
Vue.use(VueKatex);
export default {
  name: 'Answer',
  props: {
    post: {
      type: Object,
      required: true,
    },
    purpose: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    timeAgo() {
      return moment(this.post.date, 'DD.MM.YYYY').fromNow();
    },
    categoryImage() {
      return '/img/math-symbols/całka.svg';
    },
  },
};
</script>
<style lang="scss" scoped src="./UserPost.scss" />
