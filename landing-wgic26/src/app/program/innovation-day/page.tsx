import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RegisterCTA } from "@/components/RegisterCTA";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Innovation Day | WGIC26 Barcelona-Lleida",
  description:
    "Innovation Day at Parc Agrobiotech Lleida — hands-on workshops on urban green infrastructure as part of WGIC26.",
};

const InnovationDay = async () => {
    const t = await getTranslations("innovationDayPage");
    const home = await getTranslations("home");

    const workshops = [
        {
            title: t("workshop1Title"),
            languages: t("workshop1Languages"),
            description: t("workshop1Description"),
            images: [
                "/img/innovation-day/workshop1-biodiversity-1.jpeg",
                "/img/innovation-day/workshop1-biodiversity-2.jpeg",
            ],
        },
        {
            title: t("workshop2Title"),
            languages: t("workshop2Languages"),
            description: t("workshop2Description"),
            images: [
                "/img/innovation-day/workshop2-maintenance-1.jpeg",
                "/img/innovation-day/workshop2-maintenance-2.jpeg",
            ],
        },
    ];

    return (
        <div>
            <PageHeader title={t("title")} section="program" />

            <section className="w-full py-12 px-4 md:px-8 lg:px-16">
                <div className="space-y-16">

                    <div className="space-y-4 text-white/80 leading-relaxed">
                        <p>{t("intro1")}</p>
                        <p>{t("intro2")}</p>
                        <p>{t("intro3")}</p>
                    </div>

                    <RegisterCTA
                        title={t("registerCtaTitle")}
                        subtitle={t("registerCtaSubtitle")}
                        buttonLabel={t("registerCtaButton")}
                        href="https://publicalt.xeria.es/innovation_workshops_at_the_university_of_lleida/en/register/Registerpage/RegistrationForms"
                        external
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {workshops.map((workshop) => (
                            <div key={workshop.title} className="space-y-4">
                                <div className="grid grid-cols-2 gap-2">
                                    {workshop.images.map((image) => (
                                        <div key={image} className="relative w-full aspect-square overflow-hidden rounded-lg">
                                            <Image
                                                src={image}
                                                alt={workshop.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold uppercase text-white tracking-wide">
                                        {workshop.title}
                                    </h2>
                                    <p className="text-white/50 text-sm mt-1">{workshop.languages}</p>
                                </div>
                                <p className="text-white/80 leading-relaxed">{workshop.description}</p>
                            </div>
                        ))}
                    </div>

                    <RegisterCTA
                        title={home("ctaJoinTitle")}
                        subtitle={home("ctaJoinSubtitle")}
                        buttonLabel={home("registerNow")}
                    />
                </div>
            </section>
        </div>
    );
};

export default InnovationDay;
