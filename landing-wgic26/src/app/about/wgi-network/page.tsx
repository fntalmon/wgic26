import PageHeader from "@/components/PageHeader";
import Image from "next/image";


const Network = () => {
    return (
        <div>
            <PageHeader
                title="WGI Network"
                description=""
                section="about"

            />
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