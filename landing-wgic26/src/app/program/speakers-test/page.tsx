import PageHeader from "@/components/PageHeader";
import { getLocale, getTranslations } from "next-intl/server";
import { fetchProgram } from "@/lib/program-api";
import SpeakersTestClient from "./SpeakersTestClient";

async function getSpeakers(locale: string) {
  const data = await fetchProgram("speakers.php", locale, { items: 50 });
  // Barter uses fake.jpg as a placeholder; treat it as no photo.
  const speakers = (data.speakers || []).map((speaker: { photo: string; urlphoto: string }) => ({
    ...speaker,
    urlphoto: speaker.photo === "fake.jpg" ? "" : speaker.urlphoto,
  }));
  return { ...data, speakers };
}

export default async function SpeakersTestPage() {
  const t = await getTranslations("programSpeakersPage");
  const speakersData = await getSpeakers(await getLocale());

  const translations = {
    noSpeakers: t("noSpeakers"),
    moreInfo: t("moreInfo"),
    lessInfo: t("lessInfo"),
    linkedin: t("linkedin"),
    speakersCount: t("speakersCount"),
  };

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section="program"
      />
      <SpeakersTestClient
        speakers={speakersData.speakers || []}
        translations={translations}
      />
    </div>
  );
}
