import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RegisterCTA } from "@/components/RegisterCTA";
import CollaboratorLogos from "@/components/CollaboratorLogos";
import { technicalVisitsCollaborators } from "@/data/collaborators";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Technical Visits | WGIC26 Barcelona-Lleida",
  description:
    "Join guided technical visits to real green infrastructure projects in Barcelona and Lleida as part of WGIC26, the urban sustainability congress.",
};

type VisitItem = {
  name: string;
  title: string;
  description: string;
  image: string;
};

const TechnicalVisits = async () => {
    const t = await getTranslations("technicalVisitsPage");

    const itineraries = [
        {
            label: t("itineraryA"),
            subtitle: t("itineraryASubtitle"),
            items: t.raw("itineraryAItems") as VisitItem[],
        },
        {
            label: t("itineraryB"),
            subtitle: t("itineraryBSubtitle"),
            items: t.raw("itineraryBItems") as VisitItem[],
        },
        {
            label: t("itineraryC"),
            subtitle: t("itineraryCSubtitle"),
            items: t.raw("itineraryCItems") as VisitItem[],
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
                    </div>

                    <RegisterCTA
                        title={t("registerCtaTitle")}
                        subtitle={t("registerCtaSubtitle")}
                        buttonLabel={t("registerCtaButton")}
                        href="https://publicalt.xeria.es/technical_visits_wgic_2026/en/register/Registerpage/RegistrationForms"
                        external
                    />

                    {itineraries.map((itinerary) => (
                        <div key={itinerary.label} className="space-y-5">
                            <div>
                                <h2 className="text-2xl font-semibold uppercase text-white tracking-wide">
                                    {itinerary.label}
                                </h2>
                                <p className="text-white/50 text-sm mt-1">{itinerary.subtitle}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {itinerary.items.map((visit) => (
                                    <div key={visit.image} className="flex flex-col gap-3">
                                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                                            <Image
                                                src={visit.image}
                                                alt={visit.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-sm">{visit.name}</p>
                                            <h3 className="text-lg font-semibold uppercase text-white tracking-wide mt-1">
                                                {visit.title}
                                            </h3>
                                        </div>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            {visit.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="space-y-5">
                        <h2 className="text-2xl font-semibold uppercase text-white tracking-wide">
                            {t("collaboratorsTitle")}
                        </h2>
                        <CollaboratorLogos logos={technicalVisitsCollaborators} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechnicalVisits;
