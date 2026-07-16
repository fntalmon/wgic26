import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter6Italian = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Luglio 2026"
        description="Grazie per le vostre sottomissioni, inizia il processo di revisione, una risposta globale da 32 paesi e scopri il CCIB"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di luglio 2026
            </h2>
          </div>

          {/* Grazie per le vostre sottomiss */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Grazie per le vostre sottomissioni: inizia il processo di revisione
            </h3>
            <p className="text-lg leading-relaxed">La Call for Papers &amp; Projects di WGIC26 è ora conclusa. Vorremmo ringraziare tutti i ricercatori, professionisti, designer e operatori che hanno condiviso il loro lavoro con noi. Il Comitato Scientifico sta ora esaminando ogni sottomissione. Una volta completato il processo di valutazione, ogni autore sarà contattato direttamente e informato se il proprio articolo o progetto è stato selezionato per far parte di WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri i prossimi passi nel processo di sottomissione e revisione qui.
              </a>
            </p>
          </div>

          {/* Una risposta globale da 32 pae */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Una risposta globale da 32 paesi
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 ha ricevuto articoli e progetti da autori che rappresentano 32 paesi in Europa, Asia, Nord America, Sud America e Oceania.</p>
            <p className="text-lg leading-relaxed">I paesi con il maggior numero di sottomissioni includono:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>Spagna: 20</li>
              <li>Austria: 14</li>
              <li>Stati Uniti: 10</li>
              <li>Italia: 7</li>
              <li>Australia: 6</li>
              <li>Francia: 6</li>
              <li>Paesi Bassi: 6</li>
              <li>Germania: 6</li>
              <li>Belgio: 6</li>
            </ul>
            <p className="text-lg leading-relaxed">Questa diversità geografica riflette la portata internazionale di WGIC26 e il crescente interesse globale per le infrastrutture verdi e le soluzioni basate sulla natura.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Scopri di più sulla comunità internazionale che si riunisce a WGIC26 qui.
              </a>
            </p>
          </div>

          {/* Scopri il CCIB: la sede princi */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Scopri il CCIB: la sede principale di WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Dal 27 al 29 ottobre, WGIC26 si svolgerà presso il Centro Congressi Internazionale di Barcellona (CCIB), situato nel Parc del Fòrum. Con spazi versatili, luce naturale e capacità per eventi internazionali su larga scala, il CCIB offrirà il contesto per discorsi principali, sessioni scientifiche, mostre e opportunità di networking. Situato vicino alla spiaggia e ben collegato al centro città di Barcellona e all&apos;aeroporto, offre un ambiente ideale per accogliere la comunità globale delle infrastrutture verdi.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Pianifica la tua visita a Barcellona e scopri di più sulla destinazione qui.
              </a>
            </p>
          </div>

          {/* Rimani connesso con WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Rimani connesso con WGIC26
            </h3>
            <p className="text-lg leading-relaxed">I nostri canali ufficiali sono ora attivi. Segui WGIC26 su LinkedIn e Instagram per rimanere aggiornato con gli ultimi annunci, relatori, aggiornamenti del programma e traguardi chiave in vista del congresso. Unisciti alla conversazione e fai parte della comunità globale che sta plasmando il futuro delle infrastrutture verdi e delle soluzioni basate sulla natura.</p>
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

export default July2026Newsletter6Italian;
