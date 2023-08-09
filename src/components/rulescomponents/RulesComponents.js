import React from 'react';
import { link } from 'react-router-dom';
import * as Styled from '../../pages/RulesPage.styles';
const RulesComponents = () => {
    return (
        <Styled.Main>
            <Styled.H2>
                Cel strony: Strona ma na celu dostarczenie informacji i rozrywki
                związanej z filmami.
            </Styled.H2>
            <ol>
                <Styled.Li>
                    Prawa autorskie: Wszystkie treści, takie jak tekst, grafika, zdjęcia i
                    filmy, są chronione prawem autorskim i nie mogą być kopiowane ani
                    używane bez zgody właściciela strony.
                </Styled.Li>
                <Styled.Li>
                    Wiek użytkowników: Strona może zawierać treści przeznaczone dla
                    dorosłych lub wymagające określonego wieku użytkownika. Użytkownicy
                    powinni mieć odpowiednią zgodę rodziców lub opiekunów, jeśli są
                    niepełnoletni.
                </Styled.Li>
                <Styled.Li>
                    Komunikacja i zachowanie: Wszystkie użytkownicy strony powinni
                    zachowywać się grzecznie i szanować innych użytkowników. Nie jest
                    dozwolone obrażanie, zastraszanie ani publikowanie treści obraźliwych
                    lub nieodpowiednich.
                </Styled.Li>
                <Styled.Li>
                    Rejestracja: Jeśli strona oferuje opcję rejestracji konta użytkownika,
                    użytkownicy powinni podać prawdziwe informacje i nie udostępniać
                    swojego hasła innym osobom.
                </Styled.Li>
                <Styled.Li>
                    Recenzje i komentarze: Użytkownicy mogą publikować recenzje i
                    komentarze na stronie, ale nie mogą używać ich do spamowania,
                    reklamowania innych stron lub promowania nielegalnych treści.
                </Styled.Li>
                <Styled.Li>
                    Bezpieczeństwo: Strona podejmuje wszelkie możliwe środki
                    bezpieczeństwa, ale użytkownicy powinni zachować ostrożność podczas
                    udostępniania swoich danych osobowych lub informacji finansowych.
                </Styled.Li>
                <Styled.Li>
                    Cookies: Strona może używać plików cookies w celu śledzenia ruchu na
                    stronie i poprawy użytkowania. Użytkownicy mogą zaakceptować lub
                    odrzucić cookies w ustawieniach swojej przeglądarki.
                </Styled.Li>
                <Styled.Li>
                    Zawartość zewnętrzna: Strona może zawierać linki do innych stron
                    internetowych lub treści zewnętrznych. Właściciel strony nie ponosi
                    odpowiedzialności za treści na zewnętrznych stronach.
                </Styled.Li>
                <Styled.Li>
                    Zmiany w zasadach: Właściciel strony zastrzega sobie prawo do zmiany
                    zasad w dowolnym momencie. Użytkownicy powinni regularnie sprawdzać
                    zaktualizowane zasady.
                </Styled.Li>
                <Styled.H2>Polityka Prywatności</Styled.H2>
                <p>Data wejścia w życie: [data wejścia w życie]</p>
                <Styled.H3>1. Zbieranie danych osobowych</Styled.H3>
                <p>
                    Podczas korzystania z naszej strony internetowej, możemy zbierać pewne
                    dane osobowe, takie jak:
                </p>
                <ul>
                    <Styled.Li>Adres IP i informacje o przeglądarce</Styled.Li>
                    <Styled.Li>Dane kontaktowe (np. adres e-mail)</Styled.Li>
                    <Styled.Li>Informacje demograficzne (np. wiek, płeć)</Styled.Li>
                    <Styled.Li>
                        Dane związane z aktywnością na stronie (np. oglądane treści,
                        kliknięcia)
                    </Styled.Li>
                </ul>
                <p>
                    Wszystkie te dane zbieramy w sposób dobrowolny, za zgodą użytkownika,
                    który ma prawo do odmowy udostępnienia danych osobowych.
                </p>
                <Styled.H3>2. Wykorzystanie danych osobowych</Styled.H3>
                <p>
                    Dane osobowe użytkowników są wykorzystywane w następujących celach:
                </p>
                <ul>
                    <Styled.Li>
                        Personalizacja treści i dostosowanie strony do preferencji
                        użytkowników
                    </Styled.Li>
                    <Styled.Li>Analiza i monitorowanie ruchu na stronie</Styled.Li>
                    <Styled.Li>
                        Kontakt z użytkownikami w odpowiedzi na zgłoszenia i zapytania
                    </Styled.Li>
                    <Styled.Li>
                        Realizacja działań marketingowych i promocyjnych (za zgodą
                        użytkownika)
                    </Styled.Li>
                </ul>
                <Styled.H3>3. Udostępnianie danych osobowych</Styled.H3>
                <p>
                    Nie udostępniamy danych osobowych użytkowników stronom trzecim, chyba
                    że mamy do tego zgodę użytkownika lub jesteśmy zobowiązani do tego na
                    podstawie obowiązujących przepisów prawa.
                </p>
                <Styled.H3>4. Bezpieczeństwo danych</Styled.H3>
                <p>
                    Dane osobowe użytkowników są przechowywane i przetwarzane zgodnie z
                    odpowiednimi środkami bezpieczeństwa, aby zapobiec nieuprawnionemu
                    dostępowi, utracie lub uszkodzeniu danych.
                </p>
                <Styled.H3>5. Pliki cookies</Styled.H3>
                <p>
                    Nasza strona internetowa może używać plików cookies w celu poprawy
                    działania strony i śledzenia aktywności użytkowników. Użytkownik ma
                    możliwość zaakceptowania lub odrzucenia plików cookies w ustawieniach
                    swojej przeglądarki.
                </p>
                <Styled.H3>6. Linki do innych stron</Styled.H3>
                <p>
                    Nasza strona internetowa może zawierać linki do innych stron
                    internetowych. Nie ponosimy odpowiedzialności za polityki prywatności
                    ani treści na tych zewnętrznych stronach.
                </p>
                <Styled.H3>7. Zmiany w polityce prywatności</Styled.H3>
                <p>
                    Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności w
                    dowolnym momencie. Aktualizacje zostaną opublikowane na tej stronie, a
                    data "Data wejścia w życie" zostanie zaktualizowana.
                </p>
                <Styled.H3>8. Kontakt</Styled.H3>
                <p>
                    Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności,
                    skontaktuj się z nami za pośrednictwem [podaj tutaj dane kontaktowe].
                </p>
            </ol>
        </Styled.Main>
	)}
export default RulesComponents;
