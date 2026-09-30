import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { KeyDatesTable } from "@/components/KeyDatesTable";
import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Be a Speaker | WGIC26 Barcelona-Lleida",
  description:
    "Submit your paper or poster to WGIC26, the leading green infrastructure conference 2026, and present your research to a global audience in Barcelona.",
};

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

  const keyDatesRows = [
    { key: "abstracts", isoDate: "2026-05-31" },
    { key: "acceptance", isoDate: "2026-05-15" },
    { key: "firstDraft", isoDate: "2026-06-15" },
    { key: "revision", isoDate: "2026-07-31" },
    { key: "finalPaper", isoDate: "2026-08-31" },
    { key: "finalProgram", isoDate: "2026-07-31" },
  ].map(({ key, isoDate }) => ({
    key,
    isoDate,
    milestone: t(`keyDates.${key}`),
    date: t(`dateValues.${key}`),
  }));

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
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-left">
            <p>{t("bodyP1")}</p>
            <p>{t("bodyP2")}</p>
            <p>{t("calloutP3")}</p>

            {/* Key Dates */}
            <KeyDatesTable
              title={t("keyDatesTitle")}
              headers={{
                milestone: t("keyDatesHeaders.milestone"),
                date: t("keyDatesHeaders.date"),
              }}
              rows={keyDatesRows}
            />

            <div className="bg-white/5 border border-white/10 rounded-md p-4">
              <h3 className="font-medium text-white">{t("stepsTitle")}</h3>
              <ol className="mt-3 list-decimal list-inside text-white/80 space-y-2">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white uppercase mb-3">
                {t("typologiesTitle")}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                        {t("tableHeaders.typology")}
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                        {t("tableHeaders.length")}
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                        {t("tableHeaders.details")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {t("rows.oral.type")}
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {t("rows.oral.length")}
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {t("rows.oral.details")}
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {t("rows.poster.type")}
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {t("rows.poster.length")}
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {t("rows.poster.details")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
