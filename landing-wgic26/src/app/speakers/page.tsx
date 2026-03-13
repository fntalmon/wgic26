import PageHeader from "@/components/PageHeader";
import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Speakers = async () => {
  const t = await getTranslations("speakersPage");

  const steps = [
    t("steps.s1"),
    t("steps.s2"),
    t("steps.s3"),
    t("steps.s4"),
    t("steps.s5"),
    t("steps.s6"),
    t("steps.s7"),
    t("steps.s8"),
  ];

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12">

          <div id="paper-submission" className="bg-cactus/20 border border-cactus/30 rounded-lg p-6 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white">{t("calloutTitle")}</h2>
              <p className="mt-2 text-white/80 leading-relaxed text-justify">
                {t("calloutP1")}
              </p>
              <p className="mt-3 text-white/70 text-justify">
                {t("calloutP2")}
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href="https://panel.helice.app/w/wgic26/214757/papers?preview=1" className="inline-flex items-center gap-2 rounded-md bg-yellow-600 text-black px-4 py-2 font-medium">{t("submissionButton")}</a>
              <a href="https://docs.google.com/document/d/1X_aNCsK5tu56rAlhRSx2sXcMt_8PgUze/export?format=docx" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white">{t("templateButton")}</a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
            <p>
              {t("bodyP1")}
            </p>
            <p>
              {t("bodyP2")}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-md p-4">
              <h3 className="font-medium text-white">{t("stepsTitle")}</h3>
              <ol className="mt-3 list-decimal list-inside text-white/80 space-y-2">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white uppercase mb-3">{t("typologiesTitle")}</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("tableHeaders.typology")}</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("tableHeaders.length")}</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("tableHeaders.details")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">{t("rows.oral.type")}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{t("rows.oral.length")}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{t("rows.oral.details")}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">{t("rows.poster.type")}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{t("rows.poster.length")}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{t("rows.poster.details")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <div role="region" aria-label={t("regionAriaLabel")} className="rounded-md bg-white/5 border border-white/10 p-4 flex items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <FileText size={20} className="text-white/80 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{t("finalCardTitle")}</p>
                    <p className="text-white/80 text-sm">{t("finalCardDescription")}</p>
                  </div>
                </div>
                <a href="https://panel.helice.app/w/wgic26/214757/papers?preview=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-yellow-600 text-black px-4 py-2 font-medium">{t("submissionButton")}</a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Speakers;
