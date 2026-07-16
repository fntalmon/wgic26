"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

/* ───────── Colores oficiales WGIC26 ───────── */
const CACTUS = "#1a3d2e";
const MONSTERA = "#234a38";
const CEMENT = "#e8e8e6";
const POTUS = "#a8e06c";

/* ───────── Tipado ───────── */
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

/* ───────── Colores por mes ───────── */
const monthColors: Record<string, { stripe: string; monthText: string }> = {
  february: { stripe: "#c9a96e", monthText: "#c9a96e" },
  march:    { stripe: "#6b9b7a", monthText: "#7db88e" },
  april:    { stripe: "#6b8f9b", monthText: "#7daab8" },
  may:      { stripe: "#b8a96e", monthText: "#d4c47a" },
  june:     { stripe: "#9b8a6b", monthText: "#b8a67d" },
  july:     { stripe: "#7a9b6b", monthText: "#8cb87d" },
};

/* ───────── Tarjeta magazine individual ───────── */
function NewsletterCard({
  newsletter,
  index,
  isLatest,
}: {
  newsletter: Newsletter;
  index: number;
  isLatest: boolean;
}) {
  const [selectedLang, setSelectedLang] = useState(
    newsletter.languages[0]?.code || "en"
  );
  const [isHovered, setIsHovered] = useState(false);

  const currentLang =
    newsletter.languages.find((l) => l.code === selectedLang) ||
    newsletter.languages[0];

  const monthKey =
    ["february", "march", "april", "may", "june", "july"].find((m) =>
      newsletter.id.toLowerCase().includes(m)
    ) || "may";
  const colors = monthColors[monthKey] || monthColors.may;

  const monthShort =
    newsletter.date.split(" ")[0]?.substring(0, 3).toUpperCase() || "";
  const volumeNum = ["I", "II", "III", "IV", "V"][index] || String(index + 1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? `0 4px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)`
            : `0 2px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)`,
        }}
        transition={{ duration: 0.4 }}
        className="relative rounded-sm overflow-hidden"
        style={{ backgroundColor: MONSTERA }}
      >
        {/* Stripe de color */}
        <motion.div
          className="h-1 w-full"
          style={{ backgroundColor: colors.stripe }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />

        <div className="flex flex-col lg:flex-row">
          {/* Portada tipográfica */}
          <div
            className="relative lg:w-64 xl:w-72 flex-shrink-0 p-8 lg:p-10 flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: CACTUS }}
          >
            {/* Grid decorativo */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
              <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
              <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
            </div>

            {/* Badge LATEST */}
            {isLatest && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute top-4 left-4 px-3 py-1 text-[9px] font-semibold tracking-[0.25em]"
                style={{ backgroundColor: POTUS, color: CACTUS }}
              >
                LATEST
              </motion.div>
            )}

            <div
              className="text-[10px] font-medium tracking-[0.35em] mb-4 relative z-10"
              style={{ color: colors.monthText, opacity: 0.8 }}
            >
              VOL. {volumeNum}
            </div>

            <div
              className="text-6xl lg:text-7xl font-light tracking-tight leading-none relative z-10"
              style={{
                color: colors.monthText,
                fontFamily: "'Century Gothic', 'Segoe UI', sans-serif",
              }}
            >
              {monthShort}
            </div>

            <div
              className="text-xs tracking-[0.4em] mt-3 relative z-10"
              style={{ color: CEMENT, opacity: 0.5 }}
            >
              2026
            </div>

            {/* Puntos decorativos */}
            <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1.5 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: colors.monthText }}
                />
              ))}
            </div>

            {/* Línea inferior */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.monthText}, transparent)`,
                opacity: 0.3,
              }}
            />
          </div>

          {/* Contenido */}
          <div className="flex-1 p-6 lg:p-10 flex flex-col justify-between">
            <div>
              <h3
                className="text-xl lg:text-2xl font-normal tracking-wide leading-tight"
                style={{
                  color: CEMENT,
                  fontFamily: "'Century Gothic', 'Segoe UI', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {newsletter.title}
              </h3>

              <div className="flex items-center gap-3 mt-3 mb-8">
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: colors.stripe, opacity: 0.5 }}
                />
                <span
                  className="text-[11px] tracking-[0.2em]"
                  style={{ color: CEMENT, opacity: 0.45 }}
                >
                  PUBLISHED {newsletter.publishedAt}
                </span>
              </div>

              {/* Selector de idiomas */}
              {newsletter.languages.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {newsletter.languages.map((lang) => {
                    const active = selectedLang === lang.code;
                    return (
                      <motion.button
                        key={lang.code}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSelectedLang(lang.code)}
                        className="relative px-4 py-2 text-[10px] tracking-[0.2em] font-medium transition-all duration-300 border"
                        style={{
                          color: active ? CACTUS : CEMENT,
                          backgroundColor: active ? POTUS : "transparent",
                          borderColor: active ? POTUS : `${CEMENT}20`,
                          opacity: active ? 1 : 0.6,
                        }}
                      >
                        {lang.language.toUpperCase()}
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {currentLang?.canReadOnline !== false && (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Link
                    href={`/newsletters/${currentLang?.slug}`}
                    className="flex items-center justify-center gap-3 py-3.5 px-6 text-[11px] font-medium tracking-[0.2em] transition-all duration-300 w-full"
                    style={{
                      backgroundColor: isHovered ? POTUS : `${POTUS}18`,
                      color: isHovered ? CACTUS : CEMENT,
                    }}
                  >
                    <Eye size={14} strokeWidth={1.5} />
                    READ ONLINE
                  </Link>
                </motion.div>
              )}

              {currentLang?.pdfUrl && (
                <motion.a
                  href={currentLang.pdfUrl}
                  download
                  className="flex items-center justify-center gap-3 py-3.5 px-6 text-[11px] font-medium tracking-[0.2em] border transition-all duration-300"
                  style={{
                    borderColor: `${CEMENT}20`,
                    color: CEMENT,
                    opacity: 0.7,
                  }}
                >
                  <Download size={14} strokeWidth={1.5} />
                  DOWNLOAD PDF
                </motion.a>
              )}
            </div>
          </div>
        </div>

        <div
          className="h-px w-full"
          style={{ backgroundColor: `${CEMENT}08` }}
        />
      </motion.div>
    </motion.article>
  );
}

/* ───────── Componente principal ───────── */
export default function NewslettersClient() {
  const t = useTranslations("newslettersPage");

  const newsletters: Newsletter[] = [
    {
      id: "july2026-newsletter10",
      title: t("items.july2026Newsletter10.title"),
      date: t("items.july2026Newsletter10.date"),
      publishedAt: "2026-07-09",
      languages: [
        { language: t("languages.en"), code: "en", slug: "july2026-newsletter10-en", pdfUrl: "/newsletters/Newsletter10Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "july2026-newsletter10-es", pdfUrl: "/newsletters/Newsletter10Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "july2026-newsletter10-it", pdfUrl: "/newsletters/Newsletter10Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "july2026-newsletter10-fr", pdfUrl: "/newsletters/Newsletter10Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "july2026-newsletter10-pt", pdfUrl: "/newsletters/Newsletter10Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "july2026-newsletter10-ar", pdfUrl: "/newsletters/Newsletter10Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "july2026-newsletter9",
      title: t("items.july2026Newsletter9.title"),
      date: t("items.july2026Newsletter9.date"),
      publishedAt: "2026-07-02",
      languages: [
        { language: t("languages.en"), code: "en", slug: "july2026-newsletter9-en", pdfUrl: "/newsletters/Newsletter9Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "july2026-newsletter9-es", pdfUrl: "/newsletters/Newsletter9Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "july2026-newsletter9-it", pdfUrl: "/newsletters/Newsletter9Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "july2026-newsletter9-fr", pdfUrl: "/newsletters/Newsletter9Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "july2026-newsletter9-pt", pdfUrl: "/newsletters/Newsletter9Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "july2026-newsletter9-ar", pdfUrl: "/newsletters/Newsletter9Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "july2026-newsletter8",
      title: t("items.july2026Newsletter8.title"),
      date: t("items.july2026Newsletter8.date"),
      publishedAt: "2026-06-25",
      languages: [
        { language: t("languages.en"), code: "en", slug: "july2026-newsletter8-en", pdfUrl: "/newsletters/Newsletter8Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "july2026-newsletter8-es", pdfUrl: "/newsletters/Newsletter8Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "july2026-newsletter8-it", pdfUrl: "/newsletters/Newsletter8Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "july2026-newsletter8-fr", pdfUrl: "/newsletters/Newsletter8Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "july2026-newsletter8-pt", pdfUrl: "/newsletters/Newsletter8Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "july2026-newsletter8-ar", pdfUrl: "/newsletters/Newsletter8Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "june2026-newsletter7",
      title: t("items.june2026Newsletter7.title"),
      date: t("items.june2026Newsletter7.date"),
      publishedAt: "2026-06-18",
      languages: [
        { language: t("languages.en"), code: "en", slug: "july2026-newsletter7-en", pdfUrl: "/newsletters/Newsletter7Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "july2026-newsletter7-es", pdfUrl: "/newsletters/Newsletter7Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "july2026-newsletter7-it", pdfUrl: "/newsletters/Newsletter7Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "july2026-newsletter7-fr", pdfUrl: "/newsletters/Newsletter7Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "july2026-newsletter7-pt", pdfUrl: "/newsletters/Newsletter7Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "july2026-newsletter7-ar", pdfUrl: "/newsletters/Newsletter7Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "june2026-newsletter6",
      title: t("items.june2026Newsletter6.title"),
      date: t("items.june2026Newsletter6.date"),
      publishedAt: "2026-06-11",
      languages: [
        { language: t("languages.en"), code: "en", slug: "july2026-newsletter6-en", pdfUrl: "/newsletters/Newsletter6Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "july2026-newsletter6-es", pdfUrl: "/newsletters/Newsletter6Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "july2026-newsletter6-it", pdfUrl: "/newsletters/Newsletter6Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "july2026-newsletter6-fr", pdfUrl: "/newsletters/Newsletter6Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "july2026-newsletter6-pt", pdfUrl: "/newsletters/Newsletter6Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "july2026-newsletter6-ar", pdfUrl: "/newsletters/Newsletter6Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "may2026-newsletter5",
      title: t("items.may2026Newsletter5.title"),
      date: t("items.may2026Newsletter5.date"),
      publishedAt: "2026-05-25",
      languages: [
        { language: t("languages.en"), code: "en", slug: "may2026-newsletter5-en", pdfUrl: "/newsletters/Newsletter5Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "may2026-newsletter5-es", pdfUrl: "/newsletters/Newsletter5Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "may2026-newsletter5-it", pdfUrl: "/newsletters/Newsletter5Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "may2026-newsletter5-fr", pdfUrl: "/newsletters/Newsletter5Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "may2026-newsletter5-pt", pdfUrl: "/newsletters/Newsletter5Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "may2026-newsletter5-ar", pdfUrl: "/newsletters/Newsletter5Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "may2026-newsletter4",
      title: t("items.may2026Newsletter4.title"),
      date: t("items.may2026Newsletter4.date"),
      publishedAt: "2026-05-08",
      languages: [
        { language: t("languages.en"), code: "en", slug: "may2026-newsletter4-en", pdfUrl: "/newsletters/Newsletter4Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "may2026-newsletter4-es", pdfUrl: "/newsletters/Newsletter4Espanol.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "may2026-newsletter4-it", pdfUrl: "/newsletters/Newsletter4Italiano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "may2026-newsletter4-fr", pdfUrl: "/newsletters/Newsletter4Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "may2026-newsletter4-pt", pdfUrl: "/newsletters/Newsletter4Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "may2026-newsletter4-ar", pdfUrl: "/newsletters/Newsletter4Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "april2026-newsletter3",
      title: t("items.april2026Newsletter3.title"),
      date: t("items.april2026Newsletter3.date"),
      publishedAt: "2026-04-01",
      languages: [
        { language: t("languages.en"), code: "en", slug: "april2026-newsletter3-en", pdfUrl: "/newsletters/Newsletter3Ingles.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "april2026-newsletter3-es", pdfUrl: "/newsletters/Newsletter3Spanish.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "april2026-newsletter3-it", pdfUrl: "/newsletters/NewsletterItaliano.pdf", canReadOnline: true },
        { language: t("languages.fr"), code: "fr", slug: "april2026-newsletter3-fr", pdfUrl: "/newsletters/Newsletter3Frances.pdf", canReadOnline: true },
        { language: t("languages.pt"), code: "pt", slug: "april2026-newsletter3-pt", pdfUrl: "/newsletters/Newsletter3Portugues.pdf", canReadOnline: true },
        { language: t("languages.ar"), code: "ar", slug: "april2026-newsletter3-ar", pdfUrl: "/newsletters/Newsletter3Arabe.pdf", canReadOnline: true },
      ],
    },
    {
      id: "march2026-newsletter2",
      title: t("items.march2026Newsletter2.title"),
      date: t("items.march2026Newsletter2.date"),
      publishedAt: "2026-03-20",
      languages: [
        { language: t("languages.en"), code: "en", slug: "march2026-newsletter2-en", pdfUrl: "/newsletters/englishMarch2.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "march2026-newsletter2-es", pdfUrl: "/newsletters/spanishMarch2.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "march2026-newsletter2-it", pdfUrl: "/newsletters/italianMarch2.pdf", canReadOnline: true },
        { language: t("languages.el"), code: "el", slug: "march2026-newsletter2-el", pdfUrl: "/newsletters/greekMarch2.pdf", canReadOnline: true },
      ],
    },
    {
      id: "march2026",
      title: t("items.march2026.title"),
      date: t("items.march2026.date"),
      publishedAt: "2026-02-01",
      languages: [
        { language: t("languages.en"), code: "en", slug: "february2026-en", pdfUrl: "/newsletters/englishMarch.pdf", canReadOnline: true },
        { language: t("languages.es"), code: "es", slug: "february2026-es", pdfUrl: "/newsletters/spanishMarch.pdf", canReadOnline: true },
        { language: t("languages.it"), code: "it", slug: "february2026-it", pdfUrl: "/newsletters/italianMarch.pdf", canReadOnline: true },
        { language: t("languages.el"), code: "el", slug: "february2026-el", pdfUrl: "/newsletters/greekMarch.pdf", canReadOnline: true },
      ],
    },
  ];

  const sorted = [...newsletters].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Divider "ALL PUBLICATIONS" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-14"
        >
          <span
            className="text-[10px] tracking-[0.35em] font-medium"
            style={{ color: CEMENT, opacity: 0.35 }}
          >
            ALL PUBLICATIONS
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: `${CEMENT}08` }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8">
          {sorted.map((newsletter, index) => (
            <NewsletterCard
              key={newsletter.id}
              newsletter={newsletter}
              index={index}
              isLatest={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}