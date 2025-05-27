import PageHeader from "@/components/PageHeader";
import { HardHat } from "lucide-react";

const Partners = () => {
    return (
        <div>
            <PageHeader
                title="Partners"
                description="We work closely with a diverse network of local, national, and international partners who share our vision of establishing Barcelona as a global benchmark for sustainable urban planning."
                section="exhibitors & partners"

            />
            <section className="w-full justify-start text-xs">
                <div className="flex w-full flex-col items-center gap-6 p-16 border-1 border-potus/40">
                    <HardHat size={72} className="text-potus" />
                    <div className="text-2xl uppercase">Coming soon</div>
                    <div className="text-potus">hola@wgic26.barcelona</div>

                </div>
            </section>
        </div>
    );
};

export default Partners;