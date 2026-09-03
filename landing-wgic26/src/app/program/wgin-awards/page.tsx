import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WGIN Awards | WGIC26 Barcelona-Lleida",
  description:
    "The WGIN Awards recognise outstanding green infrastructure projects and research, presented at WGIC26 in Barcelona.",
};

const Awards = async () => {
    const t = await getTranslations("wginAwardsPage");

    const categories = [
        {
            title: t("categories.greenRoofs.title"),
            description: t("categories.greenRoofs.description"),
            image: "/img/wgin-awards/green-roofs.jpg"
        },
        {
            title: t("categories.greenWalls.title"),
            description: t("categories.greenWalls.description"),
            image: "/img/wgin-awards/green-walls.jpg"
        },
        {
            title: t("categories.greenNeighborhood.title"),
            description: t("categories.greenNeighborhood.description"),
            image: "/img/wgin-awards/green-neighbourhood.jpg"
        },
        {
            title: t("categories.policy.title"),
            description: t("categories.policy.description"),
            image: "/img/wgin-awards/green-infrastructure-policy.jpg"
        },
        {
            title: t("categories.researchAcademic.title"),
            description: t("categories.researchAcademic.description"),
            image: "/img/wgin-awards/research-academic.jpg"
        },
        {
            title: t("categories.researchStudent.title"),
            description: t("categories.researchStudent.description"),
            image: "/img/wgin-awards/research-student.jpg"
        },
        {
            title: t("categories.livingSystems.title"),
            description: t("categories.livingSystems.description"),
            image: "/img/wgin-awards/living-systems.jpg"
        },
        {
            title: t("categories.unintended.title"),
            description: t("categories.unintended.description"),
            image: "/img/wgin-awards/unintended-greenery.jpg"
        },
        {
            title: t("categories.champion.title"),
            description: t("categories.champion.description"),
            image: "/img/wgin-awards/champion.jpg"
        }
    ];

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="w-full justify-start">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
                    <div className="space-y-6 text-white/90 text-sm leading-relaxed">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-white/10 pb-8">
                            <p>{t("intro1")}</p>
                            <p>
                                {t("intro2a")}{" "}
                                <a
                                    href="https://awards.wgin.org/home"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lagoon hover:underline font-medium"
                                >
                                    WGIN
                                </a>
                                , {t("intro2b")}
                            </p>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-px bg-lagoon"></span>
                                {t("categoriesTitle")}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories.map((cat, i) => (
                                    <div key={i} className="group rounded-2xl border border-white/5 bg-white/2 overflow-hidden hover:bg-white/5 transition-all duration-300">
                                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={cat.image}
                                                alt={cat.title}
                                                fill
                                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-bold text-white mb-2 text-base leading-tight">{cat.title}</h4>
                                            <p className="text-white/60 text-sm leading-relaxed">{cat.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};



export default Awards;
