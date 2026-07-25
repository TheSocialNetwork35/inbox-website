import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Informationen zum Datenschutz und zur Datenverarbeitung in Inbox.",
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
              <a href="#grundsatz">Grundsatz</a>
              <a href="#daten">Verarbeitete Daten</a>
              <a href="#speicherung">Speicherung</a>
              <a href="#tracking">Tracking &amp; Werbung</a>
              <a href="#loeschung">Löschung</a>
              <a href="#impressum">Impressum</a>
            </aside>
            <article>
              <p className="legal-note">Zuletzt aktualisiert: 23. März 2026</p>
              <section id="grundsatz"><h2>1. Grundsatz</h2><p>Diese Datenschutzerklärung erklärt, welche personenbezogenen Daten die App Inbox verarbeitet und zu welchem Zweck. Die Verarbeitung erfolgt ausschliesslich, um deine Schulinformationen in der App darzustellen.</p></section>
              <section id="daten"><h2>2. Welche Daten verarbeitet werden</h2><p>Inbox verarbeitet die Login-Daten deines Schulkontos sowie Schulinformationen, die über dieses Konto abgerufen werden: Stundenplan, Noten und Absenzen.</p></section>
              <section id="speicherung"><h2>3. Speicherorte</h2><p>Dein Passwort wird sicher in der iOS-Keychain gespeichert. Zusätzlich speichert die App lokale Caches auf deinem Gerät, um Inhalte schneller anzuzeigen.</p></section>
              <section id="tracking"><h2>4. Kein Tracking, keine Werbung, kein Datenverkauf</h2><p>Inbox verwendet kein Werbe-Tracking, zeigt keine Werbung an und verkauft keine personenbezogenen Daten.</p></section>
              <section id="loeschung"><h2>5. Löschung von Daten</h2><p>Durch Logout werden gespeicherte Zugangsdaten entfernt. Durch das Löschen der App werden lokale Caches auf dem Gerät entfernt.</p></section>
              <section><h2>6. Kontakt für Datenschutzanfragen</h2><p>Für Fragen zum Datenschutz erreichst du uns unter <a href="mailto:yannis.66678@gmail.com?subject=Datenschutzanfrage%20Inbox">yannis.66678@gmail.com</a>.</p></section>
              <section className="legal-english" lang="en"><h2>English (short)</h2><p>Inbox processes school account login data and school information (schedule, grades, absences) only to display them in the app. No tracking, no ads, no data sale.</p></section>
              <section id="impressum"><h2>Impressum / Verantwortlicher</h2><p><strong>Yannis Ress</strong><br />Verantwortlich für die Inbox App<br /><a href="mailto:yannis.66678@gmail.com">yannis.66678@gmail.com</a></p></section>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
