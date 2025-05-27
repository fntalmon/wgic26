import PageHeader from "@/components/PageHeader";
import { FileText, HardHat } from "lucide-react";

const Speakers = () => {
    return (
        <div>
            <PageHeader
                title="Speakers"
                description="Meet the leading voices in green infrastructure. WGIC 2026 will feature top international experts, innovators, and visionaries shaping the future of sustainable cities."
                buttonText=""
                buttonUrl=""
                buttonIcon={<FileText size={18} />}
                buttonVariant="yellow"
            />
            <section className="w-full justify-start text-xs">
                <div className="flex w-full flex-col items-center gap-6 p-16 border-1 border-potus/40">
                    <HardHat size={72} className="text-potus" />
                    <div className="text-2xl uppercase">Coming soon</div>
                    <div className="text-potus">hola@wgic26.barcelona</div>

                </div>            </section>
        </div>
    );
};

export default Speakers;