import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CollaboratorLogos from "@/components/CollaboratorLogos";
import { technicalVisitsCollaborators } from "@/data/collaborators";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CalendarDays, Handshake, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Visits | WGIC26 Barcelona-Lleida",
  description:
    "Join guided technical visits to real green infrastructure projects in Barcelona and Lleida as part of WGIC26, the urban sustainability congress.",
};

type AdditionalVisit = {
  key: "vhir" | "lopeDeVega";
  image: string;
  mapUrl: string;
  address?: string;
  hasPartner?: boolean;
};

// Visitas fuera de los itinerarios A, B y C (pedido de Laura Herrera, 16 y 21/10/2026).
// Textos traducidos en technicalVisitsPage.additionalVisits.
const additionalVisits: AdditionalVisit[] = [
  {
    key: "vhir",
    image: "/img/visits/Vall d'Hebron Research Institute-Roof.jpg",
    address: "VHIR Edifici Central, Pg. Vall d'Hebron, 129, Horta-Guinardó, 08035 Barcelona",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=VHIR+Edifici+Central%2C+Pg.+Vall+d%27Hebron%2C+129%2C+08035+Barcelona",
  },
  {
    key: "lopeDeVega",
    image: "/img/visits/Lope de Vega-Vertical Garden.jpg",
    mapUrl: "https://maps.app.goo.gl/14yKfgjdwsDWNoSh6",
    hasPartner: true,
  },
];

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
                        <div>
                            <h2 className="text-2xl font-semibold uppercase text-white tracking-wide">
                                {t("additionalVisits.label")}
                            </h2>
                            <p className="text-white/50 text-sm mt-1">{t("additionalVisits.note")}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {additionalVisits.map((visit) => (
                                <div key={visit.key} className="flex flex-col gap-3">
                                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                                        <Image
                                            src={visit.image}
                                            alt={t(`additionalVisits.items.${visit.key}.imageAlt`)}
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-sm">
                                            {t(`additionalVisits.items.${visit.key}.name`)}
                                        </p>
                                        <h3 className="text-lg font-semibold uppercase text-white tracking-wide mt-1">
                                            {t(`additionalVisits.items.${visit.key}.title`)}
                                        </h3>
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {t(`additionalVisits.items.${visit.key}.description`)}
                                    </p>
                                    <ul className="flex flex-col gap-2 text-sm text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CalendarDays size={16} className="text-potus shrink-0 mt-0.5" aria-hidden />
                                            <span>{t("additionalVisits.when")}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin size={16} className="text-potus shrink-0 mt-0.5" aria-hidden />
                                            <span>
                                                {visit.address && <span className="block">{visit.address}</span>}
                                                <a
                                                    href={visit.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-potus underline underline-offset-2 hover:text-potus/80"
                                                >
                                                    {t("additionalVisits.mapLink")}
                                                </a>
                                            </span>
                                        </li>
                                        {visit.hasPartner && (
                                            <li className="flex items-start gap-2">
                                                <Handshake size={16} className="text-potus shrink-0 mt-0.5" aria-hidden />
                                                <span>
                                                    {t("additionalVisits.partnerLabel")}:{" "}
                                                    {t(`additionalVisits.items.${visit.key}.partner`)}
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

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
