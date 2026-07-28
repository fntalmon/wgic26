"use client";

import { useState, useMemo, useEffect } from "react";
import { MapPin, Tag, Clock, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

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
  speakers?: Speaker[];
}

interface Speaker {
  idspeaker: string;
  title?: string;
  name: string;
  surname?: string;
  photo?: string;
  urlphoto?: string;
  company?: string | null;
  jobposition?: string | null;
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

interface Translations {
  allRooms: string;
  allTracks: string;
  allTypes: string;
  filters: string;
  clearFilters: string;
  showAll: string;
  noSessions: string;
  time: string;
  room: string;
  track: string;
  type: string;
  date: string;
  sessionsCount: string;
  daysCount: string;
  roomsCount: string;
  tracksCount: string;
  sessionDetails: string;
  duration: string;
  speakers: string;
  noDescription: string;
}

interface Props {
  sessions: Session[];
  facets: Facets;
  tracks: TrackConfig[];
  translations: Translations;
}

function formatDate(dateStr: string) {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);
  const date = new Date(`${year}-${month}-${day}T12:00:00`);
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function formatDayLabel(dateStr: string) {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);
  const date = new Date(`${year}-${month}-${day}T12:00:00`);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
  });
}

function parseTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + (minutes || 0);
}

function durationBetween(start: string, end: string) {
  const diff = parseTime(end) - parseTime(start);
  if (diff <= 0) return "";
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  return `${h}h${m ? ` ${m}m` : ""}`;
}

function speakerLabel(speaker: Speaker) {
  return `${speaker.name} ${speaker.surname || ""}`.replace(/\s+/g, " ").trim();
}

const typeStyles: Record<string, string> = {
  Opening: "bg-potus text-black",
  Keynote: "bg-yellow-500 text-black",
  Roundtable: "bg-white/10 text-white",
};

