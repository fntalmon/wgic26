import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import programData from "@/data/program.json";

const Program = () => {
    const days = programData;

    return (

        <div>
            <PageHeader
                title="Program"
                description=""
                section="program"
            />
            <section className="container mx-auto py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 space-y-4 text-white/80">
                        <p>
                            The congress program will be structured over multiple days to maximize engagement and learning opportunities.
                        </p>
                        <p>
                            Days one and two will feature parallel sessions covering the full range of selected topics, allowing participants to select sessions most relevant to their interests and expertise. The specific workshops will also take place in parallel with the oral presentation sessions.
                        </p>
                        <p>
                            The third day will be dedicated to technical visits, offering first-hand insights into exemplary green infrastructure projects in Barcelona, illustrating innovative approaches and practical applications in a real-world urban context. Detailed information on the visit options and how to sign up will be available soon.
                        </p>
                        <p>
                            An additional fourth day has been planned and will focus specifically on innovation and research processes within the green infrastructure sector. This day will be hosted by the University of Lleida and will provide an immersive experience highlighting cutting-edge research, emerging methodologies, and the latest advancements in the field.
                        </p>
                    </div>

                    <Tabs defaultValue="day1" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-8">
                            {days.map((day: any) => (
                                <TabsTrigger key={day.id} value={day.id} className="text-xs md:text-sm">
                                    {day.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {days.map((day: any) => (
                            <TabsContent key={day.id} value={day.id} className="border border-cactus rounded-lg overflow-hidden bg-cactus shadow-sm text-white">
                                <div className="bg-monstera p-6 border-b border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-2">{day.date}</h3>
                                    {day.title && <p className="text-sm text-white/90 font-medium">{day.title}</p>}
                                    {day.subtitle && <p className="text-xs text-white/70 mt-1">{day.subtitle}</p>}
                                    {day.description && <p className="text-xs text-white/70 mt-2 italic">{day.description}</p>}
                                </div>
                                <div className="overflow-x-auto">
                                    <Table className="w-full border-collapse border border-white/10">
                                        <TableHeader className="bg-monstera/30 border-b border-white/20">
                                            <TableRow className="border-white/10 hover:bg-transparent">
                                                <TableHead className="w-[120px] text-white font-bold">Time</TableHead>
                                                {day.rooms ? (
                                                    day.rooms.map((room: string, i: number) => (
                                                        <TableHead key={i} className="text-white font-bold min-w-[200px] border-l border-white/10">{room}</TableHead>
                                                    ))
                                                ) : day.headers ? (
                                                    day.headers.slice(1).map((header: string, i: number) => (
                                                        <TableHead key={i} className="text-white font-bold border-l border-white/10">{header}</TableHead>
                                                    ))
                                                ) : (
                                                    <>
                                                        <TableHead className="text-white font-bold border-l border-white/10">Activity</TableHead>
                                                        <TableHead className="text-white font-bold border-l border-white/10">Location</TableHead>
                                                    </>
                                                )}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {day.events.length > 0 ? (
                                                day.events.map((event: any, index: number) => (
                                                    <TableRow key={index} className="border-white/10 hover:bg-white/5">
                                                        <TableCell className="font-medium text-xs whitespace-nowrap align-top text-white/80 p-4">{event.time}</TableCell>
                                                        {event.isFullWidth ? (
                                                            <TableCell 
                                                                colSpan={day.rooms ? day.rooms.length : (day.headers ? day.headers.length - 1 : 2)} 
                                                                className="text-xs font-semibold text-white bg-white/10 p-4"
                                                            >
                                                                {event.activity}
                                                            </TableCell>
                                                        ) : event.isParallel ? (
                                                            event.sessions.map((session: any, i: number) => (
                                                                <TableCell key={i} className="text-xs align-top border-l border-white/10 p-4">
                                                                    <div className="font-semibold text-white mb-1">{session.topic}</div>
                                                                    <div className="text-[10px] text-white/60">Chair: {session.chair}</div>
                                                                </TableCell>
                                                            ))
                                                        ) : day.headers ? (
                                                            <>
                                                                <TableCell className="text-xs font-semibold text-white border-l border-white/10 p-4">{event.typology}</TableCell>
                                                                <TableCell className="text-xs text-white/70 border-l border-white/10 p-4 whitespace-pre-line">{event.activity}</TableCell>
                                                                <TableCell className="text-xs text-white/70 border-l border-white/10 p-4 whitespace-pre-line">{event.extra}</TableCell>
                                                            </>
                                                        ) : day.rooms ? (
                                                            day.rooms.map((_: any, i: number) => (
                                                                <TableCell key={i} className="text-xs font-semibold text-white border-l border-white/10 p-4">
                                                                    {i === (event.roomIndex ?? 0) ? event.activity : ""}
                                                                </TableCell>
                                                                
                                                            ))
                                                        ) : (
                                                            <>
                                                                <TableCell className="text-xs font-semibold text-white border-l border-white/10 p-4">{event.activity}</TableCell>
                                                                <TableCell className="text-xs text-white/70 border-l border-white/10 p-4">{event.location}</TableCell>
                                                            </>
                                                        )}
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={day.rooms ? day.rooms.length + 1 : (day.headers ? day.headers.length : 3)} className="text-center py-8 text-white/50 italic">
                                                        Detailed information will be provided soon.
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                    <div className="mt-8 text-xs text-white/60 italic">
                        Detailed information about the innovation and research workshops that will be held in Lleida and how to sign up will be provided soon.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;

