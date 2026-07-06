import PageHeader from "@/components/PageHeader";
import { 
    Leaf, 
    Layers, 
    Trees, 
    FileText, 
    GraduationCap, 
    BookOpen, 
    Cpu, 
    Sprout, 
    Trophy,
    ExternalLink
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const Awards = async () => {
    const t = await getTranslations("wginAwardsPage");

    const categories = [
        {
            title: t("categories.greenRoofs.title"),
            description: t("categories.greenRoofs.description"),
            icon: Leaf
        },
        {
            title: t("categories.greenWalls.title"),
            description: t("categories.greenWalls.description"),
            icon: Layers
        },
        {
            title: t("categories.greenNeighborhood.title"),
            description: t("categories.greenNeighborhood.description"),
            icon: Trees
        },
        {
            title: t("categories.policy.title"),
            description: t("categories.policy.description"),
            icon: FileText
        },
        {
            title: t("categories.researchAcademic.title"),
            description: t("categories.researchAcademic.description"),
            icon: GraduationCap
        },
        {
            title: t("categories.researchStudent.title"),
            description: t("categories.researchStudent.description"),
            icon: BookOpen
        },
        {
            title: t("categories.livingSystems.title"),
            description: t("categories.livingSystems.description"),
            icon: Cpu
        },
        {
            title: t("categories.unintended.title"),
            description: t("categories.unintended.description"),
            icon: Sprout
        },
        {
            title: t("categories.champion.title"),
            description: t("categories.champion.description"),
            icon: Trophy
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
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">{t("nominationsTitle")}</h2>
                                <p className="text-white/60">{t("nominationsSubtitle")}</p>
                            </div>
                            <a 
                                href="https://awards.wgin.org/home" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 bg-lagoon text-sm px-6 py-3 rounded-full font-bold hover:bg-white transition-colors text-sm"
                            >
                                {t("submitNomination")} <ExternalLink size={16} />
                            </a>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-4">
                            <p>
                                {t("p1")}
                            </p>
                            <p>
                                {t("p2")}
                            </p>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-px bg-lagoon"></span>
                                {t("categoriesTitle")}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories.map((cat, i) => (
                                    <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-monstera/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <cat.icon className="text-lagoon" size={20} />
                                        </div>
                                        <h4 className="font-bold text-white mb-2 text-base leading-tight">{cat.title}</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">{cat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 grid md:grid-cols-2 gap-12 items-center border-t border-white/10">
                            <div className="space-y-4">
                                <p>
                                    {t("p3")}
                                </p>
                                <p className="text-xs text-white/50 italic">
                                    {t("moreInfo")}
                                </p>
                                <a 
                                    href="https://awards.wgin.org/home" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-lagoon hover:underline font-medium block"
                                >
                                    https://awards.wgin.org/home
                                </a>
                            </div>
                            <div className="bg-cactus p-8 rounded-3xl border border-white/10 text-center">
                                <Trophy className="mx-auto text-lagoon mb-4" size={48} />
                                <h5 className="text-white font-bold text-xl mb-2">{t("joinTitle")}</h5>
                                <p className="text-white/60 text-xs mb-6">{t("joinBody")}</p>
                                <a 
                                    href="https://awards.wgin.org/home" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block border border-white/20 text-xs px-8 py-2 rounded-full text-xs hover:bg-white hover:text-cactus transition-all"
                                >
                                    {t("learnMore")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};



export default Awards;
