import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter9Italian = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Luglio 2026 #4"
        description="I biglietti Early Bird sono ora in vendita, Naturbana supporta WGIC26 e le presentazioni dei poster sono aperte fino al 30 settembre"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di luglio 2026 #4
            </h2>
          </div>

          {/* I biglietti Early Bird sono or */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              I biglietti Early Bird sono ora in vendita
            </h3>
            <p className="text-lg leading-relaxed">I biglietti Early Bird per il WGIC26 - 12° Congresso Mondiale sulle Infrastrutture Verdi sono disponibili fino al 30 settembre 2026.</p>
            <p className="text-lg leading-relaxed">Che tu stia partecipando come individuo, organizzazione o team, il WGIC26 è la tua opportunità di far parte della conversazione globale sulle infrastrutture verdi, le soluzioni basate sulla natura e i futuri urbani più sani.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Registrati ora qui.
              </a>
            </p>
          </div>

          {/* Naturbana supporta il WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Naturbana supporta il WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Siamo lieti di annunciare che Naturbana supporta il WGIC26 e sarà con noi al congresso.</p>
            <p className="text-lg leading-relaxed">La sua partecipazione è un traguardo altamente rilevante, soprattutto considerando il suo legame con l&apos;area ministeriale collegata all&apos;ambito del WGIC26.</p>
            <p className="text-lg leading-relaxed">Questo supporto rafforza il WGIC26 come punto di incontro tra istituzioni, professionisti, ricercatori e organizzazioni che lavorano per promuovere le infrastrutture verdi e la resilienza urbana.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri tutti i sostenitori e i partner del WGIC26 qui.
              </a>
            </p>
          </div>

          {/* Le presentazioni dei poster so */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Le presentazioni dei poster sono aperte fino al 30 settembre
            </h3>
            <p className="text-lg leading-relaxed">Le presentazioni dei poster rimarranno aperte fino al 30 settembre 2026, creando una nuova opportunità per professionisti, ricercatori, studenti, organizzazioni e team di progetto per presentare il proprio lavoro al congresso.</p>
            <p className="text-lg leading-relaxed">Tutti i poster presentati entro la scadenza avranno l&apos;opportunità di essere inclusi negli Atti ufficiali del WGIC26, che raccolgono i documenti e i poster accettati.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Invia il tuo poster qui prima del 30 settembre.
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

export default July2026Newsletter9Italian;
