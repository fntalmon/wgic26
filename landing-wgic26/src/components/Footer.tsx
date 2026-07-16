
import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");

  const usefulLinks = [
    { label: t("tickets"), href: "/registration" },
    { label: t("papersProjects"), href: "/speakers" },
    { label: t("program"), href: "/program/program" },
    { label: t("workshops"), href: "/program/workshops" },
    { label: t("technicalVisits"), href: "/program/technical-visits" },
    { label: t("blog"), href: "/blog" },
  ];

  const talkLinks = [
    { label: t("infoEmail"), href: `mailto:${t("infoEmail")}` },
    { label: t("registrationEmail"), href: `mailto:${t("registrationEmail")}` },
    { label: t("sponsorshipEmail"), href: `mailto:${t("sponsorshipEmail")}` },
  ];

  const socialLinks = [
    { label: t("linkedin"), href: "https://www.linkedin.com/company/wgic26" },
    { label: t("instagram"), href: "https://www.instagram.com/wgic2026" },
  ];

  return (
    <footer className="flex flex-col lg:pt-3 lg:pb-1.5 lg:px-8 p-0 gap-0">
      <div className="flex flex-col gap-4 bg-cactus lg:rounded-xl text-cement w-full px-8 md:px-12 lg:px-18 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="text-xl sm:text-lg lg:text-xl xl:text-2xl uppercase leading-tight">
              {t("title")}
            </div>
            <div className="text-xs font-light text-white/60">{t("date")}</div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xs text-white/40">{t("usefulLinks")}</div>
            <ul className="flex flex-col gap-3 text-xs">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Talk */}
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xs text-white/40">{t("letsTalk")}</div>
            <ul className="flex flex-col gap-3 text-xs">
              {talkLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="flex flex-col gap-4">
            <div className="uppercase text-xs text-white/40">{t("stayUpdated")}</div>
            <ul className="flex flex-col gap-3 text-xs">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row py-8 px-8 sm:px-6 sm:py-8 lg:py-6 text-white/60 bg-cactus/60 lg:bg-cactus/60 justify-between gap-2 text-[10px]">
        <div>{t("copyright")}</div>
        <Link href="/privacy" className="hover:underline hover:underline-offset-4">
          {t("privacyPolicy")}
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
