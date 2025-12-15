import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {Globe } from "lucide-react";

const UniversityOfLleida = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <PageHeader
                title="University Of Lleida"
                description=""
                section="about"
            />
            
            <div className="w-full max-w-7xl px-0 py-12 flex flex-col gap-20">
                {/* University of Lleida Section */}
                <section className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">University of Lleida (UdL)</h2>
                        
                        <p>
                            The University of Lleida (Universitat de Lleida, UdL) is a public university located in the city of Lleida, in Catalonia, Spain. It is one of the oldest universities in the region, with historical roots dating back to the 14th century, although it was reestablished in its modern form in 1991. The university is known for its strong commitment to research, academic excellence, and regional development, serving as an important educational and cultural institution in western Catalonia.
                        </p>
                        <p>
                            The UdL offers a wide range of undergraduate, master&apos;s, and doctoral programs across various fields, including engineering, agriculture, health sciences, law, education, and the humanities. It is especially recognized for its expertise in agricultural and forestry sciences, thanks to the fertile lands of the Lleida region and the university’s long-standing connection to environmental and agronomic research. Its campuses are equipped with modern facilities that support both teaching and research activities.
                        </p>
                        <p>
                            In addition to academic training, the University of Lleida places significant emphasis on internationalization and innovation. It actively participates in European and global exchange programs, fosters partnerships with research centers and industries, and promotes entrepreneurship among its students. By combining a rich historical heritage with a forward-looking academic approach, the UdL plays an essential role in advancing knowledge, technology, and social progress in Catalonia and beyond.
                        </p>

                        <div className="pt-4">
                            <Button asChild variant="yellow" className="w-fit">
                                <a href="https://www.udl.cat/ca/" target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" /> Visit UdL Website
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-white/10"></div>

                {/* IT4S Section */}
                <section className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-2">IT4S Research Group</h2>
                        
                        <p>
                            The IT4S research group at University of Lleida is a consolidated research team dedicated to exploring and promoting innovative technologies aimed at sustainability and sustainable development in the fields of architecture and engineering. They work across a variety of areas — from sustainable, energy-efficient building design, urban planning and green infrastructure (like green roofs, green façades, vertical greening systems) to sustainable agriculture, landscape and industry — always with a multidisciplinary approach combining engineering, architecture, environmental science and more.
                        </p>
                        <p>
                            Through research, consultancy, knowledge dissemination and collaborations with public and private partners, IT4S seeks to contribute to environmentally friendly, resource-efficient and socially responsible solutions for buildings, cities and industrial processes.
                        </p>

                        <div className="pt-4">
                            <Button asChild variant="yellow" className="w-fit">
                                <a href="https://it4s.cat/" target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" /> Visit IT4S Website
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UniversityOfLleida;