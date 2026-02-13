import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { HardHat } from "lucide-react";

const Workshops = () => {
    const workshops = [
        {
            title: "Green Infrastructure vs Global South",
            description: "Addressing the challenge of building resilient, healthy, and just cities in the Global South, where green infrastructure can play a pivotal role in addressing environmental, social, and economic inequalities.",
        },
        {
            title: "Green Infrastructure vs Health and Well-being",
            description: "Exploring the connection between green infrastructure and public health, focusing on improving people's health and well-being through nature-based solutions.",
        },
        {
            title: "Green Infrastructure vs Post-Conflict Recovery",
            description: "Examining the role of green infrastructure in recovering societies and places after post-conflict or post-disaster situations, highlighting its potential to support resilience and social reconstruction.",
        },
    ];

    return (
        <div>
            <PageHeader
                title="Workshops"
                description="Interactive sessions on key themes of WGIC26"
                section="program"
            />
            <section className="w-full justify-start text-xs text-justify">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <TextImage imageSrc="/img/Tibidabo 1.jpg" imageAlt="Barcelona workshop venue" imagePosition="right">
                        <p>
                            WGIC26 will feature thematic workshops running in parallel with the oral presentation sessions during days one and two. These interactive sessions are designed to stimulate discussion and collaboration among participants on three central themes emphasized during the congress.
                        </p>
                    </TextImage>

                    {/* Main Workshops */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Thematic Workshops</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {workshops.map((workshop, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-cactus/30 rounded-lg flex items-center justify-center">
                                        <span className="text-xl font-bold text-potus">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{workshop.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{workshop.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Day 4 Innovation Workshops */}
                    <div className="mt-8">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Day 4: Innovation Workshops at University of Lleida</h2>
                        <TextImage imageSrc="/img/Exterior_15.jpg" imageAlt="University of Lleida facilities" imagePosition="left">
                            <p>
                                An additional fourth day has been planned, focusing specifically on innovation and research processes within the green infrastructure sector. This day will be hosted by the University of Lleida and will provide an immersive experience highlighting cutting-edge research, emerging methodologies, and the latest advancements in the field.
                            </p>
                        </TextImage>

                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20">
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Time</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Activity</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">09:00-09:30</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Reception</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">09:30-11:00</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Workshop 1</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">11:00-11:30</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Break</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Visit to BIG1 - PCiTAL (Semi-intensive green roof)</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">11:30-13:00</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Workshop 2</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">13:00-14:30</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Lunch</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">14:30-17:00</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">Technical Visits</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">
                                            <ul className="list-disc list-inside">
                                                <li>BIG2 - Ronda Mercè (Extensive green roof, drone visit)</li>
                                                <li>BIG9 - Coberta Cavallers (Biodiverse, zero water)</li>
                                                <li>Cultural visit: La Seu Vella</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Coming Soon Section */}
                    <div className="flex w-full flex-col items-center gap-6 p-16 border border-potus/40 rounded-lg">
                        <HardHat size={72} className="text-potus" />
                        <div className="text-2xl uppercase text-white text-center">Detailed Information Coming Soon</div>
                        <p className="text-white/60 text-center max-w-xl">
                            Detailed information about the innovation and research workshops that will be held in Lleida and how to sign up will be provided soon.
                        </p>
                        <div className="text-potus">hola@wgic26.barcelona</div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Workshops;
