"use client";

import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import { RegisterCTA } from "@/components/RegisterCTA";
import { SupportersCarousel } from "@/components/SupportersCarousel";
import { supporters } from "@/data/supporters";
import Image from "next/image";
import { useState } from "react";
import { FileText, Loader2, Presentation, CheckCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const copy = {
  en: {
    pageTitle: "Partners & Exhibitors — Sponsorship opportunities",
    pageDescription: "Showcase your participation in the green infrastructures sector and ensure visibility and exposure to an international audience at our World Green Infrastructure Congress 2026 in Barcelona and Lleida.",
    partnerTitle: "Partners: Diamond, Emerald & Platinum",
    partnerP1: "If you want to take a leading role in WGIC26, choose among Diamond, Emerald or Platinum. These packages offer the highest visibility, speaking opportunities, naming rights and exhibition space.",
    partnerP2: "Diamond is exclusive and includes maximum brand exposure, main auditorium naming rights and a premium stand. Emerald and Platinum benefits can be tailored with the organizing team.",
    sponsorTitle: "Sponsor: Gold",
    sponsorP1: "If you are looking for a digital-only presence and entry-level participation in WGIC26, the Gold package offers brand visibility, digital promotion and congress access.",
    exhibitorsTitle: "The WGIC Garden – Exhibition stands",
    exhibitorsP1: "Showcase your company in the heart of the congress. All lunches and coffee breaks take place in the Expo Zone. Choose among Large Garden, Medium Garden or Flower/Pod stands.",
    benefits: "Benefits",
    table: {
      partners: "Partners",
      sponsors: "Sponsors",
      exhibitors: "Exhibitors",
      congressInvitations: "Congress Invitations",
      galaDinner: "Gala Dinner at CCIB",
      speakingSlot: "Speaking Slot",
      roomsNaming: "Rooms naming",
      workshops: "Workshops",
      rollup: "Roll up (brought by you) + Table + 3 Chairs",
      space: "Space",
      visibility: "Visibility & Social Media",
      newsletter: "Newsletter",
      socialMedia: "Social Media",
      logoVisibility: "Logo Visibility",
      specialContent: "Special Content",
      adPage: "Ad page in Proceedings",
      attendees: "List of Attendees",
      totalCost: "Total Cost",
    },
    organizedBy: "Organized by",
    sponsorsPartners: "Partners and Sponsors",
    elitePartners: "Emerald Partners",
    gardenBigExhibitors: "Large Garden Exhibitors",
    gardenMediumExhibitors: "Medium Garden Exhibitors",
    flowerExhibitors: "Flower Exhibitors",
    mediaPartners: "Media Partners",
    withTheSupportOf: "With the Support of",
    comingSoon: "Coming soon",
    eventPartners: "Event Partners",
    venueTitle: "The Venue",
    venueP1: "The venue where WGIC26 will be held is perfect for creating the networking atmosphere that sponsors, attendees and exhibitors expect from a global event. The International Barcelona Convention Center of Barcelona is an iconic venue located in the Barcelona district of Sant Marti, inside the 22@ of Poblenou neighbourhood.",
    venueP2: "The CCIB comprises two buildings of great architectural value: the Convention Centre and the Auditorium CCIB Forum, joined by an underground connecting walkway. With a gross surface area of 100,000 m2 and a capacity for up to 15,000 attendees, both buildings stand out for their size, natural light, and the great versatility of their spaces.",
    venueP3: "The CCIB enjoys a privileged location just 500 metres from the beach, 6 km from the historic centre and 22 km from the airport, with excellent links to the most important highways and roads, and by the public transport network.",
    venueImagesAlt: "Venue images",
    cards: {
      infoPackTitle: "Download Info Pack",
      infoPackDesc: "Get the complete guide for sponsors and exhibitors, including all technical details and pricing.",
      downloadPdf: "Download PDF",
      provideDetails: "Please provide your details to access the download.",
      fullName: "Full Name",
      email: "Email Address",
      downloadNow: "Download Now",
      started: "Your download has started!",
      didNotStart: "If it did not start automatically,",
      clickHere: "click here",
      interestTitle: "Express Your Interest",
      interestDesc: "Interested in sponsoring or exhibiting? Share your information and preferred participation type. We will review your details and contact you with customized options.",
      interestCta: "Express Your Interest",
      contactInfo: "Provide your contact information and let us know your interests.",
      phone: "Phone Number",
      company: "Company Name",
      selectParticipation: "Select Participation Type",
      submit: "Submit",
      thanks: "Thank you for your interest!",
      thanksBody: "We have received your information and will get back to you shortly with personalized opportunities.",
      pptTitle: "Download Sponsorship Brochure",
      pptDesc: "Get the complete sponsorship and exhibitor guide with all the details, benefits, and pricing to partner with WGIC 2026.",
      downloadPpt: "Download PPT",
    },
    errors: {
      enterName: "Please enter your full name",
      shortName: "Name must be at least 2 characters",
      enterEmail: "Please enter your email",
      invalidEmail: "Please enter a valid email address",
      enterPhone: "Please enter your phone number",
      invalidPhone: "Please enter a valid phone number",
      enterCompany: "Please enter your company name",
      selectType: "Please select a participation type",
      processing: "Error processing your request. Please try again.",
      submitForm: "Error submitting your form. Please try again.",
    },
    sponsorship: {
      tableTitle: "Sponsorship packages",
      tableHeaders: {
        category: "Category",
        investment: "Investment (€)",
        passes: "Passes",
        galaDinner: "Gala Dinner",
        speaking: "Speaking opportunity (*)",
        naming: "Naming rights",
        stand: "Stand",
      },
      speakingNote: "(*) Speaking opportunities are subject to availability and the Organizer's final confirmation.",
      addonsTitle: "Sponsorship add-ons",
      addonsHeaders: {
        item: "Item",
        price: "Price",
        availability: "Availability",
      },
      exclusivoBadge: "Exclusive",
      standsTitle: "The WGIC Garden",
      standsConcept: "Turn-key solution for a smooth, high-impact presence. The Expo Zone is the heart of the congress. All lunches and coffee breaks take place inside the Expo Zone.",
      standsLabels: {
        space: "Space",
        format: "Format",
        services: "Services",
        branding: "Branding",
        furniture: "Furniture",
        passesIncluded: "Passes included",
      },
      standsLogisticsNote: "All stands are managed and produced directly by the venue's official suppliers. Professional, unified and hassle-free experience.",
      contactTitle: "Contact the sponsorship team",
      contactLabels: {
        phone: "Phone",
        email: "Email",
        web: "Web",
      },
      contactCta: "Contact the sponsorship team",
      formOptions: {
        diamante: "Diamond",
        esmeralda: "Emerald",
        platino: "Platinum",
        oro: "Gold",
        jardinGrande: "Large Garden",
        jardinMedio: "Medium Garden",
        flor: "Flower",
      },
      packages: {
        diamante: {
          name: "Diamond",
          investment: "30.000 €",
          passes: "15",
          gala: "10",
          speaking: "To be confirmed",
          naming: "Main Auditorium",
          stand: "Premium 4×4m",
        },
        esmeralda: {
          name: "Emerald",
          investment: "15.000 €",
          passes: "10",
          gala: "5",
          speaking: "To be confirmed",
          naming: "Parallel Room",
          stand: "Medium 3×3m",
        },
        platino: {
          name: "Platinum",
          investment: "10.000 €",
          passes: "5",
          gala: "2",
          speaking: "To be confirmed",
          naming: "—",
          stand: "Compact 2×2m (pod)",
        },
        oro: {
          name: "Gold",
          investment: "6.000 €",
          passes: "2",
          gala: "1",
          speaking: "To be confirmed",
          naming: "—",
          stand: "Digital only",
        },
      },
      addons: [
        {
          item: "Gala dinner naming rights",
          price: "20.000 €",
          availability: "1 (Exclusive)",
        },
        {
          item: "Official Congress App",
          price: "10.000 €",
          availability: "1 (Exclusive)",
        },
        {
          item: "Lanyards and Badges",
          price: "8.000 €",
          availability: "1 (Exclusive)",
        },
        {
          item: "Coffee Break Sponsor (per day)",
          price: "5.000 €",
          availability: "4 available",
        },
        {
          item: "Technical Visits (BCN or Lleida)",
          price: "6.000 €",
          availability: "4 available",
        },
        {
          item: "Full-page Ad in Proceedings",
          price: "2.000 €",
          availability: "Unlimited",
        },
        {
          item: "Produced Video Interview",
          price: "2.500 €",
          availability: "10 spots",
        },
      ],
      stands: {
        jardinGrande: {
          name: "Large Garden",
          category: "Premium Stand",
          target: "Market leaders looking for maximum visibility",
          space: "4m × 4m",
          format: "Fully produced turn-key solution with unified high-end design",
          services: [
            "LED lights",
            "Information counter",
            "Electricity: 3.3 kW panel (1 socket available)",
            "High-speed Wi-Fi",
            "Pre-opening cleaning",
          ],
          branding: "Black 10 cm high letters (20 letters included). Dedicated space for logo and custom graphics.",
          furniture: "1 meeting table and 4 chairs or bar stools",
          investment: "8.000 €",
          passesIncluded: "3",
          notes: "Final furniture to be defined. The company can upgrade basic equipment or signage directly with the venue and organizers.",
        },
        jardinMedio: {
          name: "Medium Garden",
          category: "Standard Stand",
          target: "Market leaders looking for maximum visibility",
          space: "3m × 3m",
          format: "Fully produced turn-key solution with unified high-end design",
          services: [
            "LED lights",
            "Information counter",
            "Electricity: 3.3 kW panel (1 socket available)",
            "High-speed Wi-Fi",
            "Pre-opening cleaning",
          ],
          branding: "Black 10 cm high letters (20 letters included). Dedicated space for logo and custom graphics.",
          furniture: "1 meeting table and 2 bar stools",
          investment: "5.000 €",
          passesIncluded: "2",
          notes: "Final furniture to be defined. The company can upgrade basic equipment or signage directly with the venue and organizers.",
        },
        flor: {
          name: "Flower",
          category: "Compact Stand / Pod",
          target: "Startups and specialized companies. Efficient and cost-effective option.",
          space: "Compact workstation (concept to be defined)",
          format: "Minimalist design for quick interaction",
          services: [
            "Electricity (1 socket)",
            "High-speed Wi-Fi",
          ],
          branding: "Totem-style display (provided and printed by the organizer)",
          furniture: "1 table and 2 chairs or bar stools",
          investment: "3.000 €",
          passesIncluded: "1",
          notes: "Indicative rendering. Final format to be defined.",
        },
      },
    },
  },
  es: {
    pageTitle: "Socios y expositores - Oportunidades de patrocinio",
    pageDescription: "Muestra tu participación en el sector de infraestructuras verdes y asegura visibilidad y exposición ante una audiencia internacional en el World Green Infrastructure Congress 2026 en Barcelona y Lleida.",
    partnerTitle: "Partners: Diamond, Emerald & Platinum",
    partnerP1: "Si quieres liderar la presencia en WGIC26, elige entre Diamond, Emerald o Platinum. Estos paquetes ofrecen la máxima visibilidad, espacios de ponencia, naming rights y stand.",
    partnerP2: "Diamond es exclusivo e incluye la máxima exposición de marca, naming del auditorio principal y un stand premium. Los beneficios de Emerald y Platinum se pueden ajustar con el equipo organizador.",
    sponsorTitle: "Sponsor: Gold",
    sponsorP1: "Si buscas una presencia digital y participar de forma accesible en WGIC26, el paquete Gold ofrece visibilidad de marca, promoción digital y acceso al congreso.",
    exhibitorsTitle: "The WGIC Garden – Stands de exposición",
    exhibitorsP1: "Muestra tu empresa en el corazón del congreso. Todos los almuerzos y coffee breaks se realizan en la Zona Expo. Elige entre Large Garden, Medium Garden o Flower/Pod.",
    benefits: "Beneficios",
    table: {
      partners: "Socios",
      sponsors: "Patrocinadores",
      exhibitors: "Expositores",
      congressInvitations: "Invitaciones al congreso",
      galaDinner: "Cena de gala en CCIB",
      speakingSlot: "Espacio de ponencia",
      roomsNaming: "Naming de salas",
      workshops: "Talleres",
      rollup: "Roll up (aportado por ti) + Mesa + 3 sillas",
      space: "Espacio",
      visibility: "Visibilidad y redes sociales",
      newsletter: "Newsletter",
      socialMedia: "Redes sociales",
      logoVisibility: "Visibilidad de logo",
      specialContent: "Contenido especial",
      adPage: "Página de anuncio en actas",
      attendees: "Listado de asistentes",
      totalCost: "Coste total",
    },
    sponsorsPartners: "Partners and Sponsors",
    venueTitle: "La sede",
    organizedBy: "Organized by",
    elitePartners: "Emerald Partners",
    gardenBigExhibitors: "Large Garden Exhibitors",
    gardenMediumExhibitors: "Medium Garden Exhibitors",
    flowerExhibitors: "Flower Exhibitors",
    mediaPartners: "Media Partners",
    withTheSupportOf: "With the Support of",
    comingSoon: "Coming soon",
    eventPartners: "Event Partners",
    venueP1: "La sede de WGIC26 es ideal para crear el entorno de networking que patrocinadores, asistentes y expositores esperan de un evento global. El Centro de Convenciones Internacional de Barcelona es un espacio icónico ubicado en Sant Martí, dentro del 22@ de Poblenou.",
    venueP2: "El CCIB cuenta con dos edificios de gran valor arquitectónico: el Centro de Convenciones y el Auditorio Forum CCIB, unidos por una pasarela subterránea. Con una superficie de 100.000 m2 y capacidad de hasta 15.000 asistentes, destaca por su amplitud, luz natural y versatilidad.",
    venueP3: "El CCIB tiene una ubicación privilegiada a 500 metros de la playa, a 6 km del centro histórico y a 22 km del aeropuerto, con excelentes conexiones por carretera y transporte público.",
    venueImagesAlt: "Imágenes de la sede",
    cards: {
      infoPackTitle: "Descargar dossier informativo",
      infoPackDesc: "Obtén la guía completa para patrocinadores y expositores, con detalles técnicos y precios.",
      downloadPdf: "Descargar PDF",
      provideDetails: "Comparte tus datos para acceder a la descarga.",
      fullName: "Nombre completo",
      email: "Correo electrónico",
      downloadNow: "Descargar ahora",
      started: "Tu descarga ha comenzado",
      didNotStart: "Si no comenzó automáticamente,",
      clickHere: "haz clic aquí",
      interestTitle: "Expresa tu interés",
      interestDesc: "¿Te interesa patrocinar o exponer? Comparte tu información y el tipo de participación preferido. Revisaremos tus datos y te contactaremos con opciones personalizadas.",
      interestCta: "Expresar interés",
      contactInfo: "Comparte tu información de contacto y cuéntanos tus intereses.",
      phone: "Teléfono",
      company: "Empresa",
      selectParticipation: "Selecciona tipo de participación",
      submit: "Enviar",
      thanks: "Gracias por tu interés",
      thanksBody: "Hemos recibido tu información y te contactaremos pronto con opciones personalizadas.",
      pptTitle: "Descargar brochure de patrocinio",
      pptDesc: "Obtén la guía completa de patrocinio y exposición con todos los detalles, beneficios y precios para asociarte al WGIC 2026.",
      downloadPpt: "Descargar PPT",
    },
    errors: {
      enterName: "Por favor, introduce tu nombre completo",
      shortName: "El nombre debe tener al menos 2 caracteres",
      enterEmail: "Por favor, introduce tu correo electrónico",
      invalidEmail: "Por favor, introduce una dirección de correo válida",
      enterPhone: "Por favor, introduce tu teléfono",
      invalidPhone: "Por favor, introduce un teléfono válido",
      enterCompany: "Por favor, introduce el nombre de tu empresa",
      selectType: "Por favor, selecciona un tipo de participación",
      processing: "Error al procesar tu solicitud. Inténtalo de nuevo.",
      submitForm: "Error al enviar el formulario. Inténtalo de nuevo.",
    },
    sponsorship: {
      tableTitle: "Paquetes de patrocinio",
      tableHeaders: {
        category: "Categoría",
        investment: "Inversión (€)",
        passes: "Pases",
        galaDinner: "Cena de Gala",
        speaking: "Oportunidad de ponencia (*)",
        naming: "Naming rights",
        stand: "Stand",
      },
      speakingNote: "(*) Las oportunidades de ponencia están sujetas a disponibilidad y a la confirmación final de la Organización.",
      addonsTitle: "Complementos de patrocinio",
      addonsHeaders: {
        item: "Concepto",
        price: "Precio",
        availability: "Disponibilidad",
      },
      exclusivoBadge: "Exclusivo",
      standsTitle: "The WGIC Garden",
      standsConcept: "Solución llave en mano para una presencia fluida y de alto impacto. La Zona Expo es el corazón del congreso. Todos los almuerzos y coffee breaks se realizan dentro de la Zona Expo.",
      standsLabels: {
        space: "Espacio",
        format: "Formato",
        services: "Servicios",
        branding: "Branding",
        furniture: "Mobiliario",
        passesIncluded: "Pases incluidos",
      },
      standsLogisticsNote: "Todos los stands son gestionados y producidos directamente por los proveedores oficiales del lugar. Experiencia profesional, unificada y sin complicaciones.",
      contactTitle: "Contactar con el equipo de patrocinio",
      contactLabels: {
        phone: "Teléfono",
        email: "Email",
        web: "Web",
      },
      contactCta: "Contactar con el equipo de patrocinio",
      formOptions: {
        diamante: "Diamond",
        esmeralda: "Emerald",
        platino: "Platinum",
        oro: "Gold",
        jardinGrande: "Large Garden",
        jardinMedio: "Medium Garden",
        flor: "Flower",
      },
      packages: {
        diamante: {
          name: "Diamond",
          investment: "30.000 €",
          passes: "15",
          gala: "10",
          speaking: "Por confirmar",
          naming: "Auditorio Principal",
          stand: "Premium 4×4m",
        },
        esmeralda: {
          name: "Emerald",
          investment: "15.000 €",
          passes: "10",
          gala: "5",
          speaking: "Por confirmar",
          naming: "Sala Paralela",
          stand: "Mediano 3×3m",
        },
        platino: {
          name: "Platinum",
          investment: "10.000 €",
          passes: "5",
          gala: "2",
          speaking: "Por confirmar",
          naming: "—",
          stand: "Compacto 2×2m (pod)",
        },
        oro: {
          name: "Gold",
          investment: "6.000 €",
          passes: "2",
          gala: "1",
          speaking: "Por confirmar",
          naming: "—",
          stand: "Solo Digital",
        },
      },
      addons: [
        {
          item: "Derechos de nombramiento para la cena de gala",
          price: "20.000 €",
          availability: "1 (Exclusivo)",
        },
        {
          item: "Aplicación Oficial del Congreso",
          price: "10.000 €",
          availability: "1 (Exclusivo)",
        },
        {
          item: "Lanyards y Credenciales",
          price: "8.000 €",
          availability: "1 (Exclusivo)",
        },
        {
          item: "Patrocinador de Pausa para Café (por día)",
          price: "5.000 €",
          availability: "4 disponibles",
        },
        {
          item: "Visitas Técnicas (BCN o Lleida)",
          price: "6.000 €",
          availability: "4 disponibles",
        },
        {
          item: "Anuncio de página completa en Actas",
          price: "2.000 €",
          availability: "Ilimitado",
        },
        {
          item: "Entrevista en Video Producida",
          price: "2.500 €",
          availability: "10 espacios",
        },
      ],
      stands: {
        jardinGrande: {
          name: "Large Garden",
          category: "Stand Premium",
          target: "Líderes del mercado que buscan máxima visibilidad",
          space: "4m × 4m",
          format: "Solución llave en mano completamente producida con diseño unificado de alta gama",
          services: [
            "Luces LED",
            "Mostrador de información",
            "Electricidad: tablero 3,3 kW (1 enchufe disponible)",
            "Wi-Fi de alta velocidad",
            "Limpieza previa a la inauguración",
          ],
          branding: "Letras negras 10 cm de alto (20 letras incluidas). Espacio dedicado para logo y gráficos personalizados.",
          furniture: "1 mesa de reunión y 4 sillas o taburetes de bar",
          investment: "8.000 €",
          passesIncluded: "3",
          notes: "Mobiliario final por definir. La empresa puede actualizar equipo básico o señalización directamente con el lugar y organizadores.",
        },
        jardinMedio: {
          name: "Medium Garden",
          category: "Stand Estándar",
          target: "Líderes del mercado que buscan máxima visibilidad",
          space: "3m × 3m",
          format: "Solución llave en mano completamente producida con diseño unificado de alta gama",
          services: [
            "Luces LED",
            "Mostrador de información",
            "Electricidad: tablero 3,3 kW (1 enchufe disponible)",
            "Wi-Fi de alta velocidad",
            "Limpieza previa a la inauguración",
          ],
          branding: "Letras negras 10 cm de alto (20 letras incluidas). Espacio dedicado para logo y gráficos personalizados.",
          furniture: "1 mesa de reunión y 2 taburetes de bar",
          investment: "5.000 €",
          passesIncluded: "2",
          notes: "Mobiliario final por definir. La empresa puede actualizar equipo básico o señalización directamente con el lugar y organizadores.",
        },
        flor: {
          name: "Flower",
          category: "Stand Compacto / Pod",
          target: "Startups y empresas especializadas. Opción eficiente y rentable.",
          space: "Estación de trabajo compacta (concepto por definir)",
          format: "Diseño minimalista para facilitar interacción rápida",
          services: [
            "Electricidad (1 enchufe)",
            "Wi-Fi de alta velocidad",
          ],
          branding: "Exhibición estilo tótem (proporcionada e impresa por la organización)",
          furniture: "1 mesa y 2 sillas o taburetes de bar",
          investment: "3.000 €",
          passesIncluded: "1",
          notes: "Renderización indicativa. Formato final por definir.",
        },
      },
    },
  },
  ca: {
    pageTitle: "Socis i expositors - Oportunitats de patrocini",
    pageDescription: "Mostra la teva participació en el sector d'infraestructures verdes i assegura visibilitat i exposició davant una audiència internacional al World Green Infrastructure Congress 2026 a Barcelona i Lleida.",
    partnerTitle: "Partners: Diamond, Emerald & Platinum",
    partnerP1: "Si vols liderar la presència a WGIC26, tria entre Diamond, Emerald o Platinum. Aquests paquets ofereixen la màxima visibilitat, espais de ponència, naming rights i stand.",
    partnerP2: "Diamond és exclusiu i inclou la màxima exposició de marca, naming de l'auditori principal i un stand premium. Els beneficis d'Emerald i Platinum es poden ajustar amb l'equip organitzador.",
    sponsorTitle: "Sponsor: Gold",
    sponsorP1: "Si busques una presència digital i participar de forma accessible a WGIC26, el paquet Gold ofereix visibilitat de marca, promoció digital i accés al congrés.",
    exhibitorsTitle: "The WGIC Garden – Stands d'exposició",
    exhibitorsP1: "Mostra la teva empresa al cor del congrés. Tots els dinars i coffee breaks es fan a la Zona Expo. Tria entre Large Garden, Medium Garden o Flower/Pod.",
    benefits: "Beneficis",
    table: {
      partners: "Socis",
      sponsors: "Patrocinadors",
      exhibitors: "Expositors",
      congressInvitations: "Invitacions al congrés",
      galaDinner: "Sopar de gala al CCIB",
      speakingSlot: "Espai de ponència",
      roomsNaming: "Naming de sales",
      workshops: "Tallers",
      rollup: "Roll up (aportat per tu) + Taula + 3 cadires",
      space: "Espai",
      visibility: "Visibilitat i xarxes socials",
      newsletter: "Butlletí",
      socialMedia: "Xarxes socials",
      logoVisibility: "Visibilitat de logotip",
      specialContent: "Contingut especial",
      adPage: "Pàgina d'anunci en actes",
      attendees: "Llistat d'assistents",
      totalCost: "Cost total",
    },
    sponsorsPartners: "Partners and Sponsors",
    venueTitle: "La seu",
    organizedBy: "Organized by",
    elitePartners: "Emerald Partners",
    gardenBigExhibitors: "Large Garden Exhibitors",
    gardenMediumExhibitors: "Medium Garden Exhibitors",
    flowerExhibitors: "Flower Exhibitors",
    mediaPartners: "Media Partners",
    withTheSupportOf: "With the Support of",
    comingSoon: "Coming soon",
    eventPartners: "Event Partners",
    venueP1: "La seu de WGIC26 és ideal per crear l'entorn de networking que patrocinadors, assistents i expositors esperen d'un esdeveniment global. El Centre de Convencions Internacional de Barcelona és un espai icònic ubicat a Sant Martí, dins del 22@ de Poblenou.",
    venueP2: "El CCIB compta amb dos edificis de gran valor arquitectònic: el Centre de Convencions i l'Auditori Fòrum CCIB, units per una passarel·la subterrània. Amb una superfície de 100.000 m2 i capacitat de fins a 15.000 assistents, destaca per la seva amplitud, llum natural i versatilitat.",
    venueP3: "El CCIB té una ubicació privilegiada a 500 metres de la platja, a 6 km del centre històric i a 22 km de l'aeroport, amb excel·lents connexions per carretera i transport públic.",
    venueImagesAlt: "Imatges de la seu",
    cards: {
      infoPackTitle: "Descarregar dossier informatiu",
      infoPackDesc: "Obté la guia completa per a patrocinadors i expositors, amb detalls tècnics i preus.",
      downloadPdf: "Descarregar PDF",
      provideDetails: "Comparteix les teves dades per accedir a la descàrrega.",
      fullName: "Nom complet",
      email: "Correu electrònic",
      downloadNow: "Descarregar ara",
      started: "La teva descàrrega ha començat",
      didNotStart: "Si no ha començat automàticament,",
      clickHere: "fes clic aquí",
      interestTitle: "Expressa el teu interès",
      interestDesc: "T'interessa patrocinar o exposar? Comparteix la teva informació i el tipus de participació preferit. Revisarem les teves dades i et contactarem amb opcions personalitzades.",
      interestCta: "Expressar interès",
      contactInfo: "Comparteix la teva informació de contacte i explica'ns els teus interessos.",
      phone: "Telèfon",
      company: "Empresa",
      selectParticipation: "Selecciona tipus de participació",
      submit: "Enviar",
      thanks: "Gràcies pel teu interès",
      thanksBody: "Hem rebut la teva informació i et contactarem aviat amb opcions personalitzades.",
      pptTitle: "Descarregar brochure de patrocini",
      pptDesc: "Obté la guia completa de patrocini i exposició amb tots els detalls, beneficis i preus per associar-te al WGIC 2026.",
      downloadPpt: "Descarregar PPT",
    },
    errors: {
      enterName: "Si us plau, ingressa el teu nom complet",
      shortName: "El nom ha de tenir almenys 2 caràcters",
      enterEmail: "Si us plau, ingressa el teu correu",
      invalidEmail: "Si us plau, ingressa un correu vàlid",
      enterPhone: "Si us plau, ingressa el teu telèfon",
      invalidPhone: "Si us plau, ingressa un telèfon vàlid",
      enterCompany: "Si us plau, ingressa el nom de la teva empresa",
      selectType: "Si us plau, selecciona un tipus de participació",
      processing: "Error processant la teva sol·licitud. Torna-ho a intentar.",
      submitForm: "Error en enviar el formulari. Torna-ho a intentar.",
    },
    sponsorship: {
      tableTitle: "Paquets de patrocini",
      tableHeaders: {
        category: "Categoria",
        investment: "Inversió (€)",
        passes: "Passes",
        galaDinner: "Sopar de Gala",
        speaking: "Oportunitat de ponència (*)",
        naming: "Naming rights",
        stand: "Stand",
      },
      speakingNote: "(*) Les oportunitats de ponència estan subjectes a disponibilitat i a la confirmació final de l'Organització.",
      addonsTitle: "Complements de patrocini",
      addonsHeaders: {
        item: "Concepte",
        price: "Preu",
        availability: "Disponibilitat",
      },
      exclusivoBadge: "Exclusiu",
      standsTitle: "The WGIC Garden",
      standsConcept: "Solució clau en mà per a una presència fluida i d'alt impacte. La Zona Expo és el cor del congrés. Tots els dinars i coffee breaks es fan dins de la Zona Expo.",
      standsLabels: {
        space: "Espai",
        format: "Format",
        services: "Serveis",
        branding: "Branding",
        furniture: "Mobiliari",
        passesIncluded: "Passes incloses",
      },
      standsLogisticsNote: "Tots els stands són gestionats i produïts directament pels proveïdors oficials del lloc. Experiència professional, unificada i sense complicacions.",
      contactTitle: "Contactar amb l'equip de patrocini",
      contactLabels: {
        phone: "Telèfon",
        email: "Email",
        web: "Web",
      },
      contactCta: "Contactar amb l'equip de patrocini",
      formOptions: {
        diamante: "Diamond",
        esmeralda: "Emerald",
        platino: "Platinum",
        oro: "Gold",
        jardinGrande: "Large Garden",
        jardinMedio: "Medium Garden",
        flor: "Flower",
      },
      packages: {
        diamante: {
          name: "Diamond",
          investment: "30.000 €",
          passes: "15",
          gala: "10",
          speaking: "Per confirmar",
          naming: "Auditori Principal",
          stand: "Premium 4×4m",
        },
        esmeralda: {
          name: "Emerald",
          investment: "15.000 €",
          passes: "10",
          gala: "5",
          speaking: "Per confirmar",
          naming: "Sala Paral·lela",
          stand: "Mitjà 3×3m",
        },
        platino: {
          name: "Platinum",
          investment: "10.000 €",
          passes: "5",
          gala: "2",
          speaking: "Per confirmar",
          naming: "—",
          stand: "Compacte 2×2m (pod)",
        },
        oro: {
          name: "Gold",
          investment: "6.000 €",
          passes: "2",
          gala: "1",
          speaking: "Per confirmar",
          naming: "—",
          stand: "Només Digital",
        },
      },
      addons: [
        {
          item: "Drets de nomenament per al sopar de gala",
          price: "20.000 €",
          availability: "1 (Exclusiu)",
        },
        {
          item: "Aplicació Oficial del Congrés",
          price: "10.000 €",
          availability: "1 (Exclusiu)",
        },
        {
          item: "Lanyards i Credencials",
          price: "8.000 €",
          availability: "1 (Exclusiu)",
        },
        {
          item: "Patrocinador de Pausa per a Cafè (per dia)",
          price: "5.000 €",
          availability: "4 disponibles",
        },
        {
          item: "Visites Tècniques (BCN o Lleida)",
          price: "6.000 €",
          availability: "4 disponibles",
        },
        {
          item: "Anunci de pàgina completa en Actes",
          price: "2.000 €",
          availability: "Ilimitat",
        },
        {
          item: "Entrevista en Vídeo Produïda",
          price: "2.500 €",
          availability: "10 espais",
        },
      ],
      stands: {
        jardinGrande: {
          name: "Large Garden",
          category: "Stand Premium",
          target: "Líders del mercat que busquen màxima visibilitat",
          space: "4m × 4m",
          format: "Solució clau en mà completament produïda amb disseny unificat d'alta gamma",
          services: [
            "Llums LED",
            "Mostrador d'informació",
            "Electricitat: tauler 3,3 kW (1 endoll disponible)",
            "Wi-Fi d'alta velocitat",
            "Neteja prèvia a la inauguració",
          ],
          branding: "Lletres negres 10 cm d'alt (20 lletres incloses). Espai dedicat per a logo i gràfics personalitzats.",
          furniture: "1 taula de reunió i 4 cadires o tamborets de bar",
          investment: "8.000 €",
          passesIncluded: "3",
          notes: "Mobiliari final per definir. L'empresa pot actualitzar equip bàsic o senyalització directament amb el lloc i organitzadors.",
        },
        jardinMedio: {
          name: "Medium Garden",
          category: "Stand Estàndard",
          target: "Líders del mercat que busquen màxima visibilitat",
          space: "3m × 3m",
          format: "Solució clau en mà completament produïda amb disseny unificat d'alta gamma",
          services: [
            "Llums LED",
            "Mostrador d'informació",
            "Electricitat: tauler 3,3 kW (1 endoll disponible)",
            "Wi-Fi d'alta velocitat",
            "Neteja prèvia a la inauguració",
          ],
          branding: "Lletres negres 10 cm d'alt (20 lletres incloses). Espai dedicat per a logo i gràfics personalitzats.",
          furniture: "1 taula de reunió i 2 tamborets de bar",
          investment: "5.000 €",
          passesIncluded: "2",
          notes: "Mobiliari final per definir. L'empresa pot actualitzar equip bàsic o senyalització directament amb el lloc i organitzadors.",
        },
        flor: {
          name: "Flower",
          category: "Stand Compacte / Pod",
          target: "Startups i empreses especialitzades. Opció eficient i rendible.",
          space: "Estació de treball compacta (concepte per definir)",
          format: "Disseny minimalista per facilitar interacció ràpida",
          services: [
            "Electricitat (1 endoll)",
            "Wi-Fi d'alta velocitat",
          ],
          branding: "Exhibició estil tòtem (proporcionada i impresa per l'organització)",
          furniture: "1 taula i 2 cadires o tamborets de bar",
          investment: "3.000 €",
          passesIncluded: "1",
          notes: "Renderització indicativa. Format final per definir.",
        },
      },
    },
  },
  fr: {
    pageTitle: "Partenaires et exposants — Opportunités de parrainage",
    pageDescription: "Mettez en valeur votre participation dans le secteur des infrastructures vertes et assurez une visibilité et une exposition auprès d'un public international lors du World Green Infrastructure Congress 2026 à Barcelone et Lleida.",
    partnerTitle: "Partenaires : Diamond, Emerald & Platinum",
    partnerP1: "Si vous souhaitez jouer un rôle de premier plan au WGIC26, choisissez parmi Diamond, Emerald ou Platinum. Ces formules offrent la meilleure visibilité, des opportunités de prise de parole, des droits de dénomination et un espace d'exposition.",
    partnerP2: "Diamond est exclusif et comprend une exposition de marque maximale, le naming de l'auditorium principal et un stand premium. Les avantages Emerald et Platinum peuvent être ajustés avec l'équipe organisatrice.",
    sponsorTitle: "Sponsor : Gold",
    sponsorP1: "Si vous recherchez une présence uniquement numérique et une participation accessible au WGIC26, la formule Gold offre une visibilité de marque, une promotion numérique et un accès au congrès.",
    exhibitorsTitle: "The WGIC Garden – Stands d'exposition",
    exhibitorsP1: "Présentez votre entreprise au cœur du congrès. Tous les déjeuners et pauses café ont lieu dans la zone d'exposition. Choisissez parmi les stands Large Garden, Medium Garden ou Flower/Pod.",
    benefits: "Avantages",
    table: {
      partners: "Partenaires",
      sponsors: "Sponsors",
      exhibitors: "Exposants",
      congressInvitations: "Invitations au congrès",
      galaDinner: "Dîner de gala au CCIB",
      speakingSlot: "Créneau de prise de parole",
      roomsNaming: "Naming des salles",
      workshops: "Ateliers",
      rollup: "Roll up (fourni par vous) + Table + 3 chaises",
      space: "Espace",
      visibility: "Visibilité et réseaux sociaux",
      newsletter: "Newsletter",
      socialMedia: "Réseaux sociaux",
      logoVisibility: "Visibilité du logo",
      specialContent: "Contenu spécial",
      adPage: "Page publicitaire dans les actes",
      attendees: "Liste des participants",
      totalCost: "Coût total",
    },
    sponsorsPartners: "Partners and Sponsors",
    venueTitle: "Le lieu",
    organizedBy: "Organized by",
    elitePartners: "Emerald Partners",
    gardenBigExhibitors: "Large Garden Exhibitors",
    gardenMediumExhibitors: "Medium Garden Exhibitors",
    flowerExhibitors: "Flower Exhibitors",
    mediaPartners: "Media Partners",
    withTheSupportOf: "With the Support of",
    comingSoon: "Coming soon",
    eventPartners: "Event Partners",
    venueP1: "Le lieu qui accueillera le WGIC26 est parfait pour créer l'ambiance de réseautage attendue par les sponsors, participants et exposants d'un événement mondial. Le Centre de Congrès International de Barcelone est un lieu emblématique situé dans le quartier de Sant Martí, au sein du 22@ de Poblenou.",
    venueP2: "Le CCIB comprend deux bâtiments de grande valeur architecturale : le Centre de Congrès et l'Auditorium CCIB Forum, reliés par une passerelle souterraine. Avec une surface brute de 100 000 m2 et une capacité allant jusqu'à 15 000 participants, ces deux bâtiments se distinguent par leur taille, leur lumière naturelle et la grande polyvalence de leurs espaces.",
    venueP3: "Le CCIB bénéficie d'un emplacement privilégié à seulement 500 mètres de la plage, à 6 km du centre historique et à 22 km de l'aéroport, avec d'excellentes liaisons vers les principales autoroutes et par le réseau de transports publics.",
    venueImagesAlt: "Images du lieu",
    cards: {
      infoPackTitle: "Télécharger le dossier d'information",
      infoPackDesc: "Obtenez le guide complet pour les sponsors et exposants, avec tous les détails techniques et les tarifs.",
      downloadPdf: "Télécharger le PDF",
      provideDetails: "Merci de renseigner vos coordonnées pour accéder au téléchargement.",
      fullName: "Nom complet",
      email: "Adresse e-mail",
      downloadNow: "Télécharger maintenant",
      started: "Votre téléchargement a commencé !",
      didNotStart: "S'il n'a pas démarré automatiquement,",
      clickHere: "cliquez ici",
      interestTitle: "Manifestez votre intérêt",
      interestDesc: "Intéressé par un parrainage ou une exposition ? Partagez vos informations et le type de participation souhaité. Nous examinerons vos données et vous contacterons avec des options personnalisées.",
      interestCta: "Manifester mon intérêt",
      contactInfo: "Indiquez vos coordonnées et faites-nous part de vos centres d'intérêt.",
      phone: "Numéro de téléphone",
      company: "Nom de l'entreprise",
      selectParticipation: "Sélectionnez le type de participation",
      submit: "Envoyer",
      thanks: "Merci pour votre intérêt !",
      thanksBody: "Nous avons bien reçu vos informations et vous recontacterons prochainement avec des opportunités personnalisées.",
      pptTitle: "Télécharger la brochure de parrainage",
      pptDesc: "Obtenez le guide complet de parrainage et d'exposition avec tous les détails, avantages et tarifs pour devenir partenaire du WGIC 2026.",
      downloadPpt: "Télécharger le PPT",
    },
    errors: {
      enterName: "Veuillez saisir votre nom complet",
      shortName: "Le nom doit contenir au moins 2 caractères",
      enterEmail: "Veuillez saisir votre adresse e-mail",
      invalidEmail: "Veuillez saisir une adresse e-mail valide",
      enterPhone: "Veuillez saisir votre numéro de téléphone",
      invalidPhone: "Veuillez saisir un numéro de téléphone valide",
      enterCompany: "Veuillez saisir le nom de votre entreprise",
      selectType: "Veuillez sélectionner un type de participation",
      processing: "Erreur lors du traitement de votre demande. Veuillez réessayer.",
      submitForm: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
    },
    sponsorship: {
      tableTitle: "Formules de parrainage",
      tableHeaders: {
        category: "Catégorie",
        investment: "Investissement (€)",
        passes: "Pass",
        galaDinner: "Dîner de gala",
        speaking: "Opportunité de prise de parole (*)",
        naming: "Droits de dénomination",
        stand: "Stand",
      },
      speakingNote: "(*) Les opportunités de prise de parole sont soumises à disponibilité et à la confirmation finale de l'Organisateur.",
      addonsTitle: "Options complémentaires de parrainage",
      addonsHeaders: {
        item: "Élément",
        price: "Prix",
        availability: "Disponibilité",
      },
      exclusivoBadge: "Exclusif",
      standsTitle: "The WGIC Garden",
      standsConcept: "Solution clé en main pour une présence fluide et à fort impact. La zone d'exposition est le cœur du congrès. Tous les déjeuners et pauses café ont lieu au sein de la zone d'exposition.",
      standsLabels: {
        space: "Espace",
        format: "Format",
        services: "Services",
        branding: "Branding",
        furniture: "Mobilier",
        passesIncluded: "Pass inclus",
      },
      standsLogisticsNote: "Tous les stands sont gérés et produits directement par les prestataires officiels du lieu. Une expérience professionnelle, uniforme et sans tracas.",
      contactTitle: "Contacter l'équipe de parrainage",
      contactLabels: {
        phone: "Téléphone",
        email: "Email",
        web: "Web",
      },
      contactCta: "Contacter l'équipe de parrainage",
      formOptions: {
        diamante: "Diamond",
        esmeralda: "Emerald",
        platino: "Platinum",
        oro: "Gold",
        jardinGrande: "Large Garden",
        jardinMedio: "Medium Garden",
        flor: "Flower",
      },
      packages: {
        diamante: {
          name: "Diamond",
          investment: "30 000 €",
          passes: "15",
          gala: "10",
          speaking: "À confirmer",
          naming: "Auditorium principal",
          stand: "Premium 4×4m",
        },
        esmeralda: {
          name: "Emerald",
          investment: "15 000 €",
          passes: "10",
          gala: "5",
          speaking: "À confirmer",
          naming: "Salle parallèle",
          stand: "Medium 3×3m",
        },
        platino: {
          name: "Platinum",
          investment: "10 000 €",
          passes: "5",
          gala: "2",
          speaking: "À confirmer",
          naming: "—",
          stand: "Compact 2×2m (pod)",
        },
        oro: {
          name: "Gold",
          investment: "6 000 €",
          passes: "2",
          gala: "1",
          speaking: "À confirmer",
          naming: "—",
          stand: "Numérique uniquement",
        },
      },
      addons: [
        {
          item: "Droits de dénomination du dîner de gala",
          price: "20 000 €",
          availability: "1 (Exclusif)",
        },
        {
          item: "Application officielle du congrès",
          price: "10 000 €",
          availability: "1 (Exclusif)",
        },
        {
          item: "Lanières et badges",
          price: "8 000 €",
          availability: "1 (Exclusif)",
        },
        {
          item: "Sponsor de la pause café (par jour)",
          price: "5 000 €",
          availability: "4 disponibles",
        },
        {
          item: "Visites techniques (BCN ou Lleida)",
          price: "6 000 €",
          availability: "4 disponibles",
        },
        {
          item: "Publicité pleine page dans les actes",
          price: "2 000 €",
          availability: "Illimité",
        },
        {
          item: "Interview vidéo produite",
          price: "2 500 €",
          availability: "10 places",
        },
      ],
      stands: {
        jardinGrande: {
          name: "Large Garden",
          category: "Stand Premium",
          target: "Leaders du marché recherchant une visibilité maximale",
          space: "4m × 4m",
          format: "Solution clé en main entièrement produite avec un design unifié haut de gamme",
          services: [
            "Éclairage LED",
            "Comptoir d'information",
            "Électricité : tableau 3,3 kW (1 prise disponible)",
            "Wi-Fi haut débit",
            "Nettoyage avant l'ouverture",
          ],
          branding: "Lettres noires de 10 cm de haut (20 lettres incluses). Espace dédié pour le logo et les graphismes personnalisés.",
          furniture: "1 table de réunion et 4 chaises ou tabourets de bar",
          investment: "8 000 €",
          passesIncluded: "3",
          notes: "Mobilier final à définir. L'entreprise peut mettre à niveau l'équipement de base ou la signalétique directement avec le lieu et les organisateurs.",
        },
        jardinMedio: {
          name: "Medium Garden",
          category: "Stand Standard",
          target: "Leaders du marché recherchant une visibilité maximale",
          space: "3m × 3m",
          format: "Solution clé en main entièrement produite avec un design unifié haut de gamme",
          services: [
            "Éclairage LED",
            "Comptoir d'information",
            "Électricité : tableau 3,3 kW (1 prise disponible)",
            "Wi-Fi haut débit",
            "Nettoyage avant l'ouverture",
          ],
          branding: "Lettres noires de 10 cm de haut (20 lettres incluses). Espace dédié pour le logo et les graphismes personnalisés.",
          furniture: "1 table de réunion et 2 tabourets de bar",
          investment: "5 000 €",
          passesIncluded: "2",
          notes: "Mobilier final à définir. L'entreprise peut mettre à niveau l'équipement de base ou la signalétique directement avec le lieu et les organisateurs.",
        },
        flor: {
          name: "Flower",
          category: "Stand compact / Pod",
          target: "Startups et entreprises spécialisées. Option efficace et économique.",
          space: "Poste de travail compact (concept à définir)",
          format: "Design minimaliste pour une interaction rapide",
          services: [
            "Électricité (1 prise)",
            "Wi-Fi haut débit",
          ],
          branding: "Présentation de type totem (fournie et imprimée par l'organisateur)",
          furniture: "1 table et 2 chaises ou tabourets de bar",
          investment: "3 000 €",
          passesIncluded: "1",
          notes: "Rendu indicatif. Format final à définir.",
        },
      },
    },
  },
  pt: {
    pageTitle: "Parceiros e expositores — Oportunidades de patrocínio",
    pageDescription: "Mostre a sua participação no setor das infraestruturas verdes e garanta visibilidade e exposição junto de um público internacional no World Green Infrastructure Congress 2026, em Barcelona e Lleida.",
    partnerTitle: "Parceiros: Diamond, Emerald & Platinum",
    partnerP1: "Se pretende assumir um papel de destaque no WGIC26, escolha entre Diamond, Emerald ou Platinum. Estes pacotes oferecem a maior visibilidade, oportunidades de palestra, naming rights e espaço de exposição.",
    partnerP2: "O Diamond é exclusivo e inclui exposição máxima de marca, naming do auditório principal e um stand premium. Os benefícios Emerald e Platinum podem ser ajustados com a equipa organizadora.",
    sponsorTitle: "Sponsor: Gold",
    sponsorP1: "Se procura uma presença apenas digital e uma participação de nível inicial no WGIC26, o pacote Gold oferece visibilidade de marca, promoção digital e acesso ao congresso.",
    exhibitorsTitle: "The WGIC Garden – Stands de exposição",
    exhibitorsP1: "Mostre a sua empresa no coração do congresso. Todos os almoços e coffee breaks decorrem na Zona Expo. Escolha entre os stands Large Garden, Medium Garden ou Flower/Pod.",
    benefits: "Benefícios",
    table: {
      partners: "Parceiros",
      sponsors: "Patrocinadores",
      exhibitors: "Expositores",
      congressInvitations: "Convites para o congresso",
      galaDinner: "Jantar de gala no CCIB",
      speakingSlot: "Espaço de palestra",
      roomsNaming: "Naming de salas",
      workshops: "Workshops",
      rollup: "Roll up (fornecido por si) + Mesa + 3 cadeiras",
      space: "Espaço",
      visibility: "Visibilidade e redes sociais",
      newsletter: "Newsletter",
      socialMedia: "Redes sociais",
      logoVisibility: "Visibilidade do logótipo",
      specialContent: "Conteúdo especial",
      adPage: "Página de anúncio nas atas",
      attendees: "Lista de participantes",
      totalCost: "Custo total",
    },
    sponsorsPartners: "Partners and Sponsors",
    venueTitle: "O local",
    organizedBy: "Organized by",
    elitePartners: "Emerald Partners",
    gardenBigExhibitors: "Large Garden Exhibitors",
    gardenMediumExhibitors: "Medium Garden Exhibitors",
    flowerExhibitors: "Flower Exhibitors",
    mediaPartners: "Media Partners",
    withTheSupportOf: "With the Support of",
    comingSoon: "Coming soon",
    eventPartners: "Event Partners",
    venueP1: "O local onde se realizará o WGIC26 é perfeito para criar o ambiente de networking que patrocinadores, participantes e expositores esperam de um evento global. O Centro de Convenções Internacional de Barcelona é um espaço icónico localizado no bairro de Sant Martí, dentro do 22@ de Poblenou.",
    venueP2: "O CCIB é composto por dois edifícios de grande valor arquitetónico: o Centro de Convenções e o Auditório CCIB Forum, ligados por uma passagem subterrânea. Com uma área bruta de 100.000 m2 e capacidade para até 15.000 participantes, ambos os edifícios destacam-se pela dimensão, luz natural e grande versatilidade dos espaços.",
    venueP3: "O CCIB goza de uma localização privilegiada a apenas 500 metros da praia, a 6 km do centro histórico e a 22 km do aeroporto, com excelentes ligações às principais autoestradas e à rede de transportes públicos.",
    venueImagesAlt: "Imagens do local",
    cards: {
      infoPackTitle: "Descarregar dossier informativo",
      infoPackDesc: "Obtenha o guia completo para patrocinadores e expositores, com todos os detalhes técnicos e preços.",
      downloadPdf: "Descarregar PDF",
      provideDetails: "Indique os seus dados para aceder ao download.",
      fullName: "Nome completo",
      email: "Endereço de email",
      downloadNow: "Descarregar agora",
      started: "O seu download começou!",
      didNotStart: "Se não começou automaticamente,",
      clickHere: "clique aqui",
      interestTitle: "Manifeste o seu interesse",
      interestDesc: "Interessado em patrocinar ou expor? Partilhe as suas informações e o tipo de participação preferido. Analisaremos os seus dados e entraremos em contacto com opções personalizadas.",
      interestCta: "Manifestar interesse",
      contactInfo: "Indique os seus dados de contacto e conte-nos os seus interesses.",
      phone: "Número de telefone",
      company: "Nome da empresa",
      selectParticipation: "Selecione o tipo de participação",
      submit: "Enviar",
      thanks: "Obrigado pelo seu interesse!",
      thanksBody: "Recebemos as suas informações e entraremos em contacto brevemente com opções personalizadas.",
      pptTitle: "Descarregar brochura de patrocínio",
      pptDesc: "Obtenha o guia completo de patrocínio e exposição com todos os detalhes, benefícios e preços para ser parceiro do WGIC 2026.",
      downloadPpt: "Descarregar PPT",
    },
    errors: {
      enterName: "Por favor, indique o seu nome completo",
      shortName: "O nome deve ter pelo menos 2 caracteres",
      enterEmail: "Por favor, indique o seu email",
      invalidEmail: "Por favor, indique um endereço de email válido",
      enterPhone: "Por favor, indique o seu número de telefone",
      invalidPhone: "Por favor, indique um número de telefone válido",
      enterCompany: "Por favor, indique o nome da sua empresa",
      selectType: "Por favor, selecione um tipo de participação",
      processing: "Erro ao processar o seu pedido. Tente novamente.",
      submitForm: "Erro ao enviar o formulário. Tente novamente.",
    },
    sponsorship: {
      tableTitle: "Pacotes de patrocínio",
      tableHeaders: {
        category: "Categoria",
        investment: "Investimento (€)",
        passes: "Passes",
        galaDinner: "Jantar de Gala",
        speaking: "Oportunidade de palestra (*)",
        naming: "Naming rights",
        stand: "Stand",
      },
      speakingNote: "(*) As oportunidades de palestra estão sujeitas a disponibilidade e à confirmação final da Organização.",
      addonsTitle: "Complementos de patrocínio",
      addonsHeaders: {
        item: "Item",
        price: "Preço",
        availability: "Disponibilidade",
      },
      exclusivoBadge: "Exclusivo",
      standsTitle: "The WGIC Garden",
      standsConcept: "Solução chave-na-mão para uma presença fluida e de alto impacto. A Zona Expo é o coração do congresso. Todos os almoços e coffee breaks decorrem dentro da Zona Expo.",
      standsLabels: {
        space: "Espaço",
        format: "Formato",
        services: "Serviços",
        branding: "Branding",
        furniture: "Mobiliário",
        passesIncluded: "Passes incluídos",
      },
      standsLogisticsNote: "Todos os stands são geridos e produzidos diretamente pelos fornecedores oficiais do local. Experiência profissional, unificada e sem complicações.",
      contactTitle: "Contactar a equipa de patrocínio",
      contactLabels: {
        phone: "Telefone",
        email: "Email",
        web: "Web",
      },
      contactCta: "Contactar a equipa de patrocínio",
      formOptions: {
        diamante: "Diamond",
        esmeralda: "Emerald",
        platino: "Platinum",
        oro: "Gold",
        jardinGrande: "Large Garden",
        jardinMedio: "Medium Garden",
        flor: "Flower",
      },
      packages: {
        diamante: {
          name: "Diamond",
          investment: "30.000 €",
          passes: "15",
          gala: "10",
          speaking: "A confirmar",
          naming: "Auditório Principal",
          stand: "Premium 4×4m",
        },
        esmeralda: {
          name: "Emerald",
          investment: "15.000 €",
          passes: "10",
          gala: "5",
          speaking: "A confirmar",
          naming: "Sala Paralela",
          stand: "Médio 3×3m",
        },
        platino: {
          name: "Platinum",
          investment: "10.000 €",
          passes: "5",
          gala: "2",
          speaking: "A confirmar",
          naming: "—",
          stand: "Compacto 2×2m (pod)",
        },
        oro: {
          name: "Gold",
          investment: "6.000 €",
          passes: "2",
          gala: "1",
          speaking: "A confirmar",
          naming: "—",
          stand: "Apenas Digital",
        },
      },
      addons: [
        {
          item: "Direitos de naming do jantar de gala",
          price: "20.000 €",
          availability: "1 (Exclusivo)",
        },
        {
          item: "Aplicação Oficial do Congresso",
          price: "10.000 €",
          availability: "1 (Exclusivo)",
        },
        {
          item: "Lanyards e Credenciais",
          price: "8.000 €",
          availability: "1 (Exclusivo)",
        },
        {
          item: "Patrocinador do Coffee Break (por dia)",
          price: "5.000 €",
          availability: "4 disponíveis",
        },
        {
          item: "Visitas Técnicas (BCN ou Lleida)",
          price: "6.000 €",
          availability: "4 disponíveis",
        },
        {
          item: "Anúncio de página inteira nas atas",
          price: "2.000 €",
          availability: "Ilimitado",
        },
        {
          item: "Entrevista em vídeo produzida",
          price: "2.500 €",
          availability: "10 vagas",
        },
      ],
      stands: {
        jardinGrande: {
          name: "Large Garden",
          category: "Stand Premium",
          target: "Líderes de mercado que procuram máxima visibilidade",
          space: "4m × 4m",
          format: "Solução chave-na-mão totalmente produzida com design unificado de alta gama",
          services: [
            "Luzes LED",
            "Balcão de informação",
            "Eletricidade: quadro 3,3 kW (1 tomada disponível)",
            "Wi-Fi de alta velocidade",
            "Limpeza pré-inauguração",
          ],
          branding: "Letras pretas de 10 cm de altura (20 letras incluídas). Espaço dedicado para logótipo e gráficos personalizados.",
          furniture: "1 mesa de reunião e 4 cadeiras ou banquetas de bar",
          investment: "8.000 €",
          passesIncluded: "3",
          notes: "Mobiliário final a definir. A empresa pode atualizar o equipamento básico ou a sinalética diretamente com o local e os organizadores.",
        },
        jardinMedio: {
          name: "Medium Garden",
          category: "Stand Standard",
          target: "Líderes de mercado que procuram máxima visibilidade",
          space: "3m × 3m",
          format: "Solução chave-na-mão totalmente produzida com design unificado de alta gama",
          services: [
            "Luzes LED",
            "Balcão de informação",
            "Eletricidade: quadro 3,3 kW (1 tomada disponível)",
            "Wi-Fi de alta velocidade",
            "Limpeza pré-inauguração",
          ],
          branding: "Letras pretas de 10 cm de altura (20 letras incluídas). Espaço dedicado para logótipo e gráficos personalizados.",
          furniture: "1 mesa de reunião e 2 banquetas de bar",
          investment: "5.000 €",
          passesIncluded: "2",
          notes: "Mobiliário final a definir. A empresa pode atualizar o equipamento básico ou a sinalética diretamente com o local e os organizadores.",
        },
        flor: {
          name: "Flower",
          category: "Stand Compacto / Pod",
          target: "Startups e empresas especializadas. Opção eficiente e económica.",
          space: "Posto de trabalho compacto (conceito a definir)",
          format: "Design minimalista para interação rápida",
          services: [
            "Eletricidade (1 tomada)",
            "Wi-Fi de alta velocidade",
          ],
          branding: "Exposição estilo totem (fornecida e impressa pela organização)",
          furniture: "1 mesa e 2 cadeiras ou banquetas de bar",
          investment: "3.000 €",
          passesIncluded: "1",
          notes: "Renderização indicativa. Formato final a definir.",
        },
      },
    },
  },
} as const;

const ExhibitorsClient = () => {
  const locale = useLocale();
  const home = useTranslations("home");
  const t =
    locale === "es"
      ? copy.es
      : locale === "ca"
        ? copy.ca
        : locale === "fr"
          ? copy.fr
          : locale === "pt"
            ? copy.pt
            : copy.en;
  const pptHref =
    locale === "es"
      ? "/docs/WGIC26_SponsorshipBrochure_v0.5Spanish.pptx"
      : "/docs/WGIC26_SponsorshipBrochure_v0.5.pptx";
  // Download form state (reserved for future use)
  // const [downloadStep, setDownloadStep] = useState<
  //   "initial" | "form" | "success"
  // >("initial");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [formError, setFormError] = useState<string>("");

  const [interestFormStep, setInterestFormStep] = useState<
    "initial" | "form" | "success"
  >("initial");
  const [interestFormSubmitting, setInterestFormSubmitting] = useState(false);
  const [interestFormError, setInterestFormError] = useState<string>("");
  const [interestFormData, setInterestFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    participationType: "",
  });

  // Download handlers (reserved for future use)
  // const handleDownloadClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   setDownloadStep("form");
  //   setFormError("");
  // };

  // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setFormError("");
  //   ...
  // };

  const handleInterestFormClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setInterestFormStep("form");
    setInterestFormError("");
  };

  const handleInterestFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setInterestFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setInterestFormError("");

    const { name, email, phone, company, participationType } = interestFormData;

    // Validations
    if (!name) {
      setInterestFormError(t.errors.enterName);
      return;
    }

    if (name.length < 2) {
      setInterestFormError(t.errors.shortName);
      return;
    }

    if (!email) {
      setInterestFormError(t.errors.enterEmail);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInterestFormError(t.errors.invalidEmail);
      return;
    }

    if (!phone) {
      setInterestFormError(t.errors.enterPhone);
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 6) {
      setInterestFormError(t.errors.invalidPhone);
      return;
    }

    if (!company) {
      setInterestFormError(t.errors.enterCompany);
      return;
    }

    if (!participationType) {
      setInterestFormError(t.errors.selectType);
      return;
    }

    setInterestFormSubmitting(true);

    try {
      const response = await fetch("/api/interest-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          participationType,
        }),
      });

      if (response.ok) {
        setInterestFormStep("success");
        // Reset form
        setInterestFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          participationType: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Interest form error:", error);
      setInterestFormError(t.errors.submitForm);
    } finally {
      setInterestFormSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader title={t.pageTitle} description={t.pageDescription} />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {/* ... rest of the content ... */}
            <h3 className="text-xl text-white uppercase">{t.partnerTitle}</h3>
            <p className="text-white/80 text-left">{t.partnerP1}</p>
            <p className="text-white/80 text-left">{t.partnerP2}</p>

            <h3 className="text-xl text-white uppercase">{t.sponsorTitle}</h3>
            <p className="text-white/80 text-left">{t.sponsorP1}</p>

            <div className="mt-6">
              <h3 className="text-xl text-white uppercase mb-6">
                {t.exhibitorsTitle}
              </h3>
              <p className="text-white/80 mb-4 text-left">
                {t.exhibitorsP1}
              </p>
            </div>
            {/*s
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/30">
                    <th
                      rowSpan={2}
                      className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base"
                    >
                      {t.benefits}
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      {t.table.partners}
                    </th>
                    <th
                      colSpan={2}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      {t.table.sponsors}
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      {t.table.exhibitors}
                    </th>
                  </tr>

                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Emerald
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Global
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Event
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Tree
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Leaf
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Garden Big
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Garden Medium
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">
                      Flower
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.congressInvitations}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      15
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      10
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      4
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      1
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      1
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.galaDinner}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      10
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      5
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      3
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      1
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.speakingSlot}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      3
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      1
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.roomsNaming}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.workshops}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      1
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.rollup}
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.space}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      Island 12x6m (72sqm)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      6x6m (36sqm)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      3x9m (27sqm)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      3x6m (18sqm)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      3x3m (9sqm)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      3x1.5m (4.5sqm)
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.visibility}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.newsletter}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.socialMedia}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.logoVisibility}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.specialContent}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.adPage}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">
                      {t.table.attendees}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="bg-cactus/10 font-bold">
                    <td className="border border-white/20 px-4 py-3 text-white text-base">
                      {t.table.totalCost}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      30.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      15.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      10.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      8.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      6.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      5.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      3.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">
                      2.000€
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}


            <div className="overflow-x-auto -mx-6 px-6 my-8">
              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.tableTitle}</h3>
              <table className="w-full min-w-[800px] border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/30">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.tableHeaders.category}</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase bg-potus/20">
                      {t.sponsorship.packages.diamante.name} <span className="ml-2 inline-flex items-center rounded-full bg-potus px-2 py-0.5 text-xs text-black uppercase">{t.sponsorship.exclusivoBadge}</span>
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase">{t.sponsorship.packages.esmeralda.name}</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase">{t.sponsorship.packages.platino.name}</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase">{t.sponsorship.packages.oro.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium bg-potus/10">{t.sponsorship.packages.diamante.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium">{t.sponsorship.packages.esmeralda.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium">{t.sponsorship.packages.platino.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium">{t.sponsorship.packages.oro.investment}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.passes}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.galaDinner}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.gala}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.gala}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.gala}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.gala}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.speaking}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.naming}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.stand}</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-xs text-white/50 italic">{t.sponsorship.speakingNote}</p>
            </div>

            <div className="my-8">
              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.addonsTitle}</h3>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[600px] border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/30">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.addonsHeaders.item}</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.addonsHeaders.price}</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.addonsHeaders.availability}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5 bg-potus/10">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[0].item} <span className="inline-flex items-center rounded-full bg-potus/20 border border-potus/30 px-2 py-0.5 text-potus text-sm uppercase">{t.sponsorship.exclusivoBadge}</span></td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[0].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[0].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5 bg-potus/10">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[1].item} <span className="inline-flex items-center rounded-full bg-potus/20 border border-potus/30 px-2 py-0.5 text-potus text-sm uppercase">{t.sponsorship.exclusivoBadge}</span></td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[1].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[1].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5 bg-potus/10">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[2].item} <span className="inline-flex items-center rounded-full bg-potus/20 border border-potus/30 px-2 py-0.5 text-potus text-sm uppercase">{t.sponsorship.exclusivoBadge}</span></td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[2].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[2].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[3].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[3].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[3].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[4].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[4].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[4].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[5].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[5].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[5].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[6].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[6].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[6].availability}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="my-8">
              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.standsTitle}</h3>
              <p className="text-white/80 mb-4 text-left">{t.sponsorship.standsConcept}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-white uppercase">{t.sponsorship.stands.jardinGrande.name}</h4>
                    <span className="text-potus font-medium">{t.sponsorship.stands.jardinGrande.investment}</span>
                  </div>
                  <p className="text-white/70 text-sm">{t.sponsorship.stands.jardinGrande.category} · {t.sponsorship.stands.jardinGrande.target}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.space}:</span> {t.sponsorship.stands.jardinGrande.space}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.format}:</span> {t.sponsorship.stands.jardinGrande.format}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.services}:</span></p>
                  <ul className="list-disc list-inside text-white/80 text-sm flex flex-col gap-1">
                    {t.sponsorship.stands.jardinGrande.services.map((s, i) => <li key={i} className="text-white/80 text-sm">{s}</li>)}
                  </ul>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.branding}:</span> {t.sponsorship.stands.jardinGrande.branding}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.furniture}:</span> {t.sponsorship.stands.jardinGrande.furniture}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.passesIncluded}:</span> {t.sponsorship.stands.jardinGrande.passesIncluded}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-white uppercase">{t.sponsorship.stands.jardinMedio.name}</h4>
                    <span className="text-potus font-medium">{t.sponsorship.stands.jardinMedio.investment}</span>
                  </div>
                  <p className="text-white/70 text-sm">{t.sponsorship.stands.jardinMedio.category} · {t.sponsorship.stands.jardinMedio.target}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.space}:</span> {t.sponsorship.stands.jardinMedio.space}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.format}:</span> {t.sponsorship.stands.jardinMedio.format}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.services}:</span></p>
                  <ul className="list-disc list-inside text-white/80 text-sm flex flex-col gap-1">
                    {t.sponsorship.stands.jardinMedio.services.map((s, i) => <li key={i} className="text-white/80 text-sm">{s}</li>)}
                  </ul>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.branding}:</span> {t.sponsorship.stands.jardinMedio.branding}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.furniture}:</span> {t.sponsorship.stands.jardinMedio.furniture}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.passesIncluded}:</span> {t.sponsorship.stands.jardinMedio.passesIncluded}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-white uppercase">{t.sponsorship.stands.flor.name}</h4>
                    <span className="text-potus font-medium">{t.sponsorship.stands.flor.investment}</span>
                  </div>
                  <p className="text-white/70 text-sm">{t.sponsorship.stands.flor.category} · {t.sponsorship.stands.flor.target}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.space}:</span> {t.sponsorship.stands.flor.space}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.format}:</span> {t.sponsorship.stands.flor.format}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.services}:</span></p>
                  <ul className="list-disc list-inside text-white/80 text-sm flex flex-col gap-1">
                    {t.sponsorship.stands.flor.services.map((s, i) => <li key={i} className="text-white/80 text-sm">{s}</li>)}
                  </ul>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.branding}:</span> {t.sponsorship.stands.flor.branding}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.furniture}:</span> {t.sponsorship.stands.flor.furniture}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.passesIncluded}:</span> {t.sponsorship.stands.flor.passesIncluded}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm italic">{t.sponsorship.standsLogisticsNote}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg text-white uppercase mb-3">
                {t.venueTitle}
              </h4>
              <p className="text-white/80 mb-4 text-left">{t.venueP1}</p>
              <p className="text-white/80 mb-4 text-left">{t.venueP2}</p>
              <p className="text-white/80 mb-4 text-left">{t.venueP3}</p>
              <Carousel
                images={[
                  "/img/1.Exterior.jpg",
                  "/img/escaleras.jpg",
                  "/img/Banquet Hall.1.jpg",
                  "/img/Exterior_15.jpg",
                  "/img/sala_polivalente.jpg",
                ]}
                alt={t.venueImagesAlt}
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Info Pack Download Card */}
              {/*
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-potus/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cactus/20 rounded-lg">
                    <Download className="text-potus" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white uppercase m-0">
                    {t.cards.infoPackTitle}
                  </h4>
                </div>

                {downloadStep === "initial" && (
                  <>
                    <p className="text-white/70 text-base m-0">
                      {t.cards.infoPackDesc}
                    </p>
                    <button
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cactus hover:bg-cactus/80 text-lg px-6 py-4 font-medium text-lg transition-all"
                    >
                      {t.cards.downloadPdf}
                    </button>
                  </>
                )}

                {downloadStep === "form" && (
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-4"
                  >
                    <p className="text-white/70 text-base m-0 mb-2">
                      {t.cards.provideDetails}
                    </p>

                    {formError && (
                      <div className="bg-rose/20 border border-rose px-4 py-3 rounded-lg">
                        <p className="text-rose text-sm m-0">{formError}</p>
                      </div>
                    )}

                    <input
                      name="name"
                      type="text"
                      placeholder={t.cards.fullName}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder={t.cards.email}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-potus text-black px-6 py-4 font-bold text-lg hover:bg-potus/80 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        t.cards.downloadNow
                      )}
                    </button>
                  </form>
                )}

                {downloadStep === "success" && (
                  <div className="flex flex-col items-center gap-4 py-4 text-center">
                    <div className="p-4 bg-potus/20 rounded-full">
                      <Send className="text-potus" size={32} />
                    </div>
                    <p className="text-white font-medium text-lg m-0">
                      {t.cards.started}
                    </p>
                    <p className="text-white/60 text-base m-0">
                      {t.cards.didNotStart}{" "}
                      <a
                        href="https://drive.google.com/file/d/1yRPB7IyOzDifeCW_sDjgI1APAwOa8zjC/view"
                        target="_blank"
                        className="text-potus underline"
                      >
                        {t.cards.clickHere}
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
              */}
              {/* Interest Form Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-potus/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cactus/20 rounded-lg">
                    <FileText className="text-potus" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white uppercase m-0">
                    {t.cards.interestTitle}
                  </h4>
                </div>

                {interestFormStep === "initial" && (
                  <>
                    <p className="text-white/70 text-base m-0">
                      {t.cards.interestDesc}
                    </p>
                    <button
                      onClick={handleInterestFormClick}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cactus hover:bg-cactus/80 text-lg px-6 py-4 font-medium text-lg transition-all"
                    >
                      {t.cards.interestCta}
                    </button>
                  </>
                )}

                {interestFormStep === "form" && (
                  <form
                    onSubmit={handleInterestFormSubmit}
                    className="flex flex-col gap-4"
                  >
                    <p className="text-white/70 text-base m-0 mb-2">
                      {t.cards.contactInfo}
                    </p>

                    {interestFormError && (
                      <div className="bg-rose/20 border border-rose px-4 py-3 rounded-lg">
                        <p className="text-rose text-sm m-0">
                          {interestFormError}
                        </p>
                      </div>
                    )}

                    <input
                      name="name"
                      type="text"
                      placeholder={t.cards.fullName}
                      value={interestFormData.name}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder={t.cards.email}
                      value={interestFormData.email}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />

                    <input
                      name="phone"
                      type="tel"
                      placeholder={t.cards.phone}
                      value={interestFormData.phone}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />

                    <input
                      name="company"
                      type="text"
                      placeholder={t.cards.company}
                      value={interestFormData.company}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />

                    <select
                      name="participationType"
                      value={interestFormData.participationType}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    >
                      <option value="">{t.cards.selectParticipation}</option>
                      <option value="Diamond">
                        {t.sponsorship.packages.diamante.name}
                      </option>
                      <option value="Emerald">
                        {t.sponsorship.packages.esmeralda.name}
                      </option>
                      <option value="Platinum">
                        {t.sponsorship.packages.platino.name}
                      </option>
                      <option value="Gold">
                        {t.sponsorship.packages.oro.name}
                      </option>
                      <option value="Large Garden">
                        {t.sponsorship.stands.jardinGrande.name}
                      </option>
                      <option value="Medium Garden">
                        {t.sponsorship.stands.jardinMedio.name}
                      </option>
                      <option value="Flower">
                        {t.sponsorship.stands.flor.name}
                      </option>
                    </select>

                    <button
                      disabled={interestFormSubmitting}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-potus text-black px-6 py-4 font-bold text-lg hover:bg-potus/80 transition-all disabled:opacity-50"
                    >
                      {interestFormSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        t.cards.submit
                      )}
                    </button>
                  </form>
                )}

                {interestFormStep === "success" && (
                  <div className="flex flex-col items-center gap-4 py-4 text-center">
                    <div className="p-4 bg-potus/20 rounded-full">
                      <CheckCircle className="text-potus" size={32} />
                    </div>
                    <p className="text-white font-medium text-lg m-0">
                      {t.cards.thanks}
                    </p>
                    <p className="text-white/60 text-base m-0">
                      {t.cards.thanksBody}
                    </p>
                  </div>
                )}
              </div>

              {/* PPT Presentation Download Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-potus/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cactus/20 rounded-lg">
                    <Presentation className="text-potus" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white uppercase m-0">
                    {t.cards.pptTitle}
                  </h4>
                </div>

                <p className="text-white/70 text-base m-0">{t.cards.pptDesc}</p>

                <div className="mt-auto">
                  <a
                    href={pptHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-cactus hover:bg-cactus/80 text-lg px-6 py-4 font-medium text-lg transition-all"
                  >
                    <Presentation size={18} />
                    {t.cards.downloadPpt}
                  </a>
                </div>
              </div>

              {/* Contact Card */}
              
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="flex flex-col gap-6 mt-16 pb-24">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">
          {t.sponsorsPartners}
        </div>

        <div className="bg-white text-black py-16 px-6 rounded-md border border-gray-200">
          <div className="flex flex-col gap-12 items-center">
            {/* ORGANISED */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t.organizedBy}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/WGIN-logo.png"
                    alt="WGI Network"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>

                <a
                  href="http://udl.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/Logo-de-la-Universitat-de-Lleida.png"
                    alt="Universitat de Lleida"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://cinea.ec.europa.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/logo-life.jpg"
                    alt="LIFE - European Climate, Infrastructure and Environment Executive Agency"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://it4s.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/it4s.png"
                    alt="it4s – Innovative Technologies for Sustainability"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>

                <a
                  href="http://big4life.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/Footer_logo_BIG4LIFE_144.png"
                    alt="BIG4LIFE"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* ELITE PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t.elitePartners}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                <a
                  href="https://www.sempergreen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos-color/sempergreen_urban-grey_green_22112023164728.jpg"
                    alt="Semper Green"
                    width={400}
                    height={300}
                    className="h-30 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* EVENT PARTNERS 
                  <div className="w-full">
                    <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                      Event Partners
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24"></div>
                  </div>*/}

            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t.gardenBigExhibitors}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                <a
                  href="https://www.jardinmovil.com/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/jardinMovil.png"
                    alt="JardinMovil"
                    width={330}
                    height={230}
                    className="h-20 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://eixverd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/eixverd.svg"
                    alt="Eixverd"
                    width={330}
                    height={230}
                    className="h-36 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://zinco-cubiertas-ecologicas.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/zinco.svg"
                    alt="Zinco"
                    width={400}
                    height={300}
                    className="h-22 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t.gardenMediumExhibitors}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px]">
                <a
                  href="https://verdtical.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-md px-4 py-2"
                >
                  <Image
                    src="/img/logos/verdtical.webp"
                    alt="Verdtical"
                    width={150}
                    height={100}
                    loading="eager"
                    className="h-8 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://www.hunterirrigation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-md px-4 py-2"
                >
                  <Image
                    src="/img/logos/Hunter.svg"
                    alt="Hunter"
                    width={300}
                    height={200}
                    loading="eager"
                    className="h-8 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://www.projar.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-md px-4 py-2"
                >
                  <Image
                    src="/img/logos/projar.jpg"
                    alt="Projar"
                    width={330}
                    height={230}
                    loading="eager"
                    className="h-30 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://leprieure1840.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-md px-4 py-2"
                >
                  <Image
                    src="/img/logos/LePrieure.jpg"
                    alt="Le Prieuré"
                    width={200}
                    height={200}
                    loading="eager"
                    className="h-24 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* FLOWER EXHIBITORS - hidden until logos are added
                  <div className="w-full">
                    <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                      {t.flowerExhibitors}
                    </h3>
                    <div className="flex justify-center items-center min-h-[100px] text-gray-500">
                      <p className="italic">{t.comingSoon}</p>
                    </div>
                  </div>
                  */}

            {/* MEDIA PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t.mediaPartners}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <a
                  href="https://greenroofs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/greenroofsnuevo.png"
                    alt="Greenroofs.com"
                    width={280}
                    height={200}
                    className="h-17 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* WITH THE SUPPORT OF */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                {t.withTheSupportOf}
              </h3>
              <SupportersCarousel supporters={supporters} visibleCount={5} />
            </div>
          </div>
        </div>

        <RegisterCTA
          title={home("ctaJoinTitle")}
          subtitle={home("ctaJoinSubtitle")}
          buttonLabel={home("registerNow")}
        />
      </section>
    </div>
  );
};

export default ExhibitorsClient;
