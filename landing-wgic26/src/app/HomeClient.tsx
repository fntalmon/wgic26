"use client";

import { HomeBannerSlider } from "@/components/HomeBannerSlider";
import { KeynoteSpeakersCarousel } from "@/components/KeynoteSpeakersCarousel";
import { SocialProof } from "@/components/SocialProof";
import { SupportersCarousel } from "@/components/SupportersCarousel";
import { supporters } from "@/data/supporters";
import { sponsorTiers } from "@/data/sponsors";
import { MapPin, CheckCircle, AlertCircle, ArrowRight, FileUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const keynoteSpeakerSlots = [
  { id: "speaker1", image: "/img/speakers/marcosros.jpg" },
  { id: "speaker6", image: "/img/speakers/wendyy.chen.jpg" },
  { id: "speaker2", image: "/img/speakers/salvadorrueda.jpg" },
  { id: "speaker7", image: "/img/speakers/dorothyaseyo.jpg" },
  { id: "speaker3", image: "/img/speakers/vicenteguallart.jpg" },
  { id: "speaker4", image: "/img/speakers/albertoestevez.jpg" },
  { id: "speaker5", image: "/img/speakers/enricbatlle.jpg" },
  { id: "speaker8", image: "/img/speakers/buhigas_maria.jpg" },
  { id: "speaker9", image: "/img/speakers/JesusPerez.jpeg" },
  { id: "speaker10", image: "/img/speakers/Balsells.png" },
  { id: "speaker12", image: "/img/speakers/martinez.jpeg" },
  { id: "speaker13", image: "/img/speakers/VictoriaPerez.png" },
  { id: "speaker14", image: "/img/speakers/scuto.png" },
  { id: "speaker15", image: "/img/speakers/lopez.png" },
  { id: "speaker16", image: "/img/speakers/carratala.jpeg" },
  { id: "speaker17", image: "/img/speakers/petito.png" },
  { id: "speaker18", image: "/img/speakers/rolles.png" },
  { id: "speaker19", image: "/img/speakers/GabrielPerez.png" },
  { id: "speaker20", image: "/img/speakers/peck.png" },
] as const;

// Contenedores de tamaño fijo por tier: evita que la resolución/ratio de cada logo desbalancee el tamaño visual.
// Escala descendente con salto marcado entre tiers, según su nivel/importancia.
const homeSponsorTierBox = {
  organizedBy: "h-24 w-48 md:h-28 md:w-56",
  elitePartners: "h-20 w-40 md:h-24 md:w-48",
  gardenBigExhibitors: "h-16 w-32 md:h-20 md:w-40",
  gardenMediumExhibitors: "h-12 w-24 md:h-16 md:w-32",
  mediaPartners: "h-9 w-20 md:h-12 md:w-24",
} as const;

export default function HomeClient() {
  const t = useTranslations("home");
  const tKeynoteSpeakers = useTranslations("keyNoteSpeakersPage");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null,
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hash === "#newsletter"
    ) {
      const el = document.getElementById("newsletter");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // brief visual cue when arriving at the newsletter section
        el.classList.add("animate-pulse");
        setTimeout(() => el.classList.remove("animate-pulse"), 900);
      }
    }
  }, []);

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageType(null);

    // Basic client-side validation
    if (!firstName || !lastName || !company || !country || !email) {
      setMessage(t("newsletterValidation"));
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage(t("newsletterEmailValidation"));
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }
    if (!consent) {
      setMessage(t("newsletterConsentError"));
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, company, country, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(t("newsletterSuccess"));
        setMessageType("success");
        setFirstName("");
        setLastName("");
        setCompany("");
        setCountry("");
        setEmail("");
        setConsent(false);
      } else {
        setMessage(data.error || t("newsletterError"));
        setMessageType("error");
      }
    } catch {
      setMessage(t("newsletterError"));
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whereCards = [
    {
      date: t("whereCongressDate"),
      title: t("whereCongressTitle"),
      text: t("whereCongressText"),
      place: t("whereCongressPlace"),
      href: "/program/congress",
      image: "/img/ccib.jpg",
    },
    {
      date: t("whereVisitsDate"),
      title: t("whereVisitsTitle"),
      text: t("whereVisitsText"),
      place: t("whereVisitsPlace"),
      href: "/program/technical-visits",
      image: "/img/visits/Perez%20Iborra-School.jpg",
    },
    {
      date: t("whereWorkshopsDate"),
      title: t("whereWorkshopsTitle"),
      text: t("whereWorkshopsText"),
      place: t("whereWorkshopsPlace"),
      href: "/program/workshops",
      image: "/img/univ_lleida.jpg",
    },
  ];

  return (
    <div>
      <section className="flex flex-col gap-0 px-0 pt-4 md:pt-6 lg:pt-8">
        <HomeBannerSlider
          slides={[
            {
              desktop: "/img/banners/banner-congress-desktop.jpg",
              mobile: "/img/banners/banner-congress-mobile.jpg",
              alt: "World Green Infrastructure Congress 2026 — The researchers, designers and city-makers building greener cities meet in Barcelona and Lleida. Register before 30 September and save 15%.",
              href: "/registration",
            },
            {
              desktop: "/img/banners/banner-impact-desktop.jpg",
              mobile: "/img/banners/banner-impact-mobile.jpg",
              alt: "Climate resilience. Water. Health. Biodiversity. Green jobs — 137 papers from 31 countries, gathered around one question: how green infrastructure builds a healthier and safer urban future.",
              href: "/program/topics",
            },
            {
              desktop: "/img/banners/banner-programme-desktop.jpg",
              mobile: "/img/banners/banner-programme-mobile.jpg",
              alt: "Two days of congress, one day across Barcelona, one day of research in Lleida — Six duet keynotes, five parallel tracks and 98 oral presentations from 31 countries.",
              href: "/program/congress",
            },
            {
              desktop: "/img/banners/banner-visits-desktop.jpg",
              mobile: "/img/banners/banner-visits-mobile.jpg",
              alt: "Barcelona is the case study. Walk through it. — Exclusive technical visits to green roofs and vertical gardens, guided by the teams that built them. Limited places.",
              href: "/program/technical-visits",
            },
          ]}
        />
      </section>

      {/* Bloque editorial: de proyecto piloto a política urbana */}
      <section className="flex flex-col gap-6 mt-8">
        <div className="bg-cactus rounded-2xl p-6 sm:p-10 lg:p-14 flex flex-col gap-6 max-w-none">
          <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-5xl">
            {t("introBlockTitle")}
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-4xl">
            {t("introBlockP1")}
          </p>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-4xl">
            {t("introBlockP2")}
          </p>
        </div>
      </section>

      <SocialProof />

      <section id="keynote-speakers" className="flex flex-col gap-6 mt-16">
        <div className="bg-cactus rounded-2xl p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              {t("featuredSpeakersEyebrow")}
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {t("featuredSpeakersTitle")}
            </h2>
          </div>

          <KeynoteSpeakersCarousel
            speakers={keynoteSpeakerSlots.map((speaker) => ({
              id: speaker.id,
              image: speaker.image,
              name: tKeynoteSpeakers(`speakers.${speaker.id}.name`),
              bio: tKeynoteSpeakers(`speakers.${speaker.id}.bio`).split(". ")[0],
            }))}
          />

          <div className="flex flex-col sm:flex-row gap-4 self-start">
            <Link href="/key-note-speakers">
              <Button variant="yellow" size="lg">
                {t("seeAllSpeakers")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHERE IT HAPPENS: tres tarjetas clicables */}
      <section id="locations" className="flex flex-col gap-6 mt-16">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">
          {t("whereEyebrow")}
        </div>
        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl leading-tight">
          {t("whereTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whereCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col bg-cactus rounded-xl overflow-hidden border border-white/10 hover:border-potus/60 transition-colors"
            >
              <div
                className="w-full h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="text-xs uppercase tracking-[0.25em] text-potus">
                  {card.date}
                </span>
                <span className="uppercase text-xl sm:text-2xl text-white">
                  {card.title}
                </span>
                <p className="text-sm text-white/70 leading-relaxed flex-1">
                  {card.text}
                </p>
                <span className="flex items-center gap-2 text-xs text-white/60">
                  <MapPin size={14} className="shrink-0 text-potus" />
                  {card.place}
                </span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-potus mt-2 group-hover:gap-3 transition-all">
                  {card.title} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CALL FOR POSTERS */}
      <section id="posters" className="flex flex-col gap-6 mt-16">
        <div className="rounded-2xl border border-potus/40 bg-cactus/60 p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl leading-tight">
              {t("postersTitle")}
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg">
              {t("postersText")}
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
            <span className="text-xs uppercase tracking-[0.25em] text-potus border border-potus/50 rounded-full px-4 py-2">
              {t("postersDeadline")}
            </span>
            <Link href="/speakers">
              <Button variant="yellow" size="lg">
                <FileUp size={18} />
                {t("postersCta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="newsletter" className="flex flex-col lg:flex-row gap-0 mt-16">
        <div className="bg-[url(/img/image.jpg)] bg-no-repeat bg-cover bg-center w-full min-h-[160px] lg:min-h-0 xl:w-1/3"></div>

        <div className="flex flex-col gap-6 lg:gap-8 bg-cement text-mortar w-full p-6 sm:p-8 lg:p-10 justify-between items-end">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 uppercase text-2xl md:text-3xl">
              <div>{t("newsletterTitle")}</div>
            </div>
            <p className="text-sm md:text-base normal-case text-mortar/80">
              {t("newsletterSubtitle")}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row w-full items-center gap-6 lg:gap-10 lg:justify-between">
            <form
              className="flex flex-col xl:flex-row gap-6 w-full 2xl:w-1/2 xl:w-2/3"
              onSubmit={handleNewsletterSubmit}
            >
              <div className="flex flex-col gap-4 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t("newsletterFirstNamePlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t("newsletterLastNamePlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    name="company"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t("newsletterCompanyPlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    name="country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder={t("newsletterCountryPlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletterEmailPlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus md:col-span-2"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-3 text-sm text-mortar cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 rounded border-mortar text-cactus focus:ring-cactus"
                  />
                  <span className="leading-snug">
                    {t.rich("newsletterPrivacyNotice", {
                      privacyLink: (chunks) => (
                        <Link
                          href="/privacy"
                          className="underline hover:text-cactus"
                        >
                          {chunks}
                        </Link>
                      ),
                    })}
                  </span>
                </label>

                {message && (
                  <div
                    className={`inline-flex items-center gap-2 text-sm ${messageType === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"} px-3 py-2 rounded-md`}
                  >
                    {messageType === "success" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    <span className="leading-tight">{message}</span>
                  </div>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-cactus hover:bg-cactus/90 text-white"
              >
                {isSubmitting
                  ? t("newsletterSubmitting")
                  : t("newsletterSubmit")}
              </Button>
            </form>
            <Image
              src="/img/wgic26_logo/wgic26_logo.svg"
              alt="WGIC26_logo"
              width={160}
              height={64}
              className="max-h-16"
            />
          </div>
        </div>
      </section>

      {/* SPONSORS al final, con la estructura de /sponsors */}
      <section id="sponsors" className="flex flex-col gap-6 mt-16 pb-24">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">
          {t("sponsorsPartners")}
        </div>

        <div className="flex flex-col gap-8">
          {/* ORGANISED */}
          <div className="bg-white rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-center text-base font-bold mb-5 text-gray-800 uppercase tracking-wider">
              {t("organizedBy")}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {sponsorTiers[0].logos.map((logo) => (
                <a
                  key={logo.href}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center ${homeSponsorTierBox.organizedBy}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ELITE PARTNERS */}
          <div className="bg-white rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-center text-base font-bold mb-5 text-gray-800 uppercase tracking-wider">
              {t("elitePartners")}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {sponsorTiers[1].logos.map((logo) => (
                <a
                  key={logo.href}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center ${homeSponsorTierBox.elitePartners}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* GARDEN BIG EXHIBITORS */}
          <div className="bg-white rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-center text-base font-bold mb-5 text-gray-800 uppercase tracking-wider">
              {t("gardenBigExhibitors")}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 min-h-[60px]">
              {sponsorTiers[2].logos.map((logo) => (
                <a
                  key={logo.href}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center ${homeSponsorTierBox.gardenBigExhibitors}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* GARDEN MEDIUM EXHIBITORS */}
          <div className="bg-white rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-center text-base font-bold mb-5 text-gray-800 uppercase tracking-wider">
              {t("gardenMediumExhibitors")}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 min-h-[60px]">
              {sponsorTiers[3].logos.map((logo) => (
                <a
                  key={logo.href}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center ${homeSponsorTierBox.gardenMediumExhibitors}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* MEDIA PARTNERS */}
          <div className="bg-white rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-center text-base font-bold mb-5 text-gray-800 uppercase tracking-wider">
              {t("mediaPartners")}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {sponsorTiers[4].logos.map((logo) => (
                <a
                  key={logo.href}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center ${homeSponsorTierBox.mediaPartners}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* WITH THE SUPPORT OF */}
          <div className="bg-white rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-center text-base font-bold mb-5 text-gray-800 uppercase tracking-wider">
              {t("withTheSupportOf")}
            </h3>
            <SupportersCarousel
              supporters={supporters}
              visibleCount={5}
              logoBoxClassName={homeSponsorTierBox.mediaPartners}
            />
          </div>

          <Link
            href="/sponsors"
            className="self-center inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-white/80 border-b border-white/40 hover:border-white hover:text-white transition-colors pb-0.5"
          >
            {t("viewAllSponsors")}
          </Link>
        </div>
      </section>
    </div>
  );
}
