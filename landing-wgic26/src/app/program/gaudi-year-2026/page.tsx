import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";

const Gaudi = () => {
    return (
        <div>
            <PageHeader
                title="Gaudí Year 2026"
                description="2026 has been declared as the Gaudí Year to commemorate the centenary of the death of Antoni Gaudí, one of the most influential architects in the history of architecture."
                section="program"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <TextImage imageSrc="/img/gaudi-1.jpg" imageAlt="Gaudí project 1" imagePosition="right">
                            <p className="text-white/90 text-sm leading-relaxed">
                                2026 has been declared as the Gaudí Year to commemorate the centenary of the death of Antoni Gaudí, one of the most influential architects in the history of architecture. This commemoration has been formally recognized by the authorities of Catalonia and Spain as an event of &apos;Exceptional Public Interest&apos; ,with the aim of honouring Gaudí&apos;s technical, artistic, urbanistic, and heritage legacy.
                            </p>
                        </TextImage>

                        <TextImage imageSrc="/img/gaudi-2.jpg" imageAlt="Gaudí project 2" imagePosition="left">
                            <p className="text-white/90 text-sm leading-relaxed">
                                Throughout 2026 and beyond, a vast, coordinated programme of events will bring together all the major works, institutions and actors connected to Gaudí&apos;s heritage — not only those in Catalonia but also his buildings located elsewhere in Spain. These events will include exhibitions, conferences, cultural performances, open-house days in his buildings, and an international congress dedicated to academic and technical study of his work.
                            </p>
                        </TextImage>

                        <p className="text-white/90 text-sm leading-relaxed">
                            The Gaudí Year is conceived not just as a retrospective celebration but as an opportunity to project Gaudí&apos;s influence into the future: re-evaluating his contribution to modern architecture, heritage conservation, and urban innovation; encouraging reflection on the relationship between architecture, nature, society and sustainability; and fostering global dissemination of his values and ideas. In doing so, 2026 offers a moment for both citizens and professionals to reconnect with Gaudí&apos;s vision and to explore how his legacy can inspire contemporary and future architectural and urban practices.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                        <h3 className="text-lg text-white uppercase mb-4">
                            Gaudí and Green Infrastructure
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Gaudí&apos;s legacy, deeply rooted in the harmony between architecture and nature, offers a powerful inspiration for reimagining contemporary urban green infrastructure as a more organic, sustainable, and human-centered model for cities.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Gaudi;