export interface SponsorLogo {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  // Completar a medida que marketing consiga el material de cada sponsor.
  description?: string;
  stand?: string;
}

export interface SponsorTier {
  key: string;
  titleKey: string;
  logos: SponsorLogo[];
}

// Logos de la sección de sponsors (home y /sponsors).
export const sponsorTiers: SponsorTier[] = [
  {
    key: "organizedBy",
    titleKey: "organizedBy",
    logos: [
      {
        href: "https://worldgreeninfrastructurenetwork.org/",
        src: "/img/logos-color/WGIN-logo.png",
        alt: "WGI Network",
        width: 300,
        height: 220,
        className: "h-20 md:h-24 w-auto object-contain",
      },
      {
        href: "http://udl.cat",
        src: "/img/logos-color/Logo-de-la-Universitat-de-Lleida.png",
        alt: "Universitat de Lleida",
        width: 300,
        height: 220,
        className: "h-20 md:h-24 w-auto object-contain",
      },
      {
        href: "https://cinea.ec.europa.eu/",
        src: "/img/logos-color/logo-life.jpg",
        alt: "LIFE - European Climate, Infrastructure and Environment Executive Agency",
        width: 300,
        height: 220,
        className: "h-20 md:h-24 w-auto object-contain",
      },
      {
        href: "https://it4s.cat/",
        src: "/img/logos-color/it4s.png",
        alt: "it4s – Innovative Technologies for Sustainability",
        width: 300,
        height: 220,
        className: "h-20 md:h-24 w-auto object-contain",
      },
      {
        href: "http://big4life.eu",
        src: "/img/logos-color/Footer_logo_BIG4LIFE_144.png",
        alt: "BIG4LIFE",
        width: 300,
        height: 220,
        className: "h-20 md:h-24 w-auto object-contain",
      },
    ],
  },
  {
    key: "elitePartners",
    titleKey: "elitePartners",
    logos: [
      {
        href: "https://www.sempergreen.com",
        src: "/img/logos-color/sempergreen_urban-grey_green_22112023164728.jpg",
        alt: "Semper Green",
        width: 400,
        height: 300,
        className: "h-20 md:h-24 w-auto object-contain",
      },
    ],
  },
  {
    key: "gardenBigExhibitors",
    titleKey: "gardenBigExhibitors",
    logos: [
      {
        href: "https://www.jardinmovil.com/es/",
        src: "/img/logos/jardinMovil.png",
        alt: "JardinMovil",
        width: 330,
        height: 230,
        className: "h-16 md:h-18 w-auto object-contain",
      },
      {
        href: "https://eixverd.com/",
        src: "/img/logos/eixverd.svg",
        alt: "Eixverd",
        width: 330,
        height: 230,
        className: "h-16 md:h-18 w-auto object-contain",
      },
      {
        href: "https://zinco-cubiertas-ecologicas.es/",
        src: "/img/logos/zinco.svg",
        alt: "Zinco",
        width: 400,
        height: 300,
        className: "h-16 md:h-18 w-auto object-contain",
      },
    ],
  },
  {
    key: "gardenMediumExhibitors",
    titleKey: "gardenMediumExhibitors",
    logos: [
      {
        href: "https://verdtical.com/",
        src: "/img/logos/verdtical.webp",
        alt: "Verdtical",
        width: 151,
        height: 200,
        className: "h-12 md:h-14 w-auto object-contain",
      },
      {
        href: "https://www.hunterirrigation.com/",
        src: "/img/logos/Hunter.svg",
        alt: "Hunter",
        width: 300,
        height: 200,
        className: "h-12 md:h-14 w-auto object-contain",
      },
      {
        href: "https://www.projar.es/",
        src: "/img/logos/projar.jpg",
        alt: "Projar",
        width: 330,
        height: 230,
        className: "h-12 md:h-14 w-auto object-contain",
      },
      {
        href: "https://leprieure1840.com/",
        src: "/img/logos/LePrieure.jpg",
        alt: "Le Prieuré",
        width: 200,
        height: 200,
        className: "h-12 md:h-14 w-auto object-contain",
      },
    ],
  },
  {
    key: "mediaPartners",
    titleKey: "mediaPartners",
    logos: [
      {
        href: "https://greenroofs.com",
        src: "/img/logos/greenroofsnuevo.png",
        alt: "Greenroofs.com",
        width: 280,
        height: 200,
        className: "h-12 md:h-14 w-auto object-contain",
      },
      {
        href: "https://scalae.net",
        src: "/img/logos/SCALAE_LOGO.png",
        alt: "Scalae",
        width: 280,
        height: 200,
        className: "h-12 md:h-14 w-auto object-contain",
      },
    ],
  },
];
