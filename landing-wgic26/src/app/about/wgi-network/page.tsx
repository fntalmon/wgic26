import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "WGI Network | WGIC26 Barcelona-Lleida",
  description:
    "Learn about the World Green Infrastructure Network (WGIN), the global organisation behind WGIC26 and its mission to advance nature-based solutions worldwide.",
};

const Network = async () => {
  const t = await getTranslations("aboutNetwork");
  const nav = await getTranslations("navigation");

  const values = [
    { id: "01", title: t("value1Title"), description: t("value1Description") },
    { id: "02", title: t("value2Title"), description: t("value2Description") },
    { id: "03", title: t("value3Title"), description: t("value3Description") },
    { id: "04", title: t("value4Title"), description: t("value4Description") },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader title={t("title")} description={t("description")} section={nav("about")} />

      <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12">
        <section className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-left">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="inline-flex items-center justify-center min-w-fit flex-shrink-0">
                <Image
                  src="/img/logos/WGIN.svg"
                  alt={t("logoAlt")}
                  width={240}
                  height={180}
                  className="h-20 w-auto object-contain"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase">{t("heading")}</h2>
            </div>

            <TextImage imageSrc="/img/varias/02 IMG_20241204_153528.jpg" imageAlt={t("img1Alt")} imagePosition="right">
              <p className="text-left">{t("p1")}</p>
            </TextImage>
            <TextImage imageSrc="/img/varias/03 IMG_20250310_130100.jpg" imageAlt={t("img2Alt")} imagePosition="left">
              <p className="text-left">{t("p2")}</p>
            </TextImage>
            <p className="text-left">{t("p3")}</p>

            <div className="pt-4">
              <Button asChild variant="default" className="w-fit">
                <a href="https://worldgreeninfrastructurenetwork.org/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> {t("visitWebsite")}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full h-px bg-white/10 my-8"></div>

      <section className="w-full justify-start text-xs">
        <div className="flex flex-col gap-8 w-full">
          <div className="w-full bg-cactus p-16 justify-center">
            <div className="uppercase text-md text-potus mb-4">{t("mission")}</div>
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="inline-flex items-center justify-center min-w-fit flex-shrink-0">
                <Image
                  src="/img/logos/WGIN.svg"
                  alt={t("logoAlt")}
                  width={320}
                  height={240}
                  className="h-24 w-auto object-contain"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="uppercase text-2xl text-white leading-relaxed">{t("missionText")}</div>
            </div>
          </div>

          <div className="w-full bg-sansiviera p-16 justify-center">
            <div className="uppercase text-md text-potus mb-4">{t("values")}</div>
            {values.map((value) => (
              <div key={value.id} className="leading-relaxed flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items between border-b-1 border-white/40 py-20">
                <div className="uppercase w-full lg:w-1/2 text-lg">
                  <strong>{value.id}</strong> {value.title}
                </div>
                <div className="w-full lg:w-1/2 text-white/70 text-base text-left">{value.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
