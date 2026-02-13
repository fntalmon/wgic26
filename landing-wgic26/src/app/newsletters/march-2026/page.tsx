import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

const MarchNewsletter = () => {
    return (
        <div>
            <PageHeader
                title="WGIC26 Newsletter - March 2026"
                description="Latest updates from the World Green Infrastructure Congress"
                section="newsletters"
            />

            <section className="container mx-auto py-12 px-4">
                <div className="max-w-4xl mx-auto space-y-8 text-white/80">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome to March 2026!</h2>
                        <p className="text-sm text-white/60">Issue #3 - March 15, 2026</p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Congress Update: Registration Now Open</h3>
                        <p>
                            We are thrilled to announce that registration for the World Green Infrastructure Congress 2026 (WGIC26) is officially open! This landmark event, taking place from September 14-17, 2026, in Lleida, Spain, will bring together leading experts, researchers, practitioners, and policymakers from around the globe to explore the latest innovations in green infrastructure and nature-based solutions.
                        </p>
                        <p>
                            Early bird registration is available until May 31, 2026, offering discounted rates for participants. Don&apos;t miss this opportunity to be part of a transformative gathering that will shape the future of sustainable urban development. Visit our registration page to secure your spot today!
                        </p>
                    </div>

                    <div className="my-8">
                        <Image 
                            src="/img/varias/01 Bilbao_BCN.jpg" 
                            alt="WGIC26 Venue" 
                            width={800} 
                            height={400} 
                            className="rounded-lg w-full h-auto"
                        />
                        <p className="text-sm text-white/60 mt-2 text-center">The stunning venue for WGIC26</p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Keynote Speakers Announced</h3>
                        <p>
                            We are proud to introduce our distinguished lineup of keynote speakers for WGIC26. These internationally recognized experts will share their insights on critical topics such as climate resilience, biodiversity enhancement, and sustainable urban transformation. Their presentations promise to inspire and challenge participants to think differently about the role of green infrastructure in creating healthier, more sustainable cities.
                        </p>
                        <p>
                            Among our keynote speakers are leading researchers from institutions across Europe, North America, Asia, and Australia. They bring diverse perspectives and cutting-edge research that will enrich the congress program. Check our website for the full list of speakers and their biographies.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Call for Abstracts Extended</h3>
                        <p>
                            Due to overwhelming interest, we have extended the deadline for abstract submissions to April 15, 2026. This is your chance to present your latest research, innovative projects, or case studies at one of the most prestigious events in the field of green infrastructure. We welcome submissions on all congress topics, including strategies and policies, emerging technologies, design and implementation, and the social and environmental impacts of green infrastructure.
                        </p>
                    </div>

                    <div className="my-8">
                        <Image 
                            src="/img/varias/02 Porxos_BCN_02.jpg" 
                            alt="Green Infrastructure Example" 
                            width={800} 
                            height={400} 
                            className="rounded-lg w-full h-auto"
                        />
                        <p className="text-sm text-white/60 mt-2 text-center">Examples of innovative green infrastructure projects</p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Social Program Highlights</h3>
                        <p>
                            The WGIC26 social program is designed to provide participants with unique opportunities to network, explore the beautiful region of Catalonia, and experience the rich cultural heritage of Lleida. Highlights include a welcome reception at a historic venue, guided tours of local green infrastructure projects, a gala dinner featuring regional cuisine, and optional excursions to Barcelona and the Pyrenees mountains.
                        </p>
                        <p>
                            These activities are more than just entertainment—they are integral to the congress experience, fostering connections and collaborations that extend beyond the conference hall. We encourage all participants to take advantage of these opportunities to engage with colleagues in a relaxed and inspiring setting.
                        </p>
                    </div>

                    <div className="bg-cactus/20 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Save the Date</h3>
                        <ul className="space-y-2">
                            <li>• <strong>Abstract Submission Deadline:</strong> April 15, 2026</li>
                            <li>• <strong>Early Bird Registration Ends:</strong> May 31, 2026</li>
                            <li>• <strong>Congress Dates:</strong> September 14-17, 2026</li>
                        </ul>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-sm text-white/60">
                            Stay connected with us on social media for the latest updates and announcements.
                        </p>
                        <p className="text-sm text-white/60 mt-2">
                            Visit <Link href="/" className="text-potus hover:underline">www.wgic26.com</Link> for more information.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default MarchNewsletter;