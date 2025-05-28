import PageHeader from "@/components/PageHeader";
import Image from "next/image";


const Venue = () => {
    return (
        <div>
            <PageHeader
                title="Venue"
                description=""
                section="about"
            />
            <section className="w-full flex flex-col justify-start text-xs">
                <div className="flex flex-col gap-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className="uppercase text-6xl bg-sansiviera p-16 justify-center leading-snug flex justify-center">Bar<br />cel<br />ona</div>
                        <div className="flex flex-col gap-8 p-8 lg:p-12">
                            <div className="leading-loose text-sm">
                                The vibrant capital of Catalonia, stands as a shining example of a
                                metropolitan city that harmoniously blends history, culture, and innovation
                                while prioritizing sustainability and citizen well-being. As one of Europe’s most dynamic cities, Barcelona has successfully transformed itself into an
                                international hub while maintaining its unique identity and commitment to urban
                                excellence.
                            </div>
                            <div className="leading-loose text-sm">
                                Barcelona is a pioneer in sustainable urban planning, with initiatives such as the Superblocks project, which reclaims public space for pedestrians and green areas, reducing
                                pollution and traffic congestion. The city also invests in renewable energy, smart mobility, and efficient waste management systems, aligning with global climate goals.
                                Additionally, Barcelona promotes social inclusivity through accessible public services and digital innovation aimed at enhancing citizens’ quality of life.
                            </div>
                            <div className="leading-loose text-sm">
                                Barcelona’s history dates back over 2,000 years, shaping its identity as a melting
                                pot of cultures. From its Roman foundations to the grandeur of the Gothic
                                Quarter and the visionary modernism of Antoni Gaudí, the city embodies a
                                unique architectural heritage.
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/img/bcn.jpg"
                        alt={"Barcelona"}
                        width={320}
                        height={240}
                        className="w-full" />
                </div>

                <div className="flex flex-col gap-0">
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="flex flex-col gap-8 p-8 lg:p-12 mb-8">
                            <div className="leading-loose text-sm">
                                From the 27th to the 28th of October 2026, we will celebrate the WGIC 2026 at the CCIB of Barcelona, an iconic venue located in the Barcelona district of Sant Martí, inside the 22@ of Poblenou neighbourhood.
                            </div>
                            <div className="leading-loose text-sm">
                                The CCIB comprises two buildings of great architectural value: the Convention
                                Centre and the Auditorium CCIB Forum, joined by an underground connecting
                                walkway. With a gross surface area of 100,000 m2 and a capacity for up to 15,000 attendees, both buildings stand out for their size, natural light, and the great versatility of their spaces.
                            </div>
                            <div className="leading-loose text-sm">
                                The CCIB enjoys a privileged location just 500 metres from the beach, 6 km from the historic centre and 22 km from the airport, with excellent links to the most
                                important highways and roads, and by the public transport network.
                            </div>
                        </div>
                        <div className="uppercase text-6xl bg-black/70 p-16 justify-center leading-snug flex justify-center">CCIB</div>
                    </div>
                    <Image
                        src="/img/ccib.jpg"
                        alt={"Barcelona"}
                        width={320}
                        height={240}
                        className="w-full" />
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="w-full h-[500px] mt-8 rounded-xl overflow-hidden">
                <iframe
                    title="Map of Plaça de Catalunya, Barcelona"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23949.49191525555!2d2.1701!3d41.387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f4b41a2b03%3A0x9d770508d214dab3!2sPla%C3%A7a%20de%20Catalunya%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1716839000000!5m2!1sen!2ses"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full h-full rounded-2xl"
                ></iframe>
            </section>
        </div>
    );
};

export default Venue;