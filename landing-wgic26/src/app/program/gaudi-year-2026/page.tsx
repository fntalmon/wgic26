import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Gaudí Year 2026 | WGIC26 Barcelona-Lleida",
  description:
    "WGIC26 celebrates Barcelona's Gaudí Year 2026, connecting Gaudí's architectural legacy with modern nature-based solutions and green infrastructure.",
};

const Gaudi = async () => {
    const t = await getTranslations("gaudiYearPage");

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="w-full justify-start text-lg">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <TextImage imageSrc="/img/gaudi-1.jpg" imageAlt={t("img1Alt")} imagePosition="right">
                            <p className="text-white/90 text-lg leading-relaxed text-left">
                                {t("p1")}
                            </p>
                        </TextImage>

                        <TextImage imageSrc="/img/gaudi-2.jpg" imageAlt={t("img2Alt")} imagePosition="left">
                            <p className="text-white/90 text-lg leading-relaxed text-left">
                                {t("p2")}
                            </p>
                        </TextImage>

                        <p className="text-white/90 text-lg leading-relaxed text-left">
                            {t("p3")}
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                        <h3 className="text-xl text-white uppercase mb-4">
                            {t("boxTitle")}
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed text-left">
                            {t("boxBody")}
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Gaudi;