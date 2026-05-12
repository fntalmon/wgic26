"use client";

import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { useState } from "react";
import {
  Download,
  FileText,
  Send,
  Loader2,
  Presentation,
  CheckCircle,
} from "lucide-react";
import { useLocale } from "next-intl";

const copy = {
  en: {
    pageTitle: "Partners & Exhibitors — Sponsorship opportunities",
    pageDescription:
      "Showcase your participation in the green infrastructures sector and ensure visibility and exposure to an international audience at our World Green Infrastructure Congress 2026 in Barcelona and Lleida.",
    partnerTitle: "Partner: Elite Global or Event",
    partnerP1:
      "If what you want is to participate actively in the conference, collaborating in decision-making, contributing knowledge, and assuming shared responsibilities, choose one of the partner options, Global or Event. In these typologies you will have the maximum benefits of visibility and participation.",
    partnerP2:
      "The Elite Partners will contribute strategically to the development of the congress and its promotion and will have all the benefits of the Global partners plus, those that can be finally defined, as for example, branding on the footer of conference emails, standees in the ballroom/foyer area, etc. and those that can be considered. Your financial contribution will be specifically agreed with the congress organization team.",
    sponsorTitle: "Sponsor: Tree or Leaf",
    sponsorP1:
      "If you are looking to maximize visibility, publicity or benefits for your brand or company in the green infrastructure sector, without the need to be involved in the management or decision-making of the event, your option is to be a sponsor, either as a Tree or as a Leaf.",
    exhibitorsTitle: "Exhibitors (limited to first 40)",
    exhibitorsP1:
      "Whether you are a partner or sponsor, you have the possibility of showing your company or products to attendees as an exhibitor, in two options, as a Garden and as a Flower. Being an exhibitor will allow you to be physically visible during the congress and network with potential customers interested in your brand.",
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
    venueTitle: "The Venue",
    venueP1:
      "The venue where WGIC26 will be held is perfect for creating the networking atmosphere that sponsors, attendees and exhibitors expect from a global event. The International Barcelona Convention Center of Barcelona is an iconic venue located in the Barcelona district of Sant Marti, inside the 22@ of Poblenou neighbourhood.",
    venueP2:
      "The CCIB comprises two buildings of great architectural value: the Convention Centre and the Auditorium CCIB Forum, joined by an underground connecting walkway. With a gross surface area of 100,000 m2 and a capacity for up to 15,000 attendees, both buildings stand out for their size, natural light, and the great versatility of their spaces.",
    venueP3:
      "The CCIB enjoys a privileged location just 500 metres from the beach, 6 km from the historic centre and 22 km from the airport, with excellent links to the most important highways and roads, and by the public transport network.",
    venueImagesAlt: "Venue images",
    cards: {
      infoPackTitle: "Download Info Pack",
      infoPackDesc:
        "Get the complete guide for sponsors and exhibitors, including all technical details and pricing.",
      downloadPdf: "Download PDF",
      provideDetails: "Please provide your details to access the download.",
      fullName: "Full Name",
      email: "Email Address",
      downloadNow: "Download Now",
      started: "Your download has started!",
      didNotStart: "If it did not start automatically,",
      clickHere: "click here",
      interestTitle: "Express Your Interest",
      interestDesc:
        "Interested in sponsoring or exhibiting? Share your information and preferred participation type. We will review your details and contact you with customized options.",
      interestCta: "Express Your Interest",
      contactInfo:
        "Provide your contact information and let us know your interests.",
      phone: "Phone Number",
      company: "Company Name",
      selectParticipation: "Select Participation Type",
      submit: "Submit",
      thanks: "Thank you for your interest!",
      thanksBody:
        "We have received your information and will get back to you shortly with personalized opportunities.",
      pptTitle: "Download Presentation",
      pptDesc:
        "Get a quick overview of the Congress through our presentation deck, featuring key information and highlights.",
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
  },
  es: {
    pageTitle: "Socios y expositores - Oportunidades de patrocinio",
    pageDescription:
      "Muestra tu participacion en el sector de infraestructuras verdes y asegura visibilidad y exposicion ante una audiencia internacional en el World Green Infrastructure Congress 2026 en Barcelona y Lleida.",
    partnerTitle: "Socio: Elite, Global o Event",
    partnerP1:
      "Si quieres participar activamente en el congreso, colaborando en la toma de decisiones, aportando conocimiento y asumiendo responsabilidades compartidas, elige una de las opciones de socio: Global o Event. En estas tipologias obtendras los maximos beneficios de visibilidad y participacion.",
    partnerP2:
      "Los socios Elite contribuirán estrategicamente al desarrollo y promocion del congreso y tendran todos los beneficios de los socios Global, ademas de aquellos que se definan finalmente, por ejemplo, presencia de marca en el pie de correos del congreso o soportes en areas comunes. La contribucion economica se acordara especificamente con el equipo organizador.",
    sponsorTitle: "Patrocinador: Tree o Leaf",
    sponsorP1:
      "Si buscas maximizar visibilidad, publicidad o beneficios para tu marca o empresa en el sector de infraestructura verde, sin necesidad de involucrarte en la gestion o toma de decisiones del evento, tu opcion es ser patrocinador, como Tree o como Leaf.",
    exhibitorsTitle: "Expositores (limitado a los primeros 40)",
    exhibitorsP1:
      "Tanto si eres socio como patrocinador, puedes mostrar tu empresa o productos a los asistentes como expositor, en dos opciones: Garden y Flower. Ser expositor te permitira visibilidad fisica durante el congreso y generar networking con potenciales clientes interesados en tu marca.",
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
      adPage: "Pagina de anuncio en actas",
      attendees: "Listado de asistentes",
      totalCost: "Coste total",
    },
    sponsorsPartners: "Patrocinadores y socios",
    venueTitle: "La sede",
    organizedBy: "Organizado por",
    venueP1:
      "La sede de WGIC26 es ideal para crear el entorno de networking que patrocinadores, asistentes y expositores esperan de un evento global. El Centro de Convenciones Internacional de Barcelona es un espacio iconico ubicado en Sant Marti, dentro del 22@ de Poblenou.",
    venueP2:
      "El CCIB cuenta con dos edificios de gran valor arquitectonico: el Centro de Convenciones y el Auditorio Forum CCIB, unidos por una pasarela subterranea. Con una superficie de 100.000 m2 y capacidad de hasta 15.000 asistentes, destaca por su amplitud, luz natural y versatilidad.",
    venueP3:
      "El CCIB tiene una ubicacion privilegiada a 500 metros de la playa, a 6 km del centro historico y a 22 km del aeropuerto, con excelentes conexiones por carretera y transporte publico.",
    venueImagesAlt: "Imagenes de la sede",
    cards: {
      infoPackTitle: "Descargar dossier informativo",
      infoPackDesc:
        "Obten la guia completa para patrocinadores y expositores, con detalles tecnicos y precios.",
      downloadPdf: "Descargar PDF",
      provideDetails: "Comparte tus datos para acceder a la descarga.",
      fullName: "Nombre completo",
      email: "Correo electronico",
      downloadNow: "Descargar ahora",
      started: "Tu descarga ha comenzado",
      didNotStart: "Si no comenzo automaticamente,",
      clickHere: "haz clic aqui",
      interestTitle: "Expresa tu interes",
      interestDesc:
        "Te interesa patrocinar o exponer? Comparte tu informacion y el tipo de participacion preferido. Revisaremos tus datos y te contactaremos con opciones personalizadas.",
      interestCta: "Expresar interes",
      contactInfo:
        "Comparte tu informacion de contacto y cuentanos tus intereses.",
      phone: "Telefono",
      company: "Empresa",
      selectParticipation: "Selecciona tipo de participacion",
      submit: "Enviar",
      thanks: "Gracias por tu interes",
      thanksBody:
        "Hemos recibido tu informacion y te contactaremos pronto con opciones personalizadas.",
      pptTitle: "Descargar presentacion",
      pptDesc:
        "Obten una vista rapida del Congreso con nuestra presentacion, incluyendo informacion clave y destacados.",
      downloadPpt: "Descargar PPT",
    },
    errors: {
      enterName: "Por favor, ingresa tu nombre completo",
      shortName: "El nombre debe tener al menos 2 caracteres",
      enterEmail: "Por favor, ingresa tu correo",
      invalidEmail: "Por favor, ingresa un correo valido",
      enterPhone: "Por favor, ingresa tu telefono",
      invalidPhone: "Por favor, ingresa un telefono valido",
      enterCompany: "Por favor, ingresa el nombre de tu empresa",
      selectType: "Por favor, selecciona un tipo de participacion",
      processing: "Error procesando tu solicitud. Intentalo de nuevo.",
      submitForm: "Error al enviar el formulario. Intentalo de nuevo.",
    },
  },
} as const;

