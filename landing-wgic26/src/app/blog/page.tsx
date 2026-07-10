import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | WGIC26",
  description: "Latest news, updates and stories from the World Green Infrastructure Congress 2026.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const remainingPosts = posts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <section className="pt-0">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider text-potus">
          Blog
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
          News & Updates
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          Discover the latest stories, speaker highlights, and behind-the-scenes
          updates from the World Green Infrastructure Congress 2026.
        </p>
      </section>

      {/* Featured Post (Hero) */}
      {featuredPost && (
        <section className="pt-0 gap-8">
          <div className="text-xs uppercase tracking-wider text-white/40 mb-4">
            Featured
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Image */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="lg:w-1/2 relative overflow-hidden rounded-lg group"
            >
              <div className="aspect-[16/9] relative">
                {featuredPost.coverImage ? (
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cactus to-monstera" />
                )}
              </div>
            </Link>

            {/* Text */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3 text-xs text-white/60">
                <span className="text-potus uppercase tracking-wider font-medium">
                  {featuredPost.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(featuredPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featuredPost.readingTime} min read
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:text-potus transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-white/70 text-base leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-potus text-sm uppercase tracking-wider mt-2 hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Read article
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Remaining Posts Grid */}
      {remainingPosts.length > 0 && (
        <section className="pt-0 gap-8">
          <div className="text-xs uppercase tracking-wider text-white/40 mb-4">
            Latest Posts
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col gap-4 group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[16/9] relative">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cactus to-monstera" />
                    )}
                  </div>
                </Link>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[10px] text-white/60">
                    <span className="text-potus uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readingTime} min
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl uppercase leading-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-potus transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-white/60 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
