import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SponsorCard } from "@/components/SponsorCard";
import { SupportersCarousel } from "@/components/SupportersCarousel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { sponsorTiers } from "@/data/sponsors";
import { supporters } from "@/data/supporters";
import { getTranslations } from "next-intl/server";
import {
  Building2,
  Gem,
  Trees,
  Leaf,
  Newspaper,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors & Partners | WGIC26 Barcelona-Lleida",
  description:
    "Meet the sponsors, partners, exhibitors and media partners supporting WGIC26, the World Green Infrastructure Congress 2026 in Barcelona and Lleida.",
};

const tierIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  organizedBy: Building2,
  elitePartners: Gem,
  gardenBigExhibitors: Trees,
  gardenMediumExhibitors: Leaf,
  mediaPartners: Newspaper,
};

// Escala descendente por tier, igual criterio que en la home: refleja el nivel/importancia de cada categoría.
const tierLogoBox: Record<string, string> = {
  organizedBy: "h-24 w-40",
  elitePartners: "h-20 w-36",
  gardenBigExhibitors: "h-16 w-32",
  gardenMediumExhibitors: "h-12 w-28",
  mediaPartners: "h-9 w-24",
};

const Sponsors = async () => {
  const t = await getTranslations("sponsorsPage");
  const home = await getTranslations("home");

  const organizationsCount =
    sponsorTiers.reduce((acc, tier) => acc + tier.logos.length, 0) + supporters.length;

  const tierAnchor = (key: string) => `tier-${key}`;

  return (
    <div>
      <PageHeader title={t("title")} description={t("description")} section="sponsors" />

      <section className="relative w-full py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Decorative background: soft brand-color glow + subtle dot texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-potus/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-sansiviera/25 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Stat + quick nav */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/10 pb-10">
            <div className="flex items-center gap-4">
              <HeartHandshake className="text-potus" size={36} />
              <div>
                <AnimatedCounter
                  value={organizationsCount}
                  suffix="+"
                  className="text-3xl font-bold text-white"
                />
                <div className="text-white/60 text-sm">{t("statsLabel")}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {sponsorTiers.map((tier) => (
                <a
                  key={tier.key}
                  href={`#${tierAnchor(tier.key)}`}
                  className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 text-white/70 hover:bg-white hover:text-cactus hover:border-white transition-colors"
                >
                  {home(tier.titleKey)}
                </a>
              ))}
              <a
                href="#tier-supporters"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 text-white/70 hover:bg-white hover:text-cactus hover:border-white transition-colors"
              >
                {home("withTheSupportOf")}
              </a>
            </div>
          </div>

          {/* Tiers */}
          <div className="space-y-10">
            {sponsorTiers.map((tier) => {
              const Icon = tierIcons[tier.key] ?? Building2;
              return (
                <div
                  key={tier.key}
                  id={tierAnchor(tier.key)}
                  className="bg-white rounded-3xl border border-white/10 p-8 md:p-12 scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-8 justify-center">
                    <Icon className="text-monstera" size={22} />
                    <h2 className="text-center text-xl font-bold text-gray-800 uppercase tracking-wider">
                      {home(tier.titleKey)}
                    </h2>
                  </div>
                  <div className="flex flex-wrap justify-center gap-6">
                    {tier.logos.map((logo) => (
                      <SponsorCard
                        key={logo.href}
                        logo={logo}
                        visitLabel={t("visitWebsite")}
                        logoBoxClassName={tierLogoBox[tier.key]}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            <div
              id="tier-supporters"
              className="bg-white rounded-3xl border border-white/10 p-8 md:p-12 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-8 justify-center">
                <HeartHandshake className="text-monstera" size={22} />
                <h2 className="text-center text-xl font-bold text-gray-800 uppercase tracking-wider">
                  {home("withTheSupportOf")}
                </h2>
              </div>
              <SupportersCarousel
                supporters={supporters}
                visibleCount={5}
                variant="light"
                logoBoxClassName={tierLogoBox.mediaPartners}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-8 rounded-3xl bg-cactus/30 border border-white/10">
            <div className="text-center sm:text-left">
              <div className="text-lg uppercase text-white">{t("ctaBecomeTitle")}</div>
              <div className="text-sm text-white/60">{t("ctaBecomeSubtitle")}</div>
            </div>
            <a
              href="/exhibitors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-potus text-monstera rounded-md text-sm uppercase tracking-wider font-medium hover:bg-potus/90 transition-colors shrink-0"
            >
              {t("ctaBecomeButton")}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
