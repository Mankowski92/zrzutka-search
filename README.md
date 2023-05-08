# Teścik rekrutacyjny

## Jak odpalić projekt
Aby uruchomić projekt startowy, należy pobrać repozytorium, następnie zainstalować node modules'y komendą `make setup`, a na koniec uruchomić serwer node'a za pomocą `make start`. Używamy Makefile'a, żeby mieć pod ręką kluczowe komendy dla projektu. Aplikacja jest teraz dostępna pod adresem http://localhost:3000.

## Co trzeba zrobić
Celem zadania jest stworzenie prostej wyszukiwarki zrzutek. Wyszukiwarka musi zawierać pole tekstowe do wpisania szukanej frazy (`term`) oraz mieć możliwość doładowywania kolejnych wyników (`page`). Do wyszukiwania zrzutek należy wykorzystać endpoint https://zrzutka.pl/api/v2/chips (dokumentacja dostępna pod adresem: https://zrzutka.pl/api/v2/doc). Dane zwrócone z api należy zaprezentować w dowolnej formie, ale tak, aby każdy z wyników zawierał tytuł zrzutki (`subject.pl`), jej zdjęcie okładkowe (`coverUrl`) oraz zebraną kwotę (`balance`) wraz z walutą (`currency`). Dodatkowo po kliknięciu, w któryś wyników powinno nastąpić przekierowanie pod adres https://zrzutka.pl/{url}, gdzie `{url}` to wartość pola `url` zwróconego z Api. Przeglądarka będzie rzucać błędami przy strzelaniu requestów do innej domeny niż `localhost` dlatego trzeba zainstalować wtyczkę np. https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en albo https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en i zezwolić na strzelanie pod adres `zrzutka.pl`.

## Jak przesłać projekt
Najlepiej zrobić swojego forka tego repozytorium i podesłać nam link.
