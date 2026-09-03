import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter8French = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Bulletin - Juillet 2026 #3"
        description="Maria Buhigas rejoint WGIC26, la résilience climatique mène la conversation et les billets sont maintenant disponibles"
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
              Bulletin de juillet 2026 #3
            </h2>
          </div>

          {/* Maria Buhigas rejoint WGIC26 ! */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Maria Buhigas rejoint WGIC26 !
            </h3>
            <p className="text-lg leading-relaxed">Nous sommes heureux d&apos;annoncer Maria Buhigas en tant qu&apos;intervenante au Congrès Mondial sur les Infrastructures Vertes 2026 (WGIC26).</p>
            <p className="text-lg leading-relaxed">En tant qu&apos;Architecte en Chef de la Mairie de Barcelone, Buhigas apporte une perspective stratégique sur l&apos;urbanisme, l&apos;espace public, l&apos;architecture et la transformation des villes face aux défis sociaux et environnementaux d&apos;aujourd&apos;hui.</p>
            <p className="text-lg leading-relaxed">Sa participation est particulièrement pertinente cette année, alors que Barcelone se trouve au centre de la conversation architecturale mondiale, renforçant le lien entre innovation urbaine, infrastructures vertes et création de villes plus saines.</p>
            <p className="text-lg leading-relaxed">Au WGIC26, sa contribution aidera à définir le rôle des villes dans l&apos;avancement de futurs urbains plus résilients, inclusifs et intégrés à la nature.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez les intervenants confirmés ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl8/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl8/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Ce que révèlent les documents  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Ce que révèlent les documents : la résilience climatique mène la conversation
            </h3>
            <p className="text-lg leading-relaxed">L&apos;analyse des documents soumis au WGIC26 confirme une tendance claire : la résilience climatique est l&apos;une des priorités majeures pour la communauté internationale des infrastructures vertes.</p>
            <p className="text-lg leading-relaxed">Parmi les sujets les plus récurrents, les soumissions soulignent l&apos;importance croissante de la gestion de l&apos;eau, des solutions basées sur la nature, de la durabilité urbaine, de la santé et du bien-être, de la biodiversité, de la qualité de l&apos;air, des technologies et de la conception de projets.</p>
            <p className="text-lg leading-relaxed">Plus de la moitié des contributions analysées se concentrent sur les impacts des infrastructures vertes, montrant comment chercheurs et praticiens s&apos;efforcent de mesurer, concevoir et mettre en œuvre des solutions répondant à de réels défis urbains.</p>
            <p className="text-lg leading-relaxed">Cette diversité thématique renforce le WGIC26 en tant que point de rencontre mondial pour ceux qui œuvrent à façonner des villes plus saines, plus sûres et plus résilientes.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Explorez les principaux sujets qui façonnent le WGIC26 ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl8/photo-7.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Les billets sont maintenant di */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Les billets sont maintenant disponibles : réservez votre place au WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Les inscriptions sont désormais ouvertes pour le Congrès Mondial sur les Infrastructures Vertes 2026.</p>
            <p className="text-lg leading-relaxed">Du 27 au 30 octobre, Barcelone et Lleida accueilleront chercheurs, praticiens, décideurs, entreprises, institutions publiques et experts internationaux travaillant à la pointe de l&apos;infrastructure verte et des solutions basées sur la nature.</p>
            <p className="text-lg leading-relaxed">Le WGIC26 offrira une occasion unique d&apos;assister à des conférences plénières, des sessions scientifiques, des ateliers thématiques, des visites techniques, des expositions et des activités de réseautage avec la communauté mondiale de l&apos;infrastructure verte.</p>
            <p className="text-lg leading-relaxed">27-29 oct | CCIB - Parc del Fòrum, Barcelone (Espagne)</p>
            <p className="text-lg leading-relaxed">30 oct | Université de Lleida - Lleida (Espagne)</p>
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

export default July2026Newsletter8French;
