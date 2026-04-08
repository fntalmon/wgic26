import PageHeader from "@/components/PageHeader";
import { FileText, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Registration = async () => {
  const t = await getTranslations("registrationPage");

  const keyDates = [
    { milestone: t("keyDates.abstracts"), date: t("dateValues.abstracts") },
    { milestone: t("keyDates.acceptance"), date: t("dateValues.acceptance") },
    { milestone: t("keyDates.firstDraft"), date: t("dateValues.firstDraft") },
    { milestone: t("keyDates.revision"), date: t("dateValues.revision") },
    { milestone: t("keyDates.finalPaper"), date: t("dateValues.finalPaper") },
    {
      milestone: t("keyDates.finalProgram"),
      date: t("dateValues.finalProgram"),
    },
    {
      milestone: t("keyDates.earlyBird"),
      date: t("dateValues.earlyBird"),
      highlight: true,
    },
    {
      milestone: t("keyDates.registrationOpen"),
      date: t("dateValues.registrationOpen"),
    },
    { milestone: t("keyDates.partners"), date: t("dateValues.partners") },
    { milestone: t("keyDates.sponsors"), date: t("dateValues.sponsors") },
  ];

  const fees = [
    {
      category: t("fees.registrationTwoDays"),
      early: "400 EUR",
      standard: "460 EUR",
      onsite: "520 EUR",
    },
    {
      category: t("fees.registrationOneDay"),
      early: "200 EUR",
      standard: "230 EUR",
      onsite: "260 EUR",
    },
    {
      category: t("fees.oralPresentations"),
      early: "600 EUR",
      standard: "690 EUR",
      onsite: "-",
    },
    {
      category: t("fees.poster"),
      early: "500 EUR",
      standard: "575 EUR",
      onsite: "-",
    },
    {
      category: t("fees.students"),
      early: "150 EUR",
      standard: "173 EUR",
      onsite: "195 EUR",
    },
    {
      category: t("fees.companions"),
      early: "150 EUR",
      standard: "173 EUR",
      onsite: "195 EUR",
    },
    {
      category: t("fees.galaDinner"),
      early: "-",
      standard: "150 EUR",
      onsite: "-",
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
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12 sm:px-4 lg:px-0 mx-auto">
          {/* Main Registration Callout */}

          <div
            id="registration"
            className="border border-white/20 rounded-lg p-8"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              {t("platformTitle")}
            </h2>
            <p className="text-white/80 leading-relaxed text-justify mb-6">
              {t("platformDescription")}
            </p>
            <div className="text-center">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration?preview=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 font-medium transition-colors"
              >
                {t("platformButton")} <ExternalLink className="w-4 h-4" />
              </a>
              <p className="mt-4 text-sm text-white/70 text-center">
                {t("platformInvoiceNote")}
              </p>
            </div>
          </div>

          {/* Key Dates  viejo*
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
                      className={`hover:bg-white/5 ${item.highlight ? "bg-cactus/10" : ""}`}
                    >
                      <td
                        className={`border border-white/20 px-4 py-3 text-base text-justify ${item.highlight ? "text-white font-medium" : "text-white/80"}`}
                      >
                        {item.milestone}
                      </td>
                      <td
                        className={`border border-white/20 px-4 py-3 text-base text-center ${item.highlight ? "text-white font-medium" : "text-white/80"}`}
                      >
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          */}
          {/* Registration Fees */}
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base w-full">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                {t("feesTitle")}
              </h2>

              <div className="overflow-x-auto w-full">
                <table className="min-w-full w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base w-1/4">
                        {t("feesHeaders.category")}
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/4">
                        {t("feesHeaders.early")}
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/4">
                        {t("feesHeaders.standard")}
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/4">
                        {t("feesHeaders.onsite")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {fees.map((item) => (
                      <tr key={item.category} className="hover:bg-white/5">
                        <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-justify">
                          {item.category}
                        </td>
                        <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                          {item.early}
                        </td>
                        <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                          {item.standard}
                        </td>
                        <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                          {item.onsite}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Text section */}
            <div className="mt-4 text-white/80 text-justify">
              <p className="mb-3">{t("notes.author")}</p>

              <p className="mb-3">{t("notes.student")}</p>

              <p className="mb-3">{t("notes.certificate")}</p>

              <p className="mb-3">{t("notes.proceedings")}</p>

              <p className="mb-3">
                {t("notes.invoice")}{" "}
                <strong>
                  <a href="mailto:wgic2026.economics@udl.cat">
                    wgic2026.economics@udl.cat
                  </a>
                </strong>
              </p>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-md p-4">
                <h3 className="font-medium text-white mb-2">
                  {t("cancellationTitle")}
                </h3>
                <p className="text-white/70 text-justify">
                  {t("cancellationBody")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
