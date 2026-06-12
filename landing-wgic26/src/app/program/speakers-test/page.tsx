import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import SpeakersTestClient from "./SpeakersTestClient";

const API_BASE = "https://networking.barter.es/programapi";
const TOKEN = "25f36345610469a7d054a2eed6952303";
const EVENT_ID = "246";

async function getSpeakers() {
  const url = `${API_BASE}/speakers.php?idevent=${EVENT_ID}&token=${TOKEN}&items=50`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch speakers");
  return res.json();
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
