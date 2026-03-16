import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const Congress = async () => {
  const t = await getTranslations("aboutCongress");
  const nav = await getTranslations("navigation");
  const registration = await getTranslations("registrationPage.dateValues");

  const keyDates = [
    { who: t("dates.authors"), what: t("dates.firstDraft"), when: registration("paperSubmissionDeadline") },
    { who: t("dates.scientificCommittee"), what: t("dates.acceptance"), when: registration("acceptanceDecision") },
    { who: t("dates.authors"), what: t("dates.r1Draft"), when: registration("r1Draft") },
    { who: t("dates.scientificCommittee"), what: t("dates.revisionR2"), when: registration("revision") },
    { who: t("dates.authors"), what: t("dates.finalPaper"), when: registration("finalPaper") },
    { who: t("dates.organizingCommittee"), what: t("dates.finalProgram"), when: registration("finalProgram") },
    { who: t("dates.attendees"), what: t("dates.earlyBird"), when: registration("earlyBird") },
    { who: t("dates.attendees"), what: t("dates.registration"), when: registration("registrationOpen") },
    { who: t("dates.partners"), what: t("dates.registration"), when: registration("partners") },
    { who: t("dates.sponsors"), what: t("dates.registration"), when: registration("sponsors") },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader title={t("title")} description={t("description")} section={nav("about")} />

      <section className="w-full">
        <div className="w-full max-w-7xl mx-auto px-0 py-6">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://drive.google.com/file/d/1blhcUZR8J4-ICQcVgiP6Ez8LJK3OIbXe/preview?usp=embed_facebook"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={t("videoTitle")}
              frameBorder="0"
            />
          </div>
          <div className="h-px bg-white/10 my-6"></div>
        </div>
      </section>

      <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-20">
        <section className="flex flex-col gap-8 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
          <TextImage imageSrc="/img/varias/02 Porxos_BCN_02 (1).jpg" imageAlt={t("img1Alt")} imagePosition="right">
            <p className="text-justify">{t("mainP1")}</p>
            <p className="text-justify">{t("mainP2")}</p>
          </TextImage>

          <TextImage imageSrc="/img/varias/01 IMG_20250827_114013.jpg" imageAlt={t("img2Alt")} imagePosition="left">
            <p className="text-justify">{t("mainP3")}</p>
            <p className="text-justify">{t("mainP4")}</p>
          </TextImage>
        </section>

        <div className="w-full h-px bg-white/10 my-6"></div>

        <section className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
          <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("historyTitle")}</h2>
          <p className="text-justify">{t("historyP1")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/WGIC23_Berlin%2001.jpg"
                alt={t("berlinAlt")}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-white/60 text-sm">Berlin 2023</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/WGIC24%20Auckland_02.jpg"
                alt={t("aucklandAlt")}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-white/60 text-sm">Auckland 2024</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/WGIC25_Basel%2001.jpg"
                alt={t("baselAlt")}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-white/60 text-sm">Basel 2025</p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/10"></div>

        <section className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
          <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">{t("wgicTitle")}</h2>

          <div className="bg-cactus/20 border border-cactus/30 rounded-lg p-6 mb-6">
            <p className="text-lg font-medium text-white mb-2">{t("mottoLabel")}</p>
            <p className="text-xl lg:text-2xl font-semibold text-potus italic">{t("motto")}</p>
          </div>

          <p>{t("wgicP1")}</p>
          <p>{t("wgicP2")}</p>
          <p>{t("wgicP3")}</p>
          <p>{t("wgicP4")}</p>
        </section>

        <div className="w-full h-px bg-white/10"></div>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase">{t("keyDatesTitle")}</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-white/20">
              <thead>
                <tr className="bg-cactus/20">
                  <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base">{t("dates.who")}</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base">{t("dates.what")}</th>
                  <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">{t("dates.when")}</th>
                </tr>
              </thead>
              <tbody>
                {keyDates.map((item) => (
                  <tr key={`${item.who}-${item.what}-${item.when}`} className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{item.who}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{item.what}</td>
                    <td className="border border-white/20 px-4 py-3 text-potus font-medium text-base text-center">{item.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Congress;
