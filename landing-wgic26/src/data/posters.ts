export interface Poster {
  id: string;
  title: string;
  authors: string[];
  organisation?: string;
}

// Only posters whose classification (Paper vs Poster) has been confirmed by the
// organisation may be listed here. Contributions flagged NO COMUNICAR AÚN, DECLINADO
// or PENDIENTE PROGRAMA WEB must stay out until the team authorises them.
// Source: REVISION_PAPERS_POSTERS_2102026_gp.xlsx (sheet POSTERS), rows classified OK POSTER.
// Sorted alphabetically by title. Titles and names are shown as registered (not translated).
export const posters: Poster[] = [
  {
    id: "a-hazard-oriented-framework-for-the-strategic-deployment-of-",
    title: "A Hazard-Oriented Framework for the Strategic Deployment of Nature-Based Solutions in Critical Infrastructure Protection",
    authors: ["Helinä Poutamo"],
  },
  {
    id: "a-multi-experiment-synthesis-of-green-roof-infrastructure-fo",
    title: "A multi-experiment synthesis of green roof infrastructure for pollinator conservation in the semi-arid west: Native vegetation design, plant physiology, and rooftop agrivoltaics on Colorado's Front Range",
    authors: ["Maria Schonewise"],
  },
  {
    id: "adaptability-and-flexibility-in-urban-energy-planning-in-the",
    title: "Adaptability and Flexibility in Urban Energy Planning in the Brazilian Context",
    authors: ["Aline Costa Vilela"],
  },
  {
    id: "advancing-urban-ecosystem-resilience-through-the-anaee-eric-",
    title: "Advancing urban ecosystem resilience through the AnaEE-ERIC distributed research infrastructure",
    authors: ["Dorra Gharbi"],
  },
  {
    id: "assessing-publicly-owned-private-spaces-as-distributed-clima",
    title: "Assessing Publicly Owned Private Spaces as Distributed Climate Adaptation Infrastructure : A User Satisfaction Approach in Seoul",
    authors: ["MinKyung Kim"],
  },
  {
    id: "beyond-canopy-cover-connecting-urban-tree-resilience-with-te",
    title: "Beyond canopy cover: Connecting urban tree resilience with temporal environmental justice",
    authors: ["Vahid Amini Parsa"],
  },
  {
    id: "beyond-the-silo-effect-interdisciplinary-training-for-climat",
    title: "Beyond the silo effect. Interdisciplinary training for climate-neutral cities: the M100Academy curriculum",
    authors: ["Oana Crusmac"],
  },
  {
    id: "bim-coordination-on-the-alice-l-walton-school-of-medicine",
    title: "BIM Coordination on the Alice L Walton School of Medicine",
    authors: ["Emily Tilbury"],
  },
  {
    id: "carbon-negative-green-facade-a-comparative-lca-of-cork-based",
    title: "Carbon-Negative Green facade: A Comparative LCA of Cork-Based vs. Steel-Mesh Systems",
    authors: ["Razieh E. Esfahani"],
  },
  {
    id: "climbing-plants-in-green-facade-systems-and-their-impact-on-",
    title: "Climbing plants in green façade systems and their impact on biodiversity in Dutch context",
    authors: ["Jorrit Parmentier"],
  },
  {
    id: "determining-the-wall-leaf-area-index-of-vertical-greening-sy",
    title: "Determining the wall leaf area index of vertical greening systems for 2 climbing plant species, using the accupar-80",
    authors: ["Lars Mezger"],
  },
  {
    id: "digital-twin-governance-for-urban-resilience-and-infrastruct",
    title: "Digital Twin Governance for Urban Resilience and Infrastructure: City Policies and Local Practices in Kaohsiung City, Taiwan",
    authors: ["Yi Jiung Lin"],
  },
  {
    id: "economic-viability-of-green-roof-refurbishment-a-comparative",
    title: "Economic viability of green roof refurbishment: a comparative Cost-Benefit Analysis",
    authors: ["Giulia Mazzucco"],
  },
  {
    id: "epure-assessing-the-impact-of-green-roofs-and-urban-greening",
    title: "EPURE: Assessing the Impact of Green Roofs and Urban Greening on Thermal Comfort and Urban Well-being under Climate Change",
    authors: ["Hugo Geoffroy"],
  },
  {
    id: "flooding-as-a-window-of-opportunity-for-embedding-a-landscap",
    title: "Flooding as a window of opportunity for embedding a landscape approach into the adaptation of cities to multiple hazards",
    authors: ["Ruth Chittock"],
  },
  {
    id: "from-greenery-to-well-being-mapping-the-research-landscape-o",
    title: "From greenery to well-being: Mapping the research landscape of urban green spaces and mental health (2007-2025)",
    authors: ["Manel Díaz Llobet"],
  },
  {
    id: "from-phenet-innovations-to-agroecosystem-monitoring-services",
    title: "From PHENET innovations to agroecosystem monitoring services across European Research Infrastructures",
    authors: ["THI LY MAI"],
  },
  {
    id: "genera-revisited",
    title: "GENERA REVISITED",
    authors: ["Luca Marzocchi"],
  },
  {
    id: "interclim",
    title: "INTERCLIM",
    authors: ["Ksenija Radovic"],
  },
  {
    id: "monitoring-and-impact-of-green-roofs-on-urban-biodiversity",
    title: "Monitoring and impact of green roofs on urban biodiversity.",
    authors: ["Alfonso Fernandez"],
  },
  {
    id: "nutrient-supply-to-climbing-plants-using-urine-based-fertili",
    title: "Nutrient supply to climbing plants using urine-based fertilization, the case of Akebia quinata in Vienna, Austria",
    authors: ["Katharina Pichler"],
  },
  {
    id: "removal-of-persistent-mobile-and-toxic-organic-contaminants-",
    title: "Removal of Persistent, Mobile and Toxic Organic Contaminants in GAC-Amended Green Infrastructure: Column Experiments under Variable Stormwater Conditions",
    authors: ["Alejandra Cruz"],
  },
  {
    id: "renaturmac-a-cross-border-cooperation-model-for-green-blue-c",
    title: "RENATURMAC: A Cross-Border Cooperation Model for Green-Blue Connectivity between Protected Natural Areas and Urban Environments in Macaronesia and West Africa",
    authors: ["María Delgado Díaz"],
  },
  {
    id: "rethinking-tropical-living-walls-an-evidence-based-approach-",
    title: "Rethinking Tropical Living Walls: An Evidence-Based Approach to Plant Performance, APTI-Guided Selection and Cost-Informed Design",
    authors: ["Dr. Md Azhar Bintory"],
  },
  {
    id: "root-resistance-of-waterproofing-membranes-for-green-roofs-i",
    title: "Root Resistance of Waterproofing Membranes for Green Roofs: Insights from 10 Years of Standardized Testing (EN 13948 and FLL)",
    authors: ["Arnaud Fertet"],
  },
  {
    id: "scaling-urban-green-infrastructure-for-climate-adaptation-cr",
    title: "Scaling Urban Green Infrastructure for Climate Adaptation: Cross-Border Nature-Based Solutions in Serbia and Croatia",
    authors: ["Jelena Dekić"],
  },
  {
    id: "socioecological-susceptibility-analysis-for-rain-garden-impl",
    title: "Socioecological Susceptibility Analysis for Rain Garden Implementation: The Case of Curitiba (Brazil)",
    authors: ["Marcos Vinícius da Silva Alves de Lima"],
  },
  {
    id: "teaching-landscape-architecture-through-virtual-green-entrep",
    title: "Teaching landscape architecture through virtual green entrepreneurship",
    authors: ["Martini Aikaterini"],
  },
  {
    id: "the-role-of-nature-based-solutions-in-shaping-urban-microcli",
    title: "The role of nature-based solutions in shaping urban microclimates and micro-environmental quality",
    authors: ["Stevan Savic"],
  },
  {
    id: "thermal-performance-of-urban-landscapes-the-influence-of-spa",
    title: "Thermal performance of urban landscapes: The influence of spatial form and vegetation structure on land surface temperature in Luxembourg",
    authors: ["Karolina Zieba-Kulawik"],
  },
  {
    id: "too-hot-to-handle-drought-stress-in-lonicera-periclymenum-an",
    title: "Too hot to handle? drought stress in lonicera periclymenum and aristolochia macrophylla",
    authors: ["Laura Reynaerts"],
  },
  {
    id: "urbanswarm-project-urban-transformations-for-small-scale-cir",
    title: "UrbanSWARM project- Urban transformations for small-scale, circular and resilient nature-based solutions: sustainable water, waste and biodiversity management",
    authors: ["Monserrat Budding-Polo Ballinas"],
  },
];
