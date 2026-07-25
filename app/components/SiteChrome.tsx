/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- pre-sized local assets and full document navigation keep the static Pages build portable */
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="Inbox Startseite">
          <img src="/assets/app-icon.png" alt="" />
          <span>Inbox</span>
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="/funktionen">Funktionen</a>
          <a href="/schulen">Schulen</a>
          <a href="/support">Support</a>
        </nav>
        <div className="nav-actions">
          <a href="/support" className="nav-support">Hilfe</a>
          <a href="#download" className="nav-download">App laden <span>↗</span></a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Menü öffnen"><span /><span /></summary>
          <div>
            <a href="/funktionen">Funktionen</a>
            <a href="/schulen">Schulen</a>
            <a href="/support">Support</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="/" className="brand"><img src="/assets/app-icon.png" alt="" /><span>Inbox</span></a>
          <p>Deine Schule. Alles im Blick.</p>
        </div>
        <div>
          <h3>Entdecken</h3>
          <a href="/funktionen">Funktionen</a>
          <a href="/schulen">Schulen</a>
          <a href="#download">App laden</a>
        </div>
        <div>
          <h3>Hilfe</h3>
          <a href="/support">Support</a>
          <a href="/support#faq">FAQ</a>
          <a href="mailto:support@inbox-app.ch">Kontakt</a>
        </div>
        <div>
          <h3>Rechtliches</h3>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/datenschutz#impressum">Impressum</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Inbox</span>
        <span>Mit Sorgfalt in der Schweiz gestaltet.</span>
      </div>
    </footer>
  );
}

export function StoreButton({ light = false }: { light?: boolean }) {
  return (
    <a
      id="download"
      href="#app-store"
      className={`store-button ${light ? "store-button-light" : ""}`}
      aria-label="Inbox im App Store laden"
    >
      <span className="apple" aria-hidden="true">●</span>
      <span><small>Laden im</small><strong>App Store</strong></span>
      <i aria-hidden="true">↗</i>
    </a>
  );
}

export function FeatureIcon({ name }: { name: string }) {
  const glyphs: Record<string, string> = {
    calendar: "▦",
    cap: "◇",
    check: "✓",
    bell: "◌",
    lock: "⌾",
    offline: "↯",
  };
  return <span className={`feature-icon feature-icon-${name}`} aria-hidden="true">{glyphs[name] ?? "•"}</span>;
}

export function AppPreview({
  variant = "plan",
  className = "",
}: {
  variant?: "plan" | "grades" | "absences";
  className?: string;
}) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="dynamic-island" />
          <div className="statusbar"><span>09:41</span><span>● ◔ ▰</span></div>
          {variant === "plan" && <PlanScreen />}
          {variant === "grades" && <GradesScreen />}
          {variant === "absences" && <AbsencesScreen />}
          <div className="tabbar">
            <span className={variant === "plan" ? "active" : ""}><b>▦</b>Plan</span>
            <span className={variant === "grades" ? "active" : ""}><b>◇</b>Noten</span>
            <span className={variant === "absences" ? "active" : ""}><b>◉</b>Absenzen</span>
            <span><b>•••</b>Mehr</span>
          </div>
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  );
}

function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="screen-header">
      <span className="screen-avatar">Y</span>
      <div><h4>{title}</h4>{subtitle && <small>{subtitle}</small>}</div>
      <button aria-label="Ansicht wechseln">•••</button>
    </div>
  );
}

function PlanScreen() {
  return (
    <div className="app-content">
      <ScreenHeader title="Dienstag" subtitle="25. Juli · Woche 30" />
      <div className="date-tabs">
        {[
          ["MO", "24"], ["DI", "25"], ["MI", "26"], ["DO", "27"], ["FR", "28"],
        ].map(([day, date], index) => (
          <span className={index === 1 ? "selected" : ""} key={day}><small>{day}</small><b>{date}</b></span>
        ))}
      </div>
      <div className="day-summary"><span>Heute</span><b>6 Lektionen</b><small>08:15–15:30</small></div>
      <Lesson color="purple" time="08:15" end="09:00" subject="Mathematik" meta="M. Keller · B 2.12" />
      <Lesson color="blue" time="09:10" end="09:55" subject="Informatik" meta="S. Frei · C 1.04" />
      <div className="break-row"><span>09:55</span><i />Pause · 20 Min.</div>
      <Lesson color="green" time="10:15" end="11:00" subject="Englisch" meta="A. Walker · A 3.08" />
      <Lesson color="orange" time="11:10" end="11:55" subject="Wirtschaft" meta="L. Meier · B 1.16" />
    </div>
  );
}

function Lesson({
  color,
  time,
  end,
  subject,
  meta,
}: {
  color: string;
  time: string;
  end: string;
  subject: string;
  meta: string;
}) {
  return (
    <div className="lesson-row">
      <span className="lesson-time"><b>{time}</b><small>{end}</small></span>
      <div className={`lesson-card ${color}`}><b>{subject}</b><small>{meta}</small><i>›</i></div>
    </div>
  );
}

function GradesScreen() {
  return (
    <div className="app-content grades-content">
      <ScreenHeader title="Noten" subtitle="Frühlingssemester 2026" />
      <div className="performance-card">
        <div><small>Leistungsübersicht</small><span>›</span></div>
        <section><span><small>Gesamtschnitt</small><strong>5.12</strong></span><i /><span><small>Pluspunkte</small><strong className="green-text">+4.5</strong></span></section>
      </div>
      <div className="exam-card"><span>⌁</span><div><b>Bevorstehende Prüfungen</b><small>In 3 Tagen · 28. Juli</small></div><em>3</em><i>›</i></div>
      <div className="screen-label"><b>Fächer</b><span>6 Fächer</span></div>
      <Subject name="Mathematik" value="5.35" grades="4 Noten" color="purple" />
      <Subject name="Informatik" value="5.60" grades="3 Noten" color="blue" />
      <Subject name="Englisch" value="5.10" grades="5 Noten" color="green" />
      <Subject name="Wirtschaft" value="4.85" grades="4 Noten" color="orange" />
    </div>
  );
}

function Subject({ name, value, grades, color }: { name: string; value: string; grades: string; color: string }) {
  return <div className="subject-row"><span className={`subject-dot ${color}`} /><div><b>{name}</b><small>{grades}</small></div><strong>{value}</strong><i>›</i></div>;
}

function AbsencesScreen() {
  return (
    <div className="app-content absences-content">
      <ScreenHeader title="Absenzen" subtitle="Frühlingssemester 2026" />
      <div className="absence-summary"><span><strong>2</strong><small>Insgesamt</small></span><i /><span><strong className="green-text">0</strong><small>Nicht entschuldigt</small></span></div>
      <div className="segmented"><b>Alle</b><span>Offen</span></div>
      <div className="screen-label"><b>Mittwoch, 14. Mai</b></div>
      <div className="absence-row"><b>Englisch</b><small>10:15 · A. Walker</small><span>Entschuldigt</span></div>
      <div className="screen-label"><b>Freitag, 11. April</b></div>
      <div className="absence-row"><b>Sport</b><small>13:45 · D. Bachmann</small><span>Entschuldigt</span></div>
      <div className="all-good"><i>✓</i><b>Alles erledigt</b><small>Du hast keine offenen Absenzen.</small></div>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container page-hero-inner">
        <span className="kicker kicker-light">{kicker}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
        {children}
      </div>
    </section>
  );
}
