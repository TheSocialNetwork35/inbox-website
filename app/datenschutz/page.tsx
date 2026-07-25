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
              <a href="#rechte">Deine Rechte</a>
              <a href="#impressum">Impressum</a>
            </aside>
            <article>
              <p className="legal-note">Stand: 25. Juli 2026</p>
              <section id="grundsatz"><h2>1. Grundsatz</h2><p>Inbox verarbeitet nur Daten, die benötigt werden, um dir deinen Stundenplan, deine Noten, Prüfungen und Absenzen bereitzustellen. Wir verkaufen keine persönlichen Daten und verwenden Schuldaten nicht für personalisierte Werbung.</p></section>
              <section id="daten"><h2>2. Verarbeitete Daten</h2><p>Je nach Schule können Anmeldeinformationen, Stundenplandaten, Fächer, Noten, Prüfungen und Absenzeinträge verarbeitet werden. Technische Diagnosedaten können helfen, Fehler und Abstürze zu beheben. Welche Daten konkret verfügbar sind, bestimmt das angebundene Schulsystem.</p></section>
              <section id="speicherung"><h2>3. Speicherung und Sicherheit</h2><p>Anmeldeinformationen werden geschützt im Schlüsselbund deines Apple-Geräts gespeichert. Bereits abgerufene Inhalte können lokal auf deinem Gerät zwischengespeichert werden, damit Inbox schneller lädt und ausgewählte Informationen auch offline verfügbar bleiben.</p></section>
              <section><h2>4. Benachrichtigungen</h2><p>Wenn du Mitteilungen erlaubst, kann Inbox dich über relevante Änderungen wie neue Noten informieren. Du kannst diese Berechtigung jederzeit in den iOS-Einstellungen ändern.</p></section>
              <section id="rechte"><h2>5. Deine Rechte</h2><p>Du kannst Auskunft, Berichtigung oder Löschung personenbezogener Daten verlangen, soweit solche Daten bei uns gespeichert sind. Lokal gespeicherte App-Daten kannst du durch Abmelden oder Löschen der App entfernen.</p></section>
              <section><h2>6. Kontakt</h2><p>Für Datenschutzfragen erreichst du uns unter <a href="mailto:privacy@inbox-app.ch">privacy@inbox-app.ch</a>.</p></section>
              <section id="impressum"><h2>Impressum</h2><p><strong>Inbox App</strong><br />Schweiz<br /><a href="mailto:hello@inbox-app.ch">hello@inbox-app.ch</a></p><p className="legal-placeholder">Vor Veröffentlichung bitte die vollständige verantwortliche Person bzw. Organisation und ladungsfähige Anschrift ergänzen.</p></section>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
