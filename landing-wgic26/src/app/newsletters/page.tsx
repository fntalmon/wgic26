"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface NewsletterLanguage {
  language: string;
  code: string;
  slug: string;
  pdfUrl?: string;
  canReadOnline?: boolean;
}

interface Newsletter {
  id: string;
  title: string;
  date: string;
  publishedAt: string;
  languages: NewsletterLanguage[];
}

const Newsletters = () => {
  const t = useTranslations("newslettersPage");

  const newsletters: Newsletter[] = [
    {
      id: "march2026",
      title: t("items.march2026.title"),
      date: t("items.march2026.date"),
      publishedAt: "2026-02-01",
      languages: [
        {
          language: t("languages.en"),
          code: "en",
          slug: "february2026-en",
          pdfUrl: "/newsletters/englishMarch.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.es"),
          code: "es",
          slug: "february2026-es",
          pdfUrl: "/newsletters/spanishMarch.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.it"),
          code: "it",
          slug: "february2026-it",
          pdfUrl: "/newsletters/italianMarch.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.el"),
          code: "el",
          slug: "february2026-el",
          pdfUrl: "/newsletters/greekMarch.pdf",
          canReadOnline: true,
        },
      ],
    },
    {
      id: "march2026-newsletter2",
      title: t("items.march2026Newsletter2.title"),
      date: t("items.march2026Newsletter2.date"),
      publishedAt: "2026-03-20",
      languages: [
        {
          language: t("languages.en"),
          code: "en",
          slug: "march2026-newsletter2-en",
          pdfUrl: "/newsletters/englishMarch2.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.es"),
          code: "es",
          slug: "march2026-newsletter2-es",
          pdfUrl: "/newsletters/spanishMarch2.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.it"),
          code: "it",
          slug: "march2026-newsletter2-it",
          pdfUrl: "/newsletters/italianMarch2.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.el"),
          code: "el",
          slug: "march2026-newsletter2-el",
          pdfUrl: "/newsletters/greekMarch2.pdf",
          canReadOnline: true,
        },
      ],
    },
    {
      id: "april2026-newsletter3",
      title: t("items.april2026Newsletter3.title"),
      date: t("items.april2026Newsletter3.date"),
      publishedAt: "2026-04-01",
      languages: [
        {
          language: t("languages.en"),
          code: "en",
          slug: "april2026-newsletter3-en",
          pdfUrl: "/newsletters/Newsletter3Ingles.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.es"),
          code: "es",
          slug: "april2026-newsletter3-es",
          pdfUrl: "/newsletters/Newsletter3Spanish.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.it"),
          code: "it",
          slug: "april2026-newsletter3-it",
          pdfUrl: "/newsletters/NewsletterItaliano.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.fr"),
          code: "fr",
          slug: "april2026-newsletter3-fr",
          pdfUrl: "/newsletters/Newsletter3Frances.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.pt"),
          code: "pt",
          slug: "april2026-newsletter3-pt",
          pdfUrl: "/newsletters/Newsletter3Portugues.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.ar"),
          code: "ar",
          slug: "april2026-newsletter3-ar",
          pdfUrl: "/newsletters/Newsletter3Arabe.pdf",
          canReadOnline: true,
        },
      ],
    },
    {
      id: "may2026-newsletter5",
      title: t("items.may2026Newsletter5.title"),
      date: t("items.may2026Newsletter5.date"),
      publishedAt: "2026-05-25",
      languages: [
        {
          language: t("languages.en"),
          code: "en",
          slug: "may2026-newsletter5-en",
          pdfUrl: "/newsletters/Newsletter5Ingles.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.es"),
          code: "es",
          slug: "may2026-newsletter5-es",
          pdfUrl: "/newsletters/Newsletter5Espanol.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.it"),
          code: "it",
          slug: "may2026-newsletter5-it",
          pdfUrl: "/newsletters/Newsletter5Italiano.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.fr"),
          code: "fr",
          slug: "may2026-newsletter5-fr",
          pdfUrl: "/newsletters/Newsletter5Frances.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.pt"),
          code: "pt",
          slug: "may2026-newsletter5-pt",
          pdfUrl: "/newsletters/Newsletter5Portugues.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.ar"),
          code: "ar",
          slug: "may2026-newsletter5-ar",
          pdfUrl: "/newsletters/Newsletter5Arabe.pdf",
          canReadOnline: true,
        },
      ],
    },
    {
      id: "may2026-newsletter4",
      title: t("items.may2026Newsletter4.title"),
      date: t("items.may2026Newsletter4.date"),
      publishedAt: "2026-05-08",
      languages: [
        {
          language: t("languages.en"),
          code: "en",
          slug: "may2026-newsletter4-en",
          pdfUrl: "/newsletters/Newsletter4Ingles.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.es"),
          code: "es",
          slug: "may2026-newsletter4-es",
          pdfUrl: "/newsletters/Newsletter4Espanol.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.it"),
          code: "it",
          slug: "may2026-newsletter4-it",
          pdfUrl: "/newsletters/Newsletter4Italiano.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.fr"),
          code: "fr",
          slug: "may2026-newsletter4-fr",
          pdfUrl: "/newsletters/Newsletter4Frances.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.pt"),
          code: "pt",
          slug: "may2026-newsletter4-pt",
          pdfUrl: "/newsletters/Newsletter4Portugues.pdf",
          canReadOnline: true,
        },
        {
          language: t("languages.ar"),
          code: "ar",
          slug: "may2026-newsletter4-ar",
          pdfUrl: "/newsletters/Newsletter4Arabe.pdf",
          canReadOnline: true,
        },
      ],
    },
  ];

  const sortedNewsletters = [...newsletters].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const [selectedLanguage, setSelectedLanguage] = useState<{
    [key: string]: string;
  }>(() => {
    const initial: { [key: string]: string } = {};
    newsletters.forEach((n) => {
      initial[n.id] = n.languages[0]?.code || "en";
    });
    return initial;
  });

  const getSelectedLanguage = (newsletter: Newsletter) => {
    return (
      newsletter.languages.find(
        (l) => l.code === selectedLanguage[newsletter.id],
      ) || newsletter.languages[0]
    );
  };

  const DownloadIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {sortedNewsletters.map((newsletter, index) => {
              const selectedLang = getSelectedLanguage(newsletter);
              const showReadOnline = selectedLang.canReadOnline !== false;

              return (
                <div
                  key={newsletter.id}
                  className="group bg-cactus/10 border border-white/20 rounded-xl p-6 transition-all hover:bg-cactus/20 hover:border-potus/40"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      {index === 0 && (
                        <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-potus text-black px-2 py-1 rounded mb-3">
                          {t("latest")}
                        </span>
                      )}
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {newsletter.title}
                      </h3>
                      <p className="text-sm text-white/60">{newsletter.date}</p>
                    </div>

                    {/* Language Dropdown */}
                    {newsletter.languages.length > 1 && (
                      <select
                        value={selectedLanguage[newsletter.id]}
                        onChange={(e) =>
                          setSelectedLanguage((prev) => ({
                            ...prev,
                            [newsletter.id]: e.target.value,
                          }))
                        }
                        className="px-4 py-2 rounded bg-cactus text-white font-medium hover:bg-cactus/80 transition-colors cursor-pointer md:w-auto w-full"
                      >
                        {newsletter.languages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.language}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    {showReadOnline && (
                      <Link
                        href={`/newsletters/${selectedLang.slug}`}
                        className="flex-1 bg-cactus hover:bg-cactus/80 text-white py-2 px-4 rounded transition-colors font-medium inline-flex items-center justify-center min-h-[56px] whitespace-nowrap text-base"
                      >
                        {t("readOnline")}
                      </Link>
                    )}

                    {selectedLang.pdfUrl && (
                      <a
                        href={selectedLang.pdfUrl}
                        download
                        className={`bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded transition-colors inline-flex items-center justify-center gap-2 font-medium min-h-[56px] whitespace-nowrap text-base ${showReadOnline ? "flex-1" : "w-full"}`}
                      >
                        <DownloadIcon />
                        <span className="whitespace-nowrap">{t("downloadPdf")}</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletters;
