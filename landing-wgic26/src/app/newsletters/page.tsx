import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import fs from "fs";
import path from "path";

const Newsletters = () => {
    const baseNewsletters = [
        {
            title: "January 2026 Newsletter",
            slug: "january2026",
            date: "January 2026",
            pdfUrl: "/newsletters/january2026.pdf",
        },
    ];

    // Server-side: check whether local PDF files exist so we can hide the button when missing
    const newsletters = baseNewsletters.map((n) => {
        const isLocal = !!n.pdfUrl && n.pdfUrl.startsWith("/");
        const pdfExists = isLocal
            ? fs.existsSync(path.join(process.cwd(), "public", n.pdfUrl.replace(/^\//, "")))
            : Boolean(n.pdfUrl); // treat external URLs as available
        return { ...n, isLocal, pdfExists };
    });

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
                            <div
                                key={index}
                                className="bg-cactus/10 border border-white/20 rounded-lg p-6 transition-all hover:bg-cactus/20"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {newsletter.title}
                                </h3>
                                <p className="text-sm text-white/60 mb-4">{newsletter.date}</p>
                                
                                <div className="flex gap-3 mt-4">
                                    <Link
                                        href={`/newsletters/${newsletter.slug}`}
                                        className="flex-1 bg-cactus hover:bg-cactus/80 text-white text-center py-2 px-4 rounded transition-colors"
                                    >
                                        Read Online
                                    </Link>

                                    {newsletter.pdfUrl && (newsletter.isLocal ? (
                                        // local file: show button only if the file exists on disk
                                        newsletter.pdfExists ? (
                                            <a
                                                href={newsletter.pdfUrl}
                                                download
                                                className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                                PDF
                                            </a>
                                        ) : null
                                    ) : (
                                        // external URL: always show (opens in new tab)
                                        <a
                                            href={newsletter.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            PDF
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletters;