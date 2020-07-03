<template>
  <div class="register-image">
    <h2 class="register-image__file-upload">
      Wybierz lub
      <label for="image" class="register-image__file-upload__label">Dodaj fotę</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        class="register-image__file-upload__input"
      />
    </h2>

    <div class="register-image__slider">
      <button @click="changeSlide('previous')" class="register-image__slider__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.147"
          height="17.137"
          viewBox="0 0 11.147 17.137"
          class="register-image__slider__button__arrow register-image__slider__button__arrow--left"
        >
          <path
            id="Path"
            d="M-12,.959-11.069,0-3.7,7.154l-7.366,7.155L-12,13.35l6.378-6.2Z"
            transform="translate(13.414 1.414)"
            fill="var(--acent-color--dark)"
            stroke="var(--acent-color--dark)"
            stroke-width="2"
          />
        </svg>
      </button>
      <ul class="register-image__slider__inner" ref="slider">
        <li ref="boy">
          <img
            src="/img/faces/boy.svg"
            alt="Domyślne zdjęcie profilowe - chłopak"
            class="register-image__slider__face"
            :style="{ transform: `translateX(-${image === 'boy' ? 0 : 100}%)` }"
          />
        </li>
        <li ref="girl">
          <img
            src="/img/faces/girl.svg"
            alt="Domyślne zdjęcie profilowe - dziewczyna"
            class="register-image__slider__face"
            :style="{ transform: `translateX(-${image === 'girl' ? 0 : 100}%)` }"
          />
        </li>
      </ul>

      <button @click="changeSlide('next')" class="register-image__slider__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.147"
          height="17.137"
          viewBox="0 0 11.147 17.137"
          class="register-image__slider__button__arrow"
        >
          <path
            id="Path"
            d="M-12,.959-11.069,0-3.7,7.154l-7.366,7.155L-12,13.35l6.378-6.2Z"
            transform="translate(13.414 1.414)"
            fill="var(--acent-color--dark)"
            stroke="var(--acent-color--dark)"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterImage',
  data: () => ({
    slide: 0,
    isMounted: false,
    image: 'boy',
  }),
  methods: {
    changeSlide(direction) {
      console.log(this.$refs.slider);
      this.slide += direction === 'next' ? 1 : -1;
      const { slider, boy, girl } = this.$refs;
      if (this.image === 'girl') {
        const girlPrime = girl.cloneNode(true);
        if (direction === 'next') {
          girlPrime.style.transform = 'translate(100%)';
          slider.appendChild(girlPrime);
        } else {
          girlPrime.style.transform = 'translate(-100%)';
          slider.insertBefore(girlPrime, girl);
        }
        this.image = 'boy';
      } else {
        const boyPrime = boy.cloneNode(true);
        if (direction === 'next') {
          boyPrime.style.transform = 'translate(100%)';
          slider.appendChild(boyPrime);
        } else {
          boyPrime.style.transform = 'translate(-100%)';
          slider.insertBefore(boyPrime, boy);
        }
        this.image = 'girl';
      }
    },
  },
  computed: {
    translate() {
      if (!this.isMounted) return 0;
      return this.slide;
    },
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>
<style lang="scss" scoped src="./RegisterImage.scss" />
