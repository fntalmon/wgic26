import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { SponsorLogo } from "@/data/sponsors";

interface SponsorCardProps {
  logo: SponsorLogo;
  visitLabel: string;
  // Tamaño del contenedor del logo (alto + ancho). Permite reflejar jerarquía entre tiers.
  logoBoxClassName?: string;
}

export function SponsorCard({
  logo,
  visitLabel,
  logoBoxClassName = "h-20 w-32",
}: SponsorCardProps) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center text-center gap-3 w-full max-w-[260px] p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-potus/60 hover:shadow-xl hover:shadow-potus/20 hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className={`flex items-center justify-center ${logoBoxClassName}`}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="font-semibold text-gray-800 text-sm leading-tight">{logo.alt}</div>

      {logo.description && (
        <p className="text-xs text-gray-500 leading-relaxed">{logo.description}</p>
      )}

      {logo.stand && (
        <span className="text-[10px] uppercase tracking-wider bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
          {logo.stand}
        </span>
      )}

      <span className="mt-1 inline-flex items-center gap-1 text-xs text-monstera font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {visitLabel}
        <ExternalLink size={12} />
      </span>
    </a>
  );
}
