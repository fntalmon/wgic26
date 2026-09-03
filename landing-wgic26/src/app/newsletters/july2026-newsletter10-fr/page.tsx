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
              Bulletin de juillet 2026 #5
            </h2>
          </div>

          {/* Les billets Early Bird disponi */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Les billets Early Bird disponibles jusqu&apos;au 30 septembre
            </h3>
            <p className="text-lg leading-relaxed">Les billets Early Bird pour WGIC26 sont désormais disponibles sur le site officiel de l&apos;événement.</p>
            <p className="text-lg leading-relaxed">Du 27 au 30 octobre 2026, Barcelone et Lleida accueilleront la communauté internationale des infrastructures vertes pour quatre jours de conférences, de sessions scientifiques, de visites techniques, d&apos;expositions et de réseautage.</p>
            <p className="text-lg leading-relaxed">Rejoignez des chercheurs, des praticiens, des entreprises, des institutions publiques et des leaders de l&apos;industrie travaillant à façonner des villes plus saines, plus sûres et plus résilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Achetez vos billets Early Bird jusqu&apos;au 30 septembre ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/collage.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Explorez Barcelone à travers l */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez les visites techniques ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-10.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* IDAEA soutient WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Rencontrez tous nos sponsors et soutiens ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-11.jpg"
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

export default July2026Newsletter10French;
