import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Congress Locations: Barcelona & Lleida | WGIC26",
  description:
    "WGIC26 takes place across Barcelona and Lleida, Spain — explore the venues hosting this green infrastructure conference 2026 and urban sustainability congress.",
};

const Locations = async () => {
  const t = await getTranslations("aboutLocations");
  const nav = await getTranslations("navigation");

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader title={t("title")} description={t("description")} section={nav("about")} />

      <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-20">
        <section className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("barcelonaTitle")}</h2>

            <p>{t("barcelonaP1")}</p>
            <p>{t("barcelonaP2")}</p>

            <div className="mt-8">
              <h3 className="text-xl lg:text-2xl font-medium text-white uppercase mb-4">{t("heritageTitle")}</h3>
              <p>{t("heritageP1")}</p>
              <p className="mt-4">{t("heritageP2")}</p>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Image
                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/maxresdefault.jpg"
                alt={t("barcelonaImg1Alt")}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-white/60 text-sm text-center">{t("barcelonaImg1Caption")}</p>
            </div>

            <div className="flex flex-col gap-4">
              <Image
                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/gaudi-slide.webp"
                alt={t("barcelonaImg2Alt")}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-white/60 text-sm text-center">{t("barcelonaImg2Caption")}</p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/10"></div>

        <section className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("lleidaTitle")}</h2>

            <p>{t("lleidaP1")}</p>
            <p>{t("lleidaP2")}</p>
          </div>

          <div className="flex-shrink-0">
            <div className="flex flex-col gap-4">
              <Image
                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/1915-Canalitzacio-del-Riu-Segre-Tavvx.jpg"
                alt={t("lleidaImgAlt")}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-white/60 text-sm text-center">{t("lleidaImgCaption")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Locations;
