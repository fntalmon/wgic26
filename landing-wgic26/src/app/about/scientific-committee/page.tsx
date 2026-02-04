import PageHeader from "@/components/PageHeader";

const ScientificCommittee = () => {
    const scientificCommitteeMembers = [
        { name: "Gabriel Pérez", institution: "University of Lleida" },
        { name: "Julià Coma", institution: "University of Lleida" },
        { name: "Miquel Martí", institution: "Centre Tecnològic Forestal de Catalunya" },
        { name: "Katia Perini", institution: "University of Genoa" },
        { name: "Adriano Magliocco", institution: "University of Genoa" },
        { name: "Paolo Rosasco", institution: "University of Genoa" },
        { name: "Efthimios Zervas", institution: "Hellenic Open University" },
        { name: "Luis Pérez", institution: "University of Seville" },
        { name: "Rafael Fernández Cañero", institution: "University of Seville" },
        { name: "Karolos J. Kontoleon", institution: "Aristotle University of Thessaloniki" },
        { name: "Piero Bevilacqua", institution: "University of Calabria" },
        { name: "Makram Bachawati", institution: "University of Balamand" },
        { name: "Marianne Saba", institution: "University of Balamand" },
        { name: "Henri el Zakhem", institution: "University of Balamand" },
        { name: "Marc Teixido Planes", institution: "CSIC" },
        { name: "Oriol Pons", institution: "UPC" },
        { name: "Joan Garcia", institution: "UPC" },
        { name: "Anna Ma Lacasta", institution: "UPC" },
        { name: "Montse Bosch", institution: "UPC" },
        { name: "Aleix Alba", institution: "UPC" },
        { name: "Sarah Milliken", institution: "University of Greenwich" },
        { name: "Stefano Cascone", institution: "Mediterranea University of Reggio Calabria" },
        { name: "Antonio Gagliano", institution: "University of Catania" },
        { name: "Cristina Matos", institution: "University of Lisbon" },
        { name: "Teresa Galí-Izard", institution: "ETH Zurich" },
        { name: "Maria Rosario Garcia", institution: "Swedish University of Agricultural Sciences" },
        { name: "Agnieszka Karczmarczyk", institution: "Warsaw University of Life Sciences, Poland" },
        { name: "Barbara Sowińska-Świerkosz", institution: "University of Life Sciences in Lublin, Poland" },
        { name: "Timothy Van Renterghem", institution: "Ghent University, Belgium" },
        { name: "Jose Manuel Gutierrez Moreno", institution: "UABC, Mexicali, Mexico" },
        { name: "Karin Hoffmann", institution: "La Rochelle University" },
        { name: "Thomas Nehls", institution: "TU Berlin" },
        { name: "Carolyn Oldham", institution: "University of Western Australia" },
        { name: "Wong Nyuk Hien", institution: "National University of Singapore" },
        { name: "Tan Chun Liang", institution: "National University of Singapore" },
    ];

    return (
        <div>
            <PageHeader
                title="Scientific Committee"
                description="Ensuring the highest standards for WGIC26"
                section="about"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <p>
                            The Scientific Committee of the WGIC26 congress is composed of leading experts, researchers, and practitioners from around the world, representing diverse fields related to urban green infrastructure. Their extensive experience and academic excellence ensure the highest standards for reviewing submissions, guiding thematic sessions, and shaping the overall scientific program.
                        </p>
                        <p>
                            This committee plays a crucial role in fostering interdisciplinary collaboration and promoting innovative research. By bringing together global perspectives and expertise, the Scientific Committee ensures that the congress remains at the forefront of knowledge, addressing the most pressing challenges in sustainable urban development and inspiring actionable solutions for cities worldwide.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Committee Members</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20">
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Name</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Institution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scientificCommitteeMembers.map((member, index) => (
                                        <tr key={index} className="hover:bg-white/5">
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.name}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.institution}</td>
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

export default ScientificCommittee;
