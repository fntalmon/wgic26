import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RegisterCTA } from "@/components/RegisterCTA";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Keynote Speakers | WGIC26 Barcelona-Lleida",
  description:
    "Meet the keynote speakers confirmed for WGIC26, international experts and innovators leading this nature-based solutions conference in Barcelona.",
};

// Orden alfabético por apellido
const speakerSlots = [
  { id: "speaker7", image: "/img/speakers/dorothyaseyo.jpg" },
  { id: "speaker10", image: "/img/speakers/Balsells.png" },
  { id: "speaker5", image: "/img/speakers/enricbatlle.jpg" },
  { id: "speaker8", image: "/img/speakers/buhigas_maria.jpg" },
  { id: "speaker16", image: "/img/speakers/carratala.jpeg" },
  { id: "speaker6", image: "/img/speakers/wendyy.chen.jpg" },
  { id: "speaker4", image: "/img/speakers/albertoestevez.jpg" },
  { id: "speaker3", image: "/img/speakers/vicenteguallart.jpg" },
  { id: "speaker15", image: "/img/speakers/lopez.png" },
  { id: "speaker12", image: "/img/speakers/martinez.jpeg" },
  { id: "speaker20", image: "/img/speakers/peck.png" },
  { id: "speaker17", image: "/img/speakers/petito.png" },
  { id: "speaker19", image: "/img/speakers/GabrielPerez.png" },
  { id: "speaker13", image: "/img/speakers/VictoriaPerez.png" },
  { id: "speaker9", image: "/img/speakers/JesusPerez.jpeg" },
  { id: "speaker18", image: "/img/speakers/rolles.png" },
  { id: "speaker1", image: "/img/speakers/marcosros.jpg" },
  { id: "speaker2", image: "/img/speakers/salvadorrueda.jpg" },
  { id: "speaker14", image: "/img/speakers/scuto.png" },
] as const;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "?";

const KeyNoteSpeakers = async () => {
  const t = await getTranslations("keyNoteSpeakersPage");
  const home = await getTranslations("home");

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section="program"
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
          {/* Speakers Grid */}
          <div className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {speakerSlots.map((speaker) => {
                const name = t(`speakers.${speaker.id}.name`);
                const bio = t(`speakers.${speaker.id}.bio`);

                return (
                  <article
                    key={speaker.id}
                    className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow min-h-[320px]"
                  >
                    {speaker.image ? (
                      <Image
                        src={speaker.image}
                        alt={name}
                        width={144}
                        height={144}
                        className="w-36 h-36 rounded-full object-cover mb-4"
                      />
                    ) : (
                      <div className="w-36 h-36 rounded-full mb-4 bg-white/10 border border-white/20 grid place-items-center text-3xl font-semibold text-white/80">
                        {getInitials(name)}
                      </div>
                    )}

                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-base md:text-lg text-white/70 mt-2 text-left leading-relaxed max-w-[45ch]">
                      {bio}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="text-white/60 text-center mt-6">{t("closing")}</p>
          </div>

          <RegisterCTA
            title={home("ctaJoinTitle")}
            subtitle={home("ctaJoinSubtitle")}
            buttonLabel={home("registerNow")}
          />
          <NewsletterCTA
            title={home("newsletterTitle")}
            subtitle={home("newsletterCtaTeaser")}
            buttonLabel={home("newsletterSubmit")}
          />
        </div>
      </section>
    </div>
  );
};

export default KeyNoteSpeakers;
