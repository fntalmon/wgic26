"use client";

import { AttendeeProfiles } from "@/components/AttendeeProfiles";
import Countdown from "@/components/Countdown";
import { EarlyBirdBanner } from "@/components/EarlyBirdBanner";
import { HomeBannerSlider } from "@/components/HomeBannerSlider";
import { KeynoteSpeakersCarousel } from "@/components/KeynoteSpeakersCarousel";
import { SocialProof } from "@/components/SocialProof";
import { SupportersCarousel } from "@/components/SupportersCarousel";
import { supporters } from "@/data/supporters";
import { sponsorTiers } from "@/data/sponsors";
import { MapPin, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
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

export default function HomeClient() {
  const t = useTranslations("home");
  const tSocial = useTranslations("home.socialProof");
  const tNav = useTranslations("navigation");
  const tVisits = useTranslations("technicalVisitsPage");
  const tSpeakers = useTranslations("speakersPage");
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

  const bannerEyebrowClass =
    "inline-block w-fit text-xs sm:text-sm uppercase tracking-widest bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-white";
  const bannerCtaClass =
    "mt-2 inline-flex items-center gap-1.5 w-fit text-xs sm:text-sm uppercase tracking-wider bg-potus text-monstera px-4 py-2 sm:px-5 sm:py-3 rounded-md font-medium hover:bg-potus/90 transition-colors";

  return (
    <div>
      <section className="flex flex-col gap-0 px-0 pt-4 md:pt-6 lg:pt-8">
        <HomeBannerSlider
          slides={[
            {
              desktop: "/img/banners/green-roof-living-wall.jpg",
              mobile: "/img/banners/green-roof-living-wall.jpg",
              alt: "Green roof and living wall by Sempergreen",
              content: (
                <div className="flex flex-col gap-4 sm:gap-5 text-white drop-shadow-md">
                  <span className={bannerEyebrowClass}>{t("bannerTitle")}</span>
                  <div className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-medium">
                    {t("heroTitle")}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="text-base sm:text-xl md:text-2xl font-semibold leading-tight">
                        {t("date1")}
                      </div>
                      <div className="text-xs sm:text-sm text-white/85">
                        {t("date1Location")}
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-xl md:text-2xl font-semibold leading-tight">
                        {t("date2")}
                      </div>
                      <div className="text-xs sm:text-sm text-white/85">
                        {t("date2Location")}
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-xl md:text-2xl font-semibold leading-tight">
                        {t("date3")}
                      </div>
                      <div className="text-xs sm:text-sm text-white/85">
                        {t("date3Location")}
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              desktop: "/img/banners/green-rooftop-aerial.webp",
              mobile: "/img/banners/green-rooftop-aerial.webp",
              alt: "Aerial view of green rooftops in a dense urban development",
              contentAlign: "right",
              content: (
                <div className="flex flex-col items-end gap-3 sm:gap-4 text-right text-white drop-shadow-md">
                  <span className={bannerEyebrowClass}>{t("bannerTitle")}</span>
                  <div className="flex gap-5 sm:gap-8">
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                        1000+
                      </div>
                      <div className="text-xs sm:text-sm text-white/85">
                        {tSocial("attendees")}
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                        35+
                      </div>
                      <div className="text-xs sm:text-sm text-white/85">
                        {tSocial("countries")}
                      </div>
                    </div>
                  </div>
                  <Link href="/registration" className={bannerCtaClass}>
                    {t("registerNow")}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ),
            },
            {
              desktop: "/img/banners/green-facade-immobel.jpg",
              mobile: "/img/banners/green-facade-immobel.jpg",
              alt: "Green vertical facade on a residential tower",
              scrimSide: "left",
              content: (
                <div className="flex flex-col gap-3 sm:gap-4 text-white drop-shadow-md">
                  <span className={bannerEyebrowClass}>{tSpeakers("title")}</span>
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                    {tSpeakers("calloutTitle")}
                  </div>
                  <p className="text-xs sm:text-sm text-white/85">
                    {t("date1Location")}
                  </p>
                  <Link href="/speakers" className={bannerCtaClass}>
                    {tNav("papersProjects")}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ),
            },
            {
              desktop: "/img/banners/urbaser-green-roof-barcelona.jpg",
              mobile: "/img/banners/urbaser-green-roof-barcelona.jpg",
              alt: "Biodiverse green roof overlooking Barcelona",
              scrimSide: "top",
              content: (
                <div className="flex flex-col gap-3 sm:gap-4 text-white drop-shadow-md">
                  <span className={bannerEyebrowClass}>{tVisits("title")}</span>
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                    {tVisits("registerCtaTitle")}
                  </div>
                  <p className="text-xs sm:text-sm text-white/85">
                    {tVisits("registerCtaSubtitle")}
                  </p>
                  <Link href="/program/technical-visits" className={bannerCtaClass}>
                    {tVisits("registerCtaButton")}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ),
            },
          ]}
        />
      </section>
      <Countdown />
      <SocialProof />
      <AttendeeProfiles />
      <EarlyBirdBanner />
      <section id="keynote-speakers" className="flex flex-col gap-6 mt-16">
        <div className="bg-cactus rounded-2xl p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
          <div className="flex flex-col gap-4 max-w-4xl">
            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {t("keynoteSpeakersTitle")}
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg">
              {t("keynoteSpeakersIntro")}
            </p>
          </div>

          <KeynoteSpeakersCarousel
            speakers={keynoteSpeakerSlots.map((speaker) => ({
              id: speaker.id,
              image: speaker.image,
              name: tKeynoteSpeakers(`speakers.${speaker.id}.name`),
            }))}
          />

          <div className="flex flex-col sm:flex-row gap-4 self-start">
            <Link href="/key-note-speakers">
              <Button variant="yellow" size="lg">
                {t("viewAllSpeakers")}
              </Button>
            </Link>
            <Link href="/registration">
              <Button variant="default" size="lg">
                {t("registerNow")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section id="locations" className="flex flex-col gap-6">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">
          {t("locations")}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div
            id="location-barcelona"
            className="flex flex-col bg-cactus text-white uppercase text-2xl sm:text-3xl lg:text-4xl gap-0 lg:aspect-auto flex-1"
          >
            <div className="bg-[url(/img/ccib.jpg)] bg-no-repeat bg-cover bg-center w-full h-[320px]"></div>
            <div className="flex flex-col gap-2 px-6 pt-6 sm:px-10 sm:pt-10">
              <div className="text-xs text-white/70 mb-2">
                {t("mainActivities")}
              </div>
              <div>{t("congress")}</div>
              <div>{t("visits")}</div>
              <div className="flex gap-2 items-center mt-8">
                <MapPin />
                <h6>CCIB - Parc del Forum, Barcelona (Spain)</h6>
              </div>
            </div>
            <Image
              src="/img/logos/Barcelona.svg"
              alt={"Barcelona"}
              width={320}
              height={240}
              className="w-auto self-end justify-self-end mt-16"
            />
          </div>

          <div
            id="location-lleida"
            className="flex flex-col bg-sansiviera text-white uppercase text-2xl sm:text-3xl lg:text-4xl gap-0 lg:aspect-auto flex-1"
          >
            <div className="bg-[url(/img/univ_lleida.jpg)] bg-no-repeat bg-cover bg-center w-full h-[320px]"></div>
            <div className="flex flex-col gap-2 px-6 pt-6 sm:px-10 sm:pt-10">
              <div className="text-xs text-white/70 mb-2">
                {t("mainActivities")}
              </div>
              <div>{t("workshops")}</div>
              <div>{t("visits")}</div>
              <div className="flex gap-2 items-center mt-8">
                <MapPin />
                <h6>Universitat de Lleida - Lleida (Spain)</h6>
              </div>
            </div>
            <Image
              src="/img/logos/Lleida.svg"
              alt={"Lleida"}
              width={320}
              height={240}
              className="w-auto self-end justify-self-end mt-16"
            />
          </div>
        </div>
      </section>

      <section id="sponsors" className="flex flex-col gap-6 mt-16 pb-24">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">
          {t("sponsorsPartners")}
        </div>

        <div className="bg-white text-black py-16 px-6 rounded-md border border-gray-200">
          <div className="flex flex-col gap-12 items-center">
            {/* ORGANISED */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("organizedBy")}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {sponsorTiers[0].logos.map((logo) => (
                  <a
                    key={logo.href}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={logo.className}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* ELITE PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("elitePartners")}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {sponsorTiers[1].logos.map((logo) => (
                  <a
                    key={logo.href}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={logo.className}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* EVENT PARTNERS
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Event Partners
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24"></div>
            </div>*/}

            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("gardenBigExhibitors")}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                {sponsorTiers[2].logos.map((logo) => (
                  <a
                    key={logo.href}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={logo.className}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("gardenMediumExhibitors")}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                {sponsorTiers[3].logos.map((logo) => (
                  <a
                    key={logo.href}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={logo.className}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* FLOWER EXHIBITORS - hidden until logos are added
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("flowerExhibitors")}
              </h3>
              <div className="flex justify-center items-center min-h-[100px] text-gray-500">
                <p className="italic">{t("comingSoon")}</p>
              </div>
            </div>
            */}

            {/* MEDIA PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("mediaPartners")}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {sponsorTiers[4].logos.map((logo) => (
                  <a
                    key={logo.href}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={logo.className}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* WITH THE SUPPORT OF */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t("withTheSupportOf")}
              </h3>
              <SupportersCarousel supporters={supporters} visibleCount={5} />
            </div>

            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-gray-800 border-b border-gray-800/40 hover:border-gray-800 transition-colors pb-0.5"
            >
              {t("viewAllSponsors")}
            </Link>
          </div>
        </div>
      </section>

      <section id="newsletter" className="flex flex-col lg:flex-row gap-0">
        <div className="bg-[url(/img/image.jpg)] bg-no-repeat bg-cover bg-center w-full min-h-[200px] lg:min-h-0 xl:w-1/3"></div>

        <div className="flex flex-col gap-10 lg:gap-20 bg-cement text-mortar w-full p-6 sm:p-10 lg:p-18  justify-between items-end">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 uppercase text-3xl md:text-4xl">
              <div>{t("newsletterTitle")}</div>
              <h4>{t("newsletterSubtitle")}</h4>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row w-full items-center gap-10 lg:gap-20 lg:justify-between">
            <form
              className="flex flex-col xl:flex-row gap-8 w-full 2xl:w-1/2 xl:w-2/3"
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
              width={200}
              height={80}
              className="max-h-24"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
