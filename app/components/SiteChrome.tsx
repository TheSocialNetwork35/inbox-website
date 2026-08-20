/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- pre-sized local assets and full document navigation keep the static Pages build portable */
"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/inbox/id6760919212";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;
    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY.current;
      setScrolled(y > 18);
      if (y < 90) setHidden(false);
      else if (delta > 7) setHidden(true);
      else if (delta < -5) setHidden(false);
      lastY.current = y;
      ticking.current = false;
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${hidden ? " nav-hidden" : ""}${scrolled ? " nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="Inbox Startseite">
          <img src="/assets/app-icon.png" alt="" />
          <span>Inbox</span>
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="/funktionen">Funktionen</a>
          <a href="/schulen">Schulen</a>
          <a href="/support">Support</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
        <div className="nav-actions">
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="nav-download">App laden <span>↗</span></a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Menü öffnen"><span /><span /></summary>
          <div>
            <a href="/funktionen">Funktionen</a>
            <a href="/schulen">Schulen</a>
            <a href="/support">Support</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">App laden ↗</a>
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
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">App laden</a>
        </div>
        <div>
          <h3>Hilfe</h3>
          <a href="/support">Support</a>
          <a href="/support#faq">FAQ</a>
          <a href="/kontakt">Kontakt</a>
        </div>
        <div>
          <h3>Rechtliches</h3>
          <a href="/datenschutz/app">Datenschutz App</a>
          <a href="/datenschutz/website">Datenschutz Website</a>
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
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      className={`store-button ${light ? "store-button-light" : ""}`}
      aria-label="Inbox im App Store laden"
    >
      <span className="apple" aria-hidden="true">
        <svg viewBox="0 0 384 512" role="presentation">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.8 77.3 13.2 35.8 60.8 123.6 110.5 122.2 26-.6 44.3-18.4 78.2-18.4 32.9 0 49.8 18.4 78.7 18.4 50.1-.7 93.9-79.2 106.4-115.1-67.1-31.6-63.9-87.5-63.9-89.2zm-58.9-164.2c24.3-28.9 22.1-55.2 21.4-64.5-21.5 1.2-46.4 14.6-60.6 31.1-15.6 17.7-24.8 39.6-22.8 63.9 23.2 1.8 44.4-10.2 62-30.5z" />
        </svg>
      </span>
      <span className="store-copy"><small>Laden im</small><strong>App Store</strong></span>
      <i className="store-arrow" aria-hidden="true">↗</i>
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

export function AppScreenshot({
  screen,
  className = "",
  priority = false,
}: {
  screen: "plan" | "grades" | "trend" | "absences";
  className?: string;
  priority?: boolean;
}) {
  const labels = {
    plan: "Inbox Stundenplan im Dark Mode",
    grades: "Inbox Notenübersicht im Dark Mode",
    trend: "Inbox Leistungsverlauf im Dark Mode",
    absences: "Inbox Absenzenübersicht im Dark Mode",
  };
  return (
    <figure className={`real-app-shot ${className}`.trim()}>
      <img
        src={`/assets/screenshots/${screen}-dark.png`}
        alt={labels[screen]}
        width="1095"
        height="2239"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </figure>
  );
}

function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="screen-header">
      <span className="screen-avatar">Y</span>
      <div><h4>{title}</h4>{subtitle && <small>{subtitle}</small>}</div>
      <span className="screen-menu-dot" aria-hidden="true">•••</span>
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
