import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import { HardHat } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Workshops = async () => {
    const t = await getTranslations("workshopsPage");

    const workshops = [
        {
            title: t("cards.globalSouth.title"),
            description: t("cards.globalSouth.description"),
        },
        {
            title: t("cards.health.title"),
            description: t("cards.health.description"),
        },
        {
            title: t("cards.recovery.title"),
            description: t("cards.recovery.description"),
        },
    ];

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="program"
            />
            <section className="w-full justify-start text-xs text-justify">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <TextImage imageSrc="/img/Tibidabo 1.jpg" imageAlt={t("img1Alt")} imagePosition="right">
                        <p>
                            {t("p1")}
                        </p>
                    </TextImage>

                    {/* Main Workshops */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">{t("thematicTitle")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {workshops.map((workshop, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-cactus/30 rounded-lg flex items-center justify-center">
                                        <span className="text-xl font-bold text-potus">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{workshop.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{workshop.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Day 4 Innovation Workshops */}
                    <div className="mt-8">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">{t("day4Title")}</h2>
                        <TextImage imageSrc="/img/Exterior_15.jpg" imageAlt={t("img2Alt")} imagePosition="left">
                            <p>
                                {t("day4Description")}
                            </p>
                        </TextImage>

                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20">
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("tableHeaders.time")}</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("tableHeaders.activity")}</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("tableHeaders.details")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">09:00-09:30</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.reception")}</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">09:30-11:00</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.workshop1")}</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">11:00-11:30</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.break")}</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.breakDetails")}</td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">11:30-13:00</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.workshop2")}</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">13:00-14:30</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.lunch")}</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                                    </tr>
                                    <tr className="hover:bg-white/5">
                                        <td className="border border-white/20 px-4 py-3 text-white/80">14:30-17:00</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">{t("schedule.technicalVisits")}</td>
                                        <td className="border border-white/20 px-4 py-3 text-white/80">
                                            <ul className="list-disc list-inside">
                                                <li>{t("schedule.visit1")}</li>
                                                <li>{t("schedule.visit2")}</li>
                                                <li>{t("schedule.visit3")}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Coming Soon Section */}
                    <div className="flex w-full flex-col items-center gap-6 p-16 border border-potus/40 rounded-lg">
                        <HardHat size={72} className="text-potus" />
                        <div className="text-2xl uppercase text-white text-center">{t("comingSoonTitle")}</div>
                        <p className="text-white/60 text-center max-w-xl">
                            {t("comingSoonBody")}
                        </p>
                        <div className="text-potus">hola@wgic26.barcelona</div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Workshops;
