import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026Newsletter2ItalianNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Marzo 2026"
        description="Aggiornamenti sulla sezione Salute & Benessere, nuovo relatore e proroga della scadenza"
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
              Newsletter di Marzo 2026
            </h2>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <p className="text-lg leading-relaxed">
              Il 12°{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Congresso Mondiale sull&apos;Infrastruttura Verde{" "}
              </a>
              si terrà a Barcellona e Lleida (Catalogna, Spagna) dal 27 al 30
              ottobre 2026.
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Salute e Benessere: un tema centrale del WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Come possiamo valutare meglio l&apos;impatto del design biofilico sulla
              salute e sul benessere umano?
            </p>
            <p className="text-lg leading-relaxed">
              Quale ruolo possono svolgere iniziative come la Prescrizione
              Sociale Verde nella creazione di città più sane?
            </p>
            <p className="text-lg leading-relaxed">
              Queste sono alcune delle domande chiave che guidano una delle tre
              principali linee tematiche del WGIC26 Barcellona – Lleida.
            </p>
            <p className="text-lg leading-relaxed">
              La Rete Mondiale di Infrastruttura Verde (WGIN) promuove da tempo
              l&apos;integrazione dell&apos;infrastruttura verde negli ambienti urbani,
              beneficiando sia le persone che il pianeta. Tuttavia, oggi esiste
              ancora una chiara sfida: rafforzare il legame tra la natura urbana
              e la salute umana.
            </p>
            <p className="text-lg leading-relaxed">
              Al WGIC26, questo tema sarà esplorato attraverso una linea
              dedicata alla Salute e al Benessere, ispirata all&apos;ultimo rapporto
              dell&apos;OMS &quot;Soluzioni basate sulla natura e salute&quot; (maggio 2025).
            </p>
            <p className="text-lg leading-relaxed">
              Questa linea si concentrerà sull&apos;integrazione pratica delle
              soluzioni basate sulla natura nei quadri di salute, politiche
              pubbliche e strategie di pianificazione urbana, promuovendo una
              collaborazione più forte tra i settori dell&apos;infrastruttura verde e
              della salute.
            </p>
            <p className="text-lg leading-relaxed">
              L&apos;obiettivo è avanzare nella ricerca, informare le politiche e
              rafforzare il ruolo della natura urbana nel miglioramento della
              qualità della vita.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Esplora il programma completo del WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Nuovo relatore confermato
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl2/photo-5.jpg"
                alt=""
                className="w-full max-w-xs mx-auto rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-cactus mb-2">
                Wendy Y. Chen
              </h4>
              <p className="text-sm text-neutral-600">
                Professoressa presso l&apos;HKU in infrastruttura verde-blu.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                La professoressa Wendy Y. Chen si specializza in infrastruttura
                urbana verde-blu, con un forte focus sulla valutazione e
                modellazione del suo impatto sulla sostenibilità urbana e sulla
                qualità della vita.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                La sua ricerca affronta sfide chiave nella comprensione di come
                gli spazi verde-blu vengano progettati, trasformati e integrati
                nei sistemi urbani, combinando prospettive ambientali,
                economiche e sociali.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Attraverso il suo lavoro, contribuisce ad avanzare nella
                valutazione quantitativa delle soluzioni basate sulla natura,
                aiutando a informare una pianificazione urbana e una
                formulazione di politiche più efficaci.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Al WGIC26, porterà preziose conoscenze al dialogo su
                infrastruttura verde e soluzioni basate sulla natura.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Scadenza per la presentazione prorogata
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Scadenza precedente:</span>
                  <span className="font-semibold text-neutral-800">
                    15 marzo 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-cactus font-bold">Nuova scadenza:</span>
                  <span className="font-bold text-cactus">30 aprile 2026</span>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              Siamo lieti di annunciare che la scadenza per la presentazione di
              lavori e progetti è stata prorogata.
            </p>
            <p className="text-lg leading-relaxed">
              Ricercatori, professionisti, designer e responsabili politici ora
              hanno tempo aggiuntivo per inviare il proprio lavoro.
            </p>
            <p className="text-lg leading-relaxed">
              Il WGIC26 accoglie ricerche originali, casi studio e applicazioni
              innovative in infrastruttura verde e soluzioni basate sulla
              natura. Le presentazioni devono essere effettuate in formato di
              articolo breve (massimo 5 pagine, MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Tutti i lavori presentati passeranno attraverso un rigoroso
              processo di revisione tra pari, guidato dal Comitato Scientifico,
              che determinerà l&apos;accettazione e il formato di presentazione
              (orale o poster).
            </p>
            <p className="text-lg leading-relaxed">
              Le contribuzioni accettate saranno pubblicate negli atti ufficiali
              del WGIC26, offrendo visibilità internazionale all&apos;interno della
              comunità globale di infrastruttura verde.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/speakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Scopri come inviare correttamente il tuo lavoro o progetto per il
                WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Rimani connesso con il WGIC26
            </h3>
            <p>I nostri canali ufficiali sono già attivi.</p>
            <p>
              Segui il WGIC26 su{" "}
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
              per rimanere aggiornato con gli ultimi annunci, relatori,
              aggiornamenti del programma e traguardi chiave che portano al
              congresso.
            </p>
            <p>
              Unisciti alla conversazione e fai parte della comunità globale che
              sta plasmando il futuro dell&apos;infrastruttura verde e delle
              soluzioni basate sulla natura.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl2/photo-6.jpg"
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

export default March2026Newsletter2ItalianNewsletter;
