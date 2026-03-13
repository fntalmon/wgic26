import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const TechnicalVisits = async () => {
    const t = await getTranslations("technicalVisitsPage");

    const visits = [
        { name: "Almirall - Offices", image: "/img/visits/Almirall - Offices.jpg" },
        { name: "Bonay Hotel", image: "/img/visits/Bonay-Hotel.jpg" },
        { name: "COAC - Offices", image: "/img/visits/COAC-Offices.jpg" },
        { name: "H10 Universitat - Hotel", image: "/img/visits/H10 Univesrsitat - Hotel.jpg" },
        { name: "H10 Urquinaona Plaza - Hotel", image: "/img/visits/H10 Urquinaona Plaza - Hotel.webp" },
        { name: "IEC - Historic", image: "/img/visits/IEC-Historic.jpg" },
        { name: "Manuel de Falla - Residential", image: "/img/visits/Manuel de Falla-Residential.jpg" },
        { name: "Pere IV - Offices", image: "/img/visits/Pere IV-Offices.jpg" },
        { name: "Perez Iborra - School", image: "/img/visits/Perez Iborra-School.jpg" },
        { name: "Platinum @22 - Offices", image: "/img/visits/Platinum @22 - Offices.jpg" },
        { name: "Porxos d'en Xifré - Residential", image: "/img/visits/Porxos d'en Xifré- Residential.jpg" },
        { name: "Sant Pau - Hospital", image: "/img/visits/Sant Pau - Hospital.jpg" },
        { name: "Sofitel - Hotel", image: "/img/visits/Sofitel - Hotel.webp" },
        { name: "Torre Diagonal One - Offices", image: "/img/visits/Torre Diagonal One-Offices.jpg" },
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
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {visits.map((visit, index) => (
                            <div key={index} className="break-inside-avoid group flex flex-col gap-2">
                                <div className="relative w-full h-auto overflow-hidden rounded-lg">
                                    <Image
                                        src={visit.image}
                                        alt={visit.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-white/80 text-center text-sm">{visit.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechnicalVisits;

