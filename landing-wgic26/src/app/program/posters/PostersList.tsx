"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Poster } from "@/data/posters";

interface Translations {
  search: string;
  noResults: string;
  authors: string;
  count: string;
}

interface Props {
  posters: Poster[];
  translations: Translations;
}

// Lowercase and strip accents so "garcia" finds "García".
const normalize = (value: string) =>
  value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function PostersList({ posters, translations: t }: Props) {
  const [query, setQuery] = useState("");

  const sorted = useMemo(
    () => [...posters].sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" })),
    [posters]
  );

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return sorted;
    return sorted.filter((poster) =>
      normalize([poster.title, ...poster.authors, poster.organisation ?? ""].join(" ")).includes(q)
    );
  }, [sorted, query]);

  return (
    <div className="flex flex-col gap-6">
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

      {visible.length === 0 ? (
        <p className="text-white/60 text-sm text-center py-12 border border-white/10 rounded-lg">
          {t.noResults}
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {visible.map((poster) => (
            <li key={poster.id} className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white text-base font-light leading-snug">{poster.title}</h3>
              {poster.authors.length > 0 && (
                <p className="mt-2 text-white/60 text-sm">
                  <span className="text-potus uppercase tracking-wider text-xs mr-2">
                    {t.authors}
                  </span>
                  {poster.authors.join(", ")}
                </p>
              )}
              {poster.organisation && (
                <p className="mt-1 text-white/40 text-sm">{poster.organisation}</p>
              )}
            </li>
          ))}
        </ul>
      )}

      <p className="text-white/30 text-xs font-mono uppercase tracking-wider">
        {t.count}: {visible.length}
      </p>
    </div>
  );
}
