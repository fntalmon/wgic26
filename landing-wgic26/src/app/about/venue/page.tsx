import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getTranslations } from "next-intl/server";


const Venue = async () => {
    const t = await getTranslations("venuePage");

    return (
        <div>
            <PageHeader
                title={t("title")}
                description={t("description")}
                section="about"
            />
            <section className="w-full flex flex-col justify-start text-base">
                <div className="flex flex-col gap-0 text-white/80">
                    <div className="flex flex-col lg:flex-row">
                        <div className="uppercase text-3xl md:text-5xl lg:text-6xl bg-sansiviera p-6 md:p-10 lg:p-16 leading-snug flex justify-center text-white">{t("barcelonaLabel1")}<br />{t("barcelonaLabel2")}<br />{t("barcelonaLabel3")}</div>
                        <div className="flex flex-col gap-8 p-8 lg:p-12">
                            <div className="leading-loose text-base text-justify">
                                {t("barcelonaP1")}
                            </div>
                            <div className="leading-loose text-base text-justify">
                                {t("barcelonaP2")}
                            </div>
                            <div className="leading-loose text-base text-justify">
                                {t("barcelonaP3")}
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/img/bcn.jpg"
                        alt={"Barcelona"}
                        width={320}
                        height={240}
                        className="w-full" />
                </div>

                <div className="flex flex-col gap-0 text-white/80">
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="flex flex-col gap-8 p-8 lg:p-12 mb-8">
                            <div className="leading-loose text-base text-justify">
                                {t("ccibP1")}
                            </div>
                            <div className="leading-loose text-base text-justify">
                                {t("ccibP2")}
                            </div>
                            <div className="leading-loose text-base text-justify">
                                {t("ccibP3")}
                            </div>
                        </div>
                        <div className="uppercase text-3xl md:text-5xl lg:text-6xl bg-black/70 p-6 md:p-10 lg:p-16 leading-snug flex justify-center text-white">CCIB</div>
                    </div>
                    <Image
                        src="/img/ccib.jpg"
                        alt={"Barcelona"}
                        width={320}
                        height={240}
                        className="w-full" />
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="w-full h-[500px] mt-8 rounded-xl overflow-hidden">
                <iframe
                    title={t("mapTitle")}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23949.49191525555!2d2.1701!3d41.387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f4b41a2b03%3A0x9d770508d214dab3!2sPla%C3%A7a%20de%20Catalunya%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1716839000000!5m2!1sen!2ses"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full h-full rounded-2xl"
                ></iframe>
            </section>
        </div>
    );
};

export default Venue;