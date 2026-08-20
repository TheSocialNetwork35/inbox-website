import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutz bei Inbox – klar getrennt für die iOS-App und die Website mit Kontaktformular.",
  alternates: { canonical: "/datenschutz" },
};

export default function PrivacyOverviewPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="DATENSCHUTZ"
          title="Zwei Angebote. Zwei klare Erklärungen."
          lead="Die Inbox App und diese Website verarbeiten unterschiedliche Daten. Wähle den Bereich, über den du dich informieren möchtest."
        />

        <section className="section legal-section">
          <div className="container privacy-overview">
            <div className="privacy-choice-grid">
              <a className="privacy-choice" href="/datenschutz/app">
                <span className="privacy-choice-number">01</span>
                <span className="legal-kicker">IOS-APP</span>
                <h2>Datenschutz der Inbox App</h2>
                <p>
                  Schulkonto, lokale Speicherung, Stundenplan- und Notendaten,
                  Widgets sowie optionale Push-Mitteilungen.
                </p>
                <b>Zur App-Datenschutzerklärung →</b>
              </a>

              <a className="privacy-choice" href="/datenschutz/website">
                <span className="privacy-choice-number">02</span>
                <span className="legal-kicker">WEBSITE</span>
                <h2>Datenschutz dieser Website</h2>
                <p>
                  Hosting durch Cloudflare, technische Zugriffsdaten und das
                  Kontaktformular über Formspree.
                </p>
                <b>Zur Website-Datenschutzerklärung →</b>
              </a>
            </div>

            <section className="privacy-link-guide" aria-labelledby="app-store-links">
              <span className="legal-kicker">EINDEUTIGE ZIELE</span>
              <h2 id="app-store-links">Die offiziellen Inbox Links</h2>
              <p>
                Damit immer klar ist, wofür eine Seite gedacht ist, führen die
                öffentlichen Links getrennt zu diesen Zielen:
              </p>
              <dl>
                <div>
                  <dt>Datenschutz der App</dt>
                  <dd><a href="/datenschutz/app">inbox-app.ch/datenschutz/app</a></dd>
                </div>
                <div>
                  <dt>Marketing / Produktseite</dt>
                  <dd><Link href="/">inbox-app.ch</Link></dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd><a href="/support">inbox-app.ch/support</a></dd>
                </div>
              </dl>
            </section>

            <section className="privacy-shared" id="verantwortlich">
              <span className="legal-kicker">VERANTWORTLICH</span>
              <h2>Eine Anlaufstelle für beide Bereiche</h2>
              <p>
                Verantwortlich für die Inbox App und diese Website ist
                <strong> Yannis Ress</strong>, Schweiz. Datenschutzanfragen
                kannst du an{" "}
                <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzanfrage%20Inbox">
                  yannis.66678@gmail.com
                </a>{" "}
                senden.
              </p>
              <p>
                Du kannst im Rahmen des anwendbaren Rechts insbesondere
                Auskunft, Berichtigung, Löschung, Einschränkung oder Herausgabe
                deiner Personendaten verlangen und bestimmten Bearbeitungen
                widersprechen. Zudem kannst du dich an den{" "}
                <a href="https://www.edoeb.admin.ch/" rel="noreferrer" target="_blank">
                  Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB)
                </a>{" "}
                wenden.
              </p>
              <p className="legal-note">Stand: 20. August 2026</p>
            </section>

            <section className="privacy-shared" id="impressum">
              <span className="legal-kicker">IMPRESSUM</span>
              <h2>Verantwortlicher Anbieter</h2>
              <p>
                <strong>Yannis Ress</strong><br />
                Verantwortlich für die Inbox App und Website<br />
                Schweiz<br />
                <a href="mailto:yannis.66678@gmail.com">yannis.66678@gmail.com</a>
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
