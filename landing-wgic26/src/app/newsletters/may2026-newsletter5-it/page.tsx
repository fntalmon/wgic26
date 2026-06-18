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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter di Maggio 2026
            </h2>
          </div>

          {/* Call for Papers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Scopri le linee guida per la sottomissione e accedi alla piattaforma qui.
              </a>
            </p>
          </div>

          {/* Confirmed Speaker */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Altri relatori e aggiornamenti sul programma saranno annunciati a breve qui.
              </a>
            </p>
          </div>

          {/* Sponsors */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                <div key={sponsor} className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="font-semibold text-white">{sponsor}</div>
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
              <a href="mailto:sponsorship@wgic26.org" className="text-potus">
                sponsorship@wgic26.org
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://web.facebook.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Facebook
              </a>{" "}
              e{" "}
              <a
                href="https://x.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Twitter
              </a>{" "}
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
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Diventa nostro sponsor
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

export default May2026Newsletter5Italian;
