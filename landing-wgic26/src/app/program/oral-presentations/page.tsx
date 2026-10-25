import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Oral Presentations | WGIC26 Barcelona-Lleida",
  description:
    "Download the official PowerPoint template for oral presentations at WGIC26, the World Green Infrastructure Congress 2026.",
};

const OralPresentations = async () => {
  const t = await getTranslations("oralPresentationsPage");
  const p = await getTranslations("postersPage");

  return (
    <div>
      <PageHeader title={t("title")} description={t("description")} section="program" />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-4">
          <h2 className="text-white text-xl font-medium uppercase tracking-wide">
            {t("templateTitle")}
          </h2>
          <a
            href="/docs/wgic26-oral-presentation-template.pptx"
            download
            className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-lg p-5 hover:border-potus/60 hover:bg-white/[0.07] transition-colors"
          >
            <span>
              <span className="block text-white text-base">{p("oralName")}</span>
              <span className="block mt-1 text-white/60 text-sm">{p("oralDesc")}</span>
            </span>
            <span className="inline-flex items-center gap-2 shrink-0 text-potus text-xs uppercase tracking-wider">
              <Download size={16} aria-hidden />
              {p("download")}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default OralPresentations;
