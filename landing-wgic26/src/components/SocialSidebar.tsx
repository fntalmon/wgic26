"use client";

import { Linkedin, Instagram } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wgic26",
    icon: Linkedin,
  },
  {    label: "Instagram",
    href: "https://www.instagram.com/wgic2026",
    icon: Instagram,
  },
];

export function SocialSidebar() {
  return (
    <aside className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 bg-cactus/95 backdrop-blur-sm py-3 px-2 rounded-l-xl shadow-lg border-y border-l border-white/10">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white/80 hover:text-white hover:scale-110 transition-all"
        >
          <Icon size={18} />
        </a>
      ))}
    </aside>
  );
}
