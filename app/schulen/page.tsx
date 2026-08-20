import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StoreButton } from "../components/SiteChrome";
import { SchoolDirectory } from "../components/SchoolDirectory";

export const metadata: Metadata = {
  title: "Unterstützte Schulen",
  description:
    "Prüfe, welche Schulen aktuell von Inbox unterstützt werden und wie die sichere Verbindung funktioniert.",
  alternates: { canonical: "/schulen" },
};

export default function SchoolsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="SCHULEN"
          title="Deine Schule. In einer besseren Ansicht."
          lead="Inbox verbindet sich mit ausgewählten Schulen und macht aus bestehenden Schuldaten eine schnelle, moderne App-Erfahrung."
        >
          <StoreButton light />
        </PageHero>
        <section className="section schools-section">
          <div className="container narrow">
            <div className="section-heading centered">
              <span className="kicker">AKTUELL UNTERSTÜTZT</span>
              <h2>Ist deine Schule dabei?</h2>
              <p>Die Liste wird laufend erweitert. Suche nach Kürzel, Name oder Ort.</p>
            </div>
            <SchoolDirectory />
            <div className="school-request">
              <div><span className="kicker">NOCH NICHT DABEI?</span><h2>Wünsch dir deine Schule.</h2><p>Schreib uns kurz, welche Schule fehlt. Anfragen helfen uns, die nächsten Integrationen zu priorisieren.</p></div>
              <a className="button button-light" href="/kontakt?thema=Schule%20vorschlagen">Schule vorschlagen</a>
            </div>
          </div>
        </section>
        <section className="section connection-section">
          <div className="container connection-grid">
            <div><span className="kicker">SO FUNKTIONIERT’S</span><h2>In drei Schritten verbunden.</h2></div>
            <ol>
              <li><span>1</span><div><b>Inbox laden</b><p>Installiere die App kostenlos auf deinem iPhone oder iPad.</p></div></li>
              <li><span>2</span><div><b>Schule auswählen</b><p>Wähle deine Schule aus der Liste der unterstützten Systeme.</p></div></li>
              <li><span>3</span><div><b>Sicher anmelden</b><p>Nutze deinen bestehenden Schulzugang – danach ist alles bereit.</p></div></li>
            </ol>
          </div>
          <div className="center-action"><a className="text-link dark-link" href="/datenschutz/app">Wie die Inbox App deine Daten schützt →</a></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
