import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter10Italian = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Luglio 2026 #5"
        description="Biglietti Early Bird disponibili fino al 30 settembre, esplora Barcellona attraverso le Visite Tecniche di WGIC26, e IDAEA supporta WGIC26"
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
              Newsletter di luglio 2026 #5
            </h2>
          </div>

          {/* I biglietti Early Bird sono di */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              I biglietti Early Bird sono disponibili fino al 30 settembre
            </h3>
            <p className="text-lg leading-relaxed">I biglietti Early Bird per WGIC26 sono ora disponibili attraverso il sito ufficiale dell&apos;evento.</p>
            <p className="text-lg leading-relaxed">Dal 27 al 30 ottobre 2026, Barcellona e Lleida accoglieranno la comunità internazionale delle infrastrutture verdi per quattro giorni di conferenze, sessioni scientifiche, visite tecniche, mostre e networking.</p>
            <p className="text-lg leading-relaxed">Unisciti a ricercatori, professionisti, aziende, istituzioni pubbliche e leader del settore che lavorano per plasmare città più sane, più sicure e più resilienti.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Acquista i tuoi biglietti Early Bird fino al 30 settembre qui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/collage.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Esplora Barcellona attraverso  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Esplora Barcellona attraverso le Visite Tecniche di WGIC26
            </h3>
            <p className="text-lg leading-relaxed">I partecipanti a WGIC26 avranno l&apos;opportunità di visitare alcuni dei tetti verdi e delle facciate verdi più emblematiche di Barcellona.</p>
            <p className="text-lg leading-relaxed">Queste visite tecniche offriranno accesso diretto a progetti di infrastruttura verde in tutta la città, collegando teoria, pratica e vera trasformazione urbana.</p>
            <p className="text-lg leading-relaxed">I gruppi saranno limitati, con guide specializzate in ogni luogo.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Scopri le visite tecniche qui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-10.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* IDAEA supporta WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              IDAEA supporta WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Siamo lieti di annunciare il supporto di IDAEA, l&apos;Istituto di Valutazione Ambientale e Ricerca sulle Acque, per WGIC26.</p>
            <p className="text-lg leading-relaxed">IDAEA porta una forte prospettiva scientifica sulla valutazione ambientale, la qualità dell&apos;acqua, la qualità dell&apos;aria e l&apos;impatto dell&apos;attività umana sugli ecosistemi.</p>
            <p className="text-lg leading-relaxed">Il suo supporto rafforza il carattere interdisciplinare di WGIC26 e la sua connessione con sfide chiave come la resilienza climatica, la gestione dell&apos;acqua e ambienti urbani più sani.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Incontra tutti i nostri sponsor e sostenitori qui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-11.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Rimani connesso con WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Rimani connesso con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">I nostri canali ufficiali sono ora attivi. Segui WGIC26 su LinkedIn e Instagram per rimanere aggiornato con gli ultimi annunci, relatori, aggiornamenti del programma e traguardi chiave che precedono il congresso. Unisciti alla conversazione e fai parte della comunità globale che sta plasmando il futuro delle infrastrutture verdi e delle soluzioni basate sulla natura.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://panel.helice.app/w/wgic26/214760/registration"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Acquista il tuo biglietto early bird
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

export default July2026Newsletter10Italian;
