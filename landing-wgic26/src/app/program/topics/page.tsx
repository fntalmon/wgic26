import PageHeader from "@/components/PageHeader";

const Topics = () => {
    return (
        <div>
            <PageHeader
                title="Topics"
                description="Highlight how urban green infrastructure will contribute to Mitigation and Adaptation, offering new perspectives and insights to foster reflection and drive meaningful action, using different formats of sessions."
                section="program"
            />
            <section className="flex flex-col w-full justify-start text-xs">
                <div id="day1" className="flex flex-col gap-0 lg:flex-row w-full">
                    <div className="flex flex-col gap-4 bg-lagoon/30 text-cement w-full p-12">
                        <div className="uppercase text-sm text-cement/70">
                            Day 1
                        </div>
                        <div className="text-2xl uppercase text-white">
                            Consolidate the Urban Green Infrastructure as a pillar of Sustainable Urban Development
                        </div>
                        <div className="uppercase text-xs text-cement/70 mt-12">
                            Main topics:
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Strategies</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Policies</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Funding</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Projects & Design</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Training</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Execution & Maintenance</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 bg-white/80 text-black w-full p-12 lg:px-12 lg:py-18 text-xs font-light leading-loose justify-start">
                        This first day will focus on establishing a shared vision for sustainable urban planning. Experts and policymakers will discuss global trends, global challenges, and successful case studies that highlight best practices.
                        The sessions will explore strategies for integrating green infrastructure, improving urban resilience, and fostering public-private partnerships.
                        <br />
                        <div className="text-sansiviera font-normal">The day will conclude with a gala dinner, promoting collaboration among international stakeholders.</div>
                    </div>
                </div>

                <div id="day2" className="flex flex-col gap-0 lg:flex-row w-full">
                    <div className="flex flex-col gap-4 bg-lavanda/30 text-cement w-full p-12">
                        <div className="uppercase text-sm text-cement/70">
                            Day 2
                        </div>
                        <div className="text-2xl uppercase text-white">
                            Mitigation & Adaptation: Innovations and Implementation
                        </div>
                        <div className="uppercase text-xs text-cement/70 mt-12">
                            Main topics:
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Climate resilience</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Water management</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Natural & climate hazards</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Biodiversity</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Air quality</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Place regeneration</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Social Justice and Social Cohesion</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 bg-white/80 text-black w-full p-12 lg:px-12 lg:py-18 text-xs font-light leading-loose justify-start">
                        Day two will highlight innovative solutions and practical implementation strategies for sustainable urban planning. Keynotes and panels will address circular economy principles, climate-resilient infrastructure, and the importance of Mitigation & Adaption with Climate Change.
                        <br /><br />
                        Discussions will emphasize inclusivity, accessibility, and governance frameworks necessary for long-term urban sustainability.
                    </div>
                </div>

                <div id="day3-4" className="flex flex-col gap-0 lg:flex-row w-full">
                    <div className="flex flex-col gap-4 bg-canary/30 text-cement w-full p-12">
                        <div className="uppercase text-sm text-cement/70">
                            Day 3 & 4
                        </div>
                        <div className="text-2xl uppercase text-white">
                            Workshops & Visits
                        </div>
                        <div className="uppercase text-xs text-cement/70 mt-12">
                            Locations:
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Barcelona</div>
                            <div className="py-2 px-3 border-1 rounded-sm border-cement bg-cement/10 text-cement uppercase">Lleida</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 bg-white/80 text-black w-full p-12 lg:px-12 lg:py-18 text-xs font-light leading-loose justify-start">
                        The congress will conclude with a call to action, emphasizing the role of global cooperation in advancing green infrastructure and the visit to some projects of urban planning around the cities of Barcelona and Lleida.
                        <br /><br />
                        Workshops will be organized on innovation in urban green infrastructure in which participants will interact with companies in the sector in search of new, more efficient construction solutions.                    </div>
                </div>

            </section>
        </div>
    );
};

export default Topics;