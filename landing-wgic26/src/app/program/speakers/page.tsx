import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getLocale, getTranslations } from "next-intl/server";
import { fetchProgram } from "@/lib/program-api";
import SpeakersClient from "./SpeakersClient";

export const metadata: Metadata = {
  title: "Speakers | WGIC26 Barcelona-Lleida",
  description:
    "All the speakers taking part in WGIC26, the World Green Infrastructure Congress 2026 in Barcelona and Lleida.",
};

// speakers.php paginates; the event has ~120 speakers, so ask for a page large enough
// to hold them all instead of the API default.
const SPEAKERS_PER_PAGE = 500;

type ApiSpeaker = {
  idspeaker: string;
  title: string;
  name: string;
  surname: string;
  iso2: string;
  photo: string;
  urlphoto: string;
  company: string;
  jobposition: string;
  city: string;
  country: string;
  bio: string;
  linkedin: string;
  twitter: string;
};

async function getSpeakers(locale: string) {
  try {
    const data = await fetchProgram("speakers.php", locale, { items: SPEAKERS_PER_PAGE });
    const seen = new Set<string>();
    // Barter uses fake.jpg as a placeholder; treat it as no photo.
    return ((data.speakers || []) as ApiSpeaker[])
      .filter((speaker) => {
        if (seen.has(speaker.idspeaker)) return false;
        seen.add(speaker.idspeaker);
        return true;
      })
      .map((speaker) => ({
        ...speaker,
        name: (speaker.name ?? "").trim(),
        surname: (speaker.surname ?? "").trim().replace(/^\.$/, ""),
        urlphoto: speaker.photo === "fake.jpg" ? "" : speaker.urlphoto,
      }));
  } catch {
    // A failing program API must not break the page: render the empty state.
    return [];
  }
}

export default async function SpeakersPage() {
  const t = await getTranslations("programSpeakersPage");
  const speakers = await getSpeakers(await getLocale());

  const translations = {
    noSpeakers: t("noSpeakers"),
    moreInfo: t("moreInfo"),
    lessInfo: t("lessInfo"),
    linkedin: t("linkedin"),
    speakersCount: t("speakersCount"),
    search: t("search"),
    noResults: t("noResults"),
  };

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section="program"
      />
      <SpeakersClient speakers={speakers} translations={translations} />
    </div>
  );
}
