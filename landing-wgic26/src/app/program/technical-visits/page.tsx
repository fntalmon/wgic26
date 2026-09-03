import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RegisterCTA } from "@/components/RegisterCTA";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Technical Visits | WGIC26 Barcelona-Lleida",
  description:
    "Join guided technical visits to real green infrastructure projects in Barcelona and Lleida as part of WGIC26, the urban sustainability congress.",
};

const TechnicalVisits = async () => {
    const t = await getTranslations("technicalVisitsPage");

    const itineraryA = [
        { name: "Caixa Forum Barcelona - Cultural", image: "/img/visits/Caixa Forum Barcelona - Cultural.jpg" },
        { name: "Pérez Iborra - School", image: "/img/visits/Perez Iborra-School.jpg" },
        { name: "Almirall - Offices", image: "/img/visits/Almirall - Offices.jpg" },
        { name: "Manuel de Falla - Residential", image: "/img/visits/Manuel de Falla-Residential.jpg" },
        { name: "Façana Tarradellas - Residential", image: "/img/visits/Façana_Tarradellas_Residential.jpg" },
    ];

    const itineraryB = [
        { name: "Urbaser - Offices", image: "/img/visits/Urbaser_Offices.jpg" },
        { name: "Sant Pau - Hospital", image: "/img/visits/Sant Pau - Hospital.jpg" },
        { name: "Pere IV - Offices", image: "/img/visits/Pere IV-Offices.jpg" },
        { name: "Platinum @22 - Offices", image: "/img/visits/Platinum @22 - Offices.jpg" },
        { name: "Torre Diagonal One - Offices", image: "/img/visits/Torre Diagonal One-Offices.jpg" },
    ];

    const itineraryC = [
        { name: "H10 Cubik - Hotel", image: "/img/visits/H10 Cubik - Hotel.jpg" },
        { name: "IEC - Historic", image: "/img/visits/IEC-Historic.jpg" },
        { name: "COAC - Offices", image: "/img/visits/COAC-Offices.jpg" },
        { name: "Porxos d'en Xifré - Residential", image: "/img/visits/Porxos d'en Xifré- Residential.jpg" },
        { name: "Sofitel - Hotel", image: "/img/visits/Sofitel - Hotel.webp" },
    ];

    const itineraries = [
        { label: t("itineraryA"), subtitle: t("itineraryASubtitle"), items: itineraryA },
        { label: t("itineraryB"), subtitle: t("itineraryBSubtitle"), items: itineraryB },
        { label: t("itineraryC"), subtitle: t("itineraryCSubtitle"), items: itineraryC },
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                {itinerary.items.map((visit, index) => (
                                    <div key={index} className="group flex flex-col gap-2">
                                        <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                                            <Image
                                                src={visit.image}
                                                alt={visit.name}
                                                fill
                                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-white/80 text-center text-sm">{visit.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TechnicalVisits;
