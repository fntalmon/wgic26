import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const April2026Newsletter3FrenchNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - Avril 2026"
        description="Modérateur de session, numéro spécial dans une revue Elsevier, WGIC26 à REBUILD 2026 et restez connecté"
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
              Newsletter d&apos;Avril 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl3/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <p className="text-lg leading-relaxed">
              Le 12e{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Congrès Mondial sur l&apos;Infrastructure Verte{" "}
              </a>
              se tiendra à Barcelone et Lleida (Catalogne, Espagne) du 27 au 30
              octobre 2026.
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Point fort de la session :
            </h3>
            <h4 className="text-xl font-semibold text-neutral-800">
              Luigi Petito en tant que modérateur
            </h4>
            <p className="text-lg leading-relaxed">
              Nous sommes heureux d&apos;annoncer que Luigi Petito rejoindra
              WGIC26 en tant que modérateur de session.
            </p>
            <p className="text-lg leading-relaxed">
              Luigi Petito est le fondateur et directeur général de Business
              Solutions Europa, ainsi que le responsable du secrétariat de
              l&apos;Alliance européenne pour économiser l&apos;énergie et du
              Réseau mondial des infrastructures vertes – chapitre UE. Il est
              également secrétaire général du Groupe européen sur
              l&apos;obésité infantile.
            </p>
            <p className="text-lg leading-relaxed">
              Avec une vaste expérience à l&apos;intersection des politiques, de
              la durabilité et des institutions européennes, sa participation
              apportera une perspective précieuse au dialogue entre
              infrastructures vertes, transition énergétique et santé publique.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez le programme complet de WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Numéro spécial dans une revue Elsevier
            </h3>
            <p className="text-lg leading-relaxed">
              Les meilleures communications présentées à WGIC26 seront publiées
              en priorité dans des numéros spéciaux de Urban Forestry & Urban
              Greening (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              C&apos;est une occasion unique pour les auteurs de gagner en
              visibilité internationale et de contribuer à l&apos;une des
              revues scientifiques les plus reconnues dans le domaine des
              infrastructures vertes urbaines et des solutions basées sur la
              nature.
            </p>
            <p className="text-lg leading-relaxed">
              Toutes les soumissions passeront par un processus d&apos;évaluation
              par les pairs rigoureux, garantissant des normes académiques
              élevées et des contributions impactantes.
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              WGIC26 à REBUILD 2026
            </h3>
            <p className="text-lg leading-relaxed">
              Gabriel Pérez, président de WGIC26 et membre du comité
              scientifique, a récemment participé à REBUILD 2026, l&apos;un des
              événements majeurs du secteur de la construction et du bâtiment.
            </p>
            <p className="text-lg leading-relaxed">
              Il a pris part à la session &quot;Vert dans les espaces
              d&apos;hospitalité&quot;, aux côtés de Jeffrey Brock, partenaire
              fondateur de Moneo Brock.
            </p>
            <p className="text-lg leading-relaxed">
              La discussion a exploré comment les infrastructures vertes et les
              solutions basées sur la nature peuvent améliorer les environnements
              d&apos;hospitalité, contribuant à des espaces plus durables,
              résilients et centrés sur l&apos;utilisateur.
            </p>
            <p className="text-lg leading-relaxed">
              Cette présence renforce le rôle de WGIC26 dans la connexion entre
              recherche, industrie et applications concrètes à travers les
              secteurs.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/congress-committee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez qui compose le comité du congrès.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Restez connecté avec WGIC26
            </h3>
            <p>Nos canaux officiels sont désormais en ligne.</p>
            <p>
              Suivez WGIC26 sur{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              et{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Instagram
              </a>{' '}
              pour rester informé des dernières annonces, des intervenants, des
              mises à jour du programme et des étapes clés menant au congrès.
            </p>
            <p>
              Participez à la conversation et faites partie de la communauté
              mondiale qui façonne l&apos;avenir des infrastructures vertes et
              des solutions basées sur la nature.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl3/photo-5.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Devenez notre sponsor
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

export default April2026Newsletter3FrenchNewsletter;
