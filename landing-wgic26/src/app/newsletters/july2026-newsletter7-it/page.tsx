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
              Newsletter di luglio 2026 #2
            </h2>
          </div>

          {/* Il tuo accesso a WGIC26 inizia */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Il tuo accesso a WGIC26 inizia qui!
            </h3>
            <p className="text-lg leading-relaxed">Le registrazioni sono ora aperte per il Congresso Mondiale sulle Infrastrutture Verdi 2026.</p>
            <p className="text-lg leading-relaxed">Dal 27 al 30 ottobre, Barcellona e Lleida accoglieranno ricercatori, professionisti, responsabili politici, aziende ed esperti internazionali che lavorano all&apos;avanguardia delle infrastrutture verdi e delle soluzioni basate sulla natura.</p>
            <p className="text-lg leading-relaxed">Il congresso offrirà un&apos;opportunità unica di partecipare a conferenze principali, sessioni scientifiche, workshop tematici, visite tecniche, esposizioni e attività di networking con la comunità globale delle infrastrutture verdi.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Assicurati il tuo biglietto e scopri le opzioni di registrazione qui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-1.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* WGIC26 apre la porta a opportu */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Scopri di più sul Journal of Living Architecture qui.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Sponsorizza WGIC26 e connettit */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Sponsorizza WGIC26 e connettiti con i leader della sostenibilità urbana
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continua a costruire un ecosistema internazionale di aziende, organizzazioni e istituzioni impegnate nell&apos;avanzamento delle infrastrutture verdi, della sostenibilità urbana e delle soluzioni basate sulla natura.</p>
            <p className="text-lg leading-relaxed">Diventare sponsor è un&apos;opportunità per collegare il tuo marchio con un pubblico globale di ricercatori, architetti, ingegneri, professionisti del paesaggio, istituzioni pubbliche, leader del settore e decisori che stanno plasmando il futuro di città più verdi e resilienti.</p>
            <p className="text-lg leading-relaxed">Sponsor e partner guadagneranno visibilità durante il congresso e diventeranno parte di una piattaforma progettata per promuovere collaborazione, innovazione e impatto a lungo termine nel settore.</p>
            <p className="text-lg leading-relaxed">Sei interessato a unirti a WGIC26 come sponsor o partner?</p>
            <p className="text-lg leading-relaxed">Contattaci a: sponsorship@wgic26.org</p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-6.jpg"
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

export default July2026Newsletter7Italian;
