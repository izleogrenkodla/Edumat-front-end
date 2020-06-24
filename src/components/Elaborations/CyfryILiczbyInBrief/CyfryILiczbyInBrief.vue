<template>
  <div v-katex:auto class="elaboration__content">
    <p>
      W matematyce posługujemy się najczęściej cyframi od 0 do 9.>Liczby zapisujemy przy pomocy
      cyfr, zgodnie z przyjętym przez nas systemem. Najpopularniejszy jest dziesiątkowy system
      pozycyjny, w którym kolejne cyfry, czytane od prawej do lewej, oznaczają liczbę wielokrotności
      kolejnych potęg dziesiątki, które wchodzą w skład liczby, np.: \[89702 = 2 + 0 * 10 + 7 * 100
      + 9 * 1000 + 8 * 10000\]
    </p>
    <p>
      W przykładzie dwójka jest cyfrą jedności, zero cyfrą dziesiątek, siódemka cyfrą setek,
      dziewiątka cyfrą tysięcy i ósemka cyfrą dziesiątek tysięcy. Każda cyfra jest liczbą
      (jednocyfrową, zaś nie każda liczba jest cyrfą. Liczbami są więc przykładowo: 0, 4, 8, ale też
      829, 9910 czy 74421.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CyfryILiczbyInBrief',
};
</script>
