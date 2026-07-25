import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung für die Inbox App, die Website, das Kontaktformular mit Formspree und die eingesetzten Hosting-Dienste.",
  alternates: { canonical: "/datenschutz" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="DATENSCHUTZ"
          title="Deine Daten verdienen Klarheit."
          lead="Hier erklären wir verständlich, welche Daten Inbox benötigt, wofür sie verwendet werden und welche Kontrolle du behältst."
        />
        <section className="section legal-section">
          <div className="container legal-grid">
            <aside>
              <a href="#ueberblick">Überblick</a>
              <a href="#verantwortlich">Verantwortlicher</a>
              <a href="#app">Inbox App</a>
              <a href="#website">Website &amp; Hosting</a>
              <a href="#kontaktformular">Kontakt &amp; Formspree</a>
              <a href="#tracking">Cookies &amp; Tracking</a>
              <a href="#aufbewahrung">Aufbewahrung</a>
              <a href="#rechte">Deine Rechte</a>
              <a href="#impressum">Impressum</a>
            </aside>
            <article>
              <p className="legal-note">
                Gültig für die Inbox App und diese Website · Zuletzt
                aktualisiert: 25. Juli 2026
              </p>

              <section id="ueberblick">
                <span className="legal-kicker">DAS WICHTIGSTE ZUERST</span>
                <h2>Datenschutz auf einen Blick</h2>
                <div className="legal-summary">
                  <div><b>Keine Werbung</b><span>Kein Verkauf deiner Daten und kein Werbeprofil.</span></div>
                  <div><b>So wenig wie nötig</b><span>Wir verarbeiten Daten nur für App, Website und Support.</span></div>
                  <div><b>Du entscheidest</b><span>Du kannst Auskunft, Berichtigung oder Löschung verlangen.</span></div>
                </div>
                <p>
                  Diese Erklärung beschreibt konkret, welche Personendaten bei
                  der Nutzung von Inbox, der Website und dem Kontaktformular
                  bearbeitet werden. Es gelten insbesondere das Schweizer
                  Datenschutzgesetz (DSG) und – soweit anwendbar – die
                  Datenschutz-Grundverordnung (DSGVO).
                </p>
              </section>

              <section id="verantwortlich">
                <h2>1. Verantwortlicher</h2>
                <p>
                  Verantwortlich für die Datenbearbeitung ist <strong>Yannis
                  Ress</strong>, Schweiz. Datenschutzanfragen kannst du an{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzanfrage%20Inbox">
                    yannis.66678@gmail.com
                  </a>{" "}
                  senden.
                </p>
              </section>

              <section id="app">
                <h2>2. Datenbearbeitung in der Inbox App</h2>
                <h3>Welche Daten?</h3>
                <p>
                  Die App verarbeitet die Anmeldedaten deines Schulkontos und
                  die darüber abrufbaren Schulinformationen, insbesondere
                  Stundenplan, Prüfungen, Noten, Pluspunkte und Absenzen.
                </p>
                <h3>Wofür?</h3>
                <p>
                  Diese Daten werden verwendet, um deine Schulinformationen
                  abzurufen, in Inbox darzustellen, lokale Funktionen
                  bereitzustellen und die von dir angeforderte App-Leistung zu
                  erbringen. Es findet keine automatisierte Entscheidung mit
                  rechtlicher oder vergleichbar erheblicher Wirkung statt.
                </p>
                <h3>Wo werden sie gespeichert?</h3>
                <p>
                  Das Passwort deines Schulkontos wird geschützt in der
                  iOS-Keychain gespeichert. Für eine schnelle Darstellung kann
                  die App Inhalte lokal auf deinem Gerät zwischenspeichern.
                  Beim Logout werden gespeicherte Zugangsdaten entfernt; durch
                  das Löschen der App werden die lokalen App-Daten entfernt.
                </p>
              </section>

              <section id="website">
                <h2>3. Website und Hosting</h2>
                <p>
                  Die Website wird über Cloudflare bereitgestellt. Beim Aufruf
                  werden technisch notwendige Verbindungsdaten verarbeitet.
                  Dazu können IP-Adresse, Zeitpunkt, aufgerufene Adresse,
                  Referrer, Browser- und Geräteinformationen sowie Angaben zur
                  Datenübertragung gehören.
                </p>
                <p>
                  Die Verarbeitung dient der sicheren, schnellen und
                  zuverlässigen Auslieferung der Website, der Abwehr von
                  Angriffen und der technischen Fehleranalyse. Cloudflare kann
                  diese Daten als Auftragsbearbeiter in einem internationalen
                  Netzwerk verarbeiten. Weitere Informationen findest du in der{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Datenschutzerklärung von Cloudflare
                  </a>.
                </p>
              </section>

              <section id="kontaktformular">
                <h2>4. Kontaktformular und Formspree</h2>
                <p>
                  Wenn du das Kontaktformular absendest, verarbeiten wir das
                  gewählte Thema, deine E-Mail-Adresse, deine Nachricht und –
                  falls angegeben – deinen Namen. Zusätzlich können technische
                  Metadaten wie IP-Adresse, Browsertyp, Zugriffszeit und
                  Referrer anfallen. Die Angaben verwenden wir ausschliesslich,
                  um deine Frage, Fehlermeldung, Idee oder Schulanfrage zu
                  bearbeiten und darauf zu antworten.
                </p>
                <div className="legal-callout">
                  <b>Bitte nicht mitsenden</b>
                  <p>
                    Sende über das Formular keine Passwörter, Zugangsdaten,
                    Gesundheitsdaten oder andere besonders schützenswerte
                    Personendaten. Wenn du unter 13 Jahre alt bist, nutze das
                    Formular nur mit Zustimmung einer erziehungsberechtigten
                    Person.
                  </p>
                </div>
                <p>
                  Für die Übermittlung und Verwaltung der Anfragen nutzen wir
                  Formspree, Inc. Formspree speichert Einsendungen in einem
                  Formspree-Inbox-System und löst E-Mail-Benachrichtigungen aus.
                  Nach Angaben des Anbieters werden die Dienste bei Amazon Web
                  Services in den USA betrieben, Daten bei der Übertragung per
                  TLS und in den Datenbanken verschlüsselt. Formspree stützt
                  internationale Übermittlungen unter anderem auf
                  Standardvertragsklauseln.
                </p>
                <p>
                  Details findest du in der{" "}
                  <a
                    href="https://formspree.io/legal/privacy-policy/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  und den{" "}
                  <a
                    href="https://formspree.io/security/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Sicherheitsinformationen
                  </a>{" "}
                  von Formspree. Alternativ kannst du uns direkt per E-Mail
                  kontaktieren.
                </p>
              </section>

              <section id="rechtsgrundlagen">
                <h2>5. Zwecke und Rechtsgrundlagen</h2>
                <p>
                  Wir bearbeiten Personendaten, soweit dies für die von dir
                  angeforderte App- oder Supportleistung erforderlich ist, zur
                  Beantwortung vorvertraglicher oder vertraglicher Anfragen,
                  zur sicheren Bereitstellung unserer Systeme und aufgrund
                  unseres berechtigten Interesses, Inbox zu betreiben,
                  abzusichern und anhand freiwilligen Feedbacks zu verbessern.
                  Soweit eine Einwilligung erforderlich ist, kann sie jederzeit
                  mit Wirkung für die Zukunft widerrufen werden.
                </p>
              </section>

              <section id="empfaenger">
                <h2>6. Empfänger und Auslandübermittlung</h2>
                <p>
                  Zugriff erhalten nur Personen und Dienstleister, die ihn für
                  Betrieb oder Bearbeitung benötigen. Dazu gehören insbesondere
                  Cloudflare für Hosting und Sicherheit sowie Formspree für das
                  Kontaktformular. Bei Bearbeitungen in den USA oder anderen
                  Staaten werden – soweit erforderlich – geeignete Garantien
                  wie anerkannte Standardvertragsklauseln eingesetzt. In
                  einzelnen Staaten kann dennoch ein anderes
                  Datenschutzniveau gelten als in der Schweiz oder im EWR.
                </p>
              </section>

              <section id="tracking">
                <h2>7. Cookies, Tracking und Werbung</h2>
                <p>
                  Inbox setzt auf dieser Website derzeit keine eigenen
                  Analyse-, Marketing- oder Werbe-Cookies ein. Wir erstellen
                  keine Werbeprofile, zeigen keine personalisierte Werbung und
                  verkaufen keine Personendaten. Technisch notwendige
                  Sicherheits- und Netzwerkverarbeitung durch den
                  Hosting-Anbieter bleibt davon unberührt.
                </p>
                <p>
                  Externe Angebote wie der App Store oder verlinkte
                  Datenschutzhinweise werden erst aufgerufen, wenn du den
                  jeweiligen Link öffnest. Ab diesem Zeitpunkt gelten die
                  Datenschutzbestimmungen des externen Anbieters.
                </p>
              </section>

              <section id="aufbewahrung">
                <h2>8. Aufbewahrung und Löschung</h2>
                <p>
                  Kontaktanfragen und zugehörige Formspree-Einsendungen löschen
                  wir grundsätzlich spätestens zwölf Monate nach
                  abschliessender Bearbeitung. Eine längere Aufbewahrung erfolgt
                  nur, wenn sie für gesetzliche Pflichten, die Durchsetzung von
                  Ansprüchen oder die Dokumentation eines fortbestehenden
                  Supportfalls erforderlich ist. Technische Protokolle werden
                  nach den Vorgaben der jeweiligen Hosting-Dienstleister nur so
                  lange aufbewahrt, wie es für Sicherheit und Betrieb
                  erforderlich ist.
                </p>
              </section>

              <section id="rechte">
                <h2>9. Deine Rechte</h2>
                <p>
                  Du kannst im Rahmen des anwendbaren Rechts Auskunft über deine
                  Personendaten, Berichtigung unrichtiger Daten, Löschung,
                  Einschränkung der Bearbeitung, Herausgabe oder Übertragung
                  deiner Daten sowie Widerspruch gegen bestimmte Bearbeitungen
                  verlangen. Schreibe dafür an{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzrechte%20Inbox">
                    yannis.66678@gmail.com
                  </a>. Zum Schutz deiner Daten können wir einen geeigneten
                  Identitätsnachweis verlangen.
                </p>
                <p>
                  Du kannst dich zudem beim{" "}
                  <a
                    href="https://www.edoeb.admin.ch/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Eidgenössischen Datenschutz- und
                    Öffentlichkeitsbeauftragten (EDÖB)
                  </a>{" "}
                  oder – soweit die DSGVO anwendbar ist – bei einer zuständigen
                  Datenschutzaufsichtsbehörde beschweren.
                </p>
              </section>

              <section id="sicherheit">
                <h2>10. Sicherheit und Änderungen</h2>
                <p>
                  Wir setzen angemessene technische und organisatorische
                  Massnahmen ein, um Personendaten vor Verlust, Missbrauch und
                  unberechtigtem Zugriff zu schützen. Keine Übertragung oder
                  Speicherung ist jedoch vollständig risikofrei.
                </p>
                <p>
                  Wir aktualisieren diese Erklärung, wenn sich Funktionen,
                  Dienstleister oder rechtliche Anforderungen ändern. Es gilt
                  die jeweils auf dieser Seite veröffentlichte Fassung.
                </p>
              </section>

              <section id="impressum">
                <h2>Impressum / Verantwortlicher</h2>
                <p>
                  <strong>Yannis Ress</strong><br />
                  Verantwortlich für die Inbox App und Website<br />
                  Schweiz<br />
                  <a href="mailto:yannis.66678@gmail.com">
                    yannis.66678@gmail.com
                  </a>
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
