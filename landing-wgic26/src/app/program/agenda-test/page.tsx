import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import AgendaTestClient from "./AgendaTestClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const API_BASE = "https://networking.barter.es/programapi";
const TOKEN = "25f36345610469a7d054a2eed6952303";
const EVENT_ID = "246";

async function getSessions() {
  const url = `${API_BASE}/sessions.php?idevent=${EVENT_ID}&token=${TOKEN}&items=50`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch sessions");
  return res.json();
}

async function getEventConfig() {
  const url = `${API_BASE}/event.php?idevent=${EVENT_ID}&token=${TOKEN}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch event config");
  return res.json();
}

export default async function AgendaTestPage() {
  const t = await getTranslations("programAgendaPage");
  const [sessionsData, eventData] = await Promise.all([
    getSessions(),
    getEventConfig(),
  ]);

  const translations = {
    allDays: t("allDays"),
    allRooms: t("allRooms"),
    allTracks: t("allTracks"),
    allTypes: t("allTypes"),
    filters: t("filters"),
    clearFilters: t("clearFilters"),
    showAll: t("showAll"),
    noSessions: t("noSessions"),
    moreInfo: t("moreInfo"),
    lessInfo: t("lessInfo"),
    time: t("time"),
    room: t("room"),
    track: t("track"),
    type: t("type"),
    date: t("date"),
    sessionsCount: t("sessionsCount"),
    daysCount: t("daysCount"),
    roomsCount: t("roomsCount"),
    tracksCount: t("tracksCount"),
  };

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section="program"
      />
      <AgendaTestClient
        sessions={sessionsData.sessions || []}
        facets={sessionsData.facets || {}}
        eventConfig={eventData}
        tracks={eventData.tracks || []}
        translations={translations}
      />
    </div>
  );
}
