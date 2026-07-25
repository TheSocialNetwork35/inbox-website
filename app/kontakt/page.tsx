import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt & Feedback",
  description:
    "Teile deine Idee für Inbox, stelle eine Frage, melde ein Problem oder schlage deine Schule vor.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-glow" aria-hidden="true" />
          <div className="container contact-hero-grid">
            <div className="contact-intro">
              <span className="kicker kicker-light">KONTAKT &amp; FEEDBACK</span>
              <h1>
                Deine Idee gehört
                <br />
                <span>ins Produkt.</span>
              </h1>
              <p>
                Inbox wird für deinen Schulalltag gebaut. Darum wollen wir
                wissen, was dir fehlt, was dich stört und was schon richtig gut
                funktioniert.
              </p>

              <div className="contact-promise">
                <div>
                  <span aria-hidden="true">01</span>
                  <p><strong>Von Menschen gelesen</strong>Keine anonyme Ticket-Wand.</p>
                </div>
                <div>
                  <span aria-hidden="true">02</span>
                  <p><strong>Direkt ins Produkt</strong>Gute Ideen fliessen in die Planung ein.</p>
                </div>
                <div>
                  <span aria-hidden="true">03</span>
                  <p><strong>Persönliche Antwort</strong>In der Regel in 1–3 Werktagen.</p>
                </div>
              </div>

              <div className="direct-email">
                <div className="direct-email-icon" aria-hidden="true">@</div>
                <div>
                  <small>Lieber direkt per E-Mail?</small>
                  <a href="mailto:yannis.66678@gmail.com">
                    yannis.66678@gmail.com
                  </a>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="contact-community">
          <div className="container">
            <span className="kicker">GEMEINSAM BESSER</span>
            <h2>Du nutzt Inbox. Also sollst du Inbox mitprägen können.</h2>
            <p>
              Ob kleine Textänderung, neue Schule oder grosse Funktion:
              Rückmeldungen aus dem echten Schulalltag helfen uns, richtig zu
              priorisieren.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
