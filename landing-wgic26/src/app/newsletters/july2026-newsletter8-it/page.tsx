import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter8Italian = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Luglio 2026 #3"
        description="Maria Buhigas partecipa a WGIC26, la resilienza climatica guida la conversazione e i biglietti sono ora disponibili"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di luglio 2026 #3
            </h2>
          </div>

          {/* Maria Buhigas partecipa a WGIC */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Maria Buhigas partecipa a WGIC26!
            </h3>
            <p className="text-lg leading-relaxed">Siamo lieti di annunciare Maria Buhigas come relatrice al World Green Infrastructure Congress 2026 (WGIC26).</p>
            <p className="text-lg leading-relaxed">In qualità di Chief Architect del Comune di Barcellona, Buhigas porta una prospettiva strategica sulla pianificazione urbana, gli spazi pubblici, l&apos;architettura e la trasformazione delle città in risposta alle sfide sociali e ambientali odierne.</p>
            <p className="text-lg leading-relaxed">La sua partecipazione è particolarmente rilevante in un anno in cui Barcellona si trova al centro della conversazione architettonica globale, rafforzando il legame tra innovazione urbana, infrastrutture verdi e creazione di città più sane.</p>
            <p className="text-lg leading-relaxed">A WGIC26, il suo contributo aiuterà a definire il ruolo delle città nel promuovere futuri urbani più resilienti, inclusivi e integrati con la natura.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri i relatori confermati qui.
              </a>
            </p>
          </div>

          {/* Cosa rivelano i documenti: la  */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Cosa rivelano i documenti: la resilienza climatica guida la conversazione
            </h3>
            <p className="text-lg leading-relaxed">L&apos;analisi dei documenti presentati a WGIC26 conferma una chiara tendenza: la resilienza climatica è una delle priorità principali per la comunità internazionale delle infrastrutture verdi.</p>
            <p className="text-lg leading-relaxed">Tra i temi più ricorrenti, le presentazioni evidenziano l&apos;importanza crescente della gestione dell&apos;acqua, delle soluzioni basate sulla natura, della sostenibilità urbana, della salute e del benessere, della biodiversità, della qualità dell&apos;aria, delle tecnologie e della progettazione dei progetti.</p>
            <p className="text-lg leading-relaxed">Più della metà dei contributi analizzati si concentra sugli impatti delle infrastrutture verdi, mostrando come ricercatori e professionisti stiano lavorando per misurare, progettare e implementare soluzioni che rispondano a reali sfide urbane.</p>
            <p className="text-lg leading-relaxed">Questa diversità tematica rafforza WGIC26 come punto di incontro globale per coloro che lavorano per plasmare città più sane, sicure e resilienti.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Esplora i temi principali che plasmano WGIC26 qui.
              </a>
            </p>
          </div>

          {/* I biglietti sono ora disponibi */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              I biglietti sono ora disponibili: prenota il tuo posto a WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Le registrazioni sono ora aperte per il World Green Infrastructure Congress 2026.</p>
            <p className="text-lg leading-relaxed">Dal 27 al 30 ottobre, Barcellona e Lleida accoglieranno ricercatori, professionisti, responsabili politici, aziende, istituzioni pubbliche ed esperti internazionali che lavorano all&apos;avanguardia delle infrastrutture verdi e delle soluzioni basate sulla natura.</p>
            <p className="text-lg leading-relaxed">WGIC26 offrirà un&apos;opportunità unica di partecipare a conferenze, sessioni scientifiche, workshop tematici, visite tecniche, esposizioni e attività di networking con la comunità globale delle infrastrutture verdi.</p>
            <p className="text-lg leading-relaxed">27-29 Ott | CCIB - Parc del Fòrum, Barcellona (Spagna)</p>
            <p className="text-lg leading-relaxed">30 Ott | Università di Lleida - Lleida (Spagna)</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Prenota il tuo biglietto e scopri le opzioni di registrazione qui.
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

export default July2026Newsletter8Italian;
