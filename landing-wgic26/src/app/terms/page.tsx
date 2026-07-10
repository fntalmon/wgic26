import PageHeader from "@/components/PageHeader";
import { HardHat } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Terms = async () => {
    const t = await getTranslations("legalPages");

    return (
        <div>
            <PageHeader
                title={t("termsTitle")}
                description=""
                buttonText=""
                buttonUrl=""
                buttonIcon=""
                buttonVariant="yellow"
            />
            <section className="w-full justify-start text-xs">
                <div className="flex w-full flex-col items-center gap-6 p-6 md:p-12 lg:p-16 border-1 border-potus/40">
                    <HardHat size={72} className="text-potus" />
                    <div className="text-2xl uppercase">{t("comingSoon")}</div>
                    <div className="text-potus">{t("contactEmail")}</div>

                </div>            </section>
        </div>
    );
};

export default Terms;