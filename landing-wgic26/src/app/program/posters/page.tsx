import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { posters } from "@/data/posters";
import PostersList from "./PostersList";
import { getTranslations } from "next-intl/server";
import { Download, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Posters | WGIC26 Barcelona-Lleida",
  description:
    "Poster contributions presented at WGIC26, the World Green Infrastructure Congress 2026 in Barcelona and Lleida.",
};

const Posters = async () => {
  const t = await getTranslations("postersPage");

  const templates = [
    {
      name: t("posterName"),
      description: t("posterDesc"),
      href: "/docs/wgic26-poster-template-A0.pptx",
    },
  ];

  return (
    <div>
      <PageHeader title={t("title")} description={t("description")} section="program" />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <Printer className="text-potus shrink-0 mt-1" size={22} aria-hidden />
            <div>
              <h2 className="text-white text-base font-medium">{t("printTitle")}</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{t("printText")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-white text-xl font-medium uppercase tracking-wide">
                {t("templatesTitle")}
              </h2>
              <p className="mt-1 text-white/60 text-sm">{t("templatesIntro")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {templates.map((template) => (
                <a
                  key={template.href}
                  href={template.href}
                  download
                  className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-lg p-5 hover:border-potus/60 hover:bg-white/[0.07] transition-colors"
                >
                  <span>
                    <span className="block text-white text-base">{template.name}</span>
                    <span className="block mt-1 text-white/60 text-sm">{template.description}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 shrink-0 text-potus text-xs uppercase tracking-wider">
                    <Download size={16} aria-hidden />
                    {t("download")}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {posters.length === 0 ? (
            <p className="text-white/60 text-sm text-center py-12 border border-white/10 rounded-lg">
              {t("comingSoon")}
            </p>
          ) : (
            <PostersList
              posters={posters}
              translations={{
                search: t("search"),
                noResults: t("noResults"),
                authors: t("authors"),
                count: t("count"),
              }}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Posters;
