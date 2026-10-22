import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://jatinkushwah.netlify.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
