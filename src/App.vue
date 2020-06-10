<template>
  <div id="app">
    <main-navigation />
    <main class="app-page">
      <transition
        name="page-fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </main>
  </div>
</template>
