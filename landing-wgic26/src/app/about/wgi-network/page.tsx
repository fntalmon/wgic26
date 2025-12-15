import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";


const Network = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <PageHeader
                title="WGI Network"
                description="Promoting green infrastructure worldwide"
                section="about"

            />
            
            {/* WGIN Description Section */}
            <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-12">
                <section className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <Image
                                src="/img/logos/WGIN.svg"
                                alt="WGI Network"
                                width={240}
                                height={180}
                                className="max-h-20 lg:max-h-24"
                            />
                            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase">World Green Infrastructure Network</h2>
                        </div>
                        
                        <p>
                            The World Green Infrastructure Network (WGIN) is an international nonprofit organization dedicated to promoting the planning, development, and implementation of green infrastructure worldwide. Its mission is to advance the use of nature-based solutions—such as green roofs, green walls, urban forests, and sustainable water management systems—to improve the environmental, social, and economic health of cities. By encouraging the adoption of these practices, WGIN aims to help urban areas become more resilient to climate change and more livable for their inhabitants.
                        </p>
                        <p>
                            WGIN operates as a global network that connects national green roof and green infrastructure associations, researchers, professionals, and policymakers. Through conferences, publications, and collaborative projects, the organization facilitates the exchange of knowledge, research, and best practices. This collaboration helps different countries and cities learn from each other&apos;s experiences and accelerates the development of sustainable urban environments.
                        </p>
                        <p>
                            In addition to fostering international cooperation, WGIN advocates for supportive policies and standards that encourage the widespread adoption of green infrastructure. It works to raise awareness about the multiple benefits of integrating nature into urban design—from reducing heat islands and managing stormwater to improving air quality and biodiversity. By engaging governments, industry, and communities, the World Green Infrastructure Network plays a key role in advancing greener and more sustainable cities around the world.
                        </p>

                        <div className="pt-4">
                            <Button asChild variant="yellow" className="w-fit">
                                <a href="https://worldgreeninfrastructurenetwork.org/" target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" /> Visit WGIN Website
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full h-px bg-white/10 my-8"></div>

            {/* Mission and Values Section */}
            <section className="w-full justify-start text-xs">
                <div className="flex flex-col gap-8 w-full">
                    <div className="w-full bg-cactus p-16 justify-center">

                        <div className="uppercase text-md text-potus mb-4">Mission</div>
                        <div className="flex flex-col lg:flex-row gap-16"><Image
                            src="/img/logos/WGIN.svg"
                            alt="WGI Network"
                            width={320}
                            height={240}
                            className="max-h-24"
                        />
                            <div className="uppercase text-2xl text-white leading-relaxed">
                                Aligned with the WGIN, our mission is to advocate and promote the integration of green infrastructure in urban planning globally.
                            </div></div>
                    </div>

                    <div className="w-full bg-sansiviera p-16 justify-center">
                        <div className="uppercase text-md text-potus mb-4">Values</div>
                        <div className="leading-relaxed flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items between border-b-1 border-white/40 py-20">
                            <div className="uppercase w-full lg:w-1/2 text-lg"><strong>01</strong> Sustainability
                            </div>
                            <div className="w-full lg:w-1/2 text-white/70">
                                A commitment to integrating green infrastructure to enhance
                                environmental resilience and combat climate change.
                            </div>
                        </div>

                        <div className="leading-relaxed flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items between border-b-1 border-white/40 py-20">
                            <div className="uppercase w-full lg:w-1/2 text-lg"><strong>02</strong> Inclusivity
                            </div>
                            <div className="w-full lg:w-1/2 text-white/70">
                                Ensuring accessibility and participation, fostering shared knowledge.
                            </div>
                        </div>

                        <div className="leading-relaxed flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items between border-b-1 border-white/40 py-20">
                            <div className="uppercase w-full lg:w-1/2 text-lg"><strong>03</strong> Innovation
                            </div>
                            <div className="w-full lg:w-1/2 text-white/70">
                                Promoting smart and forward-thinking solutions to address urban and environmental challenges.
                            </div>
                        </div>

                        <div className="leading-relaxed flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items between border-b-1 border-white/40 py-20">
                            <div className="uppercase w-full lg:w-1/2 text-lg"><strong>04</strong> Collaboration
                            </div>
                            <div className="w-full lg:w-1/2 text-white/70">
                                Encouraging cooperation between governments, institutions, universities and communities for a collective impact.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Network;