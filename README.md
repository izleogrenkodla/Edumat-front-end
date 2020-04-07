# Edumat Front-End

Edumat dokumentacja techniczna

#### Struktura projektu

2.  **Styles** - W tym katalogu znajdują się wszystkie globalne style dla aplikacji (ustawienia typografii, podstawowe klasy do tworzenia layoutu - rzeczy wykorzystywane przez całą aplikacje)
    
3.  **Views** - Katolog zawiera wszystkie widoki/strony aplikacji (oparte o Vue-Router)
    
4.  **API** - Katolog zawiera tzw API Services, będzie to globalny konfigurator dla requestów AJAX do REST API
    
5.  **Router** - Zawiera plik ze wszystkimi importami widoków jak i router guardy etc
    
6.  **Store** - Inaczej Vuex, stan globalny dla aplikacji
    
7.  **Assets** - Miejsce na wszystkie pliki, ikony, elementy graficzne
    
8.  **App.vue** - Główna instancja Vue.js
    
9.  **Main.js** - Inicjowanie aplikacji oraz importowanie/setupowanie globalnych komponentów
    
10.  **RegisterServiceWorker.js** - Ustawienia PWA, potem będzie można zrobić z tego PWA.
    

#### Użyte biblioteki w projekcie

2.  [Axios]([https://github.com/axios/axios](https://github.com/axios/axios) - Zapytania HTTP (AJAX)
    
3.  [Vee-Validate]([https://github.com/logaretm/vee-validate](https://github.com/logaretm/vee-validate) - Walidacja formularzy
    
4.  [Vuex]([https://vuex.vuejs.org/guide/](https://vuex.vuejs.org/guide/) - Implementacja architektury flux, globalny stan aplikacji
    

#### Uruchomienie aplikacji

###### Setup projektu

```

yarn
```

###### Uruchomienie aplikacji

```

yarn serve
```

###### Build aplikacji

```

yarn build
```

###### Uruchomienie testów

```

yarn run test
```

###### Lint

```

yarn run lint
```

###### Testy jednostkowe

```

yarn run test:unit
```