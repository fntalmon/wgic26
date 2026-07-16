import Link from "next/link";
import { Mail } from "lucide-react";

interface NewsletterCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
}

export function NewsletterCTA({ title, subtitle, buttonLabel }: NewsletterCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-lg bg-white/5 border border-white/10">
      <div className="text-center sm:text-left">
        <div className="text-lg uppercase">{title}</div>
        <div className="text-sm text-white/60">{subtitle}</div>
      </div>
      <Link
        href="/#newsletter"
        className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-md text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors shrink-0"
      >
        <Mail size={14} />
        {buttonLabel}
      </Link>
    </div>
  );
}
