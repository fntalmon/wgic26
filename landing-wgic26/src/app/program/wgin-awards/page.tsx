import PageHeader from "@/components/PageHeader";
import { 
    Leaf, 
    Layers, 
    Trees, 
    FileText, 
    GraduationCap, 
    BookOpen, 
    Cpu, 
    Sprout, 
    Trophy,
    ExternalLink
} from "lucide-react";

const Awards = () => {
    const categories = [
        {
            title: "Green Roofs",
            description: "Celebrating exemplary vegetated roof projects.",
            icon: Leaf
        },
        {
            title: "Green Walls",
            description: "Honoring outstanding green facades, living walls, and other building-integrated greening solutions.",
            icon: Layers
        },
        {
            title: "Green Neighborhood",
            description: "Recognizing urban landscape projects that incorporate multifunctional vegetative planting and design.",
            icon: Trees
        },
        {
            title: "Green Infrastructure Policy",
            description: "Highlighting excellence in public or private sector policies that promote best practices and accelerate the uptake of urban green infrastructure.",
            icon: FileText
        },
        {
            title: "Green Infrastructure Research (Academic Work)",
            description: "Acknowledging performance and excellence in green infrastructure-related research and academic projects.",
            icon: GraduationCap
        },
        {
            title: "Green Infrastructure Research (Student Posters)",
            description: "Recognizing innovative ideas and projects from students in the green infrastructure field.",
            icon: BookOpen
        },
        {
            title: "Green Innovative Living Systems",
            description: "Celebrates realised projects integrating living systems (plants, fungi, algae) on or within building envelopes.",
            icon: Cpu
        },
        {
            title: "Unintended Greenery",
            description: "This award category is recognising the value of unplanned natural vegetation and species development outside human design.",
            icon: Sprout
        },
        {
            title: "Green Infrastructure Champion",
            description: "Honouring individuals, companies, non-profit and/or other entities that have made a significant contribution to the green infrastructure industry.",
            icon: Trophy
        }
    ];

    return (
        <div>
            <PageHeader
                title="WGIN Awards"
                description="World Green Infrastructure Awards 2026"
                section="program"
            />
            <section className="w-full justify-start">
                <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
                    <div className="space-y-6 text-white/90 text-sm leading-relaxed">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Nominations are open!</h2>
                                <p className="text-white/60">Submit your project before June 2026</p>
                            </div>
                            <a 
                                href="https://awards.wgin.org/home" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 bg-lagoon text-cactus px-6 py-3 rounded-full font-bold hover:bg-white transition-colors text-sm"
                            >
                                SUBMIT NOMINATION <ExternalLink size={16} />
                            </a>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-4">
                            <p>
                                The World Green Infrastructure Network (WGIN) is accepting nominations for the World Green Infrastructure Awards 2026. This prestigious competition aims to celebrate and recognize excellence in the field of building integrated greening and other green infrastructure projects, as well as associated academic research, student work, and policy.
                            </p>
                            <p>
                                The WGIN Awards are unique in the green infrastructure field with comprehensive categories, a commitment to excellence, and connecting professionals, researchers, and decision-makers worldwide. Awarded projects showcase pioneering approaches and demonstrate how green infrastructure enhances communities, improves well-being, and mitigates environmental challenges worldwide.
                            </p>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-px bg-lagoon"></span>
                                NINE KEY CATEGORIES
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories.map((cat, i) => (
                                    <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-monstera/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <cat.icon className="text-lagoon" size={20} />
                                        </div>
                                        <h4 className="font-bold text-white mb-2 text-base leading-tight">{cat.title}</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">{cat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 grid md:grid-cols-2 gap-12 items-center border-t border-white/10">
                            <div className="space-y-4">
                                <p>
                                    Nominations may be submitted until June 2026, through the official World Green Infrastructure Awards website. Winners will be selected by an international jury of experts and announced at the awards ceremony taking place during the World Green Infrastructure Congress 27-30 September 2026, in Barcelona, Catalonia, Spain.
                                </p>
                                <p className="text-xs text-white/50 italic">
                                    For more information about the World Green Infrastructure Awards 2026 and to submit a nomination, please visit:
                                </p>
                                <a 
                                    href="https://awards.wgin.org/home" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-lagoon hover:underline font-medium block"
                                >
                                    https://awards.wgin.org/home
                                </a>
                            </div>
                            <div className="bg-cactus p-8 rounded-3xl border border-white/10 text-center">
                                <Trophy className="mx-auto text-lagoon mb-4" size={48} />
                                <h5 className="text-white font-bold text-xl mb-2">Join the Excellence</h5>
                                <p className="text-white/60 text-xs mb-6">Be part of the most prestigious green infrastructure event of 2026.</p>
                                <a 
                                    href="https://awards.wgin.org/home" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block border border-white/20 text-white px-8 py-2 rounded-full text-xs hover:bg-white hover:text-cactus transition-all"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};



export default Awards;