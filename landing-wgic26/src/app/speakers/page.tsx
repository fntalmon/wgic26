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

  const keyDates = [
    {
      milestone: t("keyDates.abstracts"),
      date: t("dateValues.abstracts"),
    },
    {
      milestone: t("keyDates.acceptance"),
      date: t("dateValues.acceptance"),
    },
    {
      milestone: t("keyDates.firstDraft"),
      date: t("dateValues.firstDraft"),
    },
    {
      milestone: t("keyDates.revision"),
      date: t("dateValues.revision"),
    },
    {
      milestone: t("keyDates.finalPaper"),
      date: t("dateValues.finalPaper"),
    },
    {
      milestone: t("keyDates.finalProgram"),
      date: t("dateValues.finalProgram"),
    },
    {
      milestone: t("keyDates.registrationOpen"),
      date: t("dateValues.registrationOpen"),
    },
    {
      milestone: t("keyDates.partners"),
      date: t("dateValues.partners"),
    },
    {
      milestone: t("keyDates.sponsors"),
      date: t("dateValues.sponsors"),
    },
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
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
            <p>{t("bodyP1")}</p>
            <p>{t("bodyP2")}</p>
            <p>{t("calloutP3")}</p>

            {/* Key Dates */}
            <div className="bg-monstera/20 border border-monstera/30 rounded-lg  w-full">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                {t("keyDatesTitle")}
              </h2>

              <div className="overflow-x-auto w-full">
                <table className="min-w-full w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-monstera/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base w-2/3">
                        {t("keyDatesHeaders.milestone")}
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/3">
                        {t("keyDatesHeaders.date")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {keyDates.map((item) => (
                      <tr
                        key={`${item.milestone}-${item.date}`}
                        className="hover:bg-white/5"
                      >
                        <td className="border border-white/20 px-4 py-3 text-base text-justify text-white/80">
                          {item.milestone}
                        </td>
                        <td className="border border-white/20 px-4 py-3 text-base text-center text-white/80">
                          {item.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

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
