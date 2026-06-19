import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Globe,
    Heart,
    TreePine,
    User,
    Users,
    HelpCircle,
    Target,
    ListChecks,
    MapPin,
    Lightbulb,
    Mic,
} from "lucide-react";

type WorkshopKey = "globalSouth" | "health" | "recovery";

interface CaseStudy {
    id: string;
    title: string;
    body?: string;
    link?: string;
}

type CardTranslator = {
    (key: string): string;
    raw(key: string): unknown;
    has(key: string): boolean;
};

const workshopMeta: Record<
    WorkshopKey,
    { icon: React.ElementType; gradient: string }
> = {
    globalSouth: { icon: Globe, gradient: "from-emerald-500/20 to-teal-500/10" },
    health: { icon: Heart, gradient: "from-rose-500/20 to-orange-500/10" },
    recovery: { icon: TreePine, gradient: "from-lime-500/20 to-emerald-500/10" },
};

// Non-translatable images: leadership photos and case-study visuals.
const leadershipImages: Record<WorkshopKey, string> = {
    globalSouth: "/images/workshops/image2.jpeg",
    health: "/images/workshops/image23.jpeg",
    recovery: "/images/workshops/image24.jpeg",
};

const caseStudyImages: Record<WorkshopKey, Record<string, string>> = {
    globalSouth: {
        lucknow: "/images/workshops/image3.jpeg",
        kibera: "/images/workshops/image15.png",
        "teto-verde": "/images/workshops/image20.jpeg",
    },
    health: {},
    recovery: {
        "new-zealand": "/images/workshops/image25.jpg",
        ukraine: "/images/workshops/image26.jpg",
    },
};

interface SectionProps {
    icon: React.ElementType;
    label: string;
    children: React.ReactNode;
}

const Section = ({ icon: Icon, label, children }: SectionProps) => (
    <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3">
            <Icon size={16} className="text-potus" />
            <h4 className="text-xs uppercase text-potus font-medium tracking-wide">{label}</h4>
        </div>
        <div className="text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
);

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-inside space-y-2 text-white/80">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

const LeadershipCard = ({ name, affiliation, image }: { name: string; affiliation: string; image: string }) => (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
        <div className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={image}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/20"
            />
        </div>
        <div>
            <p className="text-white font-medium">{name}</p>
            <p className="text-white/60 text-sm">{affiliation}</p>
        </div>
    </div>
);

