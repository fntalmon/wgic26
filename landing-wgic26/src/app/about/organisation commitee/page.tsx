import PageHeader from "@/components/PageHeader";

const OrganisationCommittee = () => {
    const honourCommittee = [
        { role: "WGIN President", name: "Mr. Steeven Peck", institution: "WGIN" },
        { role: "University of Lleida Rector", name: "Maria Àngels Balsells", institution: "University of Lleida" },
        { role: "Representative Catalan Government", name: "", institution: "" },
        { role: "Representative Barcelona Municipality", name: "", institution: "Barcelona Municipality" },
        { role: "Representative Provincial Council (Barcelona)", name: "", institution: "Provincial Council" },
        { role: "Representative Lleida Municipality", name: "", institution: "Lleida Municipality" },
        { role: "Representative Provincial Council (Lleida)", name: "", institution: "Provincial Council" },
        { role: "Chair of the congress", name: "Dr. Gabriel Pérez", institution: "" },
    ];

    const organizingCommittee = [
        { role: "University of Lleida / BIG4LIFE", name: "Gabriel Pérez", institution: "University of Lleida" },
        { role: "University of Lleida / BIG4LIFE", name: "Julià Coma", institution: "University of Lleida" },
        { role: "University of Lleida / BIG4LIFE", name: "Laura Herrera", institution: "University of Lleida" },
        { role: "WGIN", name: "David Brasfield", institution: "WGIN" },
        { role: "WGIN", name: "Hemma Kumar", institution: "WGIN" },
        { role: "WGIN", name: "Zoe Averi", institution: "WGIN" },
        { role: "WGIN", name: "Tanya Muller", institution: "WGIN" },
        { role: "Private sector / BIG4LIFE", name: "Toni Amich", institution: "Sempergreen" },
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