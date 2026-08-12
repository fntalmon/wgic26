export interface Supporter {
  href: string;
  src: string;
  alt: string;
}

// Logos de la sección "With the Support of" (home, exhibitors y sponsors).
// El tamaño se controla en SupportersCarousel (misma caja para todos los logos).
export const supporters: Supporter[] = [
  {
    href: "https://asescuve.org",
    src: "/img/logos/Asescuve-logo-24a.webp",
    alt: "ASESCUVE",
  },
  {
    href: "https://parcagrobiotech.com/arboretum/",
    src: "/img/logos/arboretum.png",
    alt: "Arboretum",
  },
  {
    href: "https://pronatur.chil.me/",
    src: "/img/logos/pronaturlogo.jpg",
    alt: "Pronatur",
  },
  {
    href: "https://agronoms.cat/",
    src: "/img/logos/eadc.png",
    alt: "EADC",
  },
  {
    href: "https://www.idaea.csic.es/",
    src: "/img/logos/IDAEA.png",
    alt: "IDAEA",
  },
  {
    href: "https://www.csic.es/es",
    src: "/img/logos/CSIC.svg",
    alt: "CSIC",
  },
  {
    href: "https://www.gremijardineria.cat/",
    src: "/img/logos/gremi.png",
    alt: "Gremi de Jardineria de Catalunya",
  },
  {
    href: "https://vilesflorides.cat/",
    src: "/img/logos/VilesFlorides.png",
    alt: "Viles Florides",
  },
  {
    href: "https://onehealthplataforma.es/",
    src: "/img/logos/oneHealth.svg",
    alt: "One Health",
  },
  {
    href: "https://aepjp.es",
    src: "/img/logos/aepjp.png",
    alt: "AEPJP",
  },
  {
    href: "https://www.diba.cat/",
    src: "/img/logos/diputacion.png",
    alt: "Diputació de Barcelona",
  },
];