const Exhibitors = () => {
  const locale = useLocale();
  const t = locale === "es" ? copy.es : copy.en;
  const [downloadStep, setDownloadStep] = useState<
    "initial" | "form" | "success"
  >("initial");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string>("");

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

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadStep("form");
    setFormError("");
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";

    // Validations
    if (!name) {
      setFormError(t.errors.enterName);
      return;
    }

    if (name.length < 2) {
      setFormError(t.errors.shortName);
      return;
    }

    if (!email) {
      setFormError(t.errors.enterEmail);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError(t.errors.invalidEmail);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/exhibitor-pack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setDownloadStep("success");
        // Trigger the actual download
        window.open(
          "https://drive.google.com/uc?export=download&id=1yRPB7IyOzDifeCW_sDjgI1APAwOa8zjC",

          "_blank",
        );
      } else {
        throw new Error("Failed to process download");
      }
    } catch (error) {
      console.error("Download error:", error);
      setFormError(t.errors.processing);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p className="text-white/80 text-justify">{t.partnerP1}</p>
            <p className="text-white/80 text-justify">{t.partnerP2}</p>

            <h3 className="text-xl text-white uppercase">{t.sponsorTitle}</h3>
            <p className="text-white/80 text-justify">{t.sponsorP1}</p>

            <div className="mt-6">
              <h3 className="text-xl text-white uppercase mb-6">
                {t.exhibitorsTitle}
              </h3>
              <p className="text-white/80 mb-4 text-justify">
                {t.exhibitorsP1}
              </p>
            </div>
{/*
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
                      Elite
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

            <div className="mt-6">
              <h4 className="text-lg text-white uppercase mb-3">
                {t.venueTitle}
              </h4>
              <p className="text-white/80 mb-4 text-justify">{t.venueP1}</p>
              <p className="text-white/80 mb-4 text-justify">{t.venueP2}</p>
              <p className="text-white/80 mb-4 text-justify">{t.venueP3}</p>
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
              {/* Info Pack Download Card */}{/*
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
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cactus hover:bg-cactus/80 text-white px-6 py-4 font-medium text-lg transition-all"
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
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cactus hover:bg-cactus/80 text-white px-6 py-4 font-medium text-lg transition-all"
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
                      <option value="Elite Partner">
                        {locale === "es" ? "Socio Elite" : "Elite Partner"}
                      </option>
                      <option value="Global Partner">
                        {locale === "es" ? "Socio Global" : "Global Partner"}
                      </option>
                      <option value="Event Partner">
                        {locale === "es" ? "Socio Event" : "Event Partner"}
                      </option>
                      <option value="Tree Sponsor">
                        {locale === "es" ? "Patrocinador Tree" : "Tree Sponsor"}
                      </option>
                      <option value="Leaf Sponsor">
                        {locale === "es" ? "Patrocinador Leaf" : "Leaf Sponsor"}
                      </option>
                      <option value="Garden Big">
                        {locale === "es"
                          ? "Expositor Garden Big"
                          : "Garden Big Exhibitor"}
                      </option>
                      <option value="Garden Medium">
                        {locale === "es"
                          ? "Expositor Garden Medium"
                          : "Garden Medium Exhibitor"}
                      </option>
                      <option value="Flower">
                        {locale === "es"
                          ? "Expositor Flower"
                          : "Flower Exhibitor"}
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
                    href="https://docs.google.com/presentation/d/1B6fw8i0h6K50pB0JFK-yW56sIyfImmjVqHQXPo0rQx0/export/pptx
"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-cactus hover:bg-cactus/80 text-white px-6 py-4 font-medium text-lg transition-all"
                  >
                    <Presentation size={18} />
                    {t.cards.downloadPpt}
                  </a>
                </div>
              </div>
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

                <div className="flex items-center justify-center">
                  <Image
                    src="/img/logos-color/logo-life.jpg"
                    alt="Life EU"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/img/logos-color/it4s.png"
                    alt="IT4S"
                    width={300}
                    height={220}
                    className="h-28 w-auto object-contain"
                  />
                </div>

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
                Elite Partners
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

                <a
                  href="https://www.hunterirrigation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/Hunter.svg"
                    alt="Hunter"
                    width={400}
                    height={300}
                    className="h-12 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://zinco-cubiertas-ecologicas.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/zinco.svg"
                    alt="Hunter"
                    width={400}
                    height={300}
                    className="h-22 w-auto object-contain"
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
                Garden Big Exhibitors
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                <a
                  href="https://www.jardinmovil.com/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/jardinMovil.png"
                    alt="Eixverd"
                    width={330}
                    height={230}
                    className="h-20 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Garden Medium Exhibitors
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[100px] text-gray-500">
                <a
                  href="https://eixverd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/eixverd.png"
                    alt="Eixverd"
                    width={330}
                    height={230}
                    className="h-36 w-auto object-contain"
                  />
                </a>

                <a
                  href="https://verdtical.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/verdtical.webp"
                    alt="Eixverd"
                    width={330}
                    height={230}
                    className="h-10 w-auto object-contain "
                  />
                </a>
              </div>
            </div>

            {/* FLOWER EXHIBITORS - hidden until logos are added
                  <div className="w-full">
                    <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                      Flower Exhibitors
                    </h3>
                    <div className="flex justify-center items-center min-h-[100px] text-gray-500">
                      <p className="italic">Coming Soon...</p>
                    </div>
                  </div>
                  */}

            {/* MEDIA PARTNERS */}
            <div className="w-full">
              <h3 className="text-center text-xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
                Media Partners
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
                With the Support of
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                <a
                  href="https://asescuve.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/logos/Asescuve-logo-24a.webp"
                    alt="ASESCUVE"
                    width={300}
                    height={220}
                    className="h-14 w-auto object-contain"
                  />
                </a>

                <Image
                  src="/img/logos/arboretum.png"
                  alt="Arboretum"
                  width={300}
                  height={220}
                  className="h-14 w-auto object-contain"
                />

                <Image
                  src="/img/logos/pronaturlogo.jpg"
                  alt="Logo pronatur"
                  width={320}
                  height={240}
                  className="h-24 w-auto object-contain"
                />

                <Image
                  src="/img/logos/eadc.png"
                  alt="Logo eadc"
                  width={320}
                  height={240}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitors;
