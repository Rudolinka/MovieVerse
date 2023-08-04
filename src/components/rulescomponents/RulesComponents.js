import React from 'react';
import { link } from 'react-router-dom';
import * as Styled from '../../pages/RulesPage.styles';

// import * as Styled from '../../pages/RulesPage.styles';

const RulesComponents = () => {
	return (
		<Styled.RulePage>
			<Styled.h1>
				Cel strony: Strona ma na celu dostarczenie informacji i rozrywki
				związanej z filmami.
			</Styled.h1>
			<ul>
				<Styled.Subpoints>
					Prawa autorskie: Wszystkie treści, takie jak tekst, grafika, zdjęcia i
					filmy, są chronione prawem autorskim i nie mogą być kopiowane ani
					używane bez zgody właściciela strony.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Wiek użytkowników: Strona może zawierać treści przeznaczone dla
					dorosłych lub wymagające określonego wieku użytkownika. Użytkownicy
					powinni mieć odpowiednią zgodę rodziców lub opiekunów, jeśli są
					niepełnoletni.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Komunikacja i zachowanie: Wszystkie użytkownicy strony powinni
					zachowywać się grzecznie i szanować innych użytkowników. Nie jest
					dozwolone obrażanie, zastraszanie ani publikowanie treści obraźliwych
					lub nieodpowiednich.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Rejestracja: Jeśli strona oferuje opcję rejestracji konta użytkownika,
					użytkownicy powinni podać prawdziwe informacje i nie udostępniać
					swojego hasła innym osobom.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Recenzje i komentarze: Użytkownicy mogą publikować recenzje i
					komentarze na stronie, ale nie mogą używać ich do spamowania,
					reklamowania innych stron lub promowania nielegalnych treści.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Bezpieczeństwo: Strona podejmuje wszelkie możliwe środki
					bezpieczeństwa, ale użytkownicy powinni zachować ostrożność podczas
					udostępniania swoich danych osobowych lub informacji finansowych.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Cookies: Strona może używać plików cookies w celu śledzenia ruchu na
					stronie i poprawy użytkowania. Użytkownicy mogą zaakceptować lub
					odrzucić cookies w ustawieniach swojej przeglądarki.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Zawartość zewnętrzna: Strona może zawierać linki do innych stron
					internetowych lub treści zewnętrznych. Właściciel strony nie ponosi
					odpowiedzialności za treści na zewnętrznych stronach.
				</Styled.Subpoints>

				<Styled.Subpoints>
					Zmiany w zasadach: Właściciel strony zastrzega sobie prawo do zmiany
					zasad w dowolnym momencie. Użytkownicy powinni regularnie sprawdzać
					zaktualizowane zasady.
				</Styled.Subpoints>


				<Styled.h2>Polityka Prywatności</Styled.h2>

				<Styled.Paragraf>Data wejścia w życie: [data wejścia w życie]</Styled.Paragraf>

				<Styled.h2>1. Zbieranie danych osobowych</Styled.h2>
				<Styled.Paragraf>
					Podczas korzystania z naszej strony internetowej, możemy zbierać pewne
					dane osobowe, takie jak:
				</Styled.Paragraf>
				<ul>
					<Styled.Subpoints>Adres IP i informacje o przeglądarce</Styled.Subpoints>
					<Styled.Subpoints>Dane kontaktowe (np. adres e-mail)</Styled.Subpoints>
					<Styled.Subpoints>Informacje demograficzne (np. wiek, płeć)</Styled.Subpoints>
					<Styled.Subpoints>
						Dane związane z aktywnością na stronie (np. oglądane treści,
						kliknięcia)
					</Styled.Subpoints>
				</ul>
				<Styled.Paragraf>
					Wszystkie te dane zbieramy w sposób dobrowolny, za zgodą użytkownika,
					który ma prawo do odmowy udostępnienia danych osobowych.
				</Styled.Paragraf>

				<Styled.h2>2. Wykorzystanie danych osobowych</Styled.h2>
				<Styled.Paragraf>
					Dane osobowe użytkowników są wykorzystywane w następujących celach:
				</Styled.Paragraf>
				<ul>
					<Styled.Subpoints>
						Personalizacja treści i dostosowanie strony do preferencji
						użytkowników
					</Styled.Subpoints>
					<Styled.Subpoints>Analiza i monitorowanie ruchu na stronie</Styled.Subpoints>
					<Styled.Subpoints>
						Kontakt z użytkownikami w odpowiedzi na zgłoszenia i zapytania
					</Styled.Subpoints>
					<Styled.Subpoints>
						Realizacja działań marketingowych i promocyjnych (za zgodą
						użytkownika)
					</Styled.Subpoints>
				</ul>

				<Styled.h2>3. Udostępnianie danych osobowych</Styled.h2>
				<Styled.Paragraf>
					Nie udostępniamy danych osobowych użytkowników stronom trzecim, chyba
					że mamy do tego zgodę użytkownika lub jesteśmy zobowiązani do tego na
					podstawie obowiązujących przepisów prawa.
				</Styled.Paragraf>

				<Styled.h2>4. Bezpieczeństwo danych</Styled.h2>
				<Styled.Paragraf>
					Dane osobowe użytkowników są przechowywane i przetwarzane zgodnie z
					odpowiednimi środkami bezpieczeństwa, aby zapobiec nieuprawnionemu
					dostępowi, utracie lub uszkodzeniu danych.
				</Styled.Paragraf>

				<Styled.h2>5. Pliki cookies</Styled.h2>
				<Styled.Paragraf>
					Nasza strona internetowa może używać plików cookies w celu poprawy
					działania strony i śledzenia aktywności użytkowników. Użytkownik ma
					możliwość zaakceptowania lub odrzucenia plików cookies w ustawieniach
					swojej przeglądarki.
				</Styled.Paragraf>

				<Styled.h2>6. Linki do innych stron</Styled.h2>
				<Styled.Paragraf>
					Nasza strona internetowa może zawierać linki do innych stron
					internetowych. Nie ponosimy odpowiedzialności za polityki prywatności
					ani treści na tych zewnętrznych stronach.
				</Styled.Paragraf>

				<Styled.h2>7. Zmiany w polityce prywatności</Styled.h2>
				<Styled.Paragraf>
					Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności w
					dowolnym momencie. Aktualizacje zostaną opublikowane na tej stronie, a
					data "Data wejścia w życie" zostanie zaktualizowana.
				</Styled.Paragraf>

				<Styled.h2>8. Kontakt</Styled.h2>
				<Styled.Paragraf>
					Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności,
					skontaktuj się z nami za pośrednictwem [podaj tutaj dane kontaktowe].
				</Styled.Paragraf>
			</ul>
		</Styled.RulePage>
	);
};

export default RulesComponents;
