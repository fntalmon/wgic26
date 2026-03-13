import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const PlanYourStay = async () => {
    const t = await getTranslations("planYourStayPage");

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="plan-your-stay"
            />

            <section className="container mx-auto py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-6">{t("heading")}</h2>
                        <p className="text-white/70 mb-8 text-lg leading-relaxed">{t("intro")}</p>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-cactus/30 hover:border-cactus/60 transition-colors duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cactus/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/eNBACsKDfn4"
                            title={t("videoTitle")}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                           
                        ></iframe>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Barcelona Tourism Section */}
                    <div className="flex flex-col gap-6 group">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10">
                            <Image 
                                src="/img/gaudi-3.png" 
                                alt={t("barcelonaImgAlt")}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-cactus/10 p-8 rounded-xl border border-white/10 transition-colors group-hover:bg-cactus/20">
                            <h2 className="text-2xl font-bold text-white mb-4">{t("barcelonaTitle")}</h2>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                {t("barcelonaDescription")}
                            </p>
                            <a 
                                href="https://www.barcelonaturisme.com/wv3/en/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-cactus hover:bg-cactus/80 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-center"
                            >
                                {t("visitWebsite")}
                            </a>
                        </div>
                    </div>

                    {/* Catalonia Tourism Section */}
                    <div className="flex flex-col gap-6 group">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10">
                            <Image 
                                src="/img/catalonia-best.jpg" 
                                alt={t("cataloniaImgAlt")}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-cactus/10 p-8 rounded-xl border border-white/10 transition-colors group-hover:bg-cactus/20">
                            <h2 className="text-2xl font-bold text-white mb-4">{t("cataloniaTitle")}</h2>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                {t("cataloniaDescription")}
                            </p>
                            <div className="flex flex-col gap-3">
                                <a 
                                    href="https://act.gencat.cat/en/programes/grand-tour-de-catalunya/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-white/10 text-center"
                                >
                                    {t("grandTour")}
                                </a>
                                <a 
                                    href="https://www.catalunya.com/en/catalonia-the-best-gastronomy-in-the-world" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-white/10 text-center"
                                >
                                    {t("gastronomy")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlanYourStay;

