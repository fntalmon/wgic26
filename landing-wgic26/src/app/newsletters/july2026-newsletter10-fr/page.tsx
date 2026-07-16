import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter10French = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Bulletin - Juillet 2026 #5"
        description="Billets Early Bird disponibles jusqu&apos;au 30 septembre, explorez Barcelone à travers les visites techniques de WGIC26, et l&apos;IDAEA soutient WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Bulletin de juillet 2026 #5
            </h2>
          </div>

          {/* Les billets Early Bird disponi */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Les billets Early Bird disponibles jusqu&apos;au 30 septembre
            </h3>
            <p className="text-lg leading-relaxed">Les billets Early Bird pour WGIC26 sont désormais disponibles sur le site officiel de l&apos;événement.</p>
            <p className="text-lg leading-relaxed">Du 27 au 30 octobre 2026, Barcelone et Lleida accueilleront la communauté internationale des infrastructures vertes pour quatre jours de conférences, de sessions scientifiques, de visites techniques, d&apos;expositions et de réseautage.</p>
            <p className="text-lg leading-relaxed">Rejoignez des chercheurs, des praticiens, des entreprises, des institutions publiques et des leaders de l&apos;industrie travaillant à façonner des villes plus saines, plus sûres et plus résilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Achetez vos billets Early Bird jusqu&apos;au 30 septembre ici.
              </a>
            </p>
          </div>

          {/* Explorez Barcelone à travers l */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Explorez Barcelone à travers les visites techniques de WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Les participants de WGIC26 auront l&apos;opportunité de visiter certains des toits verts et façades végétalisées les plus emblématiques de Barcelone.</p>
            <p className="text-lg leading-relaxed">Ces visites techniques offriront un accès direct à des projets d&apos;infrastructure verte à travers la ville, reliant théorie, pratique et véritable transformation urbaine.</p>
            <p className="text-lg leading-relaxed">Les groupes seront limités, avec des guides spécialisés à chaque emplacement.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Découvrez les visites techniques ici.
              </a>
            </p>
          </div>

          {/* IDAEA soutient WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              IDAEA soutient WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nous sommes heureux d&apos;annoncer le soutien de l&apos;IDAEA, l&apos;Institut d&apos;Évaluation Environnementale et de Recherche sur l&apos;Eau, pour WGIC26.</p>
            <p className="text-lg leading-relaxed">L&apos;IDAEA apporte une forte perspective scientifique sur l&apos;évaluation environnementale, la qualité de l&apos;eau, la qualité de l&apos;air et l&apos;impact de l&apos;activité humaine sur les écosystèmes.</p>
            <p className="text-lg leading-relaxed">Son soutien renforce le caractère interdisciplinaire de WGIC26 et sa connexion avec des enjeux clés tels que la résilience climatique, la gestion de l&apos;eau et des environnements urbains plus sains.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Rencontrez tous nos sponsors et soutiens ici.
              </a>
            </p>
          </div>

          {/* Restez connecté avec WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Restez connecté avec WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nos canaux officiels sont désormais actifs. Suivez WGIC26 sur LinkedIn et Instagram pour rester informé des dernières annonces, des intervenants, des mises à jour du programme et des étapes clés menant au congrès. Participez à la conversation et faites partie de la communauté mondiale qui façonne l&apos;avenir de l&apos;infrastructure verte et des solutions basées sur la nature.</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/registration"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Achetez votre billet anticipé
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

export default July2026Newsletter10French;
