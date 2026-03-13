import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const KeyNoteSpeakers = async () => {
    const t = await getTranslations("keyNoteSpeakersPage");

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
                        <p>
                            {t("p1")}
                        </p>
                        <p className="mt-4">
                            {t("p2")}
                        </p>
                    </div>

                    {/* Speakers Grid */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Marcos_Ros.png" alt="Marcos Ros" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Marcos Ros</div>
                                <p className="text-sm text-white/60">{t("speakers.marcos")}</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Salvador_Rueda.png" alt="Salvador Rueda" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Salvador Rueda</div>
                                <p className="text-sm text-white/60">{t("speakers.salvador")}</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Vicente Guallart.png" alt="Vicente Guallart" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Vicente Guallart</div>
                                <p className="text-sm text-white/60">{t("speakers.vicente")}</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Alberto Estevez.png" alt="Alberto Estévez" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Alberto Estévez</div>
                                <p className="text-sm text-white/60">{t("speakers.alberto")}</p>
                            </div>
                        </div>

                        <p className="text-white/60 text-center mt-6">{t("closing")}</p>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default KeyNoteSpeakers;
