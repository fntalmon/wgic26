import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const PlanYourStay = () => {
    return (
        <div>
            <PageHeader
                title="Plan your stay"
                description="Barcelona and Catalonia are waiting for you."
                section="plan-your-stay"
            />
            
            <section className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Barcelona Tourism Section */}
                    <div className="flex flex-col gap-6 group">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10">
                            <Image 
                                src="/img/gaudi-3.png" 
                                alt="Sagrada Familia - Gaudí"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-cactus/10 p-8 rounded-xl border border-white/10 transition-colors group-hover:bg-cactus/20">
                            <h2 className="text-2xl font-bold text-white mb-4">Tourism of Barcelona</h2>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                Explore the architectural wonders and cultural vibrant life of Barcelona.
                            </p>
                            <a 
                                href="https://www.barcelonaturisme.com/wv3/en/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-cactus hover:bg-cactus/80 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-center"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>

                    {/* Catalonia Tourism Section */}
                    <div className="flex flex-col gap-6 group">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10">
                            <Image 
                                src="/img/catalonia-best.jpg" 
                                alt="Catalonia View"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-cactus/10 p-8 rounded-xl border border-white/10 transition-colors group-hover:bg-cactus/20">
                            <h2 className="text-2xl font-bold text-white mb-4">Agencia Catalana de Turismo</h2>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                Discover the Grand Tour de Catalunya and the best gastronomy in the world.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a 
                                    href="https://act.gencat.cat/en/programes/grand-tour-de-catalunya/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-white/10 text-center"
                                >
                                    Grand Tour de Catalunya
                                </a>
                                <a 
                                    href="https://www.catalunya.com/en/catalonia-the-best-gastronomy-in-the-world" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-white/10 text-center"
                                >
                                    Gastronomy in Catalonia
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlanYourStay;

