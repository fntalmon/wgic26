import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "University of Lleida | WGIC26 Barcelona-Lleida",
  description:
    "The Universitat de Lleida co-organises WGIC26, hosting a dedicated research and innovation day as part of this nature-based solutions conference.",
};

const UniversityOfLleida = async () => {
  const t = await getTranslations("aboutUniversity");
  const nav = await getTranslations("navigation");

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader title={t("title")} description={t("description")} section={nav("about")} />

      <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-20">
        <section className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-left">
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("udlHeading")}</h2>

            <p>{t("udlP1")}</p>
            <p>{t("udlP2")}</p>
            <p>{t("udlP3")}</p>

            <div className="pt-4">
              <Button asChild variant="default" className="w-fit">
                <a href="https://www.udl.cat/ca/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> {t("visitUdl")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/10"></div>

        <section className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-left">
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("it4sHeading")}</h2>

            <p>{t("it4sP1")}</p>
            <p>{t("it4sP2")}</p>

            <div className="pt-4">
              <Button asChild variant="default" className="w-fit">
                <a href="https://it4s.cat/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> {t("visitIt4s")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/10"></div>

        <section className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-left">
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("big4lifeHeading")}</h2>

            <p>{t("big4lifeP1")}</p>

            <div className="pt-4">
              <Button asChild variant="default" className="w-fit">
                <a href="https://www.big4life.eu" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> {t("visitBig4life")}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UniversityOfLleida;
