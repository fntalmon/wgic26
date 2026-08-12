import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { RegisterCTA } from "@/components/RegisterCTA";
import { getTranslations } from "next-intl/server";
import AgendaClient from "./AgendaClient";

export const metadata: Metadata = {
  title: "Congress Programme | WGIC26 Barcelona-Lleida",
  description:
    "Discover the full programme for WGIC26, the green infrastructure conference 2026 bringing together plenaries, workshops and technical visits in Barcelona.",
};

const API_BASE = "https://networking.barter.es/programapi";
const TOKEN = "3a10b5a8a9c3c728dd5ac31703c7095a";
const EVENT_ID = "562";

async function getSessionSpeakers(idsession: string) {
  try {
    const res = await fetch(
      `${API_BASE}/session.php?idsession=${idsession}&idevent=${EVENT_ID}&token=${TOKEN}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const detail = await res.json();
    const all = [
      ...(detail.speakers || []),
      ...(detail.presenters || []),
      ...(detail.moderators || []),
    ];
    return all.filter(
      (s, i) => all.findIndex((x) => x.idspeaker === s.idspeaker) === i
    );
  } catch {
    return [];
  }
}

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

  // The list endpoint does not include speakers; attach them from each
  // session detail (cached per URL like the rest of the fetches).
  const sessionsWithSpeakers = await Promise.all(
    allSessions.map(async (session) => ({
      ...session,
      speakers: await getSessionSpeakers(session.idsession),
    }))
  );

  return { ...firstData, sessions: sessionsWithSpeakers };
}

async function getEventConfig() {
  const url = `${API_BASE}/event.php?idevent=${EVENT_ID}&token=${TOKEN}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch event config");
  return res.json();
}

export default async function CongressPage() {
  const t = await getTranslations("programPage");
  const ta = await getTranslations("programAgendaPage");
  const home = await getTranslations("home");
  const nav = await getTranslations("navigation");

  const [sessionsData, eventData] = await Promise.all([
    getSessions(),
    getEventConfig(),
  ]);

  const tracks = eventData.tracks || [];

  const translations = {
    allRooms: ta("allRooms"),
    allTracks: ta("allTracks"),
    allTypes: ta("allTypes"),
    filters: ta("filters"),
    clearFilters: ta("clearFilters"),
    showAll: ta("showAll"),
    noSessions: ta("noSessions"),
    time: ta("time"),
    room: ta("room"),
    track: ta("track"),
    type: ta("type"),
    date: ta("date"),
    sessionsCount: ta("sessionsCount"),
    daysCount: ta("daysCount"),
    roomsCount: ta("roomsCount"),
    tracksCount: ta("tracksCount"),
    sessionDetails: ta("sessionDetails"),
    duration: ta("duration"),
    speakers: ta("speakers"),
    noDescription: ta("noDescription"),
  };

  return (
    <div>
      <PageHeader
        title={nav("programCongress")}
        description={t("description")}
        section="program"
      />
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AgendaClient
            sessions={sessionsData.sessions || []}
            facets={sessionsData.facets || {}}
            tracks={tracks}
            translations={translations}
          />

          <div className="mb-12 space-y-8 text-white/80">
            <TextImage imageSrc="/img/Tibidabo 1.jpg" imageAlt={t("img1Alt")} imagePosition="right">
              <p className="text-justify">
                {t("p1")}
              </p>
              <p className="text-justify">
                {t("p2")}
              </p>
            </TextImage>

            <TextImage imageSrc="/img/Exterior_15.jpg" imageAlt={t("img2Alt")} imagePosition="left">
              <p className="text-justify">
                {t("p3")}
              </p>
              <p className="text-justify">
                {t("p4")}
              </p>
            </TextImage>
          </div>

          <div className="mt-8 text-sm text-white/60 italic">
            {t("footerNote")}
          </div>

          <div className="mt-10">
            <RegisterCTA
              title={home("ctaJoinTitle")}
              subtitle={home("ctaJoinSubtitle")}
              buttonLabel={home("registerNow")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