const Workshops = async () => {
    const t = await getTranslations("workshopsPage");
    const tCard: Record<WorkshopKey, CardTranslator> = {
        globalSouth: (await getTranslations("workshopsPage.cards.globalSouth")) as unknown as CardTranslator,
        health: (await getTranslations("workshopsPage.cards.health")) as unknown as CardTranslator,
        recovery: (await getTranslations("workshopsPage.cards.recovery")) as unknown as CardTranslator,
    };

    const workshops: { key: WorkshopKey; id: string }[] = [
        { key: "globalSouth", id: "global-south" },
        { key: "health", id: "health" },
        { key: "recovery", id: "recovery" },
    ];

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="w-full justify-start text-sm sm:text-base text-left">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    {/* Thematic Workshops */}
                    <div>
                        <div className="mb-6">
                            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-3">{t("thematicTitle")}</h2>
                            <p className="text-sm text-white/60 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-potus/20 text-potus text-xs">⤵</span>
                                {t("expandHint")}
                            </p>
                        </div>
                        <Accordion type="multiple" className="w-full space-y-4">
                            {workshops.map(({ key, id }) => {
                                const meta = workshopMeta[key];
                                const WorkshopIcon = meta.icon;
                                const ct = tCard[key];

                                const workingGroup = ct.raw("workingGroup") as string[];
                                const caseStudies = (ct.raw("caseStudies") as CaseStudy[] | undefined) ?? [];
                                const goals = ct.has("goals") ? (ct.raw("goals") as string[]) : [];
                                const specificObjectives = ct.has("specificObjectives")
                                    ? (ct.raw("specificObjectives") as string[])
                                    : [];
                                const expectedOutcomes = ct.has("expectedOutcomes")
                                    ? (ct.raw("expectedOutcomes") as string[])
                                    : [];

                                return (
                                    <AccordionItem
                                        key={id}
                                        value={id}
                                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden data-[state=open]:bg-white/[0.07]"
                                    >
                                        {/* Trigger */}
                                        <AccordionTrigger className="text-white hover:no-underline px-4 py-4 sm:px-6 sm:py-5 group">
                                            <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left w-full">
                                                <div className={`flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${meta.gradient} border border-white/10 group-hover:border-white/30 transition-colors`}>
                                                    <WorkshopIcon size={22} className="text-white" />
                                                </div>
                                                <div className="flex flex-col gap-1 pr-2 sm:pr-4 flex-1">
                                                    <span className="text-lg font-semibold leading-snug">{ct("title")}</span>
                                                    <span className="text-sm text-white/70 font-normal leading-relaxed">{ct("description")}</span>
                                                </div>
                                                <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium group-hover:bg-potus/20 group-hover:text-potus transition-colors">
                                                    {t("seeMore")}
                                                </span>
                                            </div>
                                        </AccordionTrigger>

                                        {/* Content */}
                                        <AccordionContent className="text-white/80 text-sm leading-relaxed pb-6 px-4 sm:px-6">
                                            <div className="flex flex-col gap-6 pt-2">

                                                {/* Two-column grid */}
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                    <div className="flex flex-col gap-4">
                                                        <Section icon={HelpCircle} label={t("labels.why")}>
                                                            <p>{ct("why")}</p>
                                                        </Section>

                                                        <Section icon={User} label={t("labels.leadership")}>
                                                            <LeadershipCard
                                                                name={ct("leadershipName")}
                                                                affiliation={ct("leadershipAffiliation")}
                                                                image={leadershipImages[key]}
                                                            />
                                                        </Section>

                                                        {workingGroup.length > 0 && (
                                                            <Section icon={Users} label={t("labels.workingGroup")}>
                                                                <BulletList items={workingGroup} />
                                                            </Section>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col gap-4">
                                                        {ct.has("mainObjective") && (
                                                            <Section icon={Target} label={t("labels.mainObjective")}>
                                                                <p>{ct("mainObjective")}</p>
                                                            </Section>
                                                        )}

                                                        {goals.length > 0 && (
                                                            <Section icon={Target} label={t("labels.goals")}>
                                                                <BulletList items={goals} />
                                                            </Section>
                                                        )}

                                                        {specificObjectives.length > 0 && (
                                                            <Section icon={ListChecks} label={t("labels.specificObjectives")}>
                                                                <BulletList items={specificObjectives} />
                                                            </Section>
                                                        )}

                                                        {expectedOutcomes.length > 0 && (
                                                            <Section icon={ListChecks} label={t("labels.expectedOutcomes")}>
                                                                <BulletList items={expectedOutcomes} />
                                                            </Section>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Case studies */}
                                                {caseStudies.length > 0 && (
                                                    <Section icon={MapPin} label={t("labels.caseStudies")}>
                                                        <div className="flex flex-col gap-4 mt-1">
                                                            {caseStudies.map((caseStudy) => {
                                                                const caseStudyImage = caseStudyImages[key][caseStudy.id];
                                                                return (
                                                                    <div key={caseStudy.id} className="bg-white/[0.05] border border-white/10 rounded-lg p-4">
                                                                        <h5 className="text-white font-medium mb-2">{caseStudy.title}</h5>
                                                                        {caseStudy.body && (
                                                                            <p className="text-white/70 mb-2 text-sm leading-relaxed">{caseStudy.body}</p>
                                                                        )}
                                                                        {caseStudyImage && (
                                                                            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mt-2 mb-2">
                                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                                <img src={caseStudyImage} alt={caseStudy.title} className="w-full h-full object-cover" />
                                                                            </div>
                                                                        )}
                                                                        {caseStudy.link && (
                                                                            <a
                                                                                href={caseStudy.link}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-potus hover:underline break-words text-xs mt-2 inline-block"
                                                                            >
                                                                                {caseStudy.link}
                                                                            </a>
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </Section>
                                                )}

                                                {/* Proposal */}
                                                {ct.has("proposal") && (
                                                    <Section icon={Lightbulb} label={t("labels.proposal")}>
                                                        <p>{ct("proposal")}</p>
                                                    </Section>
                                                )}

                                                {/* Keynote speaker */}
                                                {ct.has("keynoteSpeaker") && (
                                                    <div className="bg-potus/10 border border-potus/30 rounded-lg p-5">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <Mic size={18} className="text-potus" />
                                                            <h4 className="text-xs uppercase text-potus font-medium tracking-wide">{t("labels.keynoteSpeaker")}</h4>
                                                        </div>
                                                        <p className="text-white/90 text-sm leading-relaxed">{ct("keynoteSpeaker")}</p>
                                                    </div>
                                                )}

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Workshops;
