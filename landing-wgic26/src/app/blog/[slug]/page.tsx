import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getPostBySlug,
  getPostSlugs,
  getAllPosts,
  getAuthor,
  getRelatedPosts,
} from "@/lib/blog";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    metadataBase: new URL("https://wgic26.barcelona"),
    title: `${post.title} | WGIC26 Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = getRelatedPosts(post, allPosts, 3);
  const author = getAuthor(post.author);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col gap-16">
        {/* Back link */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pt-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-potus transition-colors uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <section className="pt-0 gap-0 px-0 sm:px-0 lg:px-0">
            <div className="w-full aspect-[16/9] max-h-[500px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>
          </section>
        )}

        {/* Post Header */}
        <section className="pt-0 gap-6 max-w-5xl xl:max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span className="text-potus uppercase tracking-wider font-medium px-3 py-1 rounded-full bg-potus/10">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-white/70 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Author line */}
          <div className="flex items-center gap-3 text-sm text-white/60">
            <User size={14} />
            <span>{post.author}</span>
          </div>
        </section>

        {/* Post Content */}
        <section className="pt-0 max-w-5xl xl:max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Author Card */}
        {author && (
          <section className="pt-0 max-w-5xl xl:max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 border border-white/10">
              {author.avatar && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <div className="text-lg uppercase">{author.name}</div>
                <div className="text-xs text-potus uppercase tracking-wider">
                  {author.role}
                </div>
                <p className="text-sm text-white/60 mt-1">{author.bio}</p>
              </div>
            </div>
          </section>
        )}

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="pt-0 max-w-5xl xl:max-w-6xl mx-auto w-full gap-8 px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-wider text-white/40">
              You May Also Like
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <article key={r.slug} className="flex flex-col gap-3 group">
                  <Link
                    href={`/blog/${r.slug}`}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <div className="aspect-[16/9] relative">
                      {r.coverImage ? (
                        <Image
                          src={r.coverImage}
                          alt={r.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cactus to-monstera" />
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-col gap-1">
                    <div className="text-[10px] text-potus uppercase tracking-wider">
                      {r.category}
                    </div>
                    <h4 className="text-sm uppercase leading-tight">
                      <Link
                        href={`/blog/${r.slug}`}
                        className="hover:text-potus transition-colors"
                      >
                        {r.title}
                      </Link>
                    </h4>
                    <div className="text-[10px] text-white/50 flex items-center gap-1">
                      <Calendar size={10} />
                      {new Date(r.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="pt-0 max-w-5xl xl:max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-lg bg-cactus/30 border border-white/10">
            <div className="text-center sm:text-left">
              <div className="text-lg uppercase">Join us in Barcelona</div>
              <div className="text-sm text-white/60">
                27–30 October 2026 — CCIB, Barcelona
              </div>
            </div>
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 px-6 py-3 bg-potus text-monstera rounded-md text-sm uppercase tracking-wider font-medium hover:bg-potus/90 transition-colors"
            >
              Register Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <section className="pt-0 max-w-5xl xl:max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <NewsletterCTA
            title="Stay up to date"
            subtitle="Get the latest WGIC26 news, deadlines and speaker announcements in your inbox."
            buttonLabel="Subscribe"
          />
        </section>
      </div>
    </>
  );
}
