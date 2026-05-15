"use client";

import Countdown from "@/components/Countdown";
import { MapPin, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Mic } from "lucide-react";

export default function Home() {
  const t = useTranslations("home");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    if (!email || !phone) {
      setMessage(t("newsletterValidation"));
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 6 || phoneDigits.length > 15) {
      setMessage(t("newsletterPhoneValidation"));
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
        body: JSON.stringify({ email, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(t("newsletterSuccess"));
        setMessageType("success");
        setEmail("");
        setPhone("");
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

  return (
    <div>
      <section className="lg:pt-24 lg:flex-row lg:items-start lg:justify-between">
        <div className="uppercase text-3xl sm:text-4xl pr-8 md:text-5xl w-full lg:text-5xl lg:w-3/5 xl:text-6xl leading-tight tracking-tight">
          {t("heroTitle")}
        </div>
        <div className="flex flex-col h-auto content-between gap-8 w-full lg:w-2/5">
          <div className="w-full pt-7 border-t-1 border-white/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h6 className="text-lg sm:text-xl">{t("date1")}</h6>
              <p className="text-sm sm:text-lg text-white/80 sm:text-right">
                {t("date1Location")}
              </p>
            </div>
          </div>

          <div className="w-full pt-7 border-t-1 border-white/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h6 className="text-lg sm:text-xl">{t("date2")}</h6>
              <p className="text-sm sm:text-lg text-white/80 sm:text-right">
                {t("date2Location")}
              </p>
            </div>
          </div>

          <div className="w-full pt-7 border-t-1 border-white/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <Button asChild variant="default" size="lg">
                <a href="/speakers">
                  <Mic size={20} />
                  {t("callForSpeakers")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-0">
        <div className="bg-[url(/img/Tibidabo3.jpg)] bg-no-repeat bg-cover bg-center w-full h-[400px] md:h-[550px] lg:h-[700px]"></div>
        <Countdown />
        <div
          id="banner"
          className="bg-cement text-mortar w-full py-12 pl-6 pr-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 prose prose-invert max-w-none text-lg sm:text-xl leading-relaxed md:max-h-[420px] overflow-y-auto pr-4 text-justify">
              <h2 className="uppercase text-3xl md:text-5xl lg:text-6xl mb-3">
                {t("bannerTitle")}
              </h2>
              <p>{t("introP1")}</p>
              <p>{t("introP2")}</p>
              <p>{t("introP3")}</p>
              <p>{t("introP4")}</p>
              <p>{t("introP5")}</p>
              <p>{t("introP6")}</p>
              <p>{t("introP7")}</p>
              <p>{t("introP8")}</p>

              <p className="mt-6">{t("introClosing")}</p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-8">
                  <div>
                    <div className="font-medium text-black">
                      Professor Gabriel Pérez
                    </div>
                    <div className="text-black/70 text-sm">
                      {t("chairRole")}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-black">Steven Peck</div>
                    <div className="text-black/70 text-sm">
                      {t("presidentRole")}
                    </div>
                  </div>
                </div>
                <Image
                  src="/img/wgic26_logo/wgic26_logo.svg"
                  alt={"WGIC26_logo"}
                  width={180}
                  height={72}
                  className="max-h-20"
                />
              </div>
            </div>
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
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/WGIN-logo.png"
                    alt="WGI Network"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>

                <a
                  href="http://udl.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/Logo-de-la-Universitat-de-Lleida.png"
                    alt="Universitat de Lleida"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>

                <div className="flex items-center justify-center">
                  <Image
                    src="/img/logos-color/logo-life.jpg"
                    alt="Life EU"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/img/logos-color/it4s.png"
                    alt="IT4S"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </div>

                <a
                  href="http://big4life.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/Footer_logo_BIG4LIFE_144.png"
                    alt="BIG4LIFE"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* ELITE PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Elite Partners
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                <a
                  href="https://www.sempergreen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/sempergreen_urban-grey_green_22112023164728.jpg"
                    alt="Semper Green"
                    width={400}
                    height={300}
                    className="h-30 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://www.hunterirrigation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/Hunter.svg"
                    alt="Hunter"
                    width={400}
                    height={300}
                    className="h-12 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://zinco-cubiertas-ecologicas.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/zinco.svg"
                    alt="Hunter"
                    width={400}
                    height={300}
                    className="h-22 w-auto object-contain"
                  />
                </a>
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
                Garden Big Exhibitors
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                <a
                  href="https://www.jardinmovil.com/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/jardinMovil.png"
                    alt="JardinMovil"
                    width={330}
                    height={230}
                    className="h-20 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://www.projar.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/projar.jpg"
                    alt="Projar"
                    width={330}
                    height={230}
                    className="h-30 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Garden Medium Exhibitors
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                <a
                  href="https://eixverd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/eixverd.png"
                    alt="Eixverd"
                    width={330}
                    height={230}
                    className="h-36 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://verdtical.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/verdtical.webp"
                    alt="Eixverd"
                    width={330}
                    height={230}
                    className="h-10 w-auto object-contain "
                  />
                </a>
              </div>
            </div>

            {/* FLOWER EXHIBITORS - hidden until logos are added
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Flower Exhibitors
              </h3>
              <div className="flex justify-center items-center min-h-[100px] text-gray-500">
                <p className="italic">Coming Soon...</p>
              </div>
            </div>
            */}

            {/* MEDIA PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Media Partners
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <a
                  href="https://greenroofs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/greenroofsnuevo.png"
                    alt="Greenroofs.com"
                    width={280}
                    height={200}
                    className="h-17 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* WITH THE SUPPORT OF */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                With the Support of
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                <a
                  href="https://asescuve.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/Asescuve-logo-24a.webp"
                    alt="ASESCUVE"
                    width={300}
                    height={220}
                    className="h-14 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://parcagrobiotech.com/arboretum/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src="/img/logos/arboretum.png"
                    alt="Arboretum"
                    width={300}
                    height={220}
                    className="h-14 w-auto object-contain"
                  />
                </a>
                
                <a
                  href="https://pronatur.chil.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/pronaturlogo.jpg"
                    alt="Logo pronatur"
                    width={320}
                    height={240}
                    className="h-24 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://agronoms.cat//"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/img/logos/eadc.png"
                  alt="Logo eadc"
                  width={320}
                  height={240}
                  className="h-24 w-auto object-contain"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="flex flex-col lg:flex-row gap-0">
        <div className="bg-[url(/img/image.png)] bg-no-repeat bg-cover bg-center w-full min-h-[200px] lg:min-h-0 xl:w-1/3"></div>

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
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletterEmailPlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
                    disabled={isSubmitting}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("newsletterPhonePlaceholder")}
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
                    disabled={isSubmitting}
                  />
                </div>
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
