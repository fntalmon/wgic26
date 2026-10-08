import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RegisterCTA } from "@/components/RegisterCTA";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan Your Stay | WGIC26 Barcelona-Lleida",
  description:
    "Planning your trip to WGIC26? Find transport and travel tips for attending this urban sustainability congress in Barcelona, Spain.",
};

type Day = { num: string; weekday: string; month: string; place: string; hours: string; text: string };
type Transport = { title: string; text: string };
type Faq = { q: string; a: string };

const EMAIL_PATTERN = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

// Turns every e-mail address in a plain string into a mailto link.
const withMailLinks = (text: string) =>
    text.split(EMAIL_PATTERN).map((part, index) =>
        index % 2 === 1 ? (
            <a key={index} href={`mailto:${part}`} className="text-potus underline underline-offset-2 hover:text-potus/80">
                {part}
            </a>
        ) : (
            part
        )
    );

const CCIB_MAP_SRC = "https://www.google.com/maps?q=CCIB+Pla%C3%A7a+de+Willy+Brandt+11-14,+08019+Barcelona&output=embed";
const AGROBIOTECH_MAP_SRC = "https://www.google.com/maps?q=Parc+Agrobiotech+Pla%C3%A7a+de+les+Ci%C3%A8ncies,+25003+Lleida&output=embed";
const HOTEL_MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Best+Front+Mar%C3%ADtim+Passeig+de+Garcia+Faria+69+Barcelona";
const TMB_URL = "https://www.tmb.cat/es/transporte-barcelona";
const REGISTRATION_URL = "https://panel.helice.app/w/wgic26/214760/registration";

