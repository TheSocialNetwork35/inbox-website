"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fragmentState = window as Window & {
      __inboxInitialFragment?: string;
      __inboxFragmentHandled?: boolean;
    };
    const initialFragment =
      fragmentState.__inboxInitialFragment ?? window.location.hash;
    let fragmentTimer: number | undefined;
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

    const clearFragmentMode = () => {
      window.clearTimeout(fragmentTimer);
      fragmentTimer = window.setTimeout(
        () => root.classList.remove("fragment-navigation"),
        140,
      );
    };

    const jumpToFragment = (hash: string) => {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      root.classList.add("fragment-navigation", "intro-ready");
      revealItems.forEach((item) => item.classList.add("is-visible"));

      window.requestAnimationFrame(() => {
        const targetY =
          target.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "auto" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
        clearFragmentMode();
      });
    };

    const onFragmentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname !== window.location.pathname ||
        !destination.hash
      ) {
        return;
      }

      event.preventDefault();
      jumpToFragment(destination.hash);
    };

    document.addEventListener("click", onFragmentClick);

    if (initialFragment && !fragmentState.__inboxFragmentHandled) {
      jumpToFragment(initialFragment);
    }

    if (reduceMotion || initialFragment) {
      if (initialFragment) {
        root.classList.add("fragment-navigation");
        let initialId = "";
        try {
          initialId = decodeURIComponent(initialFragment.replace(/^#/, ""));
        } catch {
          initialId = "";
        }
        const initialTarget = initialId
          ? document.getElementById(initialId)
          : null;
        initialTarget?.setAttribute("tabindex", "-1");
        initialTarget?.focus({ preventScroll: true });
        clearFragmentMode();
      }
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.classList.add("intro-ready");
      return () => {
        document.removeEventListener("click", onFragmentClick);
        window.clearTimeout(fragmentTimer);
        root.classList.remove(
          "motion-ready",
          "intro-ready",
          "fragment-navigation",
        );
      };
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
      document.removeEventListener("click", onFragmentClick);
      window.clearTimeout(fragmentTimer);
      observer.disconnect();
      window.cancelAnimationFrame(introFrame);
      root.classList.remove(
        "motion-ready",
        "intro-ready",
        "fragment-navigation",
      );
    };
  }, []);

  return null;
}
