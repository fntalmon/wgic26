import PageHeader from "@/components/PageHeader";
import { HardHat } from "lucide-react";

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
                    </div>

                    {/* Coming Soon Section */}
                    <div className="flex w-full flex-col items-center gap-6 p-16 border border-potus/40 rounded-lg">
                        <HardHat size={72} className="text-potus" />
                        <div className="text-2xl uppercase text-white text-center">Speakers Coming Soon</div>
                        <p className="text-white/60 text-center max-w-xl">
                            Keynote speakers will be announced as they are confirmed. Check back regularly for updates on our full speaker lineup.
                        </p>
                        <div className="text-potus">hola@wgic26.barcelona</div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default KeyNoteSpeakers;
