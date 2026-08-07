import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RegisterCTA } from "@/components/RegisterCTA";
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
    Building2,
    Clock,
    User,
    Users,
    HelpCircle,
    Target,
    ListChecks,
    MapPin,
    Lightbulb,
    Mic,
    MessageCircle,
    Mail,
} from "lucide-react";

type WorkshopKey = "globalSouth" | "health" | "recovery" | "lifeBauhaus";

interface CaseStudy {
    id: string;
    title: string;
    body?: string;
    link?: string;
}

interface WhySection {
    heading: string;
    body: string;
    bullets?: string[];
}

interface JoinConversation {
    heading: string;
    body: string;
    contactIntro?: string;
    contactLabel?: string;
    contactEmail?: string;
}

interface Leader {
    name: string;
    affiliation: string;
}

interface Project {
    id: string;
    name: string;
    description: string;
    link?: string;
}

interface StructurePart {
    heading: string;
    body?: string;
    bullets?: string[];
}

type CardTranslator = {
    (key: string): string;
    raw(key: string): unknown;
    has(key: string): boolean;
};

export const metadata: Metadata = {
  title: "Workshops | WGIC26 Barcelona-Lleida",
  description:
    "Join hands-on workshops at WGIC26 covering global south partnerships, health and post-conflict recovery through nature-based solutions.",
};

const workshopMeta: Record<
    WorkshopKey,
    { icon: React.ElementType; gradient: string }
> = {
    globalSouth: { icon: Globe, gradient: "from-emerald-500/20 to-teal-500/10" },
    health: { icon: Heart, gradient: "from-rose-500/20 to-orange-500/10" },
    recovery: { icon: TreePine, gradient: "from-lime-500/20 to-emerald-500/10" },
    lifeBauhaus: { icon: Building2, gradient: "from-sky-500/20 to-indigo-500/10" },
};

// Non-translatable images: leadership photos and case-study visuals.
const leadershipImages: Record<WorkshopKey, string> = {
    globalSouth: "/images/workshops/image2.jpeg",
    health: "/images/workshops/image23.jpeg",
    recovery: "/images/workshops/image24.jpeg",
    lifeBauhaus: "/images/workshops/life-bauhaus-piedad-ribas.jpeg",
};

// Photos for workshops led by more than one person, in the same order as
// the "leadershipTeam" array in the messages files.
const leadershipTeamImages: Partial<Record<WorkshopKey, string[]>> = {
    lifeBauhaus: [
        "/images/workshops/life-bauhaus-piedad-ribas.jpeg",
        "/images/workshops/life-bauhaus-gabriel-perez.jpeg",
    ],
};

// Programme logos shown at the top of the workshop detail.
const headerImages: Partial<Record<WorkshopKey, string[]>> = {
    lifeBauhaus: ["/images/workshops/life-logo.png", "/images/workshops/neb-logo.png"],
};

