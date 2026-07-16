import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter7Italian = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Luglio 2026 #2"
        description="Le registrazioni sono aperte, opportunità di pubblicazione scientifica, sponsorizza WGIC26 e rimani connesso"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di luglio 2026 #2
            </h2>
          </div>

          {/* Il tuo accesso a WGIC26 inizia */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Il tuo accesso a WGIC26 inizia qui!
            </h3>
            <p className="text-lg leading-relaxed">Le registrazioni sono ora aperte per il Congresso Mondiale sulle Infrastrutture Verdi 2026.</p>
            <p className="text-lg leading-relaxed">Dal 27 al 30 ottobre, Barcellona e Lleida accoglieranno ricercatori, professionisti, responsabili politici, aziende ed esperti internazionali che lavorano all&apos;avanguardia delle infrastrutture verdi e delle soluzioni basate sulla natura.</p>
            <p className="text-lg leading-relaxed">Il congresso offrirà un&apos;opportunità unica di partecipare a conferenze principali, sessioni scientifiche, workshop tematici, visite tecniche, esposizioni e attività di networking con la comunità globale delle infrastrutture verdi.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Assicurati il tuo biglietto e scopri le opzioni di registrazione qui.
              </a>
            </p>
          </div>

          {/* WGIC26 apre la porta a opportu */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              WGIC26 apre la porta a opportunità di pubblicazione scientifica
            </h3>
            <p className="text-lg leading-relaxed">Gli autori i cui articoli sono stati accettati per la presentazione a WGIC26 avranno l&apos;opportunità di ottenere ulteriore visibilità attraverso importanti pubblicazioni scientifiche nel settore.</p>
            <p className="text-lg leading-relaxed">Tra queste opportunità, i contributi selezionati potrebbero essere presi in considerazione per una pubblicazione accelerata in un Numero Speciale del Journal of Living Architecture (JLIV), la rivista peer-reviewed della Green Infrastructure Foundation (GIF), affiliata a Green Roofs for Healthy Cities (GRHC).</p>
            <p className="text-lg leading-relaxed">JLIV è scritto, revisionato e curato da professionisti dell&apos;architettura vivente e condivide ricerche originali, applicazioni educative, prospettive accademiche, risorse e discussioni critiche relative al settore dell&apos;architettura vivente.</p>
            <p className="text-lg leading-relaxed">Questa opportunità rafforza l&apos;impegno di WGIC26 nel sostenere ricerche di alta qualità e aiutare gli autori accettati ad estendere l&apos;impatto del loro lavoro oltre il congresso.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri di più sul Journal of Living Architecture qui.
              </a>
            </p>
          </div>

          {/* Sponsorizza WGIC26 e connettit */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Sponsorizza WGIC26 e connettiti con i leader della sostenibilità urbana
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continua a costruire un ecosistema internazionale di aziende, organizzazioni e istituzioni impegnate nell&apos;avanzamento delle infrastrutture verdi, della sostenibilità urbana e delle soluzioni basate sulla natura.</p>
            <p className="text-lg leading-relaxed">Diventare sponsor è un&apos;opportunità per collegare il tuo marchio con un pubblico globale di ricercatori, architetti, ingegneri, professionisti del paesaggio, istituzioni pubbliche, leader del settore e decisori che stanno plasmando il futuro di città più verdi e resilienti.</p>
            <p className="text-lg leading-relaxed">Sponsor e partner guadagneranno visibilità durante il congresso e diventeranno parte di una piattaforma progettata per promuovere collaborazione, innovazione e impatto a lungo termine nel settore.</p>
            <p className="text-lg leading-relaxed">Sei interessato a unirti a WGIC26 come sponsor o partner?</p>
            <p className="text-lg leading-relaxed">Contattaci a: sponsorship@wgic26.org</p>
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

export default July2026Newsletter7Italian;
