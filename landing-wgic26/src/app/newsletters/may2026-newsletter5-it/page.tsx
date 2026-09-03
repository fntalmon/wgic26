import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter5Italian = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Maggio 2026"
        description="Ultima settimana per inviare il tuo articolo, nuova relatrice confermata Dorothy Aseyo, sponsor e rimani connesso"
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
              src="/newsletters/img/nl5/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Call for Papers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Ultima settimana per inviare il tuo articolo a WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              La Call for Papers &amp; Projects per il World Green Infrastructure Congress
              2026 (WGIC26) sta entrando nella sua ultima settimana.
            </p>
            <p className="text-lg leading-relaxed">
              Ricercatori, professionisti, designer, responsabili politici e professionisti del
              settore sono invitati a presentare i loro contributi su infrastrutture verdi e
              soluzioni basate sulla natura prima della scadenza ufficiale.
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 accoglie ricerche originali, casi studio e applicazioni innovative in
              formato breve (massimo 5 pagine, MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Tutte le sottomissioni saranno sottoposte a un rigoroso processo di
              revisione paritaria e gli articoli accettati saranno pubblicati negli atti ufficiali
              del congresso. I contributi selezionati saranno anche considerati per numeri
              speciali in Urban Forestry &amp; Urban Greening (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Scadenza finale: 31 maggio 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Scopri le linee guida per la sottomissione e accedi alla piattaforma qui.
              </a>
            </p>
          </div>

          {/* Confirmed Speaker */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Nuovo relatore confermato: Dorothy Aseyo
            </h3>
            <p className="text-lg leading-relaxed">
              Dorothy Aseyo si occupa di conservazione ambientale, empowerment della
              comunità, mezzi di sussistenza sostenibili e resilienza climatica,
              promuovendo soluzioni basate sulla natura e azioni di base per costruire
              società più resilienti e inclusive.
            </p>
            <p className="text-lg leading-relaxed">
              In qualità di Direttore Esecutivo del The Green Belt Movement, fondato dalla
              vincitrice del Premio Nobel per la Pace Wangari Maathai, il suo lavoro
              contribuisce ad avanzare il dialogo globale sulla sostenibilità, giustizia
              ambientale e trasformazione guidata dalla comunità.
            </p>
            <p className="text-lg leading-relaxed">
              A WGIC26, porterà preziose intuizioni alla discussione su come le
              infrastrutture verdi possano supportare comunità più sane e resilienti in
              tutto il mondo.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Altri relatori e aggiornamenti sul programma saranno annunciati a breve qui.
              </a>
            </p>
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/photo-5.jpg"
                alt=""
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Sponsors */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Unisciti a WGIC26 come Sponsor
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 continua a crescere grazie al supporto di organizzazioni leader
              impegnate nel futuro delle infrastrutture verdi e delle soluzioni basate sulla
              natura.
            </p>
            <p className="text-lg leading-relaxed">
              Siamo orgogliosi di contare sul supporto di aziende e organizzazioni come:
            </p>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/sponsors-strip.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Hunter",
                "Sempergreen",
                "ZinCo",
                "JardínMóvil",
                "Eixverd",
                "Verdtical",
                "Greenroofs",
                "ASESCUVE",
                "PRONATUR",
              ].map((sponsor) => (
                <div key={sponsor} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center">
                  <div className="font-semibold text-neutral-800">{sponsor}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Diventa parte di una piattaforma internazionale che collega ricercatori,
              responsabili politici, architetti, ingegneri, leader del settore e innovatori di
              tutto il mondo.
            </p>
            <p className="text-lg leading-relaxed">
              Per opportunità di sponsorizzazione e informazioni sulle partnership,
              contatta{" "}
              <a href="mailto:sponsorship@wgic26.org" className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera">
                sponsorship@wgic26.org
              </a>
            </p>
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
              src="/newsletters/img/nl5/photo-11.jpg"
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

export default May2026Newsletter5Italian;