// Logos for the LIFE Bauhaus participating projects, keyed by project id.
const projectLogos: Record<string, string> = {
    bewooden: "/images/workshops/life-bewooden.jpeg",
    "bauhausing-europe": "/images/workshops/life-bauhausing-europe.png",
    seedneb: "/images/workshops/life-seedneb.png",
    help: "/images/workshops/life-logo.png",
    greenme5: "/images/workshops/life-greenme5.png",
    biomatine: "/images/workshops/life-biomatine.png",
    panelka: "/images/workshops/life-panelka.png",
    levels: "/images/workshops/life-levels.png",
    big4life: "/images/workshops/big4life.png",
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
    lifeBauhaus: {},
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
    const home = await getTranslations("home");
    const tCard: Record<WorkshopKey, CardTranslator> = {
        globalSouth: (await getTranslations("workshopsPage.cards.globalSouth")) as unknown as CardTranslator,
        health: (await getTranslations("workshopsPage.cards.health")) as unknown as CardTranslator,
        recovery: (await getTranslations("workshopsPage.cards.recovery")) as unknown as CardTranslator,
        lifeBauhaus: (await getTranslations("workshopsPage.cards.lifeBauhaus")) as unknown as CardTranslator,
    };

    const workshops: { key: WorkshopKey; id: string }[] = [
        { key: "globalSouth", id: "global-south" },
        { key: "health", id: "health" },
        { key: "recovery", id: "recovery" },
        { key: "lifeBauhaus", id: "life-bauhaus" },
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
                                const caseStudies = ct.has("caseStudies")
                                    ? (ct.raw("caseStudies") as CaseStudy[])
                                    : [];
                                const goals = ct.has("goals") ? (ct.raw("goals") as string[]) : [];
                                const specificObjectives = ct.has("specificObjectives")
                                    ? (ct.raw("specificObjectives") as string[])
                                    : [];
                                const expectedOutcomes = ct.has("expectedOutcomes")
                                    ? (ct.raw("expectedOutcomes") as string[])
                                    : [];
                                const whySections = ct.has("whySections")
                                    ? (ct.raw("whySections") as WhySection[])
                                    : [];
                                const joinConversation = ct.has("joinConversation")
                                    ? (ct.raw("joinConversation") as JoinConversation)
                                    : undefined;
                                const leadershipTeam = ct.has("leadershipTeam")
                                    ? (ct.raw("leadershipTeam") as Leader[])
                                    : [];
                                const whyParagraphs = ct.has("whyParagraphs")
                                    ? (ct.raw("whyParagraphs") as string[])
                                    : [];
                                const mainObjectiveBullets = ct.has("mainObjectiveBullets")
                                    ? (ct.raw("mainObjectiveBullets") as string[])
                                    : [];
                                const projects = ct.has("projects")
                                    ? (ct.raw("projects") as Project[])
                                    : [];
                                const structure = ct.has("structure")
                                    ? (ct.raw("structure") as StructurePart[])
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

                                                {/* Programme logos */}
                                                {headerImages[key] && (
                                                    <div className="flex flex-wrap items-center gap-4">
                                                        {headerImages[key].map((src) => (
                                                            <div key={src} className="bg-white rounded-lg p-2 flex items-center justify-center">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img src={src} alt="" className="h-14 w-auto object-contain" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Two-column grid */}
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                    <div className="flex flex-col gap-4">
                                                        <Section icon={HelpCircle} label={t("labels.why")}>
                                                            {ct.has("whyIntro") ? (
                                                                <div className="flex flex-col gap-4">
                                                                    <p>{ct("whyIntro")}</p>
                                                                    {whySections.map((section, index) => (
                                                                        <div key={index}>
                                                                            <h5 className="text-white font-medium mb-2">{section.heading}</h5>
                                                                            <p>{section.body}</p>
                                                                            {section.bullets && section.bullets.length > 0 && (
                                                                                <ul className="list-disc list-inside space-y-2 text-white/80 mt-2">
                                                                                    {section.bullets.map((bullet, bulletIndex) => (
                                                                                        <li key={bulletIndex}>{bullet}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : whyParagraphs.length > 0 ? (
                                                                <div className="flex flex-col gap-3">
                                                                    {whyParagraphs.map((paragraph, index) => (
                                                                        <p key={index}>{paragraph}</p>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <p>{ct("why")}</p>
                                                            )}
                                                        </Section>

                                                        <Section icon={User} label={t("labels.leadership")}>
                                                            {leadershipTeam.length > 0 ? (
                                                                <div className="flex flex-col gap-4">
                                                                    {leadershipTeam.map((leader, index) => (
                                                                        <LeadershipCard
                                                                            key={index}
                                                                            name={leader.name}
                                                                            affiliation={leader.affiliation}
                                                                            image={leadershipTeamImages[key]?.[index] ?? leadershipImages[key]}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <LeadershipCard
                                                                    name={ct("leadershipName")}
                                                                    affiliation={ct("leadershipAffiliation")}
                                                                    image={leadershipImages[key]}
                                                                />
                                                            )}
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
                                                                {mainObjectiveBullets.length > 0 && (
                                                                    <div className="mt-3">
                                                                        <BulletList items={mainObjectiveBullets} />
                                                                    </div>
                                                                )}
                                                                {ct.has("mainObjectiveFooter") && (
                                                                    <p className="mt-3">{ct("mainObjectiveFooter")}</p>
                                                                )}
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

                                                {/* Participating projects */}
                                                {projects.length > 0 && (
                                                    <Section icon={Building2} label={t("labels.participatingProjects")}>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1">
                                                            {projects.map((project) => (
                                                                <div key={project.id} className="bg-white/[0.05] border border-white/10 rounded-lg p-4 flex flex-col gap-3">
                                                                    {projectLogos[project.id] && (
                                                                        <div className="bg-white rounded-lg p-2 h-16 flex items-center justify-center">
                                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                            <img
                                                                                src={projectLogos[project.id]}
                                                                                alt={project.name}
                                                                                className="max-h-12 w-auto object-contain"
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    <h5 className="text-white font-medium">{project.name}</h5>
                                                                    <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                                                                    {project.link && (
                                                                        <a
                                                                            href={project.link}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-potus hover:underline break-words text-xs mt-auto inline-block"
                                                                        >
                                                                            {project.link}
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Section>
                                                )}

                                                {/* Workshop structure */}
                                                {structure.length > 0 && (
                                                    <Section icon={Clock} label={t("labels.structure")}>
                                                        <div className="flex flex-col gap-4 mt-1">
                                                            {structure.map((part, index) => (
                                                                <div key={index}>
                                                                    <h5 className="text-white font-medium mb-2">{part.heading}</h5>
                                                                    {part.body && <p>{part.body}</p>}
                                                                    {part.bullets && part.bullets.length > 0 && (
                                                                        <ul className="list-disc list-inside space-y-2 text-white/80 mt-2">
                                                                            {part.bullets.map((bullet, bulletIndex) => (
                                                                                <li key={bulletIndex}>{bullet}</li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            ))}
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

                                                {/* Join the conversation */}
                                                {joinConversation && (
                                                    <div className="bg-potus/10 border border-potus/30 rounded-lg p-5 flex flex-col gap-3">
                                                        <div className="flex items-center gap-2">
                                                            <MessageCircle size={18} className="text-potus" />
                                                            <h4 className="text-xs uppercase text-potus font-medium tracking-wide">{joinConversation.heading}</h4>
                                                        </div>
                                                        <p className="text-white/90 text-sm leading-relaxed">{joinConversation.body}</p>
                                                        {joinConversation.contactIntro && (
                                                            <p className="text-white/80 text-sm leading-relaxed">{joinConversation.contactIntro}</p>
                                                        )}
                                                        {joinConversation.contactEmail && (
                                                            <div className="flex items-center gap-2 text-sm">
                                                                <Mail size={16} className="text-potus" />
                                                                {joinConversation.contactLabel && (
                                                                    <span className="text-white/70">{joinConversation.contactLabel}</span>
                                                                )}
                                                                <a
                                                                    href={`mailto:${joinConversation.contactEmail}`}
                                                                    className="text-potus hover:underline"
                                                                >
                                                                    {joinConversation.contactEmail}
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>

                    <RegisterCTA
                        title={home("ctaJoinTitle")}
                        subtitle={home("ctaJoinSubtitle")}
                        buttonLabel={home("registerNow")}
                    />
                </div>
            </section>
        </div>
    );
};

export default Workshops;
