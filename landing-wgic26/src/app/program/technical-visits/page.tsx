import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

const TechnicalVisits = async () => {
    const t = await getTranslations("technicalVisitsPage");
    const locale = await getLocale();

    const videoIds: Record<string, string> = {
        ca: "Ksh_rzrAo28",
        en: "Ioq74bbxeuw",
        es: "Ioq74bbxeuw",
    };

    const videoId = videoIds[locale] || videoIds.en;

    const itineraryA = [
        { name: "Plaça de les Dones", image: "/img/visits/Plaça_de_les_dones_Residential.jpeg" },
        { name: "Almirall", image: "/img/visits/Almirall - Offices.jpg" },
        { name: "Manuel de Falla", image: "/img/visits/Manuel de Falla-Residential.jpg" },
        { name: "Jardí Tarradellas", image: "/img/visits/Façana_Tarradellas_Residential.jpg" },
        { name: "Pérez Iborra", image: "/img/visits/Perez Iborra-School.jpg" },
    ];

    const itineraryB = [
        { name: "Urbaser", image: "/img/visits/Urbaser_Offices.jpg" },
        { name: "H Sant Pau", image: "/img/visits/Sant Pau - Hospital.jpg" },
        { name: "Pere IV", image: "/img/visits/Pere IV-Offices.jpg" },
        { name: "Edifici Platinum @22", image: "/img/visits/Platinum @22 - Offices.jpg" },
        { name: "Torre Telefónica", image: "/img/visits/Torre Diagonal One-Offices.jpg" },
    ];

    const itineraryC = [
        { name: "H10 Urquinaona Plaza", image: "/img/visits/H10 Urquinaona Plaza - Hotel.webp" },
        { name: "IEC", image: "/img/visits/IEC-Historic.jpg" },
        { name: "COAC", image: "/img/visits/COAC-Offices.jpg" },
        { name: "Porxos d'en Xifré", image: "/img/visits/Porxos d'en Xifré- Residential.jpg" },
        { name: "Sofitel", image: "/img/visits/Sofitel - Hotel.webp" },
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
                        <p>{t("intro3")}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold uppercase text-white tracking-wide">
                            {t("videoTitle")}
                        </h2>
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={t("videoTitle")}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full border-0"
                            />
                        </div>
                    </div>

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
