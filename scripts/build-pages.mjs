import assert from "node:assert/strict";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const outputRoot = new URL("../pages-dist/", import.meta.url);
const clientRoot = new URL("../dist/client/", import.meta.url);
const viteDeployRedirect = new URL("../.wrangler/deploy/config.json", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages-build", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const routes = [
  "/",
  "/funktionen",
  "/schulen",
  "/support",
  "/kontakt",
  "/datenschutz",
  "/datenschutz/app",
  "/datenschutz/website",
  "/404",
];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://inbx.page";

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const context = {
  waitUntil() {},
  passThroughOnException() {},
};

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route}`, {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );
  assert.equal(response.status, 200, `Failed to render ${route}`);
  const html = await response.text();
  const target =
    route === "/"
      ? new URL("index.html", outputRoot)
      : route === "/404"
        ? new URL("404.html", outputRoot)
        : new URL(`.${route}/index.html`, outputRoot);
  await mkdir(new URL("./", target), { recursive: true });
  await writeFile(target, html);
}

const sitemap = [
  ["", "1.0"],
  ["/funktionen", "0.9"],
  ["/schulen", "0.8"],
  ["/support", "0.7"],
  ["/kontakt", "0.7"],
  ["/datenschutz", "0.5"],
  ["/datenschutz/app", "0.6"],
  ["/datenschutz/website", "0.5"],
]
  .map(
    ([path, priority]) =>
      `  <url><loc>${siteUrl}${path}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`,
  )
  .join("\n");

await writeFile(
  new URL("sitemap.xml", outputRoot),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`,
);
await writeFile(
  new URL("robots.txt", outputRoot),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

await readFile(new URL("_redirects", outputRoot), "utf8");
await rm(viteDeployRedirect, { force: true });

console.log(`Cloudflare Pages bundle ready: ${routes.length} HTML pages`);
