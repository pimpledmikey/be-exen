import type { MetadataRoute } from "next";

import { siteUrl } from "./company";

// Se genera al compilar (necesario también para la exportación estática).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/aviso-de-privacidad/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
