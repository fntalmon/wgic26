"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useState } from "react";

interface NewsletterLanguage {
  language: string;
  code: string;
  slug: string;
  pdfUrl?: string;
}

interface Newsletter {
  id: string;
  title: string;
  date: string;
  languages: NewsletterLanguage[];
}

const Newsletters = () => {
  const newsletters: Newsletter[] = [
    {
      id: "march2026",
      title: "March 2026 Newsletter",
      date: "March 2026",
      languages: [
        {
          language: "English",
          code: "en",
          slug: "march2026-en",
          pdfUrl: "/newsletters/englishMarch.pdf",
        },
        {
          language: "Español",
          code: "es",
          slug: "march2026-es",
          pdfUrl: "/newsletters/spanishMarch.pdf",
        },
        {
          language: "Italiano",
          code: "it",
          slug: "march2026-it",
          pdfUrl: "/newsletters/italianMarch.pdf",
        },
        {
          language: "Ελληνικά",
          code: "el",
          slug: "march2026-el",
          pdfUrl: "/newsletters/greekMarch.pdf",
        },
      ],
    },
  ];

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
        title="Newsletters"
        description="Stay updated with our latest newsletters."
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {newsletters.map((newsletter) => {
              const selectedLang = getSelectedLanguage(newsletter);

              return (
                <div
                  key={newsletter.id}
                  className="bg-cactus/10 border border-white/20 rounded-lg p-6 transition-all hover:bg-cactus/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
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
                  <div className="flex flex-col sm:flex-row gap-3">
                    {selectedLang.code !== "el" && (
                      <Link
                        href={`/newsletters/${selectedLang.slug}`}
                        className="flex-1 bg-cactus hover:bg-cactus/80 text-white text-center py-2 px-4 rounded transition-colors font-medium"
                      >
                        Read Online
                      </Link>
                    )}

                    {selectedLang.pdfUrl && (
                      <a
                        href={selectedLang.pdfUrl}
                        download
                        className={`bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded transition-colors flex items-center justify-center gap-2 font-medium ${selectedLang.code !== "el" ? "flex-1" : "w-full"}`}
                      >
                        <DownloadIcon />
                        Download PDF
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
