"use client";

import { useState, useMemo } from "react";
import { Clock, MapPin, Tag, ChevronDown } from "lucide-react";

interface Session {
  idsession: string;
  title: string;
  description?: string;
  date: string;
  start: string;
  end: string;
  idroom: string;
  room: string;
  idtrack: string;
  track: string;
  idsessiontype: string;
  sessiontype: string;
}

interface FacetItem {
  idroom?: string;
  room?: string;
  idtrack?: string;
  track?: string;
  idsessiontype?: string;
  sessiontype?: string;
  date?: string;
  count?: number;
}

interface Facets {
  dates?: FacetItem[];
  rooms?: FacetItem[];
  tracks?: FacetItem[];
  sessiontypes?: FacetItem[];
}

interface TrackConfig {
  idtrack: string;
  track: string;
  color?: string;
}

interface EventConfig {
  startdate?: number;
  enddate?: number;
}

interface Translations {
  allDays: string;
  allRooms: string;
  allTracks: string;
  allTypes: string;
  filters: string;
  clearFilters: string;
  showAll: string;
  noSessions: string;
  moreInfo: string;
  lessInfo: string;
  time: string;
  room: string;
  track: string;
  type: string;
  date: string;
  sessionsCount: string;
  daysCount: string;
  roomsCount: string;
  tracksCount: string;
}

interface Props {
  sessions: Session[];
  facets: Facets;
  eventConfig: EventConfig;
  tracks: TrackConfig[];
  translations: Translations;
}

