import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Support & Hilfe",
  description:
    "Antworten und Hilfe zu Anmeldung, Datenaktualisierung, Noten, Stundenplan und unterstützten Schulen in Inbox.",
  alternates: { canonical: "/support" },
};

const faqs = [
  ["Meine Daten werden nicht aktualisiert. Was kann ich tun?", "Ziehe die jeweilige Ansicht zuerst nach unten, um sie manuell zu aktualisieren. Prüfe danach deine Internetverbindung und ob der Schulzugang im Browser erreichbar ist. Bleibt das Problem bestehen, melde dich mit Schule und iOS-Version bei uns."],
  ["Warum sehe ich eine neue Note noch nicht?", "Manche Schulsysteme stellen Änderungen zeitversetzt bereit. Öffne die Notenansicht und aktualisiere sie manuell. Sobald die Note von der Schule geliefert wird, erscheint sie in Inbox."],
  ["Kann ich Inbox ohne Internet nutzen?", "Bereits geladene Stundenplan-, Noten- und Absenzdaten bleiben auf deinem Gerät verfügbar. Für neue Daten und Änderungen braucht Inbox eine Verbindung."],
  ["Wo werden meine Zugangsdaten gespeichert?", "Deine Anmeldedaten werden geschützt im Schlüsselbund deines Apple-Geräts gespeichert. Weitere Einzelheiten findest du in unserer Datenschutzerklärung."],
  ["Meine Schule fehlt. Kann sie hinzugefügt werden?", "Ja, schreib uns den vollständigen Namen und Ort deiner Schule. Wir sammeln Anfragen und prüfen, welche Systeme als Nächstes unterstützt werden können."],
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="SUPPORT"
          title="Wie können wir helfen?"
          lead="Schnelle Antworten für die häufigsten Fragen – und ein direkter Draht, wenn du persönlich Hilfe brauchst."
        />
        <section className="section support-cards">
          <div className="container support-grid">
            <a href="#faq"><span>?</span><h2>Antwort finden</h2><p>Die häufigsten Fragen kurz und verständlich erklärt.</p><b>Zu den FAQ →</b></a>
            <a href="mailto:support@inbox-app.ch"><span>↗</span><h2>Uns schreiben</h2><p>Beschreibe dein Problem und wir kümmern uns darum.</p><b>E-Mail öffnen →</b></a>
            <a href="mailto:support@inbox-app.ch?subject=Feedback%20zu%20Inbox"><span>✦</span><h2>Idee teilen</h2><p>Dein Feedback hilft, Inbox für alle besser zu machen.</p><b>Feedback senden →</b></a>
          </div>
        </section>
        <section id="faq" className="section faq-section">
          <div className="container narrow">
            <div className="section-heading">
              <span className="kicker">FAQ</span>
              <h2>Häufig gefragt.</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span>+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
            <div className="contact-banner">
              <div><h2>Noch nicht gelöst?</h2><p>Schreib uns mit deiner Schule, deinem Gerät und einer kurzen Beschreibung.</p></div>
              <a className="button button-light" href="mailto:support@inbox-app.ch">support@inbox-app.ch</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
