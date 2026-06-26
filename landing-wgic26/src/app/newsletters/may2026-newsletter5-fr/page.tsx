import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter5French = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Mai 2026"
        description="Dernière semaine pour soumettre votre article, nouvelle intervenante confirmée Dorothy Aseyo, sponsors et restez connecté"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de Mai 2026
            </h2>
          </div>

          {/* Call for Papers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Dernière semaine pour soumettre votre article au WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              L&apos;appel à contributions pour le Congrès Mondial sur les Infrastructures
              Vertes 2026 (WGIC26) entre dans sa dernière semaine.
            </p>
            <p className="text-lg leading-relaxed">
              Les chercheurs, praticiens, designers, décideurs et professionnels de
              l&apos;industrie sont invités à soumettre leurs contributions sur les infrastructures
              vertes et les solutions basées sur la nature avant la date limite officielle.
            </p>
            <p className="text-lg leading-relaxed">
              Le WGIC26 accueille des recherches originales, des études de cas et des
              applications innovantes sous forme de courts articles (maximum 5 pages,
              MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Toutes les soumissions passeront par un processus d&apos;évaluation par les
              pairs rigoureux, et les articles acceptés seront publiés dans les actes
              officiels du congrès. Les contributions sélectionnées seront également
              considérées pour des numéros spéciaux dans Urban Forestry &amp; Urban
              Greening (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Date limite finale : 31 mai 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Découvrez les directives de soumission et accédez à la plateforme ici.
              </a>
            </p>
          </div>

          {/* Confirmed Speaker */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Nouvelle intervenante confirmée : Dorothy Aseyo
            </h3>
            <p className="text-lg leading-relaxed">
              Dorothy Aseyo travaille sur la conservation de l&apos;environnement,
              l&apos;autonomisation des communautés, les moyens de subsistance durables
              et la résilience climatique, en promouvant des solutions basées sur la
              nature et l&apos;action de base pour construire des sociétés plus résilientes et
              inclusives.
            </p>
            <p className="text-lg leading-relaxed">
              En tant que Directrice Exécutive du Mouvement de la Ceinture Verte, fondé
              par la lauréate du Prix Nobel de la Paix Wangari Maathai, son travail
              contribue à faire avancer le dialogue mondial sur la durabilité, la justice
              environnementale et la transformation dirigée par la communauté.
            </p>
            <p className="text-lg leading-relaxed">
              Au WGIC26, elle apportera des perspectives précieuses à la discussion sur
              la manière dont les infrastructures vertes peuvent soutenir des
              communautés plus saines et plus résilientes dans le monde entier.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                D&apos;autres intervenants et mises à jour du programme seront annoncés bientôt ici.
              </a>
            </p>
          </div>

          {/* Sponsors */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Rejoignez le WGIC26 en tant que sponsor
            </h3>
            <p className="text-lg leading-relaxed">
              Le WGIC26 continue de croître grâce au soutien d&apos;organisations leaders
              engagées pour l&apos;avenir des infrastructures vertes et des solutions basées
              sur la nature.
            </p>
            <p className="text-lg leading-relaxed">
              Nous sommes fiers de compter sur le soutien d&apos;entreprises et
              d&apos;organisations telles que :
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
              Devenez partie d&apos;une plateforme internationale connectant chercheurs,
              décideurs, architectes, ingénieurs, leaders de l&apos;industrie et innovateurs du
              monde entier.
            </p>
            <p className="text-lg leading-relaxed">
              Pour des opportunités de parrainage et des informations sur les
              partenariats, contactez{" "}
              <a href="mailto:sponsorship@wgic26.org" className="text-potus">
                sponsorship@wgic26.org
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Restez connecté avec le WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Nos canaux officiels sont désormais en ligne.
            </p>
            <p className="text-lg leading-relaxed">
              Suivez le WGIC26 sur{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                LinkedIn
              </a>
              et{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>{' '}
              pour rester informé des dernières annonces, intervenants, mises à jour du programme et
              jalons clés menant au congrès.
            </p>
            <p className="text-lg leading-relaxed">
              Participez à la conversation et faites partie de la communauté mondiale qui
              façonne l&apos;avenir des infrastructures vertes et des solutions basées sur la
              nature.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Devenez notre sponsor
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Abonnez-vous à la newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="fr" />
        </div>
        </section>
    </div>
  );
};

export default May2026Newsletter5French;
