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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Bulletin de juillet 2026 #4
            </h2>
          </div>

          {/* Les billets Early Bird sont ma */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Les billets Early Bird sont maintenant en vente
            </h3>
            <p className="text-lg leading-relaxed">Les billets Early Bird pour WGIC26 - 12ème Congrès Mondial sur les Infrastructures Vertes sont disponibles jusqu&apos;au 30 septembre 2026.</p>
            <p className="text-lg leading-relaxed">Que vous participiez en tant qu&apos;individu, organisation ou équipe, WGIC26 est votre occasion de faire partie de la conversation mondiale sur les infrastructures vertes, les solutions basées sur la nature et des futurs urbains plus sains.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Inscrivez-vous maintenant ici.
              </a>
            </p>
          </div>

          {/* Naturbana soutient WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Découvrez tous les soutiens et partenaires de WGIC26 ici.
              </a>
            </p>
          </div>

          {/* Les soumissions de posters son */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Soumettez votre poster ici avant le 30 septembre.
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

export default July2026Newsletter9French;
