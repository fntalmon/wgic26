import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";

const Activities = async () => {
    const t = await getTranslations("programActivitiesPage");

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="container mx-auto py-12 px-4">
                <div className="max-w-5xl mx-auto text-white/80 space-y-4 text-base leading-relaxed">
                    <p>{t("p1")}</p>
                    <p>{t("p2")}</p>
                </div>
            </section>
        </div>
    );
};

export default Activities;