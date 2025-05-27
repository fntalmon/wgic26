import PageHeader from "@/components/PageHeader";
import { HardHat } from "lucide-react";

const Exhibitors = () => {
    return (
        <div>
            <PageHeader
                title="Exhibitors"
                description="If you want to have a presence at the event, choose between the booth options to ensure your goals reach your audience."
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

export default Exhibitors;