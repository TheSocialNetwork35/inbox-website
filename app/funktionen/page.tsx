import type { Metadata } from "next";
import {
  AppScreenshot,
  FeatureIcon,
  PageHero,
  SiteFooter,
  SiteHeader,
  StoreButton,
} from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Funktionen",
  description:
    "Entdecke Stundenplan, Notenübersicht, Pluspunkte, Prüfungen, Absenzen und Benachrichtigungen in Inbox.",
  alternates: { canonical: "/funktionen" },
};

const details = [
  ["bell", "Änderungen, wenn sie passieren", "Inbox informiert dich über neue Noten und hält deine Schuldaten aktuell."],
  ["offline", "Auch ohne perfekte Verbindung", "Bereits geladene Daten bleiben verfügbar, wenn das Schul-WLAN einmal nicht mitspielt."],
  ["lock", "Deine Daten bleiben deine", "Zugangsdaten werden geschützt gespeichert und nur für die Verbindung zu deiner Schule verwendet."],
];

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="FUNKTIONEN"
          title="Mehr Überblick. Weniger Aufwand."
          lead="Inbox denkt deinen Schulalltag vom ersten Blick bis zum letzten Prüfungstermin – mit genau den Informationen, die gerade zählen."
        >
          <StoreButton light />
        </PageHero>

        <section className="section feature-showcase">
          <div className="container showcase-row">
            <div className="showcase-copy">
              <span className="kicker">STUNDENPLAN</span>
              <h2>Dein Tag beginnt mit Klarheit.</h2>
              <p>Wische durch die Woche, erkenne Pausen und finde Raum oder Lehrperson ohne Umwege. Die kompakte Tagesansicht bleibt auch bei einem vollen Stundenplan ruhig.</p>
              <ul className="plain-list">
                <li>✓ Tages- und Wochenübersicht</li>
                <li>✓ Räume, Zeiten und Lehrpersonen</li>
                <li>✓ Hausaufgaben-Erinnerungen</li>
                <li>✓ Schneller Sprung zu heute</li>
              </ul>
            </div>
            <div className="showcase-visual"><AppScreenshot screen="plan" /></div>
          </div>
        </section>

        <section id="noten" className="section feature-showcase alt">
          <div className="container showcase-row reverse">
            <div className="showcase-copy">
              <span className="kicker">NOTEN &amp; PLUSPUNKTE</span>
              <h2>Aus einzelnen Noten wird dein Gesamtbild.</h2>
              <p>Inbox zeigt Fachdurchschnitte, Gesamtschnitt und Pluspunkte nachvollziehbar an. Kommende Prüfungen stehen direkt daneben – damit Rückblick und Planung zusammengehören.</p>
              <ul className="plain-list">
                <li>✓ Automatische Durchschnitte</li>
                <li>✓ Schweizer Pluspunkte-System</li>
                <li>✓ Prüfungs-Countdowns</li>
                <li>✓ Entwicklung je Fach</li>
              </ul>
            </div>
            <div className="showcase-visual"><AppScreenshot screen="grades" /></div>
          </div>
        </section>

        <section className="section feature-showcase">
          <div className="container showcase-row">
            <div className="showcase-copy">
              <span className="kicker">ABSENZEN</span>
              <h2>Offen ist offen. Erledigt ist erledigt.</h2>
              <p>Alle Einträge werden klar gruppiert und mit ihrem Status dargestellt. So weisst du sofort, ob noch etwas zu tun ist – oder ob du den Kopf frei hast.</p>
              <ul className="plain-list">
                <li>✓ Nach Datum gruppiert</li>
                <li>✓ Status sofort erkennbar</li>
                <li>✓ Filter für offene Einträge</li>
                <li>✓ Semesterweise Übersicht</li>
              </ul>
            </div>
            <div className="showcase-visual"><AppScreenshot screen="absences" /></div>
          </div>
        </section>

        <section className="section micro-features">
          <div className="container">
            <div className="section-heading centered">
              <span className="kicker">DIE DETAILS ZÄHLEN</span>
              <h2>Für den echten Schulalltag gebaut.</h2>
            </div>
            <div className="feature-grid">
              {details.map(([icon, title, text]) => (
                <article className="feature-card compact" key={title}>
                  <FeatureIcon name={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="center-action"><a className="button button-dark" href="/schulen">Ist meine Schule dabei?</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
