import PageHeader from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const SpecialIssues = async () => {
    const t = await getTranslations("programSpecialIssuesPage");

    const journals = [
        {
            key: "urban",
            imageSrc: "https://ars.els-cdn.com/content/image/X16188667.jpg",
            imagePosition: "right" as const,
            imageAspect: "aspect-[3/4]",
            journalUrl: "https://www.sciencedirect.com/journal/urban-forestry-and-urban-greening",
            specialIssueUrl:
                "https://www.sciencedirect.com/special-issue/331447/green-infrastructure-for-health-global-equity-and-urban-recovery-contributions-from-the-12th-world-green-infrastructure-congress-wgic26",
        },
        {
            key: "nbs",
            imageSrc: "https://ars.els-cdn.com/content/image/X27724115.jpg",
            imagePosition: "left" as const,
            imageAspect: "aspect-[3/4]",
            journalUrl: "https://www.sciencedirect.com/journal/nature-based-solutions",
        },
        {
            key: "jliv",
            imageSrc:
                "https://images.squarespace-cdn.com/content/v1/58a5ddae6a49639715bab06d/1487356072872-IJ71KM95T6WQCG1XOIF2/JLIVmasthead_opaque.png?format=2500w",
            imagePosition: "right" as const,
            imageAspect: "aspect-[2250/852]",
            journalUrl: "https://greeninfrastructurefoundation.org/jliv",
        },
    ];

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />

            <section className="w-full justify-start">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8 text-white/85 text-sm leading-relaxed">
                    <p>{t("intro")}</p>

                    {journals.map((journal, index) => {
                        const textBlock = (
                            <div className="text-white/90 text-sm leading-relaxed">
                                <h2 className="text-lg text-white uppercase mb-2">
                                    {index + 1}. {t(`journals.${journal.key}.name`)}
                                </h2>
                                <p className="uppercase tracking-wide text-white/60 text-xs mb-2">
                                    {t(`journals.${journal.key}.publisher`)}
                                </p>
                                <p className="mb-4">{t(`journals.${journal.key}.about`)}</p>

                                <a
                                    href={journal.journalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-lagoon hover:text-white transition-colors"
                                >
                                    {t("journalLink")} <ExternalLink size={14} />
                                </a>

                                {journal.specialIssueUrl ? (
                                    <div className="mt-4 p-4 border border-white/10 rounded-lg bg-white/5">
                                        <p className="font-semibold text-white mb-2">
                                            {t(`journals.${journal.key}.specialIssueTitle`)}
                                        </p>
                                        <a
                                            href={journal.specialIssueUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-lagoon hover:text-white transition-colors"
                                        >
                                            {t("specialIssueLink")} <ExternalLink size={14} />
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        );

                        const imageBlock = (
                            <figure
                                className={`w-full max-w-lg mx-auto relative rounded-md overflow-hidden bg-white/95 p-3 ${journal.imageAspect}`}
                            >
                                <Image
                                    src={journal.imageSrc}
                                    alt={t(`journals.${journal.key}.imageAlt`)}
                                    fill
                                    sizes="(min-width:1024px) 40vw, 100vw"
                                    className="object-contain p-3"
                                />
                            </figure>
                        );

                        return (
                            <section key={journal.key} className="w-full max-w-7xl mx-auto px-0 py-8">
                                <div
                                    className={`w-full grid gap-6 items-center ${
                                        journal.imagePosition === "left"
                                            ? "lg:grid-cols-[40%_60%]"
                                            : "lg:grid-cols-[60%_40%]"
                                    }`}
                                >
                                    {journal.imagePosition === "left" ? (
                                        <>
                                            {imageBlock}
                                            {textBlock}
                                        </>
                                    ) : (
                                        <>
                                            {textBlock}
                                            {imageBlock}
                                        </>
                                    )}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default SpecialIssues;

