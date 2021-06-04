# DASHBOARD
 `/` 
 - statystyki dzisiejszych zamowien (zdalnie i lokalnie)
 - liste rezerwacji oraz eventow na dzisiaj

# Widok dsotepnosci stolikow

  `/tables/`
  - wybor daty i godziny
  - tabela z lista rezerwacji oraz wydarzen
    - kazda kolumna = 1 stolik
    - kazdy wiersz = 30min
    - ma przypominac widok tygodnia w kalendarzu googla, gdzie w kolumnach zamiast dni są rozne stoliki
    - po kliknieciu rezerwacji lub eventu, przechodzimy na strone szczegolow
  `/tables/booking/:id`
    - zawiera wszystkie informacje dotyczacych rezerwacji
    - umozliwia edycje i zapisanie zmian
  `/tables/booking/new/`
    - analogicznie do powyzszej bez poczatkowych informacji 
  `/tables/events/:id`
    - analogicznie dla powyzej dla eventow
  `/tables/events/new/`
    - analogicznie do powyzszej, dla eventow, bez poczatkowych informacji

# widok kelenra

  `/waiter/`
    - tabela
      - w wierszach stoliki
      - w kolumnach rozne rodzaje informacji (status, czas od ostaniej aktywnosci)
      - dostepne akcje do dostepnego stolika
  `/waiter/order/new/`
    - nr stoliak (edytowalny)
    - menu
    - opcje wybranego produktu
    - zamowienie (z opcjam i cena)
    - kwota zamownia
  `/waiter/order/:id`
    - jak powyzsza 

# Widok kuchni

  `/kitchen/`
    - lista zamowien w kolejnosci ich zlozenia
    - lista musi zawierac:
      - numer stolika (lub zamowniea zdalengo)
      - pelne informacje dotyczace zamownionych dan
    - na lisicie musi byc mozliwosc oznaczenia zamowienia jako 'zrealizowane'

# logowanie
  `/login/`
  - pola na login i haslo
  - guzik do zalogowania(link do dashboardu)