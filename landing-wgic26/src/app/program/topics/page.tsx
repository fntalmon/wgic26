import PageHeader from "@/components/PageHeader";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Topics = () => {
    return (
        <div>
            <PageHeader
                title="Main Topics"
                description=""
                section="program"
            />
            <section className="container mx-auto py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 space-y-4 text-white/80">
                        <p>
                            The congress program has been carefully designed to offer a comprehensive and engaging experience for all participants. It will feature a diverse range of activities, including keynote speeches by internationally recognised experts, invited talks highlighting emerging trends and innovations, plenary sessions to address overarching topics, and interactive panel discussions where participants can exchange ideas and debate critical issues. In addition, the program will include thematic workshops, technical exhibitions showcasing the latest solutions and technologies in green infrastructure, as well as oral and poster presentations that provide a platform for researchers, practitioners, and policymakers to share their latest findings and projects.
                        </p>
                        <p>
                            Participants will have the opportunity to engage with a wide spectrum of topics, reflecting the multifaceted nature of green infrastructure and nature-based solutions. These topics include Strategies, Policies, and Funding Programs; emerging Technologies; the Market and Standards in the Green Infrastructure (GI) and Nature-Based Solutions (NBS) sector; Design, Implementation, Maintenance, and Quality of projects; as well as Education and Training. This diversity ensures that the congress addresses the full lifecycle of green infrastructure projects, from conceptual planning to execution and long-term management, while also exploring broader societal, economic, and educational aspects of sustainable urban development.
                        </p>
                        <p>
                            A particularly important part of the congress will be dedicated to examining the impacts of green infrastructure on society and the environment. Specific sessions will explore a wide range of benefits, including climate resilience, water management, natural and climate hazard mitigation, green space management, biodiversity enhancement, air quality improvement, and urban place regeneration. Other sessions will focus on knowledge and social capacity building for sustainable urban transformation, participatory planning and governance, social justice and cohesion, public health and well-being, as well as new economic opportunities and green jobs. By highlighting these areas, the congress emphasises how green infrastructure can deliver tangible and measurable benefits to communities while contributing to long-term sustainability goals.
                        </p>
                        <p>
                            Three central themes will be emphasised during WGIC26, each designed to stimulate discussion and collaboration among participants. The first theme focuses on improving people’s health and well-being, encouraging a strong interaction between the green infrastructure and health sectors. The second theme examines the role of green infrastructure in recovering societies and places after post-conflict or post-disaster situations, highlighting its potential to support resilience and social reconstruction. The third theme addresses the challenge of building resilient, healthy, and just cities in the Global South, where green infrastructure can play a pivotal role in addressing environmental, social, and economic inequalities.
                        </p>
                    </div>

                    {/* Unified Topics Table */}
                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-white mb-4">WGIC26 Barcelona – Lleida. Main Topics</h3>
                        <div className="overflow-x-auto">
                            <Table className="w-full border-collapse border border-white/10">
                                <TableHeader className="bg-monstera/30 border-b border-white/20">
                                    <TableRow className="border-white/10 hover:bg-transparent">
                                        <TableHead className="w-[80px] text-white font-bold">#</TableHead>
                                        <TableHead className="text-white font-bold">Topic / Category</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-xs text-white/80 p-4">1</TableCell>
                                        <TableCell className="text-xs text-white/70 p-4">Strategies – Policies – Funding programs</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-xs text-white/80 p-4">2</TableCell>
                                        <TableCell className="text-xs text-white/70 p-4">Technologies – Market – GI/NBS sector – Standards</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-xs text-white/80 p-4">3</TableCell>
                                        <TableCell className="text-xs text-white/70 p-4">Projects – Design</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-xs text-white/80 p-4">4</TableCell>
                                        <TableCell className="text-xs text-white/70 p-4">Execution – Maintenance – Quality</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="font-medium text-xs text-white/80 p-4">5</TableCell>
                                        <TableCell className="text-xs text-white/70 p-4">Education – Training</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 bg-white/5">
                                        <TableCell className="font-medium text-xs text-white/80 p-4">6</TableCell>
                                        <TableCell className="text-xs font-bold text-white p-4">Impacts</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">a) Climate resilience</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">b) Water management</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">c) Natural and Climate Hazards</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">d) Green Space Management</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">e) Biodiversity</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">f) Air Quality</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">g) Place Regeneration</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">h) Knowledge and Social Capacity Building for Sustainable Urban Transformation</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">i) Participatory Planning and Governance</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">j) Social Justice and Social Cohesion</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">k) Health and Well-being</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">l) New Economic Opportunities and Green Jobs</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8 italic">Impacts: Miscellaneous</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs font-bold text-white p-4">Workshops</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">Workshop Green Infrastructure vs Global South</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">Workshop Green Infrastructure vs Health and Well-being</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/10 hover:bg-white/5">
                                        <TableCell className="p-4"></TableCell>
                                        <TableCell className="text-xs text-white/70 p-4 pl-8">Workshop Green Infrastructure vs Post-Conflict Recovery</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Topics;