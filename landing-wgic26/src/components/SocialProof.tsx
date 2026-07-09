"use client";

import { useTranslations } from "next-intl";

export function SocialProof() {
  const t = useTranslations("home.socialProof");

  const stats = [
    { value: "112", label: t("papers") },
    { value: "200+", label: t("attendees") },
    { value: "40+", label: t("countries") },
    { value: "12th", label: t("edition") },
  ];

  return (
    <div className="w-full border-y border-white/10 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
    </div>
  );
}
