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
              Bulletin de juillet 2026 #2
            </h2>
          </div>

          {/* Votre porte d'entrée vers WGIC */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Votre porte d&apos;entrée vers WGIC26 commence ici !
            </h3>
            <p className="text-lg leading-relaxed">Les inscriptions sont désormais ouvertes pour le Congrès Mondial sur l&apos;Infrastructure Verte 2026.</p>
            <p className="text-lg leading-relaxed">Du 27 au 30 octobre, Barcelone et Lleida accueilleront des chercheurs, des praticiens, des décideurs, des entreprises et des experts internationaux travaillant à la pointe de l&apos;infrastructure verte et des solutions basées sur la nature.</p>
            <p className="text-lg leading-relaxed">Le congrès offrira une occasion unique d&apos;assister à des conférences plénières, des sessions scientifiques, des ateliers thématiques, des visites techniques, des expositions et des activités de réseautage avec la communauté mondiale de l&apos;infrastructure verte.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Réservez votre billet et découvrez les options d&apos;inscription ici.
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

          {/* WGIC26 ouvre la porte à des op */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez-en plus sur le Journal of Living Architecture ici.
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

          {/* Sponsorisez WGIC26 et connecte */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Sponsorisez WGIC26 et connectez-vous avec les leaders de la durabilité urbaine
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continue de construire un écosystème international d&apos;entreprises, d&apos;organisations et d&apos;institutions engagées à faire progresser l&apos;infrastructure verte, la durabilité urbaine et les solutions basées sur la nature.</p>
            <p className="text-lg leading-relaxed">Devenir sponsor est une opportunité de connecter votre marque avec un public mondial de chercheurs, d&apos;architectes, d&apos;ingénieurs, de professionnels du paysage, d&apos;institutions publiques, de leaders de l&apos;industrie et de décideurs qui façonnent l&apos;avenir de villes plus vertes et plus résilientes.</p>
            <p className="text-lg leading-relaxed">Les sponsors et partenaires bénéficieront d&apos;une visibilité tout au long du congrès et feront partie d&apos;une plateforme conçue pour favoriser la collaboration, l&apos;innovation et un impact à long terme dans le secteur.</p>
            <p className="text-lg leading-relaxed">Intéressé à rejoindre WGIC26 en tant que sponsor ou partenaire ?</p>
            <p className="text-lg leading-relaxed">Contactez-nous à : sponsorship@wgic26.org</p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Restez connecté avec WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Restez connecté avec WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nos canaux officiels sont désormais actifs. Suivez WGIC26 sur LinkedIn et Instagram pour rester informé des dernières annonces, des intervenants, des mises à jour du programme et des étapes clés menant au congrès. Participez à la conversation et faites partie de la communauté mondiale qui façonne l&apos;avenir de l&apos;infrastructure verte et des solutions basées sur la nature.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://panel.helice.app/w/wgic26/214760/registration"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Achetez votre billet anticipé
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Abonnez-vous à la newsletter
            </Link>
          </div>

          <NewsletterFooter language="fr" light />
        </div>
      </section>
    </div>
  );
};

export default July2026Newsletter7French;
