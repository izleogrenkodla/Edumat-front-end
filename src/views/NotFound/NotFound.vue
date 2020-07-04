<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found__inner">
        <img
          class="not-found__image"
          alt=""
          src="@/assets/ilustrations/calculator.svg"
        />
        <div class="not-found__content">
          <h1 class="not-found__content-heading">
            <span class="not-found__content-heading-span">
              Coś nie działa.
            </span>
            Podobnie, jak tradycyjny system edukacji.
          </h1>
          <p class="not-found__content-text">
            Error 404 może oznaczać, że strona, którą próbujesz otworzyć mogła zostać usunięta lub przeniesiona.
          </p>
          <base-button 
            class="elaboration__header__button" 
            outline 
            title="Wróć na główną"
            url="/"
          >
            Wróć
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped src="./NotFound.scss" />
