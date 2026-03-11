import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const March2026ItalianNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Marzo 2026"
        description="Aggiornamenti, primi relatori confermati e date chiave per WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter Marzo 2026
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Il 12°{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                congresso mondiale sulle infrastrutture verdi{" "}
              </a>
              si terrà a
              Barcellona e Lerida (Catalogna, Spagna) dal 27 al 30 ottobre
              2026.
            </p>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                È aperta la registrazione per la presentazione di articoli e
                progetti
              </h3>

              <p className="text-lg leading-relaxed">
                L&apos;evento, promosso dalla{" "}
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  Rete Mondiale delle Infrastrutture Verdi
                </a>{" "}
                (WGIN) e organizzato dall&apos;Università di Lerida (UdL), celebrerà
                la nomina di Barcellona a{" "}
                <a
                  href="https://www.barcelona.cat/capitalmundialarquitectura/en/presentation/barcelona-2026-world-capital-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  Capitale mondiale dell&apos;architettura 2026
                </a>{" "}
                e l&apos;{" "}
                <a
                  href="https://consellantonigaudi.cat/programa-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  Anno commemorativo di Antoni Gaudí
                </a>
                . Il programma sarà strutturato in due giorni di sessioni
                parallele e dibattiti.
              </p>

              <p className="text-lg leading-relaxed">
                Oltre alle classiche discussioni su politica, tecnologia, aree
                di influenza, educazione, ecc., saranno affrontati tre temi
                principali.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Infrastrutture Verdi e Soluzioni Basate sulla Natura
              </h3>
              <ul className="list-disc list-inside mb-4 text-white">
                <li>La salute e il benessere umano</li>
                <li>La ricostruzione post-conflitto</li>
                <li>Il Sud del mondo</li>
              </ul>
              <p className="mb-4">
                Il congresso include un&apos;area fieristica dove le aziende leader
                mostreranno i loro prodotti e le ultime innovazioni. Il terzo
                giorno sarà dedicato a visite di sopralluogo di progetti nella
                città di Barcellona, in un innovativo formato &quot;porte aperte&quot;.
                Un quarto giorno facoltativo includerà workshop su ricerca e
                innovazione a Lerida. Dato che il WGIC26 è un forum annuale in
                cui ricercatori, professionisti e industria si incontrano,
                possono essere consegnati vari tipi di presentazioni, siano
                esse ricerche, progetti o casi studio. Tutte le informazioni
                sono disponibili sul sito del congresso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cactus/20 to-monstera/20 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Ricorda le date chiave
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-white/60">
                    Prima bozza dell'articolo da inviare
                  </span>
                  <span className="font-semibold text-white">31 marzo 2026</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">
                    Registrazione anticipata (fino a 400 registrazioni)
                  </span>
                  <span className="font-semibold text-white">15 aprile 2026</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Partner ed espositori</span>
                  <span className="font-semibold text-white">31 aprile 2026</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Sponsor</span>
                  <span className="font-semibold text-white">30 settembre 2026</span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-white/10 mt-2">
                  <span className="text-potus font-bold">Date del congresso</span>
                  <span className="font-bold text-potus">27-30 ottobre 2026</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              2026: un anno che commemora Antoni Gaudí
            </h3>
            <p>
              Il Consiglio per la Promozione e la Diffusione dell&apos;Opera di
              Gaudí, un organo consultivo del Dipartimento della Cultura della
              Generalitat della Catalogna, ha promosso la celebrazione
              dell&apos;{" "}
              <a
                href="https://web.gencat.cat/en/generalitat/accio-govern/commemoracions/2026/any-gaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Anno commemorativo di Gaudí 2026
              </a>
              , con l&apos;obiettivo di
              avvicinare l&apos;opera di Antoni Gaudí al grande pubblico. Gaudí è
              uno degli architetti più universali della Catalogna.
            </p>
            <p>
              L&apos;iniziativa, coordinata da una commissione guidata da Núria Poch
              e Galdric Santana, abbraccerà i principali edifici di Gaudí,
              incluso il Tempio Espiatorio della Sagrada Família. Saranno
              coinvolte istituzioni pubbliche e private, nonché esperti di
              conservazione, studio e diffusione del suo lascito.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              I primi relatori del WGIC sono già confermati!
            </h3>
            <p className="mb-6">
              Siamo lieti di annunciare i primi relatori confermati del WGIC
              2026: voci di spicco che plasmano il futuro delle città, del
              territorio, dell&apos;architettura e delle politiche urbane.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/marcosrossempere/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marcos Ros
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Architetto, accademico e membro del Parlamento Europeo, che
                  lavora su politiche urbane, sostenibilità e ambiente costruito
                  a livello UE.
                </p>
              </div>

              <div className="bg-monstera/10 p-6 rounded-lg border border-white/5 hover:bg-monstera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vicente Guallart
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Architetto e urbanista, co-fondatore di Urbanitree e
                  fondatore dell&apos;Istituto per l&apos;Architettura Avanzata della
                  Catalogna, riconosciuto a livello internazionale per
                  l&apos;innovazione urbana basata sulla ricerca.
                </p>
              </div>

              <div className="bg-sansiviera/10 p-6 rounded-lg border border-white/5 hover:bg-sansiviera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alberto Estevez
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Fondatore e direttore di ESARQ-UIC Barcellona, architetto e
                  accademico noto per il suo avanzamento nell'architettura
                  sperimentale e biodigitale.
                </p>
              </div>

              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Salvador Rueda
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Fondatore e direttore della Fondazione Ecologia Urbana e
                  Territoriale (FEUT), pioniere dell&apos;ecologia urbana e creatore
                  del modello urbano &quot;superblocco&quot;.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/60 italic">
              Questo primo gruppo di relatori sottolinea l'ambizione, la
              profondità e la visione multidisciplinare del WGIC 2026,
              posizionandolo come un forum chiave per il dibattito urbano
              globale.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Diventa nostro sponsor
            </a>
            <Link
              href="/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Iscriviti alla newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default March2026ItalianNewsletter;