import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter4Italian = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Maggio 2026"
        description="Scadenza per la presentazione prorogata, relatori confermati, Barcellona Capitale Mondiale dell'Architettura 2026, e rimani connesso"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di Maggio 2026
            </h2>
          </div>

          {/* Deadline Extended */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-white/50 uppercase tracking-wider">Scadenza precedente</div>
                <div className="text-lg font-semibold text-white">30 aprile 2026</div>
              </div>
              <div className="text-potus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-potus uppercase tracking-wider font-semibold">Nuova scadenza</div>
                <div className="text-lg font-semibold text-potus">31 maggio 2026</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Scadenza per la presentazione di articoli e progetti prorogata
            </h3>
            <p className="text-lg leading-relaxed">
              Siamo lieti di annunciare che la scadenza per la presentazione di articoli e
              progetti è stata prorogata fino al <strong>31 maggio 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Ricercatori, professionisti, designer, responsabili politici e professionisti del
              settore hanno ora ulteriore tempo per inviare i loro contributi al World Green
              Infrastructure Congress 2026 (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 accoglie ricerche originali, casi studio e applicazioni innovative
              relative alle infrastrutture verdi e alle soluzioni basate sulla natura negli
              ambienti urbani.
            </p>
            <p className="text-lg leading-relaxed">
              Tutte le proposte saranno sottoposte a un rigoroso processo di revisione
              paritaria guidato dal Comitato Scientifico, con gli articoli accettati che
              saranno inclusi negli atti ufficiali del congresso.
            </p>
            <p className="text-lg leading-relaxed">
              Questa è un&apos;opportunità per contribuire al dialogo globale su come
              costruire città più resilienti, sostenibili e sane.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Nuova scadenza per la presentazione: 31 maggio 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri le linee guida per la presentazione e accedi alla piattaforma qui.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Relatori confermati al WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 continua a riunire voci internazionali di spicco che stanno
              plasmando il futuro delle infrastrutture verdi, della sostenibilità urbana,
              dell&apos;architettura e delle soluzioni basate sulla natura.
            </p>
            <p className="text-lg leading-relaxed">
              I relatori confermati fino ad oggi includono:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Marcos Ros", role: "Architetto, accademico e membro del Parlamento europeo" },
                { name: "Salvador Rueda", role: "Fondatore della Fondazione Ecologia Urbana e Territoriale (FEUT) e creatore del modello Superblocks" },
                { name: "Alberto T. Estévez", role: "Fondatore di ESARQ-UIC Barcellona e pioniere nell'architettura biodigitale" },
                { name: "Vicente Guallart", role: "Fondatore di IAAC e co-fondatore di Urbanitree" },
                { name: "Enric Batlle", role: "Socio fondatore di Batlleiroig" },
                { name: "Wendy Y. Chen", role: "Professore all'Università di Hong Kong, specializzato in infrastrutture verdi-blu urbane" },
                { name: "Dorothy Aseyo", role: "Direttore esecutivo del Green Belt Movement" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white">{speaker.name}</div>
                  <div className="text-sm text-white/60">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Insieme, riflettono il carattere multidisciplinare e internazionale del WGIC26,
              collegando politica, ricerca, design, ecologia e innovazione.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Altri relatori e aggiornamenti sul programma saranno annunciati presto qui.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Barcellona, Capitale Mondiale dell&apos;Architettura 2026
            </h3>
            <p className="text-lg leading-relaxed">
              Nel 2026, Barcellona diventerà ufficialmente la Capitale Mondiale
              dell&apos;Architettura, riconoscendo la leadership globale della città
              nell&apos;architettura, nell&apos;urbanismo e nella trasformazione urbana sostenibile.
            </p>
            <p className="text-lg leading-relaxed">
              Questa designazione evidenzia la capacità unica di Barcellona di connettere
              design, innovazione, spazi pubblici e responsabilità ambientale, rafforzando
              la sua posizione come riferimento internazionale per le città del futuro.
            </p>
            <p className="text-lg leading-relaxed">
              In questo contesto, WGIC26 Barcellona - Lleida contribuirà alla
              conversazione globale su come le infrastrutture verdi e le soluzioni basate
              sulla natura possano aiutare a creare ambienti urbani più resilienti, vivibili e
              sani.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri di più sul programma e sui dettagli di registrazione qui.
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Rimani connesso con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              I nostri canali ufficiali sono ora attivi.
            </p>
            <p className="text-lg leading-relaxed">
              Segui WGIC26 su{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                LinkedIn
              </a>
              e{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>{' '}
              per rimanere aggiornato con gli ultimi annunci, relatori, aggiornamenti sul programma e
              traguardi chiave in vista del congresso.
            </p>
            <p className="text-lg leading-relaxed">
              Unisciti alla conversazione e fai parte della comunità globale che sta
              plasmando il futuro delle infrastrutture verdi e delle soluzioni basate sulla
              natura.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Diventa nostro sponsor
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Iscriviti alla newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="it" />
        </div>
        </section>
    </div>
  );
};

export default May2026Newsletter4Italian;
