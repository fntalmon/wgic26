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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di luglio 2026 #5
            </h2>
          </div>

          {/* I biglietti Early Bird sono di */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              I biglietti Early Bird sono disponibili fino al 30 settembre
            </h3>
            <p className="text-lg leading-relaxed">I biglietti Early Bird per WGIC26 sono ora disponibili attraverso il sito ufficiale dell&apos;evento.</p>
            <p className="text-lg leading-relaxed">Dal 27 al 30 ottobre 2026, Barcellona e Lleida accoglieranno la comunità internazionale delle infrastrutture verdi per quattro giorni di conferenze, sessioni scientifiche, visite tecniche, mostre e networking.</p>
            <p className="text-lg leading-relaxed">Unisciti a ricercatori, professionisti, aziende, istituzioni pubbliche e leader del settore che lavorano per plasmare città più sane, più sicure e più resilienti.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Acquista i tuoi biglietti Early Bird fino al 30 settembre qui.
              </a>
            </p>
          </div>

          {/* Esplora Barcellona attraverso  */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Scopri le visite tecniche qui.
              </a>
            </p>
          </div>

          {/* IDAEA supporta WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Incontra tutti i nostri sponsor e sostenitori qui.
              </a>
            </p>
          </div>

          {/* Rimani connesso con WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Rimani connesso con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">I nostri canali ufficiali sono ora attivi. Segui WGIC26 su LinkedIn e Instagram per rimanere aggiornato con gli ultimi annunci, relatori, aggiornamenti del programma e traguardi chiave che precedono il congresso. Unisciti alla conversazione e fai parte della comunità globale che sta plasmando il futuro delle infrastrutture verdi e delle soluzioni basate sulla natura.</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/registration"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Acquista il tuo biglietto early bird
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

export default July2026Newsletter10Italian;
