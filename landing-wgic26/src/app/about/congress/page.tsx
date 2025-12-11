import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const Congress = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <PageHeader
                title="The Congress"
                description="World Green Infrastructure Congress"
                section="about"
            />

            <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-20">
                {/* Main Congress Description */}
                <section className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                    <p>
                        Annually, the WGIN promotes and co-organizes the World Green Infrastructure Congress (WGIC), together with university academic institutions that host this global event.
                    </p>
                    <p>
                        World congresses on green infrastructure offer several important benefits to society. First, they bring together researchers, professionals, public administrations, and companies from around the world to share scientific and technical advances on nature-based solutions such as green roofs, green façades, ecological corridors, and sustainable urban drainage systems. This accelerates innovation and improves the quality of interventions in cities and territories.
                    </p>
                    <p>
                        In addition, these congresses help spread best practices and real examples that have improved urban resilience, reduced the impact of climate change, or increased citizens&apos; well-being. The transfer of knowledge allows more cities to adopt green strategies that reduce urban heat, improve air quality, and promote biodiversity.
                    </p>
                    <p>
                        These events drive more ambitious public policies and foster international collaboration. By placing green infrastructure on the global agenda, they encourage governments and organizations to invest in sustainable, accessible, and economically beneficial solutions, generating a direct impact on health, quality of life, and the environmental sustainability of present and future societies.
                    </p>
                </section>

                {/* Congress History */}
                <section className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                    <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">Congress History</h2>
                    <p>
                        Since its inception in 2009 in Toronto (Canada), the congress has been held in different cities of the world, always with great participation success and providing important networking opportunities between different interest groups, companies, universities and research centres, designers and project managers, and students. The last editions took place in Berlin 2023 (Germany), Auckland 2024 (New Zealand) and Basel 2025 (Switzerland).
                    </p>

                    {/* Congress Photos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex flex-col items-center gap-4">
                            <Image
                                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/WGIC23_Berlin%2001.jpg"
                                alt="Berlin 2023 Congress"
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className="text-white/60 text-sm">Berlin 2023</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Image
                                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/WGIC24%20Auckland_02.jpg"
                                alt="Auckland 2024 Congress"
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className="text-white/60 text-sm">Auckland 2024</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Image
                                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/WGIC25_Basel%2001.jpg"
                                alt="Basel 2025 Congress"
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className="text-white/60 text-sm">Basel 2025</p>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-white/10"></div>

                {/* WGIC26 Specific Information */}
                <section className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                    <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">WGIC26 Barcelona - Lleida</h2>

                    <div className="bg-cactus/20 border border-cactus/30 rounded-lg p-6 mb-6">
                        <p className="text-lg font-medium text-white mb-2">Motto</p>
                        <p className="text-xl lg:text-2xl font-semibold text-potus italic">
                            "Green infrastructure for a healthier and safer urban future"
                        </p>
                    </div>

                    <p>
                        Under the motto "Green infrastructure for a healthier and safer urban future" the twelfth edition of the WGIC wants to emphasize how green infrastructure contributes directly and indirectly to improving the quality of life and health of people.
                    </p>
                    <p>
                        Green infrastructure contributes to climate change mitigation and adaptation. WGIC2026 seeks to align its objectives with the challenges posed by global climate change. These challenges involve not only understanding how urban green infrastructure can help mitigate climate impacts on society but also determining how such infrastructure must adapt to an increasingly changing environmental context in the coming years.
                    </p>
                    <p>
                        The Mediterranean region—characterized by high temperatures and low rainfall—offers outstanding examples of innovation in urban renaturalization. These strategies provide valuable inspiration for future designs of urban green infrastructure worldwide. Barcelona&apos;s strong commitment to sustainability, together with its rich cultural heritage and forward-thinking urban policies, reinforces its position as one of the world&apos;s most inspiring cities.
                    </p>
                    <p>
                        WGIC26 is organised by the University of Lleida (Catalonia, Spain) and has a two-day conference format in Barcelona with five parallel sessions, more than ten keynote speakers from the green infrastructure sector and two workshops on specific topics of great current interest. In addition, there is a third day of technical visits to real projects distributed throughout Barcelona and an optional fourth day dedicated to innovation and research on urban green infrastructure at the headquarters of the University of Lleida, in the city of Lleida.
                    </p>
                </section>

                <div className="w-full h-px bg-white/10"></div>

                {/* Key Dates Table */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase">Key Dates</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-white/20">
                            <thead>
                                <tr className="bg-cactus/20">
                                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Who?</th>
                                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">What?</th>
                                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">When?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Authors</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">First draft paper submitted</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 31 March 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Scientific committee</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Notification of acceptance and Oral/Poster decision</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 15 April 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Authors</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">R1 draft paper</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 31 May 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Scientific committee</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Revision R2 draft paper</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 30 June 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Authors</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Final paper submitted</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 31 July 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Organizing Committee</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Final program</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">31 July 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Attendees</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Early-bird registration (up to 400 registrations)</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 15 April 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Attendees</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Registration</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 30 September 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Partners and exhibitors</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Registration</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 31 April 2026</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Sponsors</td>
                                    <td className="border border-white/20 px-4 py-3 text-white/80">Registration</td>
                                    <td className="border border-white/20 px-4 py-3 text-potus font-medium">&lt; 30 September 2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Congress;