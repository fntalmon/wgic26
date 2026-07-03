import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [{ url: "https://wgic26.com", lastModified: new Date() }];
}
