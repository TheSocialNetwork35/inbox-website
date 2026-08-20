import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Datenschutz der Website",
  description:
    "Datenschutzerklärung für inbox-app.ch, das Hosting über Cloudflare und das Kontaktformular über Formspree.",
  alternates: { canonical: "/datenschutz/website" },
};

export default function WebsitePrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="DATENSCHUTZ · WEBSITE"
          title="Was beim Besuch dieser Website passiert."
          lead="Diese Erklärung gilt für inbox-app.ch und das Kontaktformular – nicht für die Verarbeitung deiner Schuldaten in der App."
        />
        <section className="section legal-section">
          <div className="container legal-grid">
            <aside>
              <a href="/datenschutz">← Auswahl</a>
              <a href="#ueberblick">Überblick</a>
              <a href="#hosting">Website &amp; Hosting</a>
              <a href="#kontaktformular">Kontaktformular</a>
              <a href="#tracking">Cookies &amp; Tracking</a>
              <a href="#empfaenger">Empfänger</a>
              <a href="#loeschung">Löschung</a>
              <a href="#rechte">Deine Rechte</a>
            </aside>
            <article>
              <p className="legal-note">Gültig für inbox-app.ch · Stand: 20. August 2026</p>

              <section id="ueberblick">
                <span className="legal-kicker">DAS WICHTIGSTE ZUERST</span>
                <h2>Datenschutz der Website auf einen Blick</h2>
                <div className="legal-summary">
                  <div><b>Keine Analyse</b><span>Keine eigenen Analyse-, Marketing- oder Werbe-Cookies.</span></div>
                  <div><b>Hosting geschützt</b><span>Cloudflare liefert die Website aus und schützt sie vor Angriffen.</span></div>
                  <div><b>Kontakt freiwillig</b><span>Formulardaten werden nur für deine Anfrage verwendet.</span></div>
                </div>
                <p>
                  Verantwortlich für diese Website ist <strong>Yannis Ress</strong>,
                  Schweiz. Datenschutzanfragen kannst du an{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzanfrage%20Inbox%20Website">
                    yannis.66678@gmail.com
                  </a>{" "}
                  senden.
                </p>
              </section>

              <section id="hosting">
                <h2>1. Website und Hosting</h2>
                <p>
                  Diese Website wird über Cloudflare bereitgestellt. Beim
                  Aufruf werden technisch notwendige Verbindungsdaten
                  verarbeitet. Dazu können IP-Adresse, Zeitpunkt, aufgerufene
                  Adresse, Referrer, Browser- und Geräteinformationen sowie
                  Angaben zur Datenübertragung gehören.
                </p>
                <p>
                  Die Verarbeitung dient der sicheren, schnellen und
                  zuverlässigen Auslieferung, der Abwehr von Angriffen und der
                  technischen Fehleranalyse. Cloudflare kann diese Daten als
                  Auftragsbearbeiter in einem internationalen Netzwerk
                  verarbeiten. Weitere Informationen enthält die{" "}
                  <a href="https://www.cloudflare.com/policies/privacy/" rel="noreferrer" target="_blank">
                    Datenschutzerklärung von Cloudflare
                  </a>.
                </p>
              </section>

              <section id="kontaktformular">
                <h2>2. Kontaktformular und Formspree</h2>
                <p>
                  Wenn du das Kontaktformular absendest, verarbeiten wir das
                  gewählte Thema, deine E-Mail-Adresse, deine Nachricht und –
                  falls angegeben – deinen Namen. Zusätzlich können technische
                  Metadaten wie IP-Adresse, Browsertyp, Zugriffszeit und Referrer
                  anfallen. Wir verwenden die Angaben ausschliesslich, um deine
                  Frage, Fehlermeldung, Idee oder Schulanfrage zu bearbeiten und
                  darauf zu antworten.
                </p>
                <div className="legal-callout">
                  <b>Bitte nicht mitsenden</b>
                  <p>
                    Sende keine Passwörter, Zugangsdaten, Gesundheitsdaten oder
                    andere besonders schützenswerte Personendaten. Wenn du unter
                    13 Jahre alt bist, nutze das Formular nur mit Zustimmung
                    einer erziehungsberechtigten Person.
                  </p>
                </div>
                <p>
                  Für Übermittlung und Verwaltung der Anfragen nutzen wir
                  Formspree, Inc. Formspree speichert Einsendungen und löst
                  E-Mail-Benachrichtigungen aus. Nach Angaben des Anbieters
                  werden die Dienste bei Amazon Web Services in den USA
                  betrieben; Daten werden bei der Übertragung und Speicherung
                  verschlüsselt. Internationale Übermittlungen werden unter
                  anderem auf Standardvertragsklauseln gestützt. Details findest
                  du in der{" "}
                  <a href="https://formspree.io/legal/privacy-policy/" rel="noreferrer" target="_blank">
                    Datenschutzerklärung
                  </a>{" "}
                  und den{" "}
                  <a href="https://formspree.io/security/" rel="noreferrer" target="_blank">
                    Sicherheitsinformationen
                  </a>{" "}
                  von Formspree. Alternativ kannst du uns direkt per E-Mail
                  kontaktieren.
                </p>
              </section>

              <section id="tracking">
                <h2>3. Cookies, Tracking, Marketing und externe Links</h2>
                <p>
                  Inbox setzt auf dieser Website derzeit keine eigenen Analyse-,
                  Marketing- oder Werbe-Cookies ein. Wir erstellen keine
                  Werbeprofile, zeigen keine personalisierte Werbung und
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

              <section id="empfaenger">
                <h2>4. Zwecke, Empfänger und Auslandübermittlung</h2>
                <p>
                  Wir bearbeiten Daten zur sicheren Bereitstellung der Website,
                  zur Bearbeitung deiner freiwilligen Anfrage sowie aufgrund
                  unseres berechtigten Interesses, Inbox zu betreiben,
                  abzusichern und anhand von Feedback zu verbessern. Soweit eine
                  Einwilligung erforderlich ist, kann sie jederzeit für die
                  Zukunft widerrufen werden.
                </p>
                <p>
                  Zugriff erhalten nur Personen und Dienstleister, die ihn für
                  Betrieb oder Bearbeitung benötigen, insbesondere Cloudflare
                  für Hosting und Sicherheit sowie Formspree für das
                  Kontaktformular. Bei Bearbeitungen in den USA oder anderen
                  Staaten werden – soweit erforderlich – geeignete Garantien wie
                  anerkannte Standardvertragsklauseln eingesetzt.
                </p>
              </section>

              <section id="loeschung">
                <h2>5. Aufbewahrung und Löschung</h2>
                <p>
                  Kontaktanfragen und zugehörige Formspree-Einsendungen löschen
                  wir grundsätzlich spätestens zwölf Monate nach
                  abschliessender Bearbeitung. Eine längere Aufbewahrung erfolgt
                  nur, wenn sie für gesetzliche Pflichten, die Durchsetzung von
                  Ansprüchen oder die Dokumentation eines fortbestehenden
                  Supportfalls erforderlich ist. Technische Protokolle werden
                  nach den Vorgaben der jeweiligen Dienstleister nur so lange
                  aufbewahrt, wie es für Sicherheit und Betrieb erforderlich ist.
                </p>
              </section>

              <section id="rechte">
                <h2>6. Deine Rechte, Sicherheit und Änderungen</h2>
                <p>
                  Du kannst im Rahmen des anwendbaren Rechts Auskunft,
                  Berichtigung, Löschung, Einschränkung, Herausgabe oder
                  Übertragung deiner Personendaten verlangen und bestimmten
                  Bearbeitungen widersprechen. Schreibe dafür an{" "}
                  <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzrechte%20Inbox%20Website">
                    yannis.66678@gmail.com
                  </a>. Zum Schutz deiner Daten können wir einen geeigneten
                  Identitätsnachweis verlangen.
                </p>
                <p>
                  Wir setzen angemessene technische und organisatorische
                  Massnahmen zum Schutz von Personendaten ein und aktualisieren
                  diese Erklärung bei Änderungen. Die Datenschutzerklärung der
                  App findest du separat unter{" "}
                  <a href="/datenschutz/app">Datenschutz der Inbox App</a>.
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
