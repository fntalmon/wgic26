import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import programDataEn from "@/data/program-en.json";
import programDataEs from "@/data/program-es.json";
import programDataCa from "@/data/program-ca.json";
import { getTranslations, getLocale } from "next-intl/server";

const Program = async () => {
    const t = await getTranslations("programPage");
    const locale = await getLocale();
    
    // Select the program JSON file based on locale
    const programData = locale === "es" ? programDataEs : locale === "ca" ? programDataCa : programDataEn;
    const days = programData;

    return (

        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="container mx-auto py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 space-y-8 text-white/80">
                        
                        <TextImage imageSrc="/img/Tibidabo 1.jpg" imageAlt={t("img1Alt")} imagePosition="right">
                            <p className="text-justify">
                                {t("p1")}
                            </p>
                            <p className="text-justify">
                                {t("p2")}
                            </p>
                        </TextImage>
                        
                        <TextImage imageSrc="/img/Exterior_15.jpg" imageAlt={t("img2Alt")} imagePosition="left">
                            <p className="text-justify">
                                {t("p3")}
                            </p>
                            <p className="text-justify">
                                {t("p4")}
                            </p>
                        </TextImage>

                    </div>

                    <Tabs defaultValue="day1" className="w-full">
                        <TabsList className="flex w-full gap-3 mb-8 flex-wrap">
                            {days.map((day: { id: string; label: string }) => (
                                <TabsTrigger key={day.id} value={day.id} className="text-base md:text-lg">
                                    {day.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {days.map((day: { id: string; label: string; date: string; title?: string; subtitle?: string; description?: string; rooms?: string[]; headers?: string[]; events: { time?: string; activity: string; isFullWidth?: boolean; isParallel?: boolean; sessions?: { topic: string; chair: string }[]; typology?: string; extra?: string; location?: string; roomIndex?: number }[] }) => (
                            <TabsContent key={day.id} value={day.id} className="border border-cactus rounded-lg overflow-hidden bg-cactus shadow-sm text-white">
                                <div className="bg-monstera p-6 border-b border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-2">{day.date}</h3>
                                    {day.title && (
                                        <p className="text-base text-white/90 font-medium">
                                            {day.id === "day3" ? (
                                                <Link href="/program/technical-visits" className="underline hover:text-potus transition-colors">
                                                    {day.title}
                                                </Link>
                                            ) : (
                                                day.title
                                            )}
                                        </p>
                                    )}
                                    {day.id === "day3" && (
                                        <p className="text-sm text-potus mt-1">
                                            <Link href="/program/technical-visits" className="hover:underline transition-colors inline-flex items-center gap-1">
                                                {t("learnMore")} →
                                            </Link>
                                        </p>
                                    )}
                                    {day.subtitle && <p className="text-sm text-white/70 mt-1">{day.subtitle}</p>}
                                    {day.description && <p className="text-sm text-white/70 mt-2 italic">{day.description}</p>}
                                </div>
                                <div className="overflow-x-auto">
                                    <Table className="w-full border-collapse border border-white/10">
                                        <TableHeader className="bg-monstera/30 border-b border-white/20">
                                            <TableRow className="border-white/10 hover:bg-transparent">
                                                <TableHead className="w-[80px] md:w-auto text-white font-bold text-xs md:text-sm">{t("headers.time")}</TableHead>
                                                {day.rooms ? (
                                                    day.rooms.map((room: string, i: number) => (
                                                        <TableHead key={i} className="text-white font-bold text-xs md:text-sm border-l border-white/10 break-words">{room}</TableHead>
                                                    ))
                                                ) : day.headers ? (
                                                    day.headers.slice(1).map((header: string, i: number) => (
                                                        <TableHead key={i} className="text-white font-bold text-xs md:text-sm border-l border-white/10 break-words">{header}</TableHead>
                                                    ))
                                                ) : (
                                                    <>
                                                        <TableHead className="text-white font-bold text-xs md:text-sm border-l border-white/10">{t("headers.activity")}</TableHead>
                                                        <TableHead className="text-white font-bold text-xs md:text-sm border-l border-white/10">{t("headers.location")}</TableHead>
                                                    </>
                                                )}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {day.events.length > 0 ? (
                                                day.events.map((event: { time?: string; activity: string; isFullWidth?: boolean; isParallel?: boolean; sessions?: { topic: string; chair: string }[]; typology?: string; extra?: string; location?: string; roomIndex?: number; speakers?: string }, index: number) => (
                                                    <TableRow key={index} className="border-white/10 hover:bg-white/5">
                                                        <TableCell className="font-medium text-xs md:text-sm align-top text-white/80 p-3 md:p-4">{event.time}</TableCell>
                                                        {event.isFullWidth ? (
                                                            <TableCell 
                                                                colSpan={day.rooms ? day.rooms.length : (day.headers ? day.headers.length - 1 : 2)} 
                                                                className="text-xs md:text-sm font-semibold text-white bg-white/10 p-3 md:p-4"
                                                            >
                                                                {event.activity}
                                                            </TableCell>
                                                        ) : event.isParallel ? (
                                                            event.sessions?.map((session: { topic: string; chair: string }, i: number) => (
                                                                <TableCell key={i} className="text-xs md:text-sm align-top border-l border-white/10 p-3 md:p-4">
                                                                    <div className="font-semibold text-white mb-1">{session.topic}</div>
                                                                    <div className="text-xs text-white/60">{t("headers.chair")}: {session.chair}</div>
                                                                </TableCell>
                                                            ))
                                                        ) : day.headers ? (
                                                            <>
                                                                <TableCell className="text-xs md:text-sm font-semibold text-white border-l border-white/10 p-3 md:p-4">{event.typology}</TableCell>
                                                                <TableCell className="text-xs md:text-sm text-white/70 border-l border-white/10 p-3 md:p-4 whitespace-pre-line">{event.activity}</TableCell>
                                                                <TableCell className="text-xs md:text-sm text-white/70 border-l border-white/10 p-3 md:p-4 whitespace-pre-line">{event.extra}</TableCell>
                                                            </>
                                                        ) : day.rooms ? (
                                                            day.rooms.map((_: string, i: number) => (
                                                                <TableCell key={i} className="text-xs md:text-sm font-semibold text-white border-l border-white/10 p-3 md:p-4">
                                                                    {i === (event.roomIndex ?? 0) ? (
                                                                        <div>
                                                                            <div>{event.activity}</div>
                                                                            {event.speakers && <div className="text-xs mt-1 font-normal text-white/60">{event.speakers}</div>}
                                                                        </div>
                                                                    ) : ""}
                                                                </TableCell>
                                                                
                                                            ))
                                                        ) : (
                                                            <>
                                                                <TableCell className="text-xs md:text-sm font-semibold text-white border-l border-white/10 p-3 md:p-4">{event.activity}</TableCell>
                                                                <TableCell className="text-xs md:text-sm text-white/70 border-l border-white/10 p-3 md:p-4">{event.location}</TableCell>
                                                            </>
                                                        )}
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={day.rooms ? day.rooms.length + 1 : (day.headers ? day.headers.length : 3)} className="text-center py-8 text-white/50 italic">
                                                        {t("detailsSoon")}
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                    <div className="mt-8 text-sm text-white/60 italic">
                        {t("footerNote")}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;
