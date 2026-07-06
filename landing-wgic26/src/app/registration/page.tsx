import PageHeader from "@/components/PageHeader";
import RegistrationConsent from "./RegistrationConsent";
import { EarlyBirdBanner } from "@/components/EarlyBirdBanner";
import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Registration = async () => {
  const t = await getTranslations("registrationPage");

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
      early: "150 EUR",
      standard: "150 EUR",
      onsite: "-",
    },
  ];

  const faq = [
    {
      value: "cancel",
      question: t("faq.cancel.question"),
      answer: t("faq.cancel.answer"),
    },
    {
      value: "meals",
      question: t("faq.meals.question"),
      answer: t("faq.meals.answer"),
    },
    {
      value: "invoice",
      question: t("faq.invoice.question"),
      answer: t("faq.invoice.answer"),
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
      <EarlyBirdBanner namespace="registrationPage" />

      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12 sm:px-4 lg:px-0 mx-auto">
          {/* Main registration call-to-action */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                {t("ctaTitle")}
              </h2>
              <p className="text-white/80 leading-relaxed text-sm lg:text-base max-w-3xl">
                {t("ctaIntro")}
              </p>
              <ol className="list-decimal list-inside text-white/80 text-sm lg:text-base space-y-2 max-w-3xl">
                <li>{t("ctaStep1")}</li>
                <li>{t("ctaStep2")}</li>
                <li>{t("ctaStep3")}</li>
              </ol>
            </div>

            <RegistrationConsent
              heliceUrl="https://panel.helice.app/w/wgic26/214760/registration?preview=1"
              labels={{
                legalNoticeTitle: t("legalNoticeTitle"),
                legalNoticeIntro: t("legalNoticeIntro"),
                legalNoticeHeliceNote: t("legalNoticeHeliceNote"),
                checkboxMandatory: t("checkboxMandatory"),
                checkboxOptional: t("checkboxOptional"),
                checkboxRequiredError: t("checkboxRequiredError"),
                rightsNote: t("rightsNote"),
                continueButton: t("continueButton"),
                privacyPolicy: t("privacyPolicy"),
              }}
            />
          </div>

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

            {/* Notes */}
            <div className="text-white/80 text-justify">
              <p className="mb-3">{t("notes.author")}</p>
              <p className="mb-3">{t("notes.student")}</p>
              <p className="mb-3">{t("notes.certificate")}</p>
              <p className="mb-3">{t("notes.proceedings")}</p>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="border border-white/20 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              {t("faqTitle")}
            </h2>
            <Accordion type="single" collapsible className="text-white/80">
              {faq.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-left text-sm lg:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm lg:text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
