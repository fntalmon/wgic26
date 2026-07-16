"use client";

import { useTranslations } from "next-intl";
import { Landmark, PenTool, TreePine, HardHat, Sprout, Globe2 } from "lucide-react";

const profileIcons = [Landmark, PenTool, TreePine, HardHat, Sprout] as const;

export function AttendeeProfiles() {
  const t = useTranslations("home.attendeeProfiles");
  const profiles = t.raw("profiles") as string[];

  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center text-center px-4">
        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl leading-tight">
          {t("title")}
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {profiles.map((profile, i) => {
            const Icon = profileIcons[i] ?? Landmark;
            return (
              <span
                key={profile}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm sm:text-base"
              >
                <Icon className="size-4 shrink-0" />
                {profile}
              </span>
            );
          })}
        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-potus text-black px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide">
          <Globe2 className="size-4 shrink-0" />
          {t("internationalBadge")}
        </span>
      </div>
    </div>
  );
}
