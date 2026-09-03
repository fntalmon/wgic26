import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter9French = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Bulletin - Juillet 2026 #4"
        description="Les billets Early Bird sont maintenant en vente, Naturbana soutient WGIC26 et les soumissions de posters sont ouvertes jusqu&apos;au 30 septembre"
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
              Bulletin de juillet 2026 #4
            </h2>
          </div>

          {/* Les billets Early Bird sont ma */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Les billets Early Bird sont maintenant en vente
            </h3>
            <p className="text-lg leading-relaxed">Les billets Early Bird pour WGIC26 - 12ème Congrès Mondial sur les Infrastructures Vertes sont disponibles jusqu&apos;au 30 septembre 2026.</p>
            <p className="text-lg leading-relaxed">Que vous participiez en tant qu&apos;individu, organisation ou équipe, WGIC26 est votre occasion de faire partie de la conversation mondiale sur les infrastructures vertes, les solutions basées sur la nature et des futurs urbains plus sains.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Inscrivez-vous maintenant ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Naturbana soutient WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Naturbana soutient WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Nous sommes heureux d&apos;annoncer que Naturbana soutient WGIC26 et nous rejoindra au congrès.</p>
            <p className="text-lg leading-relaxed">Sa participation est une étape très pertinente, surtout compte tenu de son lien avec le domaine ministériel lié à l&apos;objet de WGIC26.</p>
            <p className="text-lg leading-relaxed">Ce soutien renforce WGIC26 en tant que point de rencontre entre institutions, professionnels, chercheurs et organisations travaillant à l&apos;avancement des infrastructures vertes et de la résilience urbaine.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez tous les soutiens et partenaires de WGIC26 ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Les soumissions de posters son */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Les soumissions de posters sont ouvertes jusqu&apos;au 30 septembre
            </h3>
            <p className="text-lg leading-relaxed">Les soumissions de posters resteront ouvertes jusqu&apos;au 30 septembre 2026, créant une nouvelle opportunité pour les professionnels, chercheurs, étudiants, organisations et équipes de projet de présenter leur travail au congrès.</p>
            <p className="text-lg leading-relaxed">Tous les posters soumis avant la date limite auront la possibilité d&apos;être inclus dans les Actes imprimés et numériques de WGIC26.</p>
            <p className="text-lg leading-relaxed">Les Actes sont la publication officielle du congrès, rassemblant les articles et posters acceptés de WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Soumettez votre poster ici avant le 30 septembre.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-7.jpg"
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

export default July2026Newsletter9French;
