import PageHeader from "@/components/PageHeader";

const OrganisationCommittee = () => {
    const honourCommittee = [
        { role: "Chair of the conference", name: "Dr. Gabriel Pérez", institution: "University of Lleida" },
        { role: "WGIN President", name: "Mr. Steeven Peck", institution: "WGIN" },
        { role: "University of Lleida Rector", name: "Maria Àngels Balsells", institution: "University of Lleida" },
        { role: "Local Institutional Representative BCN", name: "Maria Buhigas", institution: "Barcelona Municipality" },
        { role: "Local Institutional Representative BCN", name: "Ramon Torra", institution: "Barcelona Provincial Council" },
        { role: "Local Institutional Representative Lleida", name: "", institution: "Lleida Municipality" },
        { role: "Local Institutional Representative Lleida", name: "", institution: "Lleida Provincial Council" },
        { role: "Catalan Government Representative", name: "Jordi Mas", institution: "" },
        { role: "International Expert in GI/NBS", name: "", institution: "" },
        { role: "Private Sector Representative", name: "Mr. Corné van Garderen", institution: "Sempergreen" },
    ];

    const organizingCommittee = [
        { role: "Representative University of Lleida", name: "Gabriel Pérez" },
        { role: "Representative University of Lleida", name: "Julià Coma" },
        { role: "Representative University of Lleida", name: "Laura Herrera" },
        { role: "Representative UdL Foundation", name: "Mercè Balcells" },
        { role: "Representative UdL Foundation", name: "Marta Iglesias" },
        { role: "Representative WGIN", name: "David Brasfield" },
        { role: "Representative WGIN", name: "Hemma Kumar" },
        { role: "Representative WGIN", name: "Zoe Averi" },
        { role: "Representative WGIN", name: "Tanya Muller" },
        { role: "Representative private sector", name: "Toni Amich", institution: "Sempergreen" },
    ];

    const advisoryCommittee = [
        { role: "Representative EFB", name: "Paulo Palha" },
        { role: "Representative EFB", name: "Vera Enzi" },
        { role: "Representative PRONATUR", name: "Julián Briz" },
        { role: "Representative ASESCUVE", name: "Andreu Masoni" },
        { role: "Representative ASESCUVE", name: "Daniel Lacueva" },
        { role: "Representative BIG4LIFE project", name: "Daniel Guzman", institution: "Verdtical" },
        { role: "Representative BIG4LIFE project", name: "Joan Beruezo", institution: "TEBVerd" },
        { role: "Representative BIG4LIFE project", name: "Lidia Calvo", institution: "Eixverd" },
        { role: "Official Association of Agricultural Engineers of Catalonia", name: "Contxi Villar" },
        { role: "COAC", name: "Guim Costa" },
        { role: "CAATEEB", name: "Isabel Pagonabarraga" },
        { role: "CSCAE", name: "Marta Vall-llosera" },
        { role: "CGATE", name: "Juan Carlos Asiain" },
    ];

    return (
        <div>
            <PageHeader
                title="Organisation Committee"
                description="WGIC26 Structure"
                section="about"
            />
            <section className="w-full justify-start text-xs">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

                    {/* Honour Committee */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Honour Committee</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20">
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Role</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Representative</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Institution/Company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {honourCommittee.map((member, index) => (
                                        <tr key={index} className="hover:bg-white/5">
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.role}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.name || <span className="italic text-white/40">To be confirmed</span>}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.institution || <span className="italic text-white/40">To be confirmed</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Organizing Committee */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Organizing Committee</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20">
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Role</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Representative</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {organizingCommittee.map((member, index) => (
                                        <tr key={index} className="hover:bg-white/5">
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.role}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.name || <span className="italic text-white/40">To be confirmed</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Advisory Committee */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">Advisory Committee</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white/20">
                                <thead>
                                    <tr className="bg-cactus/20">
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Role</th>
                                        <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">Representative</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {advisoryCommittee.map((member, index) => (
                                        <tr key={index} className="hover:bg-white/5">
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.role}</td>
                                            <td className="border border-white/20 px-4 py-3 text-white/80">{member.name || <span className="italic text-white/40">To be confirmed</span>}</td>
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

export default OrganisationCommittee;
