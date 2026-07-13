import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import SpeakersTestClient from "./SpeakersTestClient";

const API_BASE = "https://networking.barter.es/programapi";
const TOKEN = "3a10b5a8a9c3c728dd5ac31703c7095a";
const EVENT_ID = "562";

async function getSpeakers() {
  const url = `${API_BASE}/speakers.php?idevent=${EVENT_ID}&token=${TOKEN}&items=50`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch speakers");
  const data = await res.json();
  // Barter uses fake.jpg as a placeholder; treat it as no photo.
  const speakers = (data.speakers || []).map((speaker: { photo: string; urlphoto: string }) => ({
    ...speaker,
    urlphoto: speaker.photo === "fake.jpg" ? "" : speaker.urlphoto,
  }));
  return { ...data, speakers };
}

export default async function SpeakersTestPage() {
  const t = await getTranslations("programSpeakersPage");
  const speakersData = await getSpeakers();

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
