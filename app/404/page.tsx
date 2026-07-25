/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is intentional in the static Pages build */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero not-found">
          <div className="page-hero-glow" />
          <div className="container page-hero-inner">
            <span className="kicker kicker-light">FEHLER 404</span>
            <h1>Diese Seite fehlt im Stundenplan.</h1>
            <p>Der Link ist nicht mehr aktuell oder die Seite wurde verschoben.</p>
            <a className="button button-light" href="/">Zur Startseite</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
