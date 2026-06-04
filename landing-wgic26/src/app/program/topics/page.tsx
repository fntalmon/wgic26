import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import "./topics.css";
import { getTranslations } from "next-intl/server";

const Topics = async () => {
    const t = await getTranslations("topicsPage");

    return (
        <div className="justify-text">
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="container mx-auto py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 space-y-8 text-white/80">

                        <TextImage imageSrc="/img/varias/01 Bilbao_BCN.jpg" imageAlt={t("img1Alt")} imagePosition="right">
                            <p>
                                {t("p1")}
                            </p>
                        </TextImage>

                        <TextImage imageSrc="/img/varias/02 Porxos_BCN_02.jpg" imageAlt={t("img2Alt")} imagePosition="left">
                            <p>
                                {t("p2")}
                            </p>
                        </TextImage>

                        <TextImage imageSrc="/img/varias/03 Moritz_BCN.jpg" imageAlt={t("img3Alt")} imagePosition="right">
                            <p>
                                {t("p3")}
                            </p>
                        </TextImage>

                        <TextImage imageSrc="/img/varias/01 IMG_20250827_114013.jpg" imageAlt={t("img4Alt")} imagePosition="left">
                            <p>
                                {t("p4")}
                            </p>
                        </TextImage>

                    </div>

                    {/* Key Topics Accordion */}
                    <div className="mt-12 mb-12">
                        <h3 className="text-2xl font-semibold text-white mb-6 uppercase">{t("accordionTitle")}</h3>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="topic1">
                                <AccordionTrigger className="text-white text-lg hover:no-underline">
                                    {t("accordion.topic1.title")}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/80 text-base leading-relaxed">
                                    {t("accordion.topic1.description")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="topic2">
                                <AccordionTrigger className="text-white text-lg hover:no-underline">
                                    {t("accordion.topic2.title")}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/80 text-base leading-relaxed">
                                    {t("accordion.topic2.description")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="topic3">
                                <AccordionTrigger className="text-white text-lg hover:no-underline">
                                    {t("accordion.topic3.title")}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/80 text-base leading-relaxed">
                                    {t("accordion.topic3.description")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="topic4">
                                <AccordionTrigger className="text-white text-lg hover:no-underline">
                                    {t("accordion.topic4.title")}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/80 text-base leading-relaxed">
                                    {t("accordion.topic4.description")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="topic5">
                                <AccordionTrigger className="text-white text-lg hover:no-underline">
                                    {t("accordion.topic5.title")}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/80 text-base leading-relaxed">
                                    {t("accordion.topic5.description")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="topic6">
                                <AccordionTrigger className="text-white text-lg hover:no-underline">
                                    {t("accordion.topic6.title")}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/80 text-base leading-relaxed">
                                    {t("accordion.topic6.description")}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Unified Topics Table */}
                    <div className="mt-6">
                        <h3 className="text-base font-semibold text-white mb-4">{t("tableTitle")}</h3>
                        <div className="overflow-x-auto">
                            <Table className="w-full border-collapse border border-white/10">
                                <TableHeader className="bg-monstera/30 border-b border-white/20">
                                    <TableRow className="border-white/10 hover:bg-transparent">
                                        <TableHead className="w-[50px] md:w-[80px] text-white font-bold">#</TableHead>
                                        <TableHead className="text-white font-bold">{t("topicCategory")}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">1</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">{t("strategiesPoliciesFunding")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">2</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">{t("technologiesMarketStandards")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">3</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">{t("projectsDesign")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">4</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">{t("executionMaintenanceQuality")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">5</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">{t("educationTraining")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">6</TableCell>
                                        <TableCell className="text-base font-bold text-white p-4">{t("impacts")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactClimateResilience")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactWaterManagement")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactNaturalClimateHazards")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactGreenSpaceManagement")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactBiodiversity")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactAirQuality")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactPlaceRegeneration")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactKnowledgeCapacity")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactParticipatoryPlanning")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactSocialJustice")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactHealthWellbeing")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("impactEconomicOpportunities")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8 italic">{t("impactMiscellaneous")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base font-bold text-white p-4">{t("workshopsTitle")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("workshopGlobalSouth")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("workshopHealthWellbeing")}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">{t("workshopPostConflict")}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Topics;