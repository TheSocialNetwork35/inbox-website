import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Datenschutz der App",
  description:
    "Datenschutzerklärung für die Inbox App: keine Übertragung an Inbox-Server, lokale Verarbeitung und direkter Zugriff auf das offizielle TAM-Schul-Intranet.",
  alternates: { canonical: "/datenschutz/app" },
};

export default function AppPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="DATENSCHUTZ · APP"
          title="Deine Schuldaten bleiben bei dir und TAM."
          lead="Inbox betreibt keinen eigenen App-Server und übermittelt keine Nutzungs-, Geräte- oder Schuldaten an den Entwickler."
        />
        <section className="section legal-section">
          <div className="container legal-grid">
            <aside>
              <a href="/datenschutz">← Auswahl</a>
              <a href="#ueberblick">Überblick</a>
              <a href="#datenfluss">Datenfluss</a>
              <a href="#lokal">Auf dem Gerät</a>
              <a href="#mitteilungen">Mitteilungen</a>
              <a href="#keine-dritten">Keine Dritten</a>
              <a href="#loeschung">Löschung</a>
              <a href="#rechte">Deine Rechte</a>
            </aside>
            <article>
              <p className="legal-note">Gültig für die Inbox App · Stand: 20. August 2026</p>

              <section id="ueberblick">
                <span className="legal-kicker">DAS WICHTIGSTE ZUERST</span>
                <h2>Die App erhebt keine eigenen Nutzerdaten</h2>
                <div className="legal-summary">
                  <div><b>Kein Inbox-Server</b><span>Es gibt keine Registrierung und keine Übertragung an einen Server des Entwicklers.</span></div>
                  <div><b>Direkt zu TAM</b><span>Schuldaten fliessen ausschliesslich zwischen deinem Gerät und dem offiziellen TAM-Intranet.</span></div>
                  <div><b>Lokal auf dem Gerät</b><span>Zwischenspeicher, Einstellungen, Widgets und Mitteilungen werden lokal verwaltet.</span></div>
                </div>
                <p>
                  Inbox verarbeitet die Daten, die für die von dir aufgerufenen
                  Funktionen nötig sind. Die App sammelt diese Daten jedoch
                  nicht für den Entwickler, erstellt kein Inbox-Benutzerkonto
                  und übermittelt keine Daten an eine eigene Infrastruktur.
                </p>
                <div className="legal-callout">
                  <b>Insbesondere nicht übertragen</b>
                  <p>
                    Kein Geräte-Token, kein Name, keine Schüler-ID, keine
                    Schule, keine App-Version und keine Noten-, Stundenplan-
                    oder Absenzdaten werden an den Entwickler oder einen
                    Inbox-Server gesendet.
                  </p>
                </div>
              </section>

              <section id="datenfluss">
                <h2>1. Anmeldung und direkter TAM-Zugriff</h2>
                <p>
                  Für die Anmeldung verarbeitet Inbox den Benutzernamen und das
                  Passwort deines Schulkontos. Die Anmeldung und der Abruf von
                  Name, Schüler-ID, Stundenplan, Prüfungen, Fächern, Noten,
                  Pluspunkten, Semestern und Absenzen erfolgen direkt zwischen
                  der App auf deinem Gerät und dem offiziellen
                  TAM-Schul-Intranet unter intranet.tam.ch.
                </p>
                <p>
                  Der Entwickler erhält dabei weder deine Zugangsdaten noch die
                  abgerufenen Schulinformationen. Für die Verarbeitung durch das
                  Schul-Intranet ist dessen Betreiber verantwortlich; es gelten
                  die Datenschutzbestimmungen deiner Schule beziehungsweise von
                  TAM.
                </p>
              </section>

              <section id="lokal">
                <h2>2. Speicherung auf deinem Gerät</h2>
                <p>
                  Das Passwort wird in der iOS-Keychain gespeichert und ist nur
                  auf diesem Gerät im entsperrten Zustand zugänglich.
                  Benutzernamen, Sitzungsinformationen, Einstellungen und
                  abgerufene Schuldaten können lokal im App-Speicher oder im
                  gemeinsamen App-Container für Widgets zwischengespeichert
                  werden.
                </p>
                <p>
                  Diese lokale Speicherung ermöglicht die Offline-Anzeige,
                  schnellere Aktualisierungen, mehrere Konten und Widgets. Sie
                  wird nicht mit einem Inbox-Server synchronisiert.
                </p>
              </section>

              <section id="mitteilungen">
                <h2>3. Mitteilungen funktionieren lokal</h2>
                <p>
                  Inbox verwendet keine Remote-Push-Mitteilungen und registriert
                  dein Gerät nicht beim Apple Push Notification Service für
                  Inbox. Es wird kein Geräte-Token erzeugt oder an den
                  Entwickler übermittelt.
                </p>
                <p>
                  Wenn du Mitteilungen erlaubst, prüft die App beim Öffnen oder
                  Aktualisieren neue Noten direkt bei TAM. Erkennt sie dabei
                  eine neue Note, erstellt iOS die Mitteilung lokal auf deinem
                  Gerät. Inhalt, Fach und Name verlassen dafür das Gerät nicht.
                  Die Berechtigung kannst du jederzeit in den iOS-Einstellungen
                  ändern.
                </p>
              </section>

              <section id="keine-dritten">
                <h2>4. Keine Analyse, Werbung oder Drittanbieter-SDKs</h2>
                <p>
                  Die App enthält keine Analyse-, Tracking- oder Werbe-SDKs. Sie
                  erstellt keine Werbeprofile, verkauft keine Personendaten und
                  übermittelt keine Diagnosen oder Nutzungsdaten an den
                  Entwickler. Auch ein automatischer Abruf bei einem
                  App-Update-Dienst findet nicht statt.
                </p>
              </section>

              <section id="rechtsgrundlagen">
                <h2>5. Zweck der lokalen Verarbeitung</h2>
                <p>
                  Die lokale Verarbeitung und die direkte Kommunikation mit TAM
                  dienen ausschliesslich dazu, die von dir angeforderten
                  App-Funktionen bereitzustellen. Es findet keine automatisierte
                  Entscheidung mit rechtlicher oder vergleichbar erheblicher
                  Wirkung statt.
                </p>
              </section>

              <section id="loeschung">
                <h2>6. Löschen deiner lokalen Daten</h2>
                <p>
                  Beim Abmelden oder Entfernen eines Kontos löscht Inbox dessen
                  Passwort aus der Keychain und entfernt die zugehörigen lokal
                  gespeicherten Kontodaten. App-Dateien und Caches werden beim
                  Löschen der App nach den Regeln von iOS entfernt. Wenn du auch
                  das Keychain-Passwort zuverlässig entfernen möchtest, melde
                  dich vor dem Löschen der App ab.
                </p>
              </section>

              <section id="rechte">
                <h2>7. Kontakt und deine Rechte</h2>
                <p>
                  Verantwortlich für die App ist <strong>Yannis Ress</strong>,
                  Schweiz. Da der Entwickler keine eigenen App-Nutzerdaten
                  erhält oder speichert, kann er solche Daten weder auswerten
                  noch herausgeben. Bei Fragen erreichst du uns unter{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzanfrage%20Inbox%20App">
                    yannis.66678@gmail.com
                  </a>.
                </p>
                <p>
                  Für Auskunft oder Löschung von Daten im TAM-Schul-Intranet
                  wende dich bitte an deine Schule oder den zuständigen
                  Betreiber. Die Datenschutzerklärung der Website findest du
                  separat unter{" "}
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
