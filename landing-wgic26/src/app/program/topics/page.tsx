import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Topics | WGIC26 Barcelona-Lleida",
  description:
    "Explore the core topics at WGIC26, from urban biodiversity to climate resilience — key themes of this nature-based solutions conference.",
};

const Topics = async () => {
    const t = await getTranslations("topicsPage");

    const mainTopics = [
        { n: "1", label: t("strategiesPoliciesFunding") },
        { n: "2", label: t("technologiesMarketStandards") },
        { n: "3", label: t("projectsDesign") },
        { n: "4", label: t("executionMaintenance") },
        { n: "5", label: t("education") },
    ];

    const impacts = [
        t("impactClimateResilience"),
        t("impactWaterManagement"),
        t("impactGreenSpaceManagement"),
        t("impactBiodiversity"),
        t("impactAirQuality"),
        t("impactPlaceRegeneration"),
        t("impactParticipatoryPlanning"),
        t("impactHealthWellbeing"),
    ];

    const workshops = [
        t("workshopGlobalSouth"),
        t("workshopHealthWellbeing"),
        t("workshopPostConflict"),
    ];

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="container mx-auto py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 space-y-8 text-white/80">

                        {/* Cover image: green roof with Barcelona Cathedral */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                            <Image
                                src="/img/varias/01 IMG_20250827_114013.jpg"
                                alt={t("img4Alt")}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6 leading-relaxed">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                            <p>{t("p4")}</p>
                        </div>

                    </div>

                    {/* Main Topics — validated list */}
                    <div className="mt-12 mb-12">
                        <h3 className="text-2xl font-semibold text-white mb-8 uppercase flex items-center gap-4">
                            <span className="w-10 h-px bg-potus"></span>
                            {t("tableTitle")}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mainTopics.map((topic) => (
                                <div
                                    key={topic.n}
                                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-5 hover:border-potus/40 hover:bg-white/[0.07] transition-all duration-300"
                                >
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-potus/15 text-potus text-xl font-bold group-hover:bg-potus group-hover:text-black transition-colors">
                                        {topic.n}
                                    </span>
                                    <p className="text-white font-medium text-base leading-snug">
                                        {topic.label}
                                    </p>
                                </div>
                            ))}

                            {/* Impacts */}
                            <div className="rounded-2xl border border-potus/30 bg-potus/5 p-6 md:col-span-2 lg:col-span-3">
                                <div className="flex items-center gap-5 mb-5">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-potus text-black text-xl font-bold">
                                        6
                                    </span>
                                    <p className="text-white font-bold text-lg uppercase tracking-wide">
                                        {t("impacts")}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {impacts.map((impact) => (
                                        <span
                                            key={impact}
                                            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                                        >
                                            {impact}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Workshops */}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2 lg:col-span-3">
                                <p className="text-white font-bold text-lg uppercase tracking-wide mb-5">
                                    {t("workshopsTitle")}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {workshops.map((workshop) => (
                                        <div
                                            key={workshop}
                                            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/80 leading-snug"
                                        >
                                            {workshop}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Topics;
