import PageHeader from "@/components/PageHeader";

const CongressCommittee = () => {
    const scientificCommittee = [
        { name: "Gabriel Pérez", institution: "University of Lleida", country: "Spain" },
        { name: "Julià Coma", institution: "University of Lleida", country: "Spain" },
        { name: "Katia Perini", institution: "University of Genoa", country: "Italy" },
        { name: "Selim Bayraktar", institution: "Istanbul University Cerrahpaşa", country: "Turkey" },
        { name: "Cristina Matos", institution: "University of Lisbon", country: "Portugal" },
        { name: "Marta Weber - Siwirska", institution: "Wrocław University of Environmental and Life Sciences", country: "Poland" },
        { name: "Elaise Gabriel", institution: "Universidade Federal de Santa Maria em Cachoeira do Sul", country: "Brazil" },
        { name: "Bert Belmans", institution: "Vrije University Brussel - University of Antwerp", country: "Belgium" },
        { name: "Stephan Brenneisen", institution: "Zurich University of Applied Sciences", country: "Switzerland" },
        { name: "John Rayner", institution: "University of Melbourne", country: "Australia" },
        { name: "Oleksandra Strashok", institution: "Wrocław University of Environmental and Life Sciences", country: "Ukraine" },
        { name: "Jennifer Bousselot", institution: "Colorado State University", country: "USA" },
        { name: "Olyssa Starry", institution: "Bucknell University", country: "USA" },
        { name: "Kamil Rawski", institution: "Białystok University of Technology", country: "Poland" },
        { name: "Beatriz Urbano", institution: "Universidad de Valladolid", country: "Spain" },
        { name: "Leila Tolderlund", institution: "University of Copenhagen", country: "Denmark" },
    ];

    const professionalCommittee = [
        { name: "Toni Amich", institution: "Sempergreen", country: "Spain" },
        { name: "Ignasi Pérez", institution: "BIM Academy", country: "Spain" },
        { name: "Aslam Jonoubi", institution: "Architect and urban engineer, CEO company", country: "Iran" },
        { name: "Linda Velázquez", institution: "greenroofs.com", country: "USA" },
        { name: "Audrey Timm", institution: "AIPH Green City initiative", country: "United Kingdom" },
        { name: "Steven Peck", institution: "President WGIN/GRHC", country: "USA" },
    ];

    return (
        <div>
            <PageHeader
                title="Congress Committee"
                description="Scientific and Professional committees supporting WGIC26"
                section="about"
            />

            <section className="w-full justify-start text-sm">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <p>
                            The Congress Committee of the WGIC26 congress is composed of leading experts, researchers, and practitioners from around the world, representing diverse fields related to urban green infrastructure. Their extensive experience and academic excellence ensure the highest standards for reviewing submissions, guiding thematic sessions, and shaping the overall scientific program.
                        </p>
                        <p>
                            This committee plays a crucial role in fostering interdisciplinary collaboration and promoting innovative research. By bringing together global perspectives and expertise, the Scientific Committee ensures that the congress remains at the forefront of knowledge, addressing the most pressing challenges in sustainable urban development and inspiring actionable solutions for cities worldwide.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Scientific Committee</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20 table-fixed">
                                <colgroup>
                                    <col className="w-1/3" />
                                    <col className="w-1/3" />
                                    <col className="w-1/3" />
                                </colgroup>
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Name</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Institution</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scientificCommittee.map((m, i) => (
                                        <tr key={i} className="hover:bg-white/5">
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{m.name}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{m.institution}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{m.country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Professional Committee </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20 table-fixed">
                                <colgroup>
                                    <col className="w-1/3" />
                                    <col className="w-1/3" />
                                    <col className="w-1/3" />
                                </colgroup>
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Name</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Institution / Role</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {professionalCommittee.map((m, i) => (
                                        <tr key={i} className="hover:bg-white/5">
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{m.name}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{m.institution}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{m.country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CongressCommittee;
