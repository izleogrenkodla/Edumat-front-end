<template>
  <div v-katex:auto class="elaboration__content">
    <p>
      Można przypuszczać, że zalążki matematyki nie wiązały się z pytaniami, jaki jest sinus kąta
      tworzonego przez drzewo figowca, dom sąsiada i sadzawkę, czy też jaka propozycja funkcji
      upływu wody z dziurawej beczki względem czasu wytrzymuje naukową krytykę. Przede wszystkim
      ludzie potrzebowali wiedzieć, <strong>ile</strong> czegoś jest. Ile monet będzie kosztować
      mnie ten <strong>jeden</strong> bochen chleba, ile dni drogi stąd znajduje się najbliższa
      oaza, ile wynosi areał działki, którą mam szansę nabyć za odpowiednią kwotę. I choć może wraz
      z zagłębianiem się w wir zadań matematycznych zapominamy powoli o takim właśnie znaczeniu,
      interesując się wyłącznie wyliczeniem niewiadomej, to właśnie idea wyrażenia
      <strong>ilości</strong> stoi za symboliką cyfr i liczb, obecnych przecież w każdej działce
      królowej nauk.
    </p>
    <p>
      Zbiór cyfr należałoby rozumieć jako narzędzie pozwalające w konkretnym systemie liczbowym
      wyrażać każdą wielkość. Hmm, co to znaczy? No, spokojnie, może najpierw zaprezentujmy dobrze
      nam znane cyfry. Liczby zaś, cokolwiek się kryje za tym stwierdzeniem, będziemy tworzyć z
      cyfr.
    </p>
    <p>
      Powiedzmy, że ktoś napisał, że Cię lubi. Chciałbyś również pokazać, że zależy Ci na tej
      Osobie, nawet bardziej! Ile razy bardziej? 0 razy bardziej brzmi trochę nienaturalnie. 1 raz
      bardziej, 2, 3 czy 4 razy bardziej to już coś… 9 razy bardziej – to już brzmi przekonywująco.
      A jeśli nam zależy jeszcze bardziej niż 9 razy bardziej? W jaki sposób stworzyć liczbę większą
      niż 9, skoro dysponujemy cyframi tylko od zera do dziewiątki? No i jak ją zapisać?
    </p>
    <p>
      Tu z pomocą przychodzi system liczbowy, którym się posługujemy. (System liczbowy to pewna
      konwencja, wedle której zapisujemy i odczytujemy liczby.) Nasz system liczbowy jest
      dziesiątkowy i pozycyjny. Oznacza to, że jeśli tworzymy liczbę, zapisujemy takie cyfry, jakie
      chcemy, koło siebie w rządku, o, na przykład tak:
    </p>
    \[89702\]
    <p>
      Teraz, by wprowadzić jakąś nomenklaturę, cyfry, do prawej do lewej, otrzymują następujące
      nazwy:
    </p>
    <img
      src="/img/elaboration/cyfry-i-liczby.png"
      alt="Pozycja cyfry"
      class="elaboration__section__image"
    />
    <p>
      Pytanie, jaką liczbę stworzyliśmy? I o co chodzi z tym systemem pozycyjnym i dziesiątkowym?
      Pozycyjność systemu oznacza, że <strong>pozycja</strong> cyfry w liczbie specyfikuje wyrażaną
      przez nią wartość. Dziesiątkowość zaś, że kolejne cyfry oznaczają liczbę wielokrotności
      kolejnych potęg dziesiątki skrywanych na tych pozycjach. Uff, ale czyli co dokładnie?
      Spójrzmy: Najmniejszą wartość ma cyfra jedności, każdorazowo najbardziej po prawej stronie; i
      od niej zaczniemy rozkodowywanie naszej liczby 14732. U nas najbardziej po prawej jest cyfra
      dwa. Oznacza ona… dwa. Ni mniej, ni więcej. Następna w kolejce jest trójka, cyfra dziesiątek.
      Cyfra dziesiątek oznacza, ile dziesiątek dołożymy do naszej liczby. Ile? A no trzy. Mamy więc
      \(3*10\) Kolejna, siódemka, oznacza, jak i nazwa wskazuje, cyfrę setek. Zapisujemy więc:
      siedem setek, czyli \(7*100\). Cztery na miejscu cyfry tysięcy musi więc znaczyć \(4 * 1000\),
      jeśli mamy być konsekwentni, a ostatnia jedynka to skrótowy zapis wyrażenia \(1 * 10000\).
      Czym ostatecznie była nasza liczba? Sumą wszystkich rozkodowań kolejnych cyfr. Innymi
      (matematycznymi!) słowy:
    </p>
    \[14732 = 1 * 10000 + 4 * 1000 + 7 * 100 + 2 * 10 + 3\]
    <p>
      Zauważ, że im dalej przesuwaliśmy się w lewo liczby, tym te cyfry niosły ze sobą większe
      znaczenie, gdyż wyrażały coraz większe wielokrotności dziesiątki. Gdybyś więc chciał napisać,
      że zależy Ci na kimś akurat czternaście tysięcy siedemset trzydzieści dwa razy bardziej,
      napisz po prostu 14732. Oczywiście, możesz również zakodować w tym dziesiątkowym systemie
      pozycyjnym liczbę, która odpowiada mierze Twoich uczuć, skoro już znasz prawidła tego zapisu.
      Pomogą Ci w tym jeszcze te zadania:
    </p>
  </div>
</template>

<script>
export default {
  name: 'CyfryILiczbyInfo',
};
</script>
<style lang="scss" scoped>
.elaboration__section__image {
  margin: auto;
  display: block;
  max-width: 100%;
}
</style>
