<template>
  <div class="register-image">
    <h2 class="register-image__file-upload">
      Wybierz lub
      <label for="image" class="register-image__file-upload__label">
        Dodaj fotę
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        class="register-image__file-upload__input"
        @change="handleUpload"
      />
    </h2>
    <hooper
      infiniteScroll
      centerMode
      trimWhiteSpace
      ref="hooper"
      @slide="handleSlide"
      :initialSlide="initialSlide"
      :wheelControl="false"
    >
      <slide>
        <img
          src="/img/faces/boy.svg"
          alt="Domyślne zdjęcie profilowe - chłopak"
          class="register-image__face"
        />
      </slide>
      <slide>
        <img
          src="/img/faces/girl.svg"
          alt="Domyślne zdjęcie profilowe - dziewczyna"
          class="register-image__face"
        />
      </slide>
      <slide v-if="userImage">
        <img
          :src="userImage"
          alt="Zdjęcie profilowe użytkownika"
          class="register-image__face"
        />
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'RegisterImage',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      image: JSON.parse(localStorage.getItem('userRegistration'))?.picture || '',
      userImage: '',
    };
  },
  props: {
    gender: {
      type: String,
      required: false,
      default: 'man',
    },
  },
  computed: {
    initialSlide() {
      const picture = JSON.parse(localStorage.getItem('userRegistration'))?.picture;
      if (picture) {
        if (picture === '/img/faces/boy.svg') {
          return 0;
        }
        if (picture === '/img/faces/girl.svg') {
          return 1;
        }
      } else {
        if (this.gender === 'man') {
          return 0;
        }
        return 1;
      }
      return 2;
    },
  },
  methods: {
    handleUpload(event) {
      this.userImage = URL.createObjectURL(event.target.files[0]);
      this.image = URL.createObjectURL(event.target.files[0]);
      this.$refs.hooper.slideTo(2);
      this.$emit('upload', this.image);
    },
    handleSlide({ currentSlide }) {
      if (!this.userImage) {
        if (currentSlide === 1 || currentSlide === -1) {
          this.image = '/img/faces/girl.svg';
        } else if (currentSlide === 0 || currentSlide === 2) {
          this.image = '/img/faces/boy.svg';
        }
      } else if (currentSlide === 1) {
        this.image = '/img/faces/girl.svg';
      } else if (currentSlide === 3 || currentSlide === 0) {
        this.image = '/img/faces/boy.svg';
      } else if (currentSlide === 2 || currentSlide === -1) {
        this.image = this.userImage;
      }
      this.$emit('upload', this.image);
    },
  },
};
</script>
<style lang="scss" scoped src="./RegisterImage.scss" />
<style lang="scss">
.hooper-navigation {
  button {
    outline: none;
    svg {
      path:last-child {
        fill: var(--acent-color--dark);
        transition: fill var(--time--short);
      }
    }

    &:hover,
    &:focus {
      svg {
        path:last-child {
          fill: var(--text-color);
        }
      }
    }
  }
}
</style>
