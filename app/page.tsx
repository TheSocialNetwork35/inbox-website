/* eslint-disable @next/next/no-img-element -- local app icon is a pre-sized immutable Cloudflare asset */
import { DotField } from "./components/DotField";
import {
  AppPreview,
  FeatureIcon,
  SiteFooter,
  SiteHeader,
  StoreButton,
} from "./components/SiteChrome";

const features = [
  {
    icon: "calendar",
    title: "Dein Tag, sofort klar.",
    text: "Lektion, Raum, Lehrperson und Änderungen – übersichtlich in einem Plan, der sich wie deine App anfühlt.",
  },
  {
    icon: "cap",
    title: "Noten ohne Kopfrechnen.",
    text: "Gesamtschnitt, Fachnoten, Pluspunkte und kommende Prüfungen werden verständlich zusammengeführt.",
  },
  {
    icon: "check",
    title: "Absenzen im Blick.",
    text: "Offen, entschuldigt oder erledigt: Du erkennst den Status sofort und verpasst keine wichtige Änderung.",
  },
];

const testimonials = [
  {
    quote:
      "Ich öffne Inbox morgens einmal und weiss direkt, was heute läuft. Genau so sollte eine Schul-App sein.",
    person: "Mia, 4. Klasse",
  },
  {
    quote:
      "Die Pluspunkte und der Gesamtschnitt sparen mir jedes Mal das Nachrechnen. Alles fühlt sich angenehm ruhig an.",
    person: "Noah, 3. Klasse",
  },
  {
    quote:
      "Endlich Stundenplan, Noten und Absenzen an einem Ort – ohne dass ich mich durch Menüs kämpfen muss.",
    person: "Lina, 2. Klasse",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-dots" aria-hidden="true">
            <DotField
              dotRadius={1.5}
              dotSpacing={14}
              bulgeStrength={67}
              glowRadius={160}
            />
          </div>
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Schule. Nur entspannter.
              </div>
              <h1>
                Alles für deinen
                <br />
                <span>Schulalltag.</span>
              </h1>
              <p className="hero-lead">
                Stundenplan, Noten, Prüfungen und Absenzen in einer App, die
                nicht nach Verwaltung aussieht – sondern nach dir.
              </p>
              <div className="hero-actions">
                <StoreButton />
                <a href="/funktionen" className="text-link">
                  Funktionen entdecken <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="trust-row" aria-label="Vorteile">
                <span>● Für iPhone &amp; iPad</span>
                <span>● Sicher verbunden</span>
                <span>● Schnell eingerichtet</span>
              </div>
            </div>
            <div className="hero-product">
              <div className="phone-halo" aria-hidden="true" />
              <AppPreview variant="plan" className="hero-phone" />
              <div className="floating-card floating-grade">
                <span className="floating-icon green">↗</span>
                <span>
                  <small>Neue Note</small>
                  <strong>Mathematik · 5.5</strong>
                </span>
              </div>
              <div className="floating-card floating-next">
                <span className="floating-icon violet">⌁</span>
                <span>
                  <small>Als Nächstes</small>
                  <strong>Informatik · B 2.12</strong>
                </span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#alles-drin">
            <span>Mehr entdecken</span>
            <i aria-hidden="true">↓</i>
          </a>
        </section>

        <section className="marquee-strip" aria-label="Inbox Funktionen">
          <div>
            <span>STUNDENPLAN</span><i>✦</i>
            <span>NOTEN</span><i>✦</i>
            <span>PLUS-PUNKTE</span><i>✦</i>
            <span>ABSENZEN</span><i>✦</i>
            <span>PRÜFUNGEN</span><i>✦</i>
          </div>
        </section>

        <section id="alles-drin" className="section light-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="kicker">ALLES DRIN</span>
              <h2>Eine App. Dein ganzer Schultag.</h2>
              <p>
                Inbox bringt die Informationen zusammen, die du wirklich
                brauchst – klar, schnell und ohne Ablenkung.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className="feature-card" key={feature.title}>
                  <FeatureIcon name={feature.icon} />
                  <span className="feature-number">0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <a href="/funktionen">Mehr erfahren →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-story">
          <div className="container story-grid">
            <div className="story-visual">
              <AppPreview variant="grades" />
              <div className="metric-chip metric-average">
                <small>Gesamtschnitt</small>
                <strong>5.12</strong>
              </div>
              <div className="metric-chip metric-points">
                <small>Pluspunkte</small>
                <strong>+4.5</strong>
              </div>
            </div>
            <div className="story-copy">
              <span className="kicker">NOTEN &amp; PRÜFUNGEN</span>
              <h2>Du weisst, wo du stehst.</h2>
              <p>
                Inbox macht aus Zahlen ein verständliches Bild. Sieh deine
                Entwicklung, rechne Pluspunkte automatisch und entdecke, welche
                Prüfung als Nächstes kommt.
              </p>
              <ul className="check-list">
                <li><b>Automatische Berechnung</b><span>Durchschnitt und Pluspunkte ohne Taschenrechner.</span></li>
                <li><b>Prüfungen voraus</b><span>Termine mit Countdown auf einen Blick.</span></li>
                <li><b>Neue Noten sofort sehen</b><span>Mit Benachrichtigungen, wenn sich etwas ändert.</span></li>
              </ul>
              <a href="/funktionen#noten" className="button button-dark">
                Notenfunktionen ansehen
              </a>
            </div>
          </div>
        </section>

        <section className="section dark-panel">
          <div className="container split-copy">
            <div>
              <span className="kicker kicker-light">FÜR DEINE SCHULE</span>
              <h2>Verbunden mit dem System, das du schon nutzt.</h2>
            </div>
            <div>
              <p>
                Inbox verbindet sich sicher mit unterstützten Schulen und zeigt
                deine bestehenden Daten in einer moderneren, fokussierten
                Oberfläche.
              </p>
              <a href="/schulen" className="button button-light">
                Unterstützte Schulen prüfen
              </a>
            </div>
          </div>
          <div className="container school-logo-row">
            {["KEN", "KKN", "KUE", "KST", "KSH"].map((school) => (
              <span key={school}>{school}</span>
            ))}
            <a href="/schulen">+ weitere</a>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">AUS DEM SCHULALLTAG</span>
              <h2>Weniger suchen. Mehr wissen.</h2>
            </div>
            <div className="quote-grid">
              {testimonials.map((item) => (
                <figure key={item.person}>
                  <div className="stars" aria-label="5 von 5 Sternen">★★★★★</div>
                  <blockquote>“{item.quote}”</blockquote>
                  <figcaption>{item.person}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <DotField
            dotRadius={1.5}
            dotSpacing={17}
            bulgeStrength={48}
            glowRadius={130}
            gradientFrom="rgba(255,255,255,.17)"
            gradientTo="rgba(255,255,255,.05)"
            glowColor="#6d4cff"
          />
          <div className="container cta-inner">
            <img src="/assets/app-icon.png" alt="Inbox App Icon" />
            <span className="kicker kicker-light">BEREIT?</span>
            <h2>Dein Schulalltag kann einfacher sein.</h2>
            <p>Lade Inbox herunter und hab morgen schon alles im Blick.</p>
            <StoreButton light />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
