import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Datenschutz der App",
  description:
    "Datenschutzerklärung für die Inbox App: Schulkonto, lokale Daten, Widgets und optionale Push-Mitteilungen.",
  alternates: { canonical: "/datenschutz/app" },
};

export default function AppPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="DATENSCHUTZ · APP"
          title="Was die App mit deinen Daten macht."
          lead="Diese Erklärung gilt ausschliesslich für die Inbox App auf iPhone und iPad – von der Anmeldung bis zu optionalen Noten-Mitteilungen."
        />
        <section className="section legal-section">
          <div className="container legal-grid">
            <aside>
              <a href="/datenschutz">← Auswahl</a>
              <a href="#ueberblick">Überblick</a>
              <a href="#schuldaten">Schuldaten</a>
              <a href="#speicherung">Auf dem Gerät</a>
              <a href="#push">Mitteilungen</a>
              <a href="#empfaenger">Empfänger</a>
              <a href="#loeschung">Löschung</a>
              <a href="#rechte">Deine Rechte</a>
            </aside>
            <article>
              <p className="legal-note">Gültig für die Inbox App · Stand: 20. August 2026</p>

              <section id="ueberblick">
                <span className="legal-kicker">DAS WICHTIGSTE ZUERST</span>
                <h2>Datenschutz der App auf einen Blick</h2>
                <div className="legal-summary">
                  <div><b>Direkter Schulzugriff</b><span>Die App ruft deine Daten direkt beim Schul-Intranet ab.</span></div>
                  <div><b>Lokal geschützt</b><span>Dein Passwort liegt in der iOS-Keychain und nicht auf unserem Server.</span></div>
                  <div><b>Push ist freiwillig</b><span>Mitteilungen werden nur nach deiner Zustimmung aktiviert.</span></div>
                </div>
                <p>
                  Verantwortlich für die Datenbearbeitung in der App ist
                  <strong> Yannis Ress</strong>, Schweiz. Du erreichst uns für
                  Datenschutzanfragen unter{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzanfrage%20Inbox%20App">
                    yannis.66678@gmail.com
                  </a>.
                </p>
              </section>

              <section id="schuldaten">
                <h2>1. Anmeldung und Schuldaten</h2>
                <h3>Welche Daten verarbeitet die App?</h3>
                <p>
                  Für die Anmeldung verarbeitet Inbox den Benutzernamen und das
                  Passwort deines Schulkontos. Nach erfolgreicher Anmeldung ruft
                  die App die für ihre Funktionen benötigten Informationen ab,
                  insbesondere Name und Schüler-ID, Stundenplan, Prüfungen,
                  Fächer, Noten, Pluspunkte, Semester und Absenzen.
                </p>
                <h3>Wohin werden die Daten übertragen?</h3>
                <p>
                  Die Anmeldung und der Abruf der Schuldaten erfolgen direkt
                  zwischen deinem Gerät und dem TAM-Schul-Intranet unter
                  intranet.tam.ch. Unser eigener Push-Dienst erhält weder dein
                  Schulpasswort noch deine Noten, Absenzen oder deinen
                  Stundenplan.
                </p>
                <h3>Wofür?</h3>
                <p>
                  Die Daten werden ausschliesslich verwendet, um die von dir
                  gewählten App-Funktionen bereitzustellen, Inhalte aktuell zu
                  halten und sie übersichtlich darzustellen. Inbox erstellt
                  keine Werbeprofile, verkauft keine Personendaten und trifft
                  keine automatisierten Entscheidungen mit rechtlicher oder
                  vergleichbar erheblicher Wirkung.
                </p>
              </section>

              <section id="speicherung">
                <h2>2. Speicherung auf deinem Gerät</h2>
                <p>
                  Das Passwort wird mit dem Schutz „nur auf diesem Gerät und
                  nur im entsperrten Zustand zugänglich“ in der iOS-Keychain
                  gespeichert. Benutzernamen, Sitzungsinformationen,
                  Einstellungen und abgerufene Schuldaten können lokal im
                  App-Speicher beziehungsweise im gemeinsamen App-Container für
                  Widgets gespeichert oder zwischengespeichert werden.
                </p>
                <p>
                  Diese lokale Speicherung ermöglicht die Offline-Anzeige,
                  schnellere Aktualisierungen, mehrere Konten und Widgets. Beim
                  Abmelden oder Entfernen eines Kontos löscht Inbox dessen
                  Passwort aus der Keychain. App-Dateien und Caches werden beim
                  Löschen der App nach den Regeln von iOS entfernt. Wenn du auch
                  das Keychain-Passwort zuverlässig entfernen möchtest, melde
                  dich vor dem Löschen der App ab.
                </p>
              </section>

              <section id="push">
                <h2>3. Optionale Push-Mitteilungen</h2>
                <p>
                  Wenn du Noten-Mitteilungen erlaubst, übermittelt die App an
                  unseren über Cloudflare betriebenen Push-Dienst den
                  technischen Geräte-Token, deine Schule, deine Schüler-ID,
                  deinen Vornamen, die App-Version sowie die Apple-Push-Umgebung
                  (Test oder Produktion). Diese Angaben dienen nur der
                  Zuordnung und Zustellung der von dir aktivierten Mitteilungen.
                </p>
                <div className="legal-callout">
                  <b>Keine Noten im Push-Dienst</b>
                  <p>
                    Der Server versendet lediglich ein stilles Signal zur
                    Aktualisierung. Erst die App ruft auf deinem Gerät neue
                    Noten direkt beim Schul-Intranet ab und erzeugt die sichtbare
                    Mitteilung lokal.
                  </p>
                </div>
                <p>
                  Für die Zustellung wird Apple Push Notification Service
                  (APNs) eingesetzt. Dabei verarbeitet Apple notwendige
                  technische Zustelldaten. Du kannst die Berechtigung jederzeit
                  in den iOS-Einstellungen ändern. Beim Abmelden versucht die
                  App, die Registrierung des aktuellen Geräts aus unserem
                  Push-Dienst zu entfernen; ungültige Geräte-Tokens werden
                  ebenfalls gelöscht.
                </p>
              </section>

              <section id="empfaenger">
                <h2>4. Empfänger und internationale Bearbeitung</h2>
                <p>
                  Je nach verwendeter Funktion werden Daten an den Betreiber des
                  TAM-Schul-Intranets, an Apple für iOS und Push-Zustellung sowie
                  an Cloudflare für den technischen Betrieb des Push-Dienstes
                  übermittelt. Diese Anbieter können Daten in der Schweiz, im
                  EWR, in den USA oder weiteren Ländern bearbeiten. Es gelten
                  zusätzlich deren Datenschutzbestimmungen und – soweit
                  erforderlich – geeignete Garantien für internationale
                  Übermittlungen.
                </p>
                <p>
                  Weitere Informationen findest du in den
                  Datenschutzhinweisen von{" "}
                  <a href="https://www.apple.com/legal/privacy/" rel="noreferrer" target="_blank">Apple</a>{" "}
                  und{" "}
                  <a href="https://www.cloudflare.com/policies/privacy/" rel="noreferrer" target="_blank">Cloudflare</a>.
                </p>
                <p>
                  Technisch erforderliche Verbindungsdaten wie IP-Adresse,
                  Zeitpunkt, Geräte- und Netzwerkinformationen können bei den
                  jeweils angesprochenen Diensten in Sicherheits- und
                  Zugriffsprotokollen anfallen.
                </p>
              </section>

              <section id="rechtsgrundlagen">
                <h2>5. Zwecke und Rechtsgrundlagen</h2>
                <p>
                  Wir bearbeiten Personendaten, soweit dies für die von dir
                  angeforderte App-Leistung erforderlich ist, zur sicheren und
                  zuverlässigen Bereitstellung der App und aufgrund unseres
                  berechtigten Interesses an Betrieb, Fehleranalyse und
                  Missbrauchsabwehr. Optionale Push-Mitteilungen beruhen auf
                  deiner Einwilligung, die du jederzeit für die Zukunft
                  widerrufen kannst.
                </p>
              </section>

              <section id="loeschung">
                <h2>6. Aufbewahrung und Löschung</h2>
                <p>
                  Lokal gespeicherte Daten bleiben grundsätzlich erhalten, bis
                  du dich abmeldest, ein Konto entfernst oder die App löschst.
                  Registrierungsdaten für Push-Mitteilungen werden so lange
                  gespeichert, wie sie für die aktivierte Zustellung benötigt
                  werden. Ungültige Geräte-Tokens werden nach Rückmeldung von
                  Apple entfernt. Technische Protokolle werden nur so lange
                  aufbewahrt, wie dies für Sicherheit und Betrieb erforderlich
                  ist.
                </p>
              </section>

              <section id="rechte">
                <h2>7. Deine Rechte und Änderungen</h2>
                <p>
                  Du kannst im Rahmen des anwendbaren Rechts Auskunft,
                  Berichtigung, Löschung, Einschränkung, Herausgabe oder
                  Übertragung deiner Personendaten verlangen und bestimmten
                  Bearbeitungen widersprechen. Schreibe dafür an{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzrechte%20Inbox%20App">
                    yannis.66678@gmail.com
                  </a>. Zum Schutz deiner Daten können wir einen geeigneten
                  Identitätsnachweis verlangen.
                </p>
                <p>
                  Wir aktualisieren diese Erklärung, wenn sich Funktionen,
                  Dienstleister oder rechtliche Anforderungen ändern. Die
                  Datenschutzerklärung dieser Website findest du separat unter{" "}
                  <a href="/datenschutz/website">Datenschutz der Website</a>.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
