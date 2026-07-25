import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Support & Hilfe",
  description:
    "Antworten und Hilfe zu Anmeldung, Datenaktualisierung, Noten, Stundenplan und unterstützten Schulen in Inbox.",
  alternates: { canonical: "/support" },
};

const faqs = [
  ["Das Login schlägt fehl. Was kann ich tun?", "Prüfe Benutzername und Passwort deines Schulkontos. Falls das Login weiterhin fehlschlägt, schreib uns eine kurze Problembeschreibung und hänge wenn möglich einen Screenshot an."],
  ["Warum fehlen Noten nach dem Semesterwechsel?", "Nach einem Semesterwechsel können Noten kurz verzögert erscheinen. Öffne die App neu oder melde dich einmal ab und wieder an, damit die Daten vollständig neu geladen werden."],
  ["Meine Widgets aktualisieren sich nicht.", "Entferne das Widget kurz vom Home-Bildschirm und füge es erneut hinzu. Stelle ausserdem sicher, dass du in Inbox eingeloggt bist."],
  ["Wie schnell erhalte ich eine Antwort?", "Support-Anfragen werden in der Regel innerhalb von 1 bis 3 Werktagen beantwortet."],
  ["Welche Informationen soll ich mitsenden?", "Nenne deine Schule, dein Gerät und deine iOS-Version. Eine kurze Beschreibung, die letzten Schritte vor dem Fehler und ein Screenshot helfen uns, das Problem schneller nachzustellen."],
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
            <a href="mailto:yannis.66678@gmail.com?subject=Inbox%20Support"><span>↗</span><h2>Uns schreiben</h2><p>Beschreibe dein Problem und wir kümmern uns darum.</p><b>E-Mail öffnen →</b></a>
            <a href="mailto:yannis.66678@gmail.com?subject=Feedback%20zu%20Inbox"><span>✦</span><h2>Idee teilen</h2><p>Dein Feedback hilft, Inbox für alle besser zu machen.</p><b>Feedback senden →</b></a>
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
              <a className="button button-light" href="mailto:yannis.66678@gmail.com?subject=Inbox%20Support">E-Mail an Yannis</a>
            </div>
            <p className="support-updated">Zuletzt aktualisiert: 23. März 2026 · Verantwortlicher: Yannis Ress</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
