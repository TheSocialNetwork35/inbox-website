import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://inbox-app.ch";
  return [
    ["", 1],
    ["/funktionen", 0.9],
    ["/schulen", 0.8],
    ["/support", 0.7],
    ["/datenschutz", 0.5],
  ].map(([path, priority]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: Number(priority),
  })) as MetadataRoute.Sitemap;
}
