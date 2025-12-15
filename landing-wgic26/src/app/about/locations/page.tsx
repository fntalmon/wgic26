import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const Locations = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <PageHeader
                title="Locations"
                description="Barcelona and Lleida: Innovation and heritage"
                section="about"
            />

            <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-20">
                {/* Barcelona Section */}
                <section className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">Barcelona</h2>

                        <p>
                            Barcelona, the vibrant capital of Catalonia, stands as a shining example of a metropolitan city that harmoniously blends history, culture, and innovation while prioritizing sustainability and citizen well-being. As one of Europe&apos;s most dynamic cities, Barcelona has successfully transformed itself into an international hub while maintaining its unique identity and commitment to urban excellence.
                        </p>
                        <p>
                            Barcelona is a pioneer in sustainable urban planning, with initiatives such as the Superblocks project, which reclaims public space for pedestrians and green areas, reducing pollution and traffic congestion. The city also invests in renewable energy, smart mobility, and efficient waste management systems, aligning with global climate goals. Additionally, Barcelona promotes social inclusivity through accessible public services and digital innovation aimed at enhancing citizens&apos; quality of life.
                        </p>

                        {/* Barcelona History */}
                        <div className="mt-8">
                            <h3 className="text-xl lg:text-2xl font-medium text-white uppercase mb-4">Historical Heritage</h3>
                            <p>
                                Barcelona&apos;s history dates back over 2,000 years, shaping its identity as a melting pot of cultures. From its Roman foundations to the grandeur of the Gothic Quarter and the visionary modernism of Antoni Gaudí, the city embodies a unique architectural heritage.
                            </p>
                            <p className="mt-4">
                                Gaudí&apos;s architecture is a clear example of design based on nature, not only in the shapes and colours, but also in the fact of integrating natural processes, such as the management of rainwater, whether through its capture or control.
                            </p>
                        </div>
                    </div>

                    {/* Barcelona Images */}
                    <div className="flex-shrink-0 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <Image
                                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/maxresdefault.jpg"
                                alt="Barcelona Superblocks - Sustainable urban planning"
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-white/60 text-sm text-center">Barcelona Superblocks - Sustainable urban planning</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Image
                                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/gaudi-slide.webp"
                                alt="Gaudí's architecture inspired by nature"
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-white/60 text-sm text-center">Gaudí&apos;s architecture inspired by nature</p>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-white/10"></div>

                {/* Lleida Section */}
                <section className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">Lleida</h2>

                        <p>
                            Lleida, located in the western part of Catalonia, Spain, is a city with a rich historical and cultural heritage. Nestled along the Segre River, it features a mix of medieval architecture, modern urban development, and vibrant local traditions. Known for its university, agricultural surroundings, and strategic location between the Pyrenees and the Ebro Valley, Lleida combines the charm of a historic city with the dynamism of a growing urban center.
                        </p>
                        <p>
                            The surrounding landscape of Lleida, marked by fertile plains, rivers, and Mediterranean vegetation, offers a natural laboratory for sustainable practices. The region&apos;s agricultural heritage and urban-rural integration provide opportunities to implement green infrastructure, promote biodiversity, and develop sustainable urban planning strategies. By connecting its urban environment with its natural surroundings, Lleida demonstrates how cities can balance growth, environmental stewardship, and quality of life.
                        </p>
                    </div>

                    {/* Lleida Image */}
                    <div className="flex-shrink-0">
                        <div className="flex flex-col gap-4">
                            <Image
                                src="https://hzimzrtjurnxavnbvzmv.supabase.co/storage/v1/object/public/Images/1915-Canalitzacio-del-Riu-Segre-Tavvx.jpg"
                                alt="Lleida and the Segre River - Natural laboratory for sustainability"
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-white/60 text-sm text-center">Lleida and the Segre River - Natural laboratory for sustainability</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Locations;