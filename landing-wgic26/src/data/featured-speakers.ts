// Ponentes destacados de la home (carrusel). Lista local y controlada a mano: NO depende de la
// API de Barter/Hélice. El orden del array es el orden en pantalla.
//
// - `id` apunta a keyNoteSpeakersPage.speakers.<id> en src/messages/*.json (nombre y bio traducidos).
// - `image` es una foto en /public (opcional: sin foto se muestran las iniciales).
//
// La página /program/speakers es la que lista a todos los ponentes de la API.
export interface FeaturedSpeaker {
  id: string;
  image?: string;
}

export const featuredSpeakers: FeaturedSpeaker[] = [
  { id: "speaker1", image: "/img/speakers/marcosros.jpg" },
  { id: "speaker6", image: "/img/speakers/wendyy.chen.jpg" },
  { id: "speaker2", image: "/img/speakers/salvadorrueda.jpg" },
  { id: "speaker4", image: "/img/speakers/albertoestevez.jpg" },
  { id: "speaker5", image: "/img/speakers/enricbatlle.jpg" },
  { id: "speaker9", image: "/img/speakers/JesusPerez.jpeg" },
  { id: "speaker10", image: "/img/speakers/Balsells.png" },
  { id: "speaker12", image: "/img/speakers/martinez.jpeg" },
  { id: "speaker13", image: "/img/speakers/VictoriaPerez.png" },
  { id: "speaker14", image: "/img/speakers/scuto.png" },
  { id: "speaker15", image: "/img/speakers/JobMwangi.png" },
  { id: "speaker16", image: "/img/speakers/Carratala.png" },
  { id: "speaker17", image: "/img/speakers/petito.png" },
  { id: "speaker23", image: "/img/speakers/Farinea.png" },
  { id: "speaker24", image: "/img/speakers/Vernon_David.png" },
  { id: "speaker19", image: "/img/speakers/GabrielPerez.png" },
  { id: "speaker20", image: "/img/speakers/peck.png" },
  { id: "speaker21", image: "/img/speakers/CamilleTallon.png" },
  { id: "speaker22", image: "/img/speakers/aba.png" },
  { id: "speaker25", image: "/img/speakers/velazquez_linda.jpg" },
  { id: "speaker26", image: "/img/speakers/ajanguiz_jon.jpg" },
  { id: "speaker27", image: "/img/speakers/belmans_bert.jpg" },
  // David Martínez (Ajuntament de Barcelona): sustituye a Maria Buhigas entre los destacados,
  // confirmado por Gabriel a través de Mònica Galindo (20/10/2026).
  { id: "speaker28", image: "/img/speakers/david_martinez.jpeg" },
];
