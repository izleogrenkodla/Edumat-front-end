<template>
  <nav class="main-navigation">
    <div class="container main-navigation__container">
      <div class="main-navigation__column">
        <router-link
          to="/"
          aria-label="Edumat - strona główna"
          title="Edumat - strona główna"
          class="main-navigation__link-logo"
        >
          <img
            src="@/assets/images/logo.svg"
            alt="Edumat"
            class="main-navigation__logo"
          />
          <img
            src="@/assets/images/mobile-logo.svg"
            alt="Edumat"
            class="main-navigation__logo main-navigation__logo--mobile"
          />
        </router-link>
      </div>
      <div class="main-navigation__column main-navigation__column--right">
        <base-input
          v-model="search"
          placeholder="Szukaj"
          searchIcon
          class="main-navigation__search"
          @keyup.enter.native="searchQuery()"
        />
        <div
          class="main-navigation__actions"
          v-if="!isLogged"
        >
          <base-button
            outline
            @click="login()"
            title="Zaloguj się"
          >
            Zaloguj się
          </base-button>
          <base-button
            type="primary"
            url="/rejestracja"
            title="Zarejestruj się"
          >
            Zarejestruj się
          </base-button>
        </div>
        <div
          class="main-navigation__actions main-navigation__actions--logged"
          v-else
        >
          <base-dropdown
            helpfulText="Wiadomości"
            class="main-navigation__messages"
            :hasArrow="false"
            @click="openedMessages = true"
          >
            <template slot="header">
              <div class="main-navigation__messages-wrapper">
                <img
                  class="main-navigation__messages-icon"
                  alt=""
                  src="@/assets/icons/message.svg"
                />
                <transition name="dropdown-fade">
                  <span
                    class="main-navigation__messages-label"
                    v-if="!openedMessages"
                  />
                </transition>
              </div>
            </template>
            <template slot="items">
              <base-dropdown-item 
                class="main-navigation__message"
                v-for="message in messages"
                :key="message.id"
              >
                <router-link
                  :to="message.link"
                  :aria-label="message.title"
                  :title="message.title"
                  class="main-navigation__message-link"
                >
                  <img
                    class="main-navigation__message-avatar"
                    alt=""
                    src="/img/sidebar/prof.svg"
                  />
                  <div class="main-navigation__message-content">
                    <h4 class="main-navigation__message-heading">
                      {{ messageHeading(message) }}
                    </h4>
                    <p class="main-navigation__message-text">
                      {{ message.description }}
                    </p>
                  </div>
                </router-link>  
              </base-dropdown-item>
            </template>
          </base-dropdown>
          <base-dropdown
            helpfulText="Ustawienia"
            class="main-navigation__dropdown"
          >
            <span slot="header">
              <div class="main-navigation__user">
                <img
                  class="main-navigation__user-img"
                  alt=""
                  src="https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg"
                />
                <p class="main-navigation__user-name">
                  {{ user.name }}
                </p>
              </div>
            </span>
            <template slot="items" class="xd">
              <base-dropdown-item
                v-for="item in menu"
                :key="item.name"
              >
                <router-link
                  :to="item.link"
                  :title="item.name"
                  :aria-label="item.name"
                  class="main-navigation__dropdown-link"
                >
                  {{ item.name }}
                </router-link>
              </base-dropdown-item>
              <base-dropdown-item divinder>
                <button
                  @click="logout()"
                  title="Wyloguj się"
                  aria-label="Wyloguj się"
                  class="main-navigation__dropdown-link main-navigation__dropdown-link--logout"
                >
                  Wyloguj
                </button>
              </base-dropdown-item>
            </template>
          </base-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainNavigation',
  data: () => ({
    search: '',
    isLogged: false,
    openedMessages: false,
    menu: [
      {
        name: 'Moje konto',
        link: '/moje-konto',
      },
      {
        name: 'Ustawienia konta',
        link: '/ustawienia konta',
      },
      {
        name: 'Abonament',
        link: '/abonament',
        divider: false,
      },
      {
        name: 'Moje pytania',
        link: '/moje-pytania',
        divider: false,
      },
      {
        name: 'Moje odpowiedzi',
        link: '/moje-odpowiedzi',
        divider: false,
      },
      {
        name: 'Moje kursy',
        link: '/moje-Kursy',
      },
    ],
    messages: [
      {
        id: 1,
        category: 'Edumat.pl',
        title: 'Nowy artykuł',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        date: '12.04.2020',
        opened: false,
        author: 'Admin Adminowski',
        authorAvatar: 'prof',
        link: '/'
      },
      {
        id: 2,
        category: 'Edumat.pl',
        title: 'Nowe opcje!',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        date: '21.03.2020',
        opened: false,
        author: 'Admin Adminowski',
        authorAvatar: 'prof',
        link: '/'
      },
      {
        id: 3,
        category: 'Edumat.pl',
        title: 'Gotowy na konkurs?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        date: '01.01.2020',
        opened: false,
        author: 'Admin Adminowski',
        authorAvatar: 'prof',
        link: '/'
      },
    ],
  }),
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    messageHeading(message) {
      return `${ message.category } | ${ message.title } • ${ message.date }`
    },
    searchQuery() {
      this.$router.push('/wyniki-wyszukiwania');
    },
    login() {
      this.isLogged = true;
      this.$store.dispatch('auth/login');
    },
    logout() {
      this.isLogged = false;
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>

<style lang="scss" src="./MainNavigation.scss" />