export default function AgendaTestClient({
  sessions,
  facets,
  tracks,
  translations: t,
}: Props) {
  const dates = useMemo(
    () => [...(facets.dates || [])].sort((a, b) => (a.date || "").localeCompare(b.date || "")),
    [facets.dates]
  );

  const [selectedDate, setSelectedDate] = useState<string>(dates[0]?.date || "all");
  const [filterRoom, setFilterRoom] = useState<string>("all");
  const [filterTrack, setFilterTrack] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [detailSpeakers, setDetailSpeakers] = useState<Speaker[]>([]);
  const [loadingSpeakers, setLoadingSpeakers] = useState(false);

  // The sessions list endpoint does not include speakers; fetch the session
  // detail lazily when the drawer opens.
  useEffect(() => {
    if (!selectedSession) {
      setDetailSpeakers([]);
      return;
    }

    const controller = new AbortController();
    setLoadingSpeakers(true);
    setDetailSpeakers([]);

    fetch(`/api/program/session?id=${selectedSession.idsession}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;
        const all: Speaker[] = [
          ...(data.speakers || []),
          ...(data.presenters || []),
          ...(data.moderators || []),
        ];
        const unique = all.filter(
          (speaker, index) =>
            all.findIndex((s) => s.idspeaker === speaker.idspeaker) === index
        );
        setDetailSpeakers(unique);
      })
      .catch(() => {})
      .finally(() => setLoadingSpeakers(false));

    return () => controller.abort();
  }, [selectedSession]);

  const rooms = facets.rooms || [];
  const trackFacets = facets.tracks || [];
  const sessiontypes = facets.sessiontypes || [];

  const trackColorMap = useMemo(() => {
    const map: Record<string, string> = {};
    tracks.forEach((tr) => {
      map[tr.idtrack] = tr.color || "#3e793e";
    });
    return map;
  }, [tracks]);

  const filteredSessions = useMemo(() => {
    return sessions
      .filter((s) => {
        if (selectedDate !== "all" && s.date !== selectedDate) return false;
        if (filterRoom !== "all" && s.idroom !== filterRoom) return false;
        if (filterTrack !== "all" && s.idtrack !== filterTrack) return false;
        if (filterType !== "all" && s.idsessiontype !== filterType) return false;
        return true;
      })
      .sort((a, b) => parseTime(a.start) - parseTime(b.start));
  }, [sessions, selectedDate, filterRoom, filterTrack, filterType]);

  const groupedByTime = useMemo(() => {
    const groups: Record<string, Session[]> = {};
    filteredSessions.forEach((s) => {
      if (!groups[s.start]) groups[s.start] = [];
      groups[s.start].push(s);
    });
    const times = Object.keys(groups).sort((a, b) => parseTime(a) - parseTime(b));
    return { times, groups };
  }, [filteredSessions]);

  const hasFilters = filterRoom !== "all" || filterTrack !== "all" || filterType !== "all";

  const clearFilters = () => {
    setFilterRoom("all");
    setFilterTrack("all");
    setFilterType("all");
  };

  return (
    <section className="w-full justify-start text-xs">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
        {/* Day tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((d) => {
            const active = selectedDate === d.date;
            return (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.date || "all")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-colors",
                  active
                    ? "bg-potus text-black border-potus"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                <span className="uppercase tracking-wider">
                  {d.date ? formatDayLabel(d.date) : "—"}
                </span>
                <span className="text-xs opacity-70">({d.count ?? 0})</span>
              </button>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-white/50 tracking-wider">
              {t.filters}
            </span>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs uppercase text-potus hover:text-white transition-colors tracking-wider"
              >
                {t.clearFilters}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        {/* Session list as a timeline */}
        <div className="flex flex-col gap-12">
          {groupedByTime.times.length === 0 ? (
            <div className="text-white/50 text-center py-20 border border-white/10">
              <p className="text-base">{t.noSessions}</p>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-potus text-sm mt-4 hover:text-white transition-colors"
                >
                  {t.showAll}
                </button>
              )}
            </div>
          ) : (
            groupedByTime.times.map((time, timeIndex) => {
              const isLast = timeIndex === groupedByTime.times.length - 1;
              return (
                <div key={time} className="flex gap-6">
                  {/* Time column */}
                  <div className="flex flex-col items-center w-14 flex-shrink-0 pt-1">
                    <span className="text-white/80 text-sm font-light tabular-nums">
                      {time}
                    </span>
                    {!isLast && (
                      <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent min-h-[1.5rem] mt-2" />
                    )}
                  </div>

                  {/* Sessions column */}
                  <div className="flex-1 flex flex-col gap-4 pb-2">
                    {groupedByTime.groups[time].map((session) => {
                      const trackColor = trackColorMap[session.idtrack] || "#3e793e";
                      return (
                        <button
                          key={session.idsession}
                          onClick={() => setSelectedSession(session)}
                          className="text-left group flex flex-col gap-4 p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <h3 className="text-white text-base font-light leading-snug flex-1">
                              {session.title}
                            </h3>
                            <span
                              className={cn(
                                "px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider flex-shrink-0",
                                typeStyles[session.sessiontype] || "bg-white/10 text-white"
                              )}
                            >
                              {session.sessiontype}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                              <MapPin size={12} className="text-white/40" />
                              {session.room}
                            </span>
                            <span
                              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                              style={{ borderColor: `${trackColor}80` }}
                            >
                              <Tag size={12} style={{ color: trackColor }} />
                              <span className="text-white/70">{session.track}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                              <Clock size={12} className="text-white/40" />
                              {durationBetween(session.start, session.end)}
                            </span>
                            {session.speakers && session.speakers.length > 0 && (
                              <span className="inline-flex items-center gap-1.5 text-xs text-white/60 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <User size={12} className="text-white/40 flex-shrink-0" />
                                {session.speakers.map(speakerLabel).join(", ")}
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
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

      {/* Session detail drawer */}
      <Sheet open={!!selectedSession} onOpenChange={(open) => !open && setSelectedSession(null)}>
        <SheetContent
          side="right"
          className="bg-black border-l border-white/10 w-full sm:max-w-md px-6 py-10"
        >
          {selectedSession && (
            <div className="flex flex-col h-full gap-6">
              <SheetTitle className="sr-only">{t.sessionDetails}</SheetTitle>

              <span
                className={cn(
                  "self-start px-3 py-1 rounded-full text-xs uppercase tracking-wider",
                  typeStyles[selectedSession.sessiontype] || "bg-white/10 text-white"
                )}
              >
                {selectedSession.sessiontype}
              </span>

              <h2 className="text-2xl text-white font-light leading-snug">
                {selectedSession.title}
              </h2>

              <div className="flex flex-col gap-2 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} className="text-white/40" />
                  {formatDate(selectedSession.date)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={14} className="text-white/40" />
                  {selectedSession.start} – {selectedSession.end}
                  {durationBetween(selectedSession.start, selectedSession.end) && (
                    <span className="text-white/40 text-xs">
                      ({durationBetween(selectedSession.start, selectedSession.end)})
                    </span>
                  )}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-white/40" />
                  {selectedSession.room}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Tag size={14} className="text-white/40" />
                  {selectedSession.track}
                </span>
              </div>

              {(loadingSpeakers || detailSpeakers.length > 0) && (
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-xs uppercase text-white/50 tracking-wider mb-4">
                    {t.speakers}
                  </h3>
                  {loadingSpeakers ? (
                    <div className="flex flex-col gap-3">
                      {[0, 1].map((i) => (
                        <div key={i} className="flex items-center gap-3 animate-pulse">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
                          <div className="flex flex-col gap-1.5 flex-1">
                            <div className="h-3 bg-white/10 rounded w-2/3" />
                            <div className="h-2.5 bg-white/5 rounded w-1/2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {detailSpeakers.map((speaker) => {
                        const hasPhoto = speaker.urlphoto && speaker.photo !== "fake.jpg";
                        return (
                          <div key={speaker.idspeaker} className="flex items-center gap-3">
                            {hasPhoto ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={speaker.urlphoto}
                                alt={`${speaker.name} ${speaker.surname || ""}`.trim()}
                                className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-white/10"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <User size={16} className="text-white/40" />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="text-white text-sm">
                                {[speaker.title, speaker.name, speaker.surname]
                                  .filter(Boolean)
                                  .join(" ")
                                  .replace(/\s+/g, " ")
                                  .trim()}
                              </span>
                              {speaker.company && (
                                <span className="text-white/50 text-xs leading-snug">
                                  {speaker.company}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              <div className="border-t border-white/10 pt-6">
                {selectedSession.description ? (
                  <div
                    className="text-white/70 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedSession.description }}
                  />
                ) : (
                  <p className="text-white/40 italic text-sm">{t.noDescription}</p>
                )}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
