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
        { n: "1", label: t("strategiesPoliciesFunding"), desc: t("topic1Desc") },
        { n: "2", label: t("technologiesMarketStandards"), desc: t("topic2Desc") },
        { n: "3", label: t("projectsDesign"), desc: t("topic3Desc") },
        { n: "4", label: t("executionMaintenance"), desc: t("topic4Desc") },
        { n: "5", label: t("education"), desc: t("topic5Desc") },
    ];

    const impacts = [
        { label: t("impactClimateResilience"), desc: t("impactClimateResilienceDesc") },
        { label: t("impactWaterManagement"), desc: t("impactWaterManagementDesc") },
        { label: t("impactGreenSpaceManagement"), desc: t("impactGreenSpaceManagementDesc") },
        { label: t("impactBiodiversity"), desc: t("impactBiodiversityDesc") },
        { label: t("impactAirQuality"), desc: t("impactAirQualityDesc") },
        { label: t("impactPlaceRegeneration"), desc: t("impactPlaceRegenerationDesc") },
        { label: t("impactParticipatoryPlanning"), desc: t("impactParticipatoryPlanningDesc") },
        { label: t("impactHealthWellbeing"), desc: t("impactHealthWellbeingDesc") },
    ];

    const workshops = [
        { label: t("workshopGlobalSouth"), desc: t("workshopGlobalSouthDesc") },
        { label: t("workshopHealthWellbeing"), desc: t("workshopHealthWellbeingDesc") },
        { label: t("workshopPostConflict"), desc: t("workshopPostConflictDesc") },
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
                                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 hover:border-potus/40 hover:bg-white/[0.07] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-potus/15 text-potus text-xl font-bold group-hover:bg-potus group-hover:text-black transition-colors">
                                            {topic.n}
                                        </span>
                                        <p className="text-white font-medium text-base leading-snug">
                                            {topic.label}
                                        </p>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {topic.desc}
                                    </p>
                                </div>
                            ))}

                            {/* Impacts */}
                            <div className="rounded-2xl border border-potus/30 bg-potus/5 p-6 md:col-span-2 lg:col-span-3">
                                <div className="flex items-center gap-5 mb-2">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-potus text-black text-xl font-bold">
                                        6
                                    </span>
                                    <p className="text-white font-bold text-lg uppercase tracking-wide">
                                        {t("impacts")}
                                    </p>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 md:pl-[4.25rem]">
                                    {t("impactsIntro")}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {impacts.map((impact) => (
                                        <div
                                            key={impact.label}
                                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3"
                                        >
                                            <p className="text-white text-sm font-medium mb-1.5">
                                                {impact.label}
                                            </p>
                                            <p className="text-white/60 text-xs leading-relaxed">
                                                {impact.desc}
                                            </p>
                                        </div>
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
                                            key={workshop.label}
                                            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                                        >
                                            <p className="text-white text-sm font-medium mb-1.5 leading-snug">
                                                {workshop.label}
                                            </p>
                                            <p className="text-white/60 text-xs leading-relaxed">
                                                {workshop.desc}
                                            </p>
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
