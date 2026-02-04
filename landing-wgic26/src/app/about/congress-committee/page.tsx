import PageHeader from "@/components/PageHeader";
import { HardHat } from "lucide-react";

const ScientificCommittee = () => {
    return (
        <div>
            <PageHeader
                title="Scientific Committee"
                description="Ensuring the highest standards for WGIC26"
                section="about"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <p>
                            The Scientific Committee of the WGIC26 congress is composed of leading experts, researchers, and practitioners from around the world, representing diverse fields related to urban green infrastructure. Their extensive experience and academic excellence ensure the highest standards for reviewing submissions, guiding thematic sessions, and shaping the overall scientific program.
                        </p>
                        <p>
                            This committee plays a crucial role in fostering interdisciplinary collaboration and promoting innovative research. By bringing together global perspectives and expertise, the Scientific Committee ensures that the congress remains at the forefront of knowledge, addressing the most pressing challenges in sustainable urban development and inspiring actionable solutions for cities worldwide.
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-center gap-6 p-16 border border-potus/40 rounded-lg">
                        <HardHat size={72} className="text-potus" />
                        <div className="text-2xl uppercase text-white">Committee Members Coming Soon</div>
                        <p className="text-white/60 text-center max-w-xl">
                            The full list of Scientific Committee members will be published soon. Stay tuned for updates.
                        </p>
                        <div className="text-potus">hola@wgic26.barcelona</div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ScientificCommittee;
