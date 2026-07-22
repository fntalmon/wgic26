import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RegisterCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  href?: string;
  external?: boolean;
}

export function RegisterCTA({
  title,
  subtitle,
  buttonLabel,
  href = "/registration",
  external = false,
}: RegisterCTAProps) {
  const buttonClassName =
    "inline-flex items-center gap-2 px-6 py-3 bg-potus text-monstera rounded-md text-sm uppercase tracking-wider font-medium hover:bg-potus/90 transition-colors shrink-0";

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-lg bg-cactus/30 border border-white/10">
      <div className="text-center sm:text-left">
        <div className="text-lg uppercase">{title}</div>
        <div className="text-sm text-white/60">{subtitle}</div>
      </div>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName}
        >
          {buttonLabel}
          <ArrowRight size={14} />
        </a>
      ) : (
        <Link href={href} className={buttonClassName}>
          {buttonLabel}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
