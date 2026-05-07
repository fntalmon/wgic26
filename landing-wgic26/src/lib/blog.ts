import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  content: string;
  contentHtml: string;
  readingTime: number;
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
  bio: string;
}

function getAuthors(): Record<string, Author> {
  const authorsPath = path.join(process.cwd(), "src", "data", "authors.json");
  if (!fs.existsSync(authorsPath)) return {};
  const raw = fs.readFileSync(authorsPath, "utf-8");
  return JSON.parse(raw);
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? new Date().toISOString().split("T")[0],
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage,
    author: data.author ?? "WGIC26 Editorial Team",
    category: data.category ?? "General",
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    content,
    contentHtml,
    readingTime,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAuthor(name: string): Author | null {
  const authors = getAuthors();
  return authors[name] ?? null;
}

export function getRelatedPosts(
  current: BlogPost,
  allPosts: BlogPost[],
  limit = 3
): BlogPost[] {
  const sameCategory = allPosts.filter(
    (p) => p.category === current.category && p.slug !== current.slug
  );
  const others = allPosts.filter(
    (p) => p.category !== current.category && p.slug !== current.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
