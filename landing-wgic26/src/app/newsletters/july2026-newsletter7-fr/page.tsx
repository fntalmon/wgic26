import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter7French = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Bulletin - Juillet 2026 #2"
        description="Les inscriptions sont ouvertes, opportunités de publication scientifique, sponsorisez WGIC26 et restez connecté"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Bulletin de juillet 2026 #2
            </h2>
          </div>

          {/* Votre porte d'entrée vers WGIC */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Votre porte d&apos;entrée vers WGIC26 commence ici !
            </h3>
            <p className="text-lg leading-relaxed">Les inscriptions sont désormais ouvertes pour le Congrès Mondial sur l&apos;Infrastructure Verte 2026.</p>
            <p className="text-lg leading-relaxed">Du 27 au 30 octobre, Barcelone et Lleida accueilleront des chercheurs, des praticiens, des décideurs, des entreprises et des experts internationaux travaillant à la pointe de l&apos;infrastructure verte et des solutions basées sur la nature.</p>
            <p className="text-lg leading-relaxed">Le congrès offrira une occasion unique d&apos;assister à des conférences plénières, des sessions scientifiques, des ateliers thématiques, des visites techniques, des expositions et des activités de réseautage avec la communauté mondiale de l&apos;infrastructure verte.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Réservez votre billet et découvrez les options d&apos;inscription ici.
              </a>
            </p>
          </div>

          {/* WGIC26 ouvre la porte à des op */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              WGIC26 ouvre la porte à des opportunités de publication scientifique
            </h3>
            <p className="text-lg leading-relaxed">Les auteurs dont les articles ont été acceptés pour présentation à WGIC26 auront l&apos;opportunité de gagner en visibilité grâce à des publications scientifiques de premier plan dans le domaine.</p>
            <p className="text-lg leading-relaxed">Parmi ces opportunités, certaines contributions sélectionnées peuvent être considérées pour une publication accélérée dans un numéro spécial du Journal of Living Architecture (JLIV), la revue à comité de lecture de la Green Infrastructure Foundation (GIF), affiliée à Green Roofs for Healthy Cities (GRHC).</p>
            <p className="text-lg leading-relaxed">JLIV est rédigé, examiné et édité par des professionnels de l&apos;architecture vivante et partage des recherches originales, des applications éducatives, des perspectives académiques, des ressources et des discussions critiques liées au secteur de l&apos;architecture vivante.</p>
            <p className="text-lg leading-relaxed">Cette opportunité renforce l&apos;engagement de WGIC26 à soutenir la recherche de haute qualité et à aider les auteurs acceptés à étendre l&apos;impact de leur travail au-delà du congrès.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Découvrez-en plus sur le Journal of Living Architecture ici.
              </a>
            </p>
          </div>

          {/* Sponsorisez WGIC26 et connecte */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Sponsorisez WGIC26 et connectez-vous avec les leaders de la durabilité urbaine
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continue de construire un écosystème international d&apos;entreprises, d&apos;organisations et d&apos;institutions engagées à faire progresser l&apos;infrastructure verte, la durabilité urbaine et les solutions basées sur la nature.</p>
            <p className="text-lg leading-relaxed">Devenir sponsor est une opportunité de connecter votre marque avec un public mondial de chercheurs, d&apos;architectes, d&apos;ingénieurs, de professionnels du paysage, d&apos;institutions publiques, de leaders de l&apos;industrie et de décideurs qui façonnent l&apos;avenir de villes plus vertes et plus résilientes.</p>
            <p className="text-lg leading-relaxed">Les sponsors et partenaires bénéficieront d&apos;une visibilité tout au long du congrès et feront partie d&apos;une plateforme conçue pour favoriser la collaboration, l&apos;innovation et un impact à long terme dans le secteur.</p>
            <p className="text-lg leading-relaxed">Intéressé à rejoindre WGIC26 en tant que sponsor ou partenaire ?</p>
            <p className="text-lg leading-relaxed">Contactez-nous à : sponsorship@wgic26.org</p>
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

export default July2026Newsletter7French;
