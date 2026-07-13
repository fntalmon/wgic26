import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import AgendaTestClient from "./AgendaTestClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const API_BASE = "https://networking.barter.es/programapi";
const TOKEN = "3a10b5a8a9c3c728dd5ac31703c7095a";
const EVENT_ID = "562";

async function getSessions() {
  const baseUrl = `${API_BASE}/sessions.php?idevent=${EVENT_ID}&token=${TOKEN}&items=50`;
  const firstRes = await fetch(`${baseUrl}&pag=1`, { next: { revalidate: 60 } });
  if (!firstRes.ok) throw new Error("Failed to fetch sessions");
  const firstData = await firstRes.json();
  const allSessions = [...(firstData.sessions || [])];
  const pages = parseInt(firstData.paginate?.pages ?? "1", 10);

  for (let page = 2; page <= pages; page++) {
    const res = await fetch(`${baseUrl}&pag=${page}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Failed to fetch sessions page ${page}`);
    const data = await res.json();
    allSessions.push(...(data.sessions || []));
  }

  return { ...firstData, sessions: allSessions };
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

  const tracks = eventData.tracks || [];

  const translations = {
    allRooms: t("allRooms"),
    allTracks: t("allTracks"),
    allTypes: t("allTypes"),
    filters: t("filters"),
    clearFilters: t("clearFilters"),
    showAll: t("showAll"),
    noSessions: t("noSessions"),
    time: t("time"),
    room: t("room"),
    track: t("track"),
    type: t("type"),
    date: t("date"),
    sessionsCount: t("sessionsCount"),
    daysCount: t("daysCount"),
    roomsCount: t("roomsCount"),
    tracksCount: t("tracksCount"),
    sessionDetails: t("sessionDetails"),
    duration: t("duration"),
    speakers: t("speakers"),
    noDescription: t("noDescription"),
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
        tracks={tracks}
        translations={translations}
      />
    </div>
  );
}
