import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const speakerSlots = [
  { id: "speaker1", image: "/img/speakers/marcosros.jpg" },
  { id: "speaker2", image: "/img/speakers/salvadorrueda.jpg" },
  { id: "speaker3", image: "/img/speakers/vicenteguallart.jpg" },
  { id: "speaker4", image: "/img/speakers/albertoestevez.jpg" },
  { id: "speaker5", image: "/img/speakers/enricbatlle.jpg" },
  { id: "speaker6", image: "/img/speakers/wendyy.chen.jpg" },
  { id: "speaker7", image: "/img/speakers/dorothyaseyo.jpg" },
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

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section="program"
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
            <p>{t("p1")}</p>
            <p className="mt-4">{t("p2")}</p>
          </div>

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
                        className="rounded-full object-cover mb-4"
                      />
                    ) : (
                      <div className="w-36 h-36 rounded-full mb-4 bg-white/10 border border-white/20 grid place-items-center text-3xl font-semibold text-white/80">
                        {getInitials(name)}
                      </div>
                    )}

                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-white/60 mt-1 text-left leading-relaxed max-w-[45ch]">
                      {bio}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="text-white/60 text-center mt-6">{t("closing")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyNoteSpeakers;
