import type { CollaboratorLogo } from "@/components/CollaboratorLogos";

const BASE = "/img/collaborators/";

const logo = (name: string, file: string, width: number, height: number): CollaboratorLogo => ({
  name,
  file: BASE + file,
  width,
  height,
});

// Day 3 — Technical Visits (29 October): organizations behind each visited site.
export const technicalVisitsCollaborators: CollaboratorLogo[] = [
  logo("CaixaForum Barcelona", "babilon.png", 466, 122),
  logo("Laboratorios Almirall", "almirall.png", 533, 165),
  logo("Huertos in the Sky", "huertos-in-the-sky.png", 800, 335),
  logo("Espai Qbic Arquitectura", "espai-qbic.png", 800, 635),
  logo("Escola Pérez Iborra", "escola-perez-iborra.png", 449, 155),
  logo("Urbaser", "urbaser.png", 800, 154),
  logo("IR Sant Pau", "ir-sant-pau.png", 800, 317),
  logo("Eixverd", "eixverd.svg", 550, 195),
  logo("MataAlta Studio", "mataalta.png", 629, 800),
  logo("Platinum@BCN", "platinum-bcn.png", 800, 116),
  logo("Torre Diagonal One", "torre-diagonal-one.png", 800, 579),
  logo("Verdtical", "verdtical.png", 800, 167),
  logo("Hotel 10 Cubik", "h10-hotels.png", 785, 259),
  logo("IEC", "iec.png", 800, 225),
];

// Day 4 — Innovation Day (30 October): participating companies per workshop.
export const innovationDayWorkshop1Companies: CollaboratorLogo[] = [
  logo("Adalia", "adalia.png", 361, 329),
  logo("Agrotecnio", "agrotecnio.png", 800, 242),
];

export const innovationDayWorkshop2Companies: CollaboratorLogo[] = [
  logo("BotanyXS", "botanyxs.png", 474, 180),
  logo("Hunter", "hunter.svg", 180, 41),
  logo("SELdx", "seldx.png", 800, 166),
  logo("Sempergreen", "sempergreen.png", 800, 295),
  logo("Soprema", "soprema.png", 1113, 429),
  logo("Zinco", "zinco.png", 420, 800),
];
