import type { MetadataRoute } from "next";

import { siteUrl } from "./company";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/aviso-de-privacidad`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
