import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Privacy Policy | WGIC26 Barcelona-Lleida",
  description:
    "Read the WGIC26 privacy policy and data protection information for the World Green Infrastructure Congress 2026 in Barcelona.",
};

const Privacy = async () => {
    const t = await getTranslations("legalPages");

    return (
        <div>
            <PageHeader
                title={t("privacyTitle")}
                description=""
                buttonText=""
                buttonUrl=""
                buttonIcon=""
                buttonVariant="yellow"
            />
            <section className="w-full justify-start">
                <div className="flex w-full flex-col gap-10 p-6 md:p-12 lg:p-16 border-1 border-potus/40 text-white/80">
                    <p className="text-sm text-white/50 italic">
                        {t("lastUpdated")}: 2026
                    </p>

                    <p className="text-base leading-relaxed text-left">
                        {t("privacyIntro")}
                    </p>

                    {/* 1. Responsables */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("controllerTitle")}
                        </h2>
                        <div className="flex flex-col gap-3 text-sm leading-relaxed">
                            <div>
                                <strong className="text-white">{t("controllerLabel")}</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>{t("controllerName")}</li>
                                    <li>{t("controllerAddress")}</li>
                                    <li>{t("controllerVat")}</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white">{t("processorLabel")}</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>{t("processorName")}</li>
                                    <li>{t("processorAddress")}</li>
                                    <li>{t("processorVat")}</li>
                                </ul>
                            </div>
                            <p>{t("processingAgreement")}</p>
                            <p>{t("controllerContact")}</p>
                            <p>{t("processorContact")}</p>
                            <div>
                                <strong className="text-white">{t("subprocessorsTitle")}</strong>
                                <p className="mt-1">{t("subprocessorsIntro")}</p>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>{t("subprocessorWebText")}</li>
                                    <li>{t("subprocessorVisitsText")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2. Finalidades */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("purposesTitle")}
                        </h2>
                        <p className="text-sm leading-relaxed">{t("purposesIntro")}</p>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2">
                            {t.raw("purposesList").map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Conservación */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("retentionTitle")}
                        </h2>
                        <p className="text-sm leading-relaxed">{t("retentionText")}</p>
                    </div>

                    {/* 4. Legitimación */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("legalBasisTitle")}
                        </h2>
                        <p className="text-sm leading-relaxed">{t("legalBasisText")}</p>
                    </div>

                    {/* 5. Destinatarios */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("recipientsTitle")}
                        </h2>
                        <p className="text-sm leading-relaxed">{t("recipientsText")}</p>
                    </div>

                    {/* 6. Derechos */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("rightsTitle")}
                        </h2>
                        <p className="text-sm leading-relaxed">
                            {t("rightsText")}{" "}
                            <a
                                href="mailto:dpd@udl.cat"
                                className="text-potus hover:underline"
                            >
                                {t("rightsEmail")}
                            </a>
                            .
                        </p>
                        <p className="text-sm leading-relaxed">{t("rightsComplaint")}</p>
                    </div>

                    {/* Resumen corto */}
                    <div className="flex flex-col gap-4 border-t border-white/20 pt-8">
                        <h2 className="text-xl uppercase text-white font-normal">
                            {t("shortNoticeTitle")}
                        </h2>
                        <p className="text-sm leading-relaxed">{t("shortNoticeIntro")}</p>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2">
                            <li>{t("shortNoticeController")}</li>
                            <li>{t("shortNoticeProcessor")}</li>
                            <li>{t("shortNoticePurpose")}</li>
                            <li>{t("shortNoticeLegalBasis")}</li>
                            <li>{t("shortNoticeRecipients")}</li>
                            <li>{t("shortNoticeRights")}</li>
                            <li>{t("shortNoticeDpo")}</li>
                            <li>{t("shortNoticeMoreInfo")}</li>
                        </ul>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Privacy;
