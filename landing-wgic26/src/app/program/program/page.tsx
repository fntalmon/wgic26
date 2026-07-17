import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { RegisterCTA } from "@/components/RegisterCTA";
import { getTranslations } from "next-intl/server";
import AgendaTestClient from "../agenda-test/AgendaTestClient";

export const metadata: Metadata = {
  title: "Congress Programme | WGIC26 Barcelona-Lleida",
  description:
    "Discover the full programme for WGIC26, the green infrastructure conference 2026 bringing together plenaries, workshops and technical visits in Barcelona.",
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

export default async function ProgramPage() {
  const t = await getTranslations("programPage");
  const ta = await getTranslations("programAgendaPage");
  const home = await getTranslations("home");

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
        title={t("title")}
        description={t("description")}
        section="program"
      />
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
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

          <AgendaTestClient
            sessions={sessionsData.sessions || []}
            facets={sessionsData.facets || {}}
            tracks={tracks}
            translations={translations}
          />

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
