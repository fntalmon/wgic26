"use client";

import { useState, useMemo } from "react";
import { MapPin, Briefcase, ChevronDown, Linkedin, Search } from "lucide-react";
import Image from "next/image";

interface Speaker {
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
}

interface Translations {
  noSpeakers: string;
  moreInfo: string;
  lessInfo: string;
  linkedin: string;
  speakersCount: string;
  search: string;
  noResults: string;
}

interface Props {
  speakers: Speaker[];
  translations: Translations;
}

// The API's linkedin field is free text: full URLs, "www.linkedin.com/in/x", bare slugs or
// unrelated words. Only return something that is safe to use as an absolute link.
function linkedinUrl(raw: string | null | undefined) {
  const value = (raw ?? "").trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  if (/linkedin\.com\//i.test(value)) return `https://${value}`;
  if (/^[a-z0-9-]+-[a-z0-9]{6,}$/i.test(value)) return `https://www.linkedin.com/in/${value}`;
  return "";
}

export default function SpeakersClient({
  speakers,
  translations: t,
}: Props) {
  const [expandedSpeaker, setExpandedSpeaker] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const sortedSpeakers = useMemo(() => {
    return [...speakers].sort((a, b) => {
      const nameA = `${a.surname} ${a.name}`.trim().toLowerCase();
      const nameB = `${b.surname} ${b.name}`.trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }, [speakers]);

  const visibleSpeakers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedSpeakers;
    return sortedSpeakers.filter((speaker) =>
      [speaker.name, speaker.surname, speaker.company, speaker.country, speaker.jobposition]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [sortedSpeakers, query]);

  return (
    <section className="w-full justify-start text-xs">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
        {sortedSpeakers.length > 0 && (
          <label className="relative block max-w-md">
            <span className="sr-only">{t.search}</span>
            <Search
              size={16}
              aria-hidden
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="w-full rounded-md bg-white/5 border border-white/15 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-potus"
            />
          </label>
        )}

        {/* Speakers grid */}
        {sortedSpeakers.length === 0 ? (
          <div className="text-white/50 text-center py-20 border border-white/10">
            <p className="text-base">{t.noSpeakers}</p>
          </div>
        ) : visibleSpeakers.length === 0 ? (
          <div className="text-white/50 text-center py-20 border border-white/10">
            <p className="text-base">{t.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {visibleSpeakers.map((speaker) => {
              const isExpanded = expandedSpeaker === speaker.idspeaker;

              return (
                <div
                  key={speaker.idspeaker}
                  className="group flex flex-col rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Photo */}
                  <div className="flex justify-center pt-8">
                    <div className="relative w-32 h-32 rounded-full bg-white/5 overflow-hidden border border-white/10">
                      {speaker.urlphoto ? (
                        <Image
                          src={speaker.urlphoto}
                          alt={`${speaker.name} ${speaker.surname}`.trim()}
                          fill
                          sizes="128px"
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/20 text-3xl font-light uppercase">
                          {speaker.name?.[0]}
                          {speaker.surname?.[0]}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <h3 className="text-white text-base font-light leading-snug">
                      {speaker.name} {speaker.surname}
                    </h3>

                    {speaker.jobposition && (
                      <p className="text-potus text-xs uppercase tracking-wider">
                        {speaker.jobposition}
                      </p>
                    )}

                    <div className="flex flex-col gap-1.5 text-white/40 text-sm">
                      {speaker.company && (
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={13} className="text-white/30" />
                          {speaker.company}
                        </span>
                      )}
                      {speaker.country && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-white/30" />
                          {speaker.city
                            ? `${speaker.city}, ${speaker.country}`
                            : speaker.country}
                        </span>
                      )}
                    </div>

                    {(speaker.bio?.trim() || linkedinUrl(speaker.linkedin)) && (
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <button
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setExpandedSpeaker(
                              isExpanded ? null : speaker.idspeaker
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
                          <div className="mt-4 flex flex-col gap-4">
                            {speaker.bio?.trim() && (
                              <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                                {speaker.bio}
                              </p>
                            )}

                            {linkedinUrl(speaker.linkedin) && (
                              <a
                                href={linkedinUrl(speaker.linkedin)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-potus text-sm hover:text-white transition-colors"
                              >
                                <Linkedin size={14} />
                                {t.linkedin}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer info */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap gap-8 text-white/30 text-xs font-mono uppercase tracking-wider">
          <span>
            {t.speakersCount}: {visibleSpeakers.length}
          </span>
        </div>
      </div>
    </section>
  );
}
