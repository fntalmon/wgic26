import PageHeader from "@/components/PageHeader";

const Congress = () => {
    return (
        <div>
            <PageHeader
                title="The Congress"
                description="As the World Green Infrastructure Network promotes the global integration of green infrastructure in urban planning."
                section="about"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full">
                    <div className="flex w-full bg-cement uppercase text-4xl lg:text-5xl text-mortar p-16 justify-center">Benvinguts!
                    </div>
                    <div className="p-16 lg:p-24 leading-loose text-sm">
                        <div className="text-lg"><strong>WGIC2026</strong> aims to adapt these objectives to the challenges posed by global climate change. climate change.</div>
                        <br /><br />
                        These challenges refer not only to how urban green infrastructure can help mitigate the effects of climate change on society, but also to how green infrastructure itself will adapt to a changing context in the coming years.
                        Due to the climatology of the Mediterranean region, characterized by high temperatures and low rainfall, excellent examples of innovation for the renaturalization of cities can be found. These strategies can be a source of inspiration for future designs of urban green infrastructure around the world.

                    </div>
                    <div className="w-full bg-cactus uppercase text-xl lg:text-2xl text-white p-16 justify-center leading-loose">
                        <strong>Barcelona’s commitment to sustainability, combined with its rich cultural heritage and forward-thinking urban policies, solidifies its position as one of the </strong>world’s most inspiring cities.

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Congress;