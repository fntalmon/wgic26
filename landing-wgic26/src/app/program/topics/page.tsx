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
                                        <TableCell className="text-base text-white/70 p-4">Strategies – Policies – Funding programs</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">2</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">Technologies – Market – GI/NBS sector – Standards</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">3</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">Projects – Design</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">4</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">Execution – Maintenance – Quality</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">5</TableCell>
                                        <TableCell className="text-base text-white/70 p-4">Education – Training</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 bg-white/5">
                                        <TableCell className="font-medium text-base text-white/80 p-4">6</TableCell>
                                        <TableCell className="text-base font-bold text-white p-4">Impacts</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">a) Climate resilience</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">b) Water management</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">c) Natural and Climate Hazards</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">d) Green Space Management</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">e) Biodiversity</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">f) Air Quality</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">g) Place Regeneration</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">h) Knowledge and Social Capacity Building for Sustainable Urban Transformation</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">i) Participatory Planning and Governance</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">j) Social Justice and Social Cohesion</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">k) Health and Well-being</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">l) New Economic Opportunities and Green Jobs</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8 italic">Impacts: Miscellaneous</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base font-bold text-white p-4">Workshops</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">Workshop Green Infrastructure vs Global South</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">Workshop Green Infrastructure vs Health and Well-being</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-base text-white/70 p-4 pl-8">Workshop Green Infrastructure vs Post-Conflict Recovery</TableCell>
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