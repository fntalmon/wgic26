import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const Newsletters = () => {
    const newsletters = [
        { title: "April 2026 Newsletter - Spring Edition", slug: "april-2026", date: "April 20, 2026" },
        { title: "March 2026 Newsletter - Registration Open", slug: "march-2026", date: "March 15, 2026" },

    ];

    return (
        <div>
            <PageHeader
                title="Newsletters"
                description="Stay updated with our latest newsletters."
                section="newsletters"
            />

            <section className="container mx-auto py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {newsletters.map((newsletter, index) => (
                            <Link
                                key={index}
                                href={`/newsletters/${newsletter.slug}`}
                                className="block bg-cactus/10 hover:bg-cactus/20 border border-white/20 rounded-lg p-6 transition-all hover:scale-105"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {newsletter.title}
                                </h3>
                                <p className="text-sm text-white/60">{newsletter.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletters;