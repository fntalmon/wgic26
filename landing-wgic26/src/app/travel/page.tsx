import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { HardHat } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Travel Information | WGIC26 Barcelona-Lleida",
  description:
    "Everything you need to know about getting to Barcelona and Lleida for WGIC26, the urban sustainability congress taking place in October 2026.",
};

const Travel = async () => {
    const t = await getTranslations("travelPage");

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section=""
            />
            <section className="w-full justify-start text-xs">
                <div className="flex w-full flex-col items-center gap-6 p-6 md:p-12 lg:p-16 border-1 border-potus/40">
                    <HardHat size={72} className="text-potus" />
                    <div className="text-2xl uppercase">{t("comingSoon")}</div>
                    <div className="text-potus">{t("contactEmail")}</div>

                </div>
            </section>
        </div>
    );
};

export default Travel;