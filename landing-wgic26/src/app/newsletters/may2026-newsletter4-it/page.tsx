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

      <section className="w-full py-10 px-4">
        <div className="max-w-[640px] mx-auto bg-white text-neutral-700 shadow-2xl">
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-neutral-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/wgic26-logo.png"
              alt="WGIC26"
              className="h-14 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-cactus">
              Newsletter di Maggio 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Deadline Extended */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Scadenza precedente</div>
                <div className="text-lg font-semibold text-neutral-800">30 aprile 2026</div>
              </div>
              <div className="text-cactus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-cactus uppercase tracking-wider font-semibold">Nuova scadenza</div>
                <div className="text-lg font-semibold text-cactus">31 maggio 2026</div>
              </div>
            </div>

            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Scopri le linee guida per la presentazione e accedi alla piattaforma qui.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-5.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-6.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-11.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
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
                <div key={speaker.name} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-800">{speaker.name}</div>
                  <div className="text-sm text-neutral-500">{speaker.role}</div>
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Altri relatori e aggiornamenti sul programma saranno annunciati presto qui.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Scopri di più sul programma e sui dettagli di registrazione qui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-12.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Stay Connected */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              e{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
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
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-13.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Diventa nostro sponsor
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Iscriviti alla newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="it" light />
        </div>
        </section>
    </div>
  );
};

export default May2026Newsletter4Italian;
