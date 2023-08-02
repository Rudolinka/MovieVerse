import React from 'react';
import { link } from 'react-router-dom';
import * as Styled from '../../pages/RulesPage.styles';

const RulesComponents = () => {
	return (
		<Styled.RulePage>
			<Styled.Heading>
				Cel strony: Strona ma na celu dostarczenie informacji i rozrywki
				związanej z filmami.
			</Styled.Heading>
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

				<h2>
					Cel strony: Strona ma na celu dostarczenie informacji i rozrywki
					związanej z filmami.
				</h2>

				<h1>Polityka Prywatności</h1>

				<p>Data wejścia w życie: [data wejścia w życie]</p>

				<h2>1. Zbieranie danych osobowych</h2>
				<p>
					Podczas korzystania z naszej strony internetowej, możemy zbierać pewne
					dane osobowe, takie jak:
				</p>
				<ul>
					<li>Adres IP i informacje o przeglądarce</li>
					<li>Dane kontaktowe (np. adres e-mail)</li>
					<li>Informacje demograficzne (np. wiek, płeć)</li>
					<li>
						Dane związane z aktywnością na stronie (np. oglądane treści,
						kliknięcia)
					</li>
				</ul>
				<p>
					Wszystkie te dane zbieramy w sposób dobrowolny, za zgodą użytkownika,
					który ma prawo do odmowy udostępnienia danych osobowych.
				</p>

				<h2>2. Wykorzystanie danych osobowych</h2>
				<p>
					Dane osobowe użytkowników są wykorzystywane w następujących celach:
				</p>
				<ul>
					<li>
						Personalizacja treści i dostosowanie strony do preferencji
						użytkowników
					</li>
					<li>Analiza i monitorowanie ruchu na stronie</li>
					<li>
						Kontakt z użytkownikami w odpowiedzi na zgłoszenia i zapytania
					</li>
					<li>
						Realizacja działań marketingowych i promocyjnych (za zgodą
						użytkownika)
					</li>
				</ul>

				<h2>3. Udostępnianie danych osobowych</h2>
				<p>
					Nie udostępniamy danych osobowych użytkowników stronom trzecim, chyba
					że mamy do tego zgodę użytkownika lub jesteśmy zobowiązani do tego na
					podstawie obowiązujących przepisów prawa.
				</p>

				<h2>4. Bezpieczeństwo danych</h2>
				<p>
					Dane osobowe użytkowników są przechowywane i przetwarzane zgodnie z
					odpowiednimi środkami bezpieczeństwa, aby zapobiec nieuprawnionemu
					dostępowi, utracie lub uszkodzeniu danych.
				</p>

				<h2>5. Pliki cookies</h2>
				<p>
					Nasza strona internetowa może używać plików cookies w celu poprawy
					działania strony i śledzenia aktywności użytkowników. Użytkownik ma
					możliwość zaakceptowania lub odrzucenia plików cookies w ustawieniach
					swojej przeglądarki.
				</p>

				<h2>6. Linki do innych stron</h2>
				<p>
					Nasza strona internetowa może zawierać linki do innych stron
					internetowych. Nie ponosimy odpowiedzialności za polityki prywatności
					ani treści na tych zewnętrznych stronach.
				</p>

				<h2>7. Zmiany w polityce prywatności</h2>
				<p>
					Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności w
					dowolnym momencie. Aktualizacje zostaną opublikowane na tej stronie, a
					data "Data wejścia w życie" zostanie zaktualizowana.
				</p>

				<h2>8. Kontakt</h2>
				<p>
					Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności,
					skontaktuj się z nami za pośrednictwem [podaj tutaj dane kontaktowe].
				</p>
			</ul>
		</Styled.RulePage>
	);
};

export default RulesComponents;
