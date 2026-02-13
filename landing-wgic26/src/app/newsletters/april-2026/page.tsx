import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const AprilNewsletter = () => {
    return (
        <div>
            <PageHeader
                title="WGIC26 Newsletter - April 2026"
                description="Spring Edition: Celebrating Green Infrastructure"
                section="newsletters"
            />

            <section className="container mx-auto py-12 px-4">
                <div className="max-w-4xl mx-auto space-y-8 text-white/80">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Spring Edition</h2>
                        <p className="text-sm text-white/60">Issue #4 - April 20, 2026</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Workshop Program Released</h3>
                        <p>
                            We are excited to unveil the workshop program for WGIC26! These hands-on sessions will cover practical topics such as green roof design, rainwater management, biodiversity monitoring, and participatory planning. Led by industry experts and experienced practitioners, the workshops provide an excellent opportunity to develop new skills and learn about the latest tools and techniques in green infrastructure implementation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        <div>
                            <Image 
                                src="/img/varias/01 Bilbao_BCN.jpg" 
                                alt="Workshop 1" 
                                width={400} 
                                height={300} 
                                className="rounded-lg w-full h-auto"
                            />
                            <p className="text-sm text-white/60 mt-2">Green roof installation workshop</p>
                        </div>
                        <div>
                            <Image 
                                src="/img/varias/02 Porxos_BCN_02.jpg" 
                                alt="Workshop 2" 
                                width={400} 
                                height={300} 
                                className="rounded-lg w-full h-auto"
                            />
                            <p className="text-sm text-white/60 mt-2">Urban biodiversity monitoring</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Spotlight: Lleida&apos;s Green Initiatives</h3>
                        <p>
                            Lleida has been transforming its urban landscape through innovative green infrastructure projects. From green corridors connecting parks to living walls in public buildings, the city demonstrates a strong commitment to sustainability and climate adaptation.
                        </p>
                    </div>

                    <div className="my-8">
                        <Image 
                            src="/img/varias/03 Moritz_BCN.jpg" 
                            alt="Lleida Green Space" 
                            width={800} 
                            height={400} 
                            className="rounded-lg w-full h-auto"
                        />
                        <p className="text-sm text-white/60 mt-2 text-center">One of Lleida&apos;s beautiful green spaces</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        <div className="bg-monstera/20 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-white mb-3">500+</h4>
                            <p className="text-sm">Expected participants from 40+ countries</p>
                        </div>
                        <div className="bg-sansiviera/20 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-white mb-3">80+</h4>
                            <p className="text-sm">Oral and poster presentations</p>
                        </div>
                        <div className="bg-cactus/20 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-white mb-3">15+</h4>
                            <p className="text-sm">Interactive workshops and field trips</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Travel Tips</h3>
                        <p>
                            Planning your trip to Lleida? The city is easily accessible by train from Barcelona (approximately 1.5 hours) and by car via the A-2 motorway. We recommend booking accommodation early, as September is a popular time to visit Catalonia. Our travel page includes a list of recommended hotels and transportation options.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-cactus/20 to-monstera/20 p-8 rounded-lg mt-8 text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Join Us in Lleida!</h3>
                        <p className="mb-6">
                            Only 5 months until WGIC26. Register now and be part of this unique gathering of green infrastructure professionals.
                        </p>
                        <a 
                            href="/registration" 
                            className="inline-block bg-potus text-black font-semibold px-8 py-3 rounded-lg hover:bg-potus/90 transition-colors"
                        >
                            Register Now
                        </a>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-sm text-white/60">
                            Questions? Contact us at info@wgic26.com
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AprilNewsletter;