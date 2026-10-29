import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { getLocale, getTranslations } from "next-intl/server";
import { fetchProgram } from "@/lib/program-api";
import AgendaClient from "./AgendaClient";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

// Gala Dinner & Awards (27/10/2026). Textos traducidos en programPage.galaDinner.
// La entrada se compra desde el formulario de inscripción de Hélice.
// El enlace corto de Maps recibido (maps.app.goo.gl/yMyYQ21TepFv9C8z5) da 404; se usa una búsqueda por dirección.
const GALA_DINNER_ADDRESS = "Carrer de Casanova, 133, 08036 Barcelona";
const GALA_DINNER_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Tierra%20Brava%20Restaurant%2C%20Carrer%20de%20Casanova%2C%20133%2C%2008036%20Barcelona";

export const metadata: Metadata = {
  title: "Congress Program | WGIC26 Barcelona-Lleida",
  description:
    "Discover the full program for WGIC26, the green infrastructure conference 2026 bringing together plenaries, workshops and technical visits in Barcelona.",
};

async function getSessionSpeakers(idsession: string, locale: string) {
  try {
    const detail = await fetchProgram("session.php", locale, { idsession });
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

// Correcciones de títulos que Barter tiene mal en un idioma, por ID de sesión.
// 39382: TopSec (28/10 12:00); el título oficial (nombre propio del proyecto) es el inglés, igual que en los demás idiomas.
const SESSION_TITLE_OVERRIDES: Record<string, Partial<Record<string, string>>> = {
  "39382": {
    es: "TopSec project: Circularity and Innovation. Greening the city from the Rooftops",
  },
};

async function getSessions(locale: string) {
  const params = { items: 50 };
  const firstData = await fetchProgram("sessions.php", locale, { ...params, pag: 1 });
  const allSessions = [...(firstData.sessions || [])];
  const pages = parseInt(firstData.paginate?.pages ?? "1", 10);

  for (let page = 2; page <= pages; page++) {
    const data = await fetchProgram("sessions.php", locale, { ...params, pag: page });
    allSessions.push(...(data.sessions || []));
  }

  // The list endpoint does not include speakers; attach them from each
  // session detail (cached per URL like the rest of the fetches).
  const sessionsWithSpeakers = await Promise.all(
    allSessions.map(async (session) => ({
      ...session,
      title: SESSION_TITLE_OVERRIDES[session.idsession]?.[locale] ?? session.title,
      speakers: await getSessionSpeakers(session.idsession, locale),
    }))
  );

  return { ...firstData, sessions: sessionsWithSpeakers };
}

async function getEventConfig(locale: string) {
  return fetchProgram("event.php", locale);
}

export default async function CongressPage() {
  const t = await getTranslations("programPage");
  const ta = await getTranslations("programAgendaPage");
  const nav = await getTranslations("navigation");
  const locale = await getLocale();

  const [sessionsData, eventData] = await Promise.all([
    getSessions(locale),
    getEventConfig(locale),
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
          <nav className="mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm uppercase tracking-wider">
            <Link href="/program/oral-presentations" className="text-potus hover:text-potus/80 inline-flex items-center gap-2">
              {nav("oralPresentations")} <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/program/special-issues" className="text-potus hover:text-potus/80 inline-flex items-center gap-2">
              {nav("specialIssues")} <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
          <AgendaClient
            sessions={sessionsData.sessions || []}
            extras={eventData.extras || []}
            facets={sessionsData.facets || {}}
            tracks={tracks}
            translations={translations}
          />

          {/* No está cargada en la API de Barter (solo existe "WGIN - AWARDS ceremony", 27/10 14:30). */}
          <section
            aria-labelledby="gala-dinner-title"
            className="mt-16 mb-16 pt-10 border-t border-white/10"
          >
            <h2
              id="gala-dinner-title"
              className="text-2xl font-semibold uppercase text-white tracking-wide"
            >
              {t("galaDinner.title")}
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-12">
              <ul className="flex flex-col gap-6 text-white/80">
                <li className="flex items-start gap-3">
                  <CalendarDays size={18} className="text-potus shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">
                      {t("galaDinner.dateLabel")}
                    </p>
                    <p className="mt-1 text-lg text-white">{t("galaDinner.date")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-potus shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">
                      {t("galaDinner.locationLabel")}
                    </p>
                    <p className="mt-1 text-lg text-white">{t("galaDinner.venue")}</p>
                    <p className="text-sm text-white/70">{GALA_DINNER_ADDRESS}</p>
                    <a
                      href={GALA_DINNER_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-potus underline underline-offset-2 hover:text-potus/80"
                    >
                      {t("galaDinner.mapLink")}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="space-y-6 text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {t("galaDinner.programLabel")}
                  </h3>
                  <p className="mt-2">{t("galaDinner.program")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {t("galaDinner.accessLabel")}
                  </h3>
                  <p className="mt-2">{t("galaDinner.access")}</p>
                </div>

              </div>
            </div>
          </section>

          <div className="mb-12 space-y-8 text-white/80">
            <TextImage imageSrc="/img/Tibidabo 1.jpg" imageAlt={t("img1Alt")} imagePosition="right">
              <p className="text-left">
                {t("p1")}
              </p>
              <p className="text-left">
                {t("p2")}
              </p>
            </TextImage>

            <TextImage imageSrc="/img/Exterior_15.jpg" imageAlt={t("img2Alt")} imagePosition="left">
              <p className="text-left">
                {t("p3")}
              </p>
              <p className="text-left">
                {t("p4")}
              </p>
            </TextImage>
          </div>

          <div className="mt-8 text-sm text-white/60 italic">
            {t("footerNote")}
          </div>

          <div className="mt-10">
          </div>
        </div>
      </section>
    </div>
  );
}
