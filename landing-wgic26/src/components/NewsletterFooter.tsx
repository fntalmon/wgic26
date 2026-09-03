import Link from "next/link";

interface NewsletterFooterProps {
  language?: "es" | "en" | "ca" | "it" | "fr" | "pt" | "el" | "ar";
  light?: boolean;
}

const content: Record<
  string,
  {
    title: string;
    items: string[];
    moreInfo: string;
    privacyLink: string;
  }
> = {
  es: {
    title: "Información básica sobre protección de datos",
    items: [
      "Responsable: Društvo WGIN (Trata 31, 4220 Škofja Loka, Eslovenia).",
      "Encargado del Tratamiento: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, España).",
      "Finalidad: Gestión de la inscripción al congreso WGIC26, envío de comunicaciones informativas, novedades del evento y gestión de actividades asociadas.",
      "Legitimación: Consentimiento del interesado al suscribirse o registrarse.",
      "Destinatarios: No se cederán datos a terceros salvo obligación legal o necesidad estricta para la ejecución del evento.",
      "Derechos: Puede acceder, rectificar, limitar y suprimir sus datos, así como ejercer otros derechos dirigiéndose por escrito a las direcciones de las entidades responsables.",
    ],
    moreInfo: "Información adicional: Puede consultar la política de privacidad completa en nuestro sitio web.",
    privacyLink: "Política de Privacidad",
  },
  en: {
    title: "Basic data protection information",
    items: [
      "Controller: Društvo WGIN (Trata 31, 4220 Škofja Loka, Slovenia).",
      "Processor: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Spain).",
      "Purpose: Management of registration for the WGIC26 congress, sending informative communications, event updates and management of associated activities.",
      "Legal basis: Consent of the data subject when subscribing or registering.",
      "Recipients: Data will not be transferred to third parties except under legal obligation or strict necessity for the execution of the event.",
      "Rights: You may access, rectify, restrict and delete your data, as well as exercise other rights by writing to the addresses of the responsible entities.",
    ],
    moreInfo: "Further information: You can consult the full privacy policy on our website.",
    privacyLink: "Privacy Policy",
  },
  ca: {
    title: "Informació bàsica sobre protecció de dades",
    items: [
      "Responsable: Društvo WGIN (Trata 31, 4220 Škofja Loka, Eslovenia).",
      "Encarregat del Tractament: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Espanya).",
      "Finalitat: Gestió de la inscripció al congrés WGIC26, enviament de comunicacions informatives, novetats de l'esdeveniment i gestió d'activitats associades.",
      "Legitimació: Consentiment de l'interessat en subscriure's o registrar-se.",
      "Destinataris: No es cediran dades a tercers llevat obligació legal o necessitat estricta per a l'execució de l'esdeveniment.",
      "Drets: Pot accedir, rectificar, limitar i suprimir les seves dades, així com exercir altres drets dirigint-se per escrit a les adreces de les entitats responsables.",
    ],
    moreInfo: "Informació addicional: Pot consultar la política de privacitat completa al nostre lloc web.",
    privacyLink: "Política de Privacitat",
  },
  it: {
    title: "Informazioni di base sulla protezione dei dati",
    items: [
      "Titolare del trattamento: Društvo WGIN (Trata 31, 4220 Škofja Loka, Slovenia).",
      "Responsabile del trattamento: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Spagna).",
      "Finalità: Gestione dell'iscrizione al congresso WGIC26, invio di comunicazioni informative, aggiornamenti sull'evento e gestione delle attività associate.",
      "Base giuridica: Consenso dell'interessato all'iscrizione o alla registrazione.",
      "Destinatari: I dati non saranno ceduti a terzi salvo obbligo di legge o necessità stretta per lo svolgimento dell'evento.",
      "Diritti: È possibile accedere, rettificare, limitare e cancellare i propri dati, nonché esercitare altri diritti scrivendo agli indirizzi delle entità responsabili.",
    ],
    moreInfo: "Ulteriori informazioni: è possibile consultare l'informativa privacy completa sul nostro sito web.",
    privacyLink: "Privacy Policy",
  },
  fr: {
    title: "Informations de base sur la protection des données",
    items: [
      "Responsable du traitement : Društvo WGIN (Trata 31, 4220 Škofja Loka, Slovénie).",
      "Sous-traitant : Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Espagne).",
      "Finalité : Gestion de l'inscription au congrès WGIC26, envoi de communications informatives, actualités de l'événement et gestion des activités associées.",
      "Base légale : Consentement de la personne concernée lors de son inscription.",
      "Destinataires : Les données ne seront pas transmises à des tiers, sauf obligation légale ou nécessité stricte pour l'exécution de l'événement.",
      "Droits : Vous pouvez accéder, rectifier, limiter et supprimer vos données, ainsi qu'exercer d'autres droits en écrivant aux adresses des entités responsables.",
    ],
    moreInfo: "Informations complémentaires : vous pouvez consulter la politique de confidentialité complète sur notre site web.",
    privacyLink: "Politique de confidentialité",
  },
  pt: {
    title: "Informação básica sobre proteção de dados",
    items: [
      "Responsável: Društvo WGIN (Trata 31, 4220 Škofja Loka, Eslovénia).",
      "Encarregado do Tratamento: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Espanha).",
      "Finalidade: Gestão da inscrição no congresso WGIC26, envio de comunicações informativas, novidades do evento e gestão de atividades associadas.",
      "Legitimação: Consentimento do titular ao subscrever ou registar-se.",
      "Destinatários: Não serão cedidos dados a terceiros salvo obrigação legal ou necessidade estrita para a execução do evento.",
      "Direitos: Pode aceder, retificar, limitar e eliminar os seus dados, bem como exercer outros direitos dirigindo-se por escrito aos endereços das entidades responsáveis.",
    ],
    moreInfo: "Informação adicional: Pode consultar a política de privacidade completa no nosso site.",
    privacyLink: "Política de Privacidade",
  },
  el: {
    title: "Basic data protection information",
    items: [
      "Controller: Društvo WGIN (Trata 31, 4220 Škofja Loka, Slovenia).",
      "Processor: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Spain).",
      "Purpose: Management of registration for the WGIC26 congress, sending informative communications, event updates and management of associated activities.",
      "Legal basis: Consent of the data subject when subscribing or registering.",
      "Recipients: Data will not be transferred to third parties except under legal obligation or strict necessity for the execution of the event.",
      "Rights: You may access, rectify, restrict and delete your data, as well as exercise other rights by writing to the addresses of the responsible entities.",
    ],
    moreInfo: "Further information: You can consult the full privacy policy on our website.",
    privacyLink: "Privacy Policy",
  },
  ar: {
    title: "Basic data protection information",
    items: [
      "Controller: Društvo WGIN (Trata 31, 4220 Škofja Loka, Slovenia).",
      "Processor: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, Spain).",
      "Purpose: Management of registration for the WGIC26 congress, sending informative communications, event updates and management of associated activities.",
      "Legal basis: Consent of the data subject when subscribing or registering.",
      "Recipients: Data will not be transferred to third parties except under legal obligation or strict necessity for the execution of the event.",
      "Rights: You may access, rectify, restrict and delete your data, as well as exercise other rights by writing to the addresses of the responsible entities.",
    ],
    moreInfo: "Further information: You can consult the full privacy policy on our website.",
    privacyLink: "Privacy Policy",
  },
};

const NewsletterFooter = ({ language = "en", light = false }: NewsletterFooterProps) => {
  const langContent = content[language] || content.en;

  if (light) {
    return (
      <div className="mx-6 sm:mx-10 mt-0 mb-8 pt-8 border-t border-neutral-200 text-neutral-500 text-xs leading-relaxed">
        <h4 className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wide">
          {langContent.title}
        </h4>
        <ul className="list-disc pl-4 space-y-1 mb-3">
          {langContent.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          {langContent.moreInfo}{" "}
          <Link href="/privacy" className="text-cactus font-medium hover:underline">
            {langContent.privacyLink}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 pt-8 border-t border-white/10 text-white/60 text-xs leading-relaxed">
      <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">
        {langContent.title}
      </h4>
      <ul className="list-disc pl-4 space-y-1 mb-3">
        {langContent.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>
        {langContent.moreInfo}{" "}
        <Link href="/privacy" className="text-potus hover:underline">
          {langContent.privacyLink}
        </Link>
        .
      </p>
    </div>
  );
};

export default NewsletterFooter;
