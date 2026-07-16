"use client";

import { useTranslations } from "next-intl";

export function SocialProof() {
  const t = useTranslations("home.socialProof");
  const topCountries = t.raw("topCountries") as string[];

  const stats = [
    { value: "120+", label: t("papers") },
    { value: "1000+", label: t("attendees") },
    { value: "35+", label: t("countries") },
    { value: "12th", label: t("edition") },
  ];

  return (
    <div className="w-full border-y border-white/10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-potus">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="text-xs uppercase tracking-wide text-white/70">
            {t("topCountriesLabel")}
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-white/90">
            {topCountries.map((country, i) => (
              <span key={country} className="flex items-center gap-3">
                {country}
                {i < topCountries.length - 1 && (
                  <span className="text-white/30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
