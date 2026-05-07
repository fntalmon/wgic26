import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[60vh] text-center px-4">
      <div className="text-6xl sm:text-8xl font-light text-potus">404</div>
      <h1 className="text-2xl sm:text-3xl uppercase">Post Not Found</h1>
      <p className="text-white/60 max-w-md">
        The article you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 px-6 py-3 bg-potus text-monstera rounded-md text-sm uppercase tracking-wider font-medium hover:bg-potus/90 transition-colors"
      >
        <ArrowLeft size={14} />
        Back to Blog
      </Link>
    </div>
  );
}
