import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders every public route", async () => {
  const routes = [
    ["/", /Alles für deinen/],
    ["/funktionen", /Mehr Überblick/],
    ["/schulen", /Deine Schule/],
    ["/support", /Wie können wir helfen/],
    ["/kontakt", /Deine Idee gehört/],
    ["/datenschutz", /Zwei Angebote/],
    ["/datenschutz/app", /Was die App mit deinen Daten macht/],
    ["/datenschutz/website", /Was beim Besuch dieser Website passiert/],
    ["/404", /Diese Seite fehlt im Stundenplan/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  }
});

test("ships production metadata, motion accessibility, and Pages output", async () => {
  const [layout, motion, privacy, css, packageJson, pagesIndex, pages404, robots, sitemap] =
    await Promise.all([
      readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/components/MotionController.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/datenschutz/website/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../pages-dist/index.html", import.meta.url), "utf8"),
      readFile(new URL("../pages-dist/404.html", import.meta.url), "utf8"),
      readFile(new URL("../pages-dist/robots.txt", import.meta.url), "utf8"),
      readFile(new URL("../pages-dist/sitemap.xml", import.meta.url), "utf8"),
    ]);

  assert.match(layout, /SoftwareApplication/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /__inboxInitialFragment/);
  assert.match(layout, /DOMContentLoaded/);
  assert.match(motion, /history\.replaceState/);
  assert.match(motion, /event\.preventDefault/);
  assert.match(privacy, /Formspree/);
  assert.match(privacy, /Cloudflare/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(packageJson, /build:pages/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(pagesIndex, /Inbox/);
  assert.match(pagesIndex, /href="\/assets\/inbox-favicon\.png\?v=2"/);
  assert.match(pages404, /Seite fehlt im Stundenplan/);
  assert.match(robots, /Sitemap: https:\/\/inbx\.page\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/inbx\.page<\/loc>/);
  assert.doesNotMatch(robots, /inbox-app\.ch/);
  assert.doesNotMatch(sitemap, /inbox-app\.ch/);
  await access(new URL("../pages-dist/assets/app-icon.png", import.meta.url));
  await access(new URL("../pages-dist/assets/inbox-favicon.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
