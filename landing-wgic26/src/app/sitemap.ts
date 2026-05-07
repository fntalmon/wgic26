import { MetadataRoute } from "next";
import { getPostSlugs, getPostBySlug } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return {
        slug,
        lastModified: post?.date ? new Date(post.date) : new Date(),
      };
    })
  );

  return [
    { url: "https://wgic26.com", lastModified: new Date() },
    { url: "https://wgic26.com/blog", lastModified: new Date() },
    ...posts.map((p) => ({
      url: `https://wgic26.com/blog/${p.slug}`,
      lastModified: p.lastModified,
    })),
  ];
}
