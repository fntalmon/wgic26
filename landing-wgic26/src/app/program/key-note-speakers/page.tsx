import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const KeyNoteSpeakers = () => {
    return (
        <div>
            <PageHeader
                title="Key Note Speakers"
                description="Meet the leading voices in green infrastructure. WGIC 2026 will feature top international experts, innovators, and visionaries shaping the future of green infrastructures and sustainable cities."
                section="program"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
                        <p>
                            WGIC26 will feature up to 12 keynote speakers from around the world, representing the forefront of green infrastructure research, innovation, and implementation. These distinguished experts will share their insights on the most pressing challenges and opportunities in creating sustainable, resilient, and healthy cities.
                        </p>
                        <p className="mt-4">
                            We are pleased to announce that the first speakers for WGIC 2026 are now confirmed — leading voices shaping the future of cities, territory, architecture, and public policy:
                        </p>
                    </div>

                    {/* Speakers Grid */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Marcos_Ros.png" alt="Marcos Ros" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Marcos Ros</div>
                                <p className="text-sm text-white/60">Architect, academic, and Member of the European Parliament, working on urban policy, sustainability, and the built environment at the EU level.</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Salvador_Rueda.png" alt="Salvador Rueda" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Salvador Rueda</div>
                                <p className="text-sm text-white/60">Founder and Director of the Urban and Territorial Ecology Foundation (FEUT), pioneer of urban ecology and creator of the superblock urban model.</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Vicente Guallart.png" alt="Vicente Guallart" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Vicente Guallart</div>
                                <p className="text-sm text-white/60">Architect and urbanist, Co founder of Urbanitree and Founder of the Institute for Advanced Architecture of Catalonia, internationally recognized for research driven urban innovation.</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <Image src="/img/speakers/Alberto Estevez.png" alt="Alberto Estévez" width={144} height={144} className="rounded-full object-cover mb-4" />
                                <div className="font-semibold text-lg">Alberto Estévez</div>
                                <p className="text-sm text-white/60">Founder and Director of ESARQ UIC Barcelona, architect and academic known for advancing experimental and biodigital architecture.</p>
                            </div>
                        </div>

                        <p className="text-white/60 text-center mt-6">This first group of speakers underscores the ambition, depth, and multidisciplinary vision of WGIC 2026, positioning it as a key forum for global urban discourse.</p>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default KeyNoteSpeakers;
