import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MotionController } from "./components/MotionController";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://inbox-app.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inbox – Deine Schule. Alles im Blick.",
    template: "%s | Inbox",
  },
  description:
    "Inbox vereint Stundenplan, Noten, Pluspunkte, Prüfungen und Absenzen in einer modernen App für Schweizer Schülerinnen und Schüler.",
  keywords: [
    "Schulapp",
    "Stundenplan App",
    "Noten App",
    "Pluspunkte Rechner",
    "Schule Schweiz",
    "Prüfungsplaner",
    "Inbox App",
  ],
  authors: [{ name: "Inbox" }],
  creator: "Inbox",
  alternates: { canonical: "/" },
  icons: {
    icon: "/assets/app-icon.png",
    apple: "/assets/app-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "/",
    siteName: "Inbox",
    title: "Inbox – Alles für deinen Schulalltag.",
    description:
      "Stundenplan, Noten, Prüfungen und Absenzen in einer App, die nicht nach Verwaltung aussieht.",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Inbox – Alles für deinen Schulalltag" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbox – Alles für deinen Schulalltag.",
    description: "Deine Schule. Klar, schnell und an einem Ort.",
    images: ["/og-v2.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fragmentBootstrap = `
    (() => {
      const hash = window.location.hash;
      if (!hash) return;

      window.__inboxInitialFragment = hash;
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search
      );

      const jump = () => {
        let id = "";
        try {
          id = decodeURIComponent(hash.slice(1));
        } catch {
          return;
        }

        const target = document.getElementById(id);
        if (!target) return;

        window.scrollTo({
          top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 24),
          behavior: "auto"
        });
        window.__inboxFragmentHandled = true;
      };

      if (document.readyState === "loading") {
        document.addEventListener(
          "DOMContentLoaded",
          () => window.requestAnimationFrame(jump),
          { once: true }
        );
      } else {
        window.requestAnimationFrame(jump);
      }
    })();
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Inbox",
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS, iPadOS",
    description:
      "Stundenplan, Noten, Pluspunkte, Prüfungen und Absenzen in einer modernen Schul-App.",
    url: siteUrl,
    downloadUrl: "https://apps.apple.com/us/app/inbox/id6760919212",
    contactPoint: {
      "@type": "ContactPoint",
      email: "yannis.66678@gmail.com",
      contactType: "customer support",
    },
  };

  return (
    <html lang="de-CH">
      <head>
        <script dangerouslySetInnerHTML={{ __html: fragmentBootstrap }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <MotionController />
        {children}
      </body>
    </html>
  );
}
