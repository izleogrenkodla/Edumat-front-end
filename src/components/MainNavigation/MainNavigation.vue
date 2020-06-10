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
            <base-dropdown-item>
              Wiadomość 1
            </base-dropdown-item>
            <base-dropdown-item>
              Wiadomość 2
            </base-dropdown-item>
            <base-dropdown-item>
              Wiadomość 3
            </base-dropdown-item>
            <base-dropdown-item>
              Wiadomość 4
            </base-dropdown-item>
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
                  Pieseł Piesełowski
                </p>
              </div>
            </span>
            <base-dropdown-item>
              Mój profil
            </base-dropdown-item>
            <base-dropdown-item>
              Ranking
            </base-dropdown-item>
            <base-dropdown-item @click="logout()">
              Logout
            </base-dropdown-item>
          </base-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
  data: () => ({
    search: '',
    isLogged: false,
    openedMessages: false,
  }),
  methods: {
    searchQuery() {
      this.$router.push('/wyniki-wyszukiwania');
    },
    login() {
      this.isLogged = true;
    },
    logout() {
      this.isLogged = false;
    },
  },
};
</script>

<style lang="scss" src="./MainNavigation.scss" />
