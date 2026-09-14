"use client";

import { useEffect, useState } from "react";
import { AppScreenshot } from "./SiteChrome";

const galleries = {
  android: [
    { screen: "plan", title: "Dein Tag, kompakt.", text: "Lektionen, Räume und Pausen. Alles bereit für den nächsten Schultag." },
    { screen: "grades", title: "Wissen, wo du stehst.", text: "Noten, Durchschnitt und Pluspunkte in einer klaren Übersicht." },
    { screen: "grades-dark", title: "Auch abends angenehm.", text: "Der Dunkelmodus bringt Ruhe in deinen Überblick." },
  ],
  ios: [
    { screen: "plan", title: "Dein Tag, kompakt.", text: "Dein Stundenplan auf dem iPhone – vom ersten Fach bis zur letzten Pause." },
    { screen: "grades", title: "Wissen, wo du stehst.", text: "Fachnoten, Schnitt und Pluspunkte, ohne selbst nachzurechnen." },
    { screen: "trend", title: "Deine Entwicklung sehen.", text: "Der Leistungsverlauf zeigt dir, wie sich deine Noten entwickeln." },
  ],
} as const;

export function PlatformGallery() {
  const [platform, setPlatform] = useState<"android" | "ios">("android");

  useEffect(() => {
    // Android links elsewhere on the page should also reset a previously selected iOS view.
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const url = new URL(link.href);
      if (url.origin === window.location.origin && url.pathname === "/" && url.hash === "#android") {
        setPlatform("android");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <section id="android" className="section app-gallery platform-gallery">
      <div className="container">
        <div className="section-heading centered">
          <span className="kicker">FÜR DIE GANZE KLASSE</span>
          <h2>Dein Smartphone. Dein Inbox.</h2>
          <p>
            Ob iPhone, iPad oder Android-Smartphone: Inbox passt in deinen
            Schulalltag. Für jede Schülerin und jeden Schüler an einer{" "}
            <a href="/schulen">unterstützten Schule</a>.
          </p>
        </div>
        <div className="platform-switch" role="group" aria-label="Screenshot-Plattform wählen">
          <button type="button" aria-pressed={platform === "ios"} onClick={() => setPlatform("ios")}>
            iOS <span>iPhone &amp; iPad</span>
          </button>
          <button type="button" aria-pressed={platform === "android"} onClick={() => setPlatform("android")}>
            Android <span>Android-Smartphones</span>
          </button>
        </div>
        <p className="platform-caption" aria-live="polite">
          {platform === "android" ? "Einblicke in die Android-App · Mit Beispieldaten" : "Einblicke in die iOS-App"}
        </p>
        <div className="screen-gallery platform-screen-gallery">
          {galleries[platform].map((item, index) => (
            <article className="screen-gallery-card" key={`${platform}-${item.screen}`}>
              <AppScreenshot screen={item.screen} platform={platform} />
              <div>
                <span>{platform === "android" ? "ANDROID" : "iOS"} / 0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