const PlanYourStay = async () => {
    const t = await getTranslations("planYourStayPage");

    const days = t.raw("days") as Day[];
    const transport = t.raw("transport") as Transport[];
    const places = t.raw("places") as string[];
    const faq = t.raw("faq") as Faq[];

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="plan-your-stay"
            />

            {/* Week at a glance */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <p className="text-potus text-sm uppercase tracking-wide mb-2">{t("glanceEyebrow")}</p>
                    <h2 className="text-3xl font-bold text-white mb-8">{t("glanceTitle")}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {days.map((day) => (
                            <div key={day.num} className="bg-cactus/10 p-6 rounded-xl border border-white/10 flex flex-col gap-3">
                                <div>
                                    <span className="text-5xl font-bold text-white">{day.num}</span>
                                    <p className="text-xs uppercase tracking-wide text-white/60 mt-1">
                                        {day.weekday} · {day.month}
                                    </p>
                                </div>
                                <p className="text-white font-medium">{day.place}</p>
                                {day.hours && (
                                    <p className="inline-flex items-center gap-2 text-sm text-potus">
                                        <Clock size={14} aria-hidden="true" />
                                        {day.hours}
                                    </p>
                                )}
                                <p className="text-white/70 text-sm leading-relaxed">{day.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where to be */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">{t("whereTitle")}</h2>
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-cactus/10 rounded-2xl border border-white/10 overflow-hidden">
                            <div className="p-8 flex flex-col justify-center gap-3">
                                <p className="text-potus text-sm uppercase tracking-wide">{t("ccibDates")}</p>
                                <h3 className="text-2xl font-bold text-white">{t("ccibName")}</h3>
                                <p className="text-white/70 flex items-start gap-2">
                                    <MapPin size={16} className="mt-1 shrink-0 text-potus" aria-hidden="true" />
                                    {t("ccibAddress")}
                                </p>
                                <p className="text-white/70 flex items-center gap-2">
                                    <Clock size={16} className="shrink-0 text-potus" aria-hidden="true" />
                                    {t("ccibHours")}
                                </p>
                            </div>
                            <div className="relative min-h-[300px]">
                                <iframe
                                    src={CCIB_MAP_SRC}
                                    className="absolute inset-0 w-full h-full border-0"
                                    loading="lazy"
                                    title={t("ccibMapTitle")}
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-cactus/10 p-8 rounded-2xl border border-white/10 flex flex-col gap-3">
                            <p className="text-potus text-sm uppercase tracking-wide">{t("visitsDate")}</p>
                            <h3 className="text-2xl font-bold text-white">{t("visitsName")}</h3>
                            <p className="text-white/70 leading-relaxed">{t("visitsText")}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-cactus/10 rounded-2xl border border-white/10 overflow-hidden">
                            <div className="p-8 flex flex-col justify-center gap-3">
                                <p className="text-potus text-sm uppercase tracking-wide">{t("agroDate")}</p>
                                <h3 className="text-2xl font-bold text-white">{t("agroName")}</h3>
                                <p className="text-white/70 flex items-start gap-2">
                                    <MapPin size={16} className="mt-1 shrink-0 text-potus" aria-hidden="true" />
                                    {t("agroAddress")}
                                </p>
                                <p className="text-white/70 flex items-center gap-2">
                                    <Clock size={16} className="shrink-0 text-potus" aria-hidden="true" />
                                    {t("agroHours")}
                                </p>
                                <p className="text-white/70 leading-relaxed">{t("agroText")}</p>
                            </div>
                            <div className="relative min-h-[300px]">
                                <iframe
                                    src={AGROBIOTECH_MAP_SRC}
                                    className="absolute inset-0 w-full h-full border-0"
                                    loading="lazy"
                                    title={t("agroMapTitle")}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting to the CCIB */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-2">{t("gettingTitle")}</h2>
                    <p className="text-white/70 mb-8 text-lg">{t("gettingSubtitle")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {transport.map((item) => (
                            <div key={item.title} className="bg-cactus/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {item.text.includes("<link>") ? (
                                        <BusText text={item.text} href={TMB_URL} />
                                    ) : (
                                        item.text
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where to stay */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-2">{t("stayTitle")}</h2>
                    <p className="text-white/70 mb-10 text-lg">{t("stayRecommended")}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-cactus/10 rounded-2xl border border-white/10 overflow-hidden">
                        <div className="relative min-h-[300px]">
                            <Image
                                src="/img/hotels/best-front-maritim.jpg"
                                alt={t("frontmaritimName")}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center gap-4">
                            <h3 className="text-2xl font-bold text-white">{t("frontmaritimName")}</h3>
                            <p className="text-white/60 text-sm">{t("frontmaritimAddress")}</p>
                            <p className="text-white/70 leading-relaxed">{t("frontmaritimDescription")}</p>
                            <a
                                href={HOTEL_MAP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-cactus hover:bg-cactus/80 text-center font-medium py-3 px-6 rounded-lg transition-colors w-full mt-2"
                            >
                                {t("viewOnMap")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Food and coffee */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">{t("foodTitle")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-cactus/10 p-8 rounded-xl border border-white/10 flex flex-col gap-3">
                            <p className="text-potus text-sm uppercase tracking-wide">{t("included")}</p>
                            <h3 className="text-2xl font-bold text-white">{t("lunchTitle")}</h3>
                            <p className="text-white/70 leading-relaxed">{t("lunchText")}</p>
                        </div>
                        <div className="bg-cactus/10 p-8 rounded-xl border border-white/10 flex flex-col gap-3">
                            <p className="text-white/50 text-sm uppercase tracking-wide">{t("notIncluded")}</p>
                            <h3 className="text-2xl font-bold text-white">{t("breakfastTitle")}</h3>
                            <p className="text-white/70 leading-relaxed">{t("breakfastText")}</p>
                            <p className="text-white/70 leading-relaxed">{t("breakfastPlaces")}</p>
                            <ul className="list-disc list-inside space-y-1 text-white/80">
                                {places.map((place) => (
                                    <li key={place}>{place}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tourism: not part of the practical-information document, kept as it was */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-5xl mx-auto">
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
                                className="inline-block bg-cactus hover:bg-cactus/80 text-center font-medium py-3 px-6 rounded-lg transition-colors w-full text-center"
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
                                    href="https://www.catalunya.com/en/cultural-tourism-in-catalonia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-cactus hover:bg-cactus/80 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                                >
                                    {t("culturalTourism")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">{t("faqTitle")}</h2>
                    <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
                        {faq.map((item, index) => (
                            <AccordionItem
                                key={item.q}
                                value={`faq-${index}`}
                                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden data-[state=open]:bg-white/[0.07]"
                            >
                                <AccordionTrigger className="text-white hover:no-underline px-4 py-4 sm:px-6 sm:py-5 group text-base">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/70 text-sm leading-relaxed pb-5 px-4 sm:px-6">
                                    {withMailLinks(item.a)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Contact + register */}
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">{t("questionsTitle")}</h2>
                        <ul className="flex flex-col gap-2 text-white/70">
                            <li>
                                {t("contactGeneral")}: {withMailLinks("info@wgic26.org")}
                            </li>
                            <li>
                                {t("contactRegistration")}: {withMailLinks("registration@wgic26.org")}
                            </li>
                            <li>
                                {t("contactSponsorship")}: {withMailLinks("sponsorship@wgic26.org")}
                            </li>
                        </ul>
                    </div>
                    <RegisterCTA
                        title={t("registerNowTitle")}
                        subtitle={t("registerNowSubtitle")}
                        buttonLabel={t("registerNowButton")}
                        href={REGISTRATION_URL}
                        external
                    />
                </div>
            </section>
        </div>
    );
};

// Renders the bus text, turning the <link>…</link> fragment into the TMB link.
const BusText = ({ text, href }: { text: string; href: string }) => {
    const [before, rest = ""] = text.split("<link>");
    const [label, after = ""] = rest.split("</link>");
    return (
        <>
            {before}
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-potus underline underline-offset-2 hover:text-potus/80">
                {label}
            </a>
            {after}
        </>
    );
};

export default PlanYourStay;
