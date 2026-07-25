"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion-ready");

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-heading, .feature-card, .story-copy, .story-visual, .split-copy > *, .school-logo-row > *, .quote-grid figure, .showcase-copy, .showcase-visual, .support-grid > *, .faq-list details, .school-list article, .connection-grid > *, .legal-grid > *, .contact-banner, .school-request, .screen-gallery-card",
      ),
    );

    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
    });

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
    );

    revealItems.forEach((item) => observer.observe(item));
    const introFrame = window.requestAnimationFrame(() => root.classList.add("intro-ready"));

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(introFrame);
      root.classList.remove("motion-ready", "intro-ready");
    };
  }, []);

  return null;
}