function formatDate(dateStr: string) {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);
  const date = new Date(`${year}-${month}-${day}`);
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function AgendaTestClient({
  sessions,
  facets,
  eventConfig,
  tracks,
  translations: t,
}: Props) {
  const [filterDate, setFilterDate] = useState<string>("all");
  const [filterRoom, setFilterRoom] = useState<string>("all");
  const [filterTrack, setFilterTrack] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const dates = facets.dates || [];
  const rooms = facets.rooms || [];
  const trackFacets = facets.tracks || [];
  const sessiontypes = facets.sessiontypes || [];

  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      if (filterDate !== "all" && s.date !== filterDate) return false;
      if (filterRoom !== "all" && s.idroom !== filterRoom) return false;
      if (filterTrack !== "all" && s.idtrack !== filterTrack) return false;
      if (filterType !== "all" && s.idsessiontype !== filterType) return false;
      return true;
    });
  }, [sessions, filterDate, filterRoom, filterTrack, filterType]);

  const groupedByDate = useMemo(() => {
    const groups: Record<string, Session[]> = {};
    filteredSessions.forEach((s) => {
      if (!groups[s.date]) groups[s.date] = [];
      groups[s.date].push(s);
    });
    const sortedDates = Object.keys(groups).sort();
    sortedDates.forEach((d) => {
      groups[d].sort((a, b) => {
        const timeA = a.start.replace(":", "");
        const timeB = b.start.replace(":", "");
        return parseInt(timeA) - parseInt(timeB);
      });
    });
    return { sortedDates, groups };
  }, [filteredSessions]);

  const hasFilters =
    filterDate !== "all" ||
    filterRoom !== "all" ||
    filterTrack !== "all" ||
    filterType !== "all";

  return (
    <section className="w-full justify-start text-xs">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
        {/* Filters */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-white/50 tracking-wider">
              {t.filters}
            </span>
            {hasFilters && (
              <button
                onClick={() => {
                  setFilterDate("all");
                  setFilterRoom("all");
                  setFilterTrack("all");
                  setFilterType("all");
                }}
                className="text-xs uppercase text-potus hover:text-white transition-colors tracking-wider"
              >
                {t.clearFilters}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:border-potus focus:outline-none transition-colors"
            >
              <option value="all">{t.allDays}</option>
              {dates.map((d) => (
                <option key={d.date} value={d.date}>
                  {formatDate(d.date!)} ({d.count})
                </option>
              ))}
            </select>

            <select
              value={filterRoom}
              onChange={(e) => setFilterRoom(e.target.value)}
              className="bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:border-potus focus:outline-none transition-colors"
            >
              <option value="all">{t.allRooms}</option>
              {rooms.map((r) => (
                <option key={r.idroom} value={r.idroom}>
                  {r.room} ({r.count})
                </option>
              ))}
            </select>

            <select
              value={filterTrack}
              onChange={(e) => setFilterTrack(e.target.value)}
              className="bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:border-potus focus:outline-none transition-colors"
            >
              <option value="all">{t.allTracks}</option>
              {trackFacets.map((tr) => (
                <option key={tr.idtrack} value={tr.idtrack}>
                  {tr.track} ({tr.count})
                </option>
              ))}
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:border-potus focus:outline-none transition-colors"
            >
              <option value="all">{t.allTypes}</option>
              {sessiontypes.map((st) => (
                <option key={st.idsessiontype} value={st.idsessiontype}>
                  {st.sessiontype} ({st.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Agenda list */}
        <div className="flex flex-col gap-16">
          {groupedByDate.sortedDates.length === 0 ? (
            <div className="text-white/50 text-center py-20 border border-white/10">
              <p className="text-base">{t.noSessions}</p>
              {hasFilters && (
                <button
                  onClick={() => {
                    setFilterDate("all");
                    setFilterRoom("all");
                    setFilterTrack("all");
                    setFilterType("all");
                  }}
                  className="text-potus text-sm mt-4 hover:text-white transition-colors"
                >
                  {t.showAll}
                </button>
              )}
            </div>
          ) : (
            groupedByDate.sortedDates.map((date) => (
              <div key={date} className="flex flex-col gap-8">
                {/* Day header */}
                <div className="border-b border-white/20 pb-4">
                  <h2 className="text-2xl text-white uppercase font-light tracking-wide">
                    {formatDate(date)}
                  </h2>
                </div>

                {/* Sessions */}
                <div className="flex flex-col gap-4">
                  {groupedByDate.groups[date].map((session, idx) => {
                    const isExpanded = expandedSession === session.idsession;

                    return (
                      <div
                        key={session.idsession}
                        className={`group flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300`}
                      >
                        {/* Time column */}
                        <div className="md:w-28 flex-shrink-0">
                          <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-1">
                            <span className="text-white text-lg font-light tracking-wide">
                              {session.start}
                            </span>
                            <span className="text-white/30 text-xs uppercase tracking-wider">
                              {session.end}
                            </span>
                          </div>
                        </div>

                        {/* Content column */}
                        <div className="flex-1 flex flex-col gap-3">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <h3 className="text-white text-base md:text-lg font-light leading-snug max-w-2xl">
                              {session.title}
                            </h3>
                            <span className="px-3 py-1 bg-white/[0.06] text-white/50 text-xs uppercase tracking-wider flex-shrink-0 rounded-full">
                              {session.sessiontype}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-white/40 text-sm">
                            <span className="flex items-center gap-1.5">
                              <MapPin size={13} className="text-white/30" />
                              {session.room}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Tag size={13} className="text-white/30" />
                              {session.track}
                            </span>
                          </div>

                          {session.description && (
                            <div className="mt-2">
                              <button
                                onClick={() =>
                                  setExpandedSession(
                                    isExpanded ? null : session.idsession
                                  )
                                }
                                className="inline-flex items-center gap-1.5 text-white/40 text-xs uppercase tracking-wider hover:text-potus transition-colors"
                              >
                                {isExpanded ? t.lessInfo : t.moreInfo}
                                <ChevronDown
                                  size={12}
                                  className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </button>

                              {isExpanded && (
                                <div className="mt-4 pt-4 border-t border-white/10">
                                  <div
                                    className="text-white/60 text-sm leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                      __html: session.description,
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap gap-8 text-white/30 text-xs font-mono uppercase tracking-wider">
          <span>
            {t.sessionsCount}: {filteredSessions.length}
          </span>
          <span>
            {t.daysCount}: {dates.length}
          </span>
          <span>
            {t.roomsCount}: {rooms.length}
          </span>
          <span>
            {t.tracksCount}: {tracks.length}
          </span>
        </div>
      </div>
    </section>
  );
}
