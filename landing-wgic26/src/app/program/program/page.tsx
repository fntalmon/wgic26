import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Programme Overview | WGIC26 Barcelona-Lleida",
  description:
    "A quick map of the WGIC26 four-day programme: Congress, Workshops, Technical Visits and Innovation Day, in Barcelona and Lleida.",
};

const ProgramOverview = async () => {
  const t = await getTranslations("programPage");
  const o = await getTranslations("programOverviewPage");
  const nav = await getTranslations("navigation");
  const workshops = await getTranslations("workshopsPage");
  const technicalVisits = await getTranslations("technicalVisitsPage");
  const innovationDay = await getTranslations("innovationDayPage");

  const days = [
    {
      dayLabel: o("congressDayLabel"),
      title: nav("programCongress"),
      description: o("congressDescription"),
      href: "/program/congress",
    },
    {
      dayLabel: o("workshopsDayLabel"),
      title: workshops("title"),
      description: o("workshopsDescription"),
      href: "/program/workshops",
    },
    {
      dayLabel: o("technicalVisitsDayLabel"),
      title: technicalVisits("title"),
      description: o("technicalVisitsDescription"),
      href: "/program/technical-visits",
    },
    {
      dayLabel: o("innovationDayDayLabel"),
      title: innovationDay("title"),
      description: o("innovationDayDescription"),
      href: "/program/innovation-day",
    },
  ];

  return (
    <div>
      <PageHeader title={t("title")} description={o("description")} section="program" />

      <section className="w-full py-12 px-4 md:px-8 lg:px-16">
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {days.map((day) => (
              <Link
                key={day.href}
                href={day.href}
                className="group flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/30"
              >
                <span className="text-xs uppercase tracking-wide text-potus">
                  {day.dayLabel}
                </span>
                <h2 className="text-xl font-semibold uppercase text-white tracking-wide">
                  {day.title}
                </h2>
                <p className="text-white/70 leading-relaxed">{day.description}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                  {o("viewDetails")} <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramOverview;
