import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter4French = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Mai 2026"
        description="Date limite prolongée, intervenants confirmés, Barcelone Capitale Mondiale de l'Architecture 2026, et restez connecté"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Newsletter de Mai 2026
            </h2>
          </div>

          {/* Deadline Extended */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-white/50 uppercase tracking-wider">Date limite précédente</div>
                <div className="text-lg font-semibold text-white">30 avril 2026</div>
              </div>
              <div className="text-potus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-potus uppercase tracking-wider font-semibold">Nouvelle date limite</div>
                <div className="text-lg font-semibold text-potus">31 mai 2026</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">
              La date limite pour les appels à contributions et projets a été prolongée
            </h3>
            <p className="text-lg leading-relaxed">
              Nous sommes heureux d&apos;annoncer que la date limite pour les appels à
              contributions et projets a été prolongée jusqu&apos;au <strong>31 mai 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Les chercheurs, praticiens, designers, décideurs et professionnels de
              l&apos;industrie ont désormais plus de temps pour soumettre leurs contributions
              au Congrès Mondial sur l&apos;Infrastructure Verte 2026 (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              Le WGIC26 accueille des recherches originales, des études de cas et des
              applications innovantes liées à l&apos;infrastructure verte et aux solutions basées
              sur la nature dans les environnements urbains.
            </p>
            <p className="text-lg leading-relaxed">
              Toutes les soumissions passeront par un processus d&apos;évaluation par les
              pairs rigoureux dirigé par le Comité Scientifique, avec les articles acceptés
              inclus dans les actes officiels du congrès.
            </p>
            <p className="text-lg leading-relaxed">
              C&apos;est une opportunité de contribuer au dialogue mondial sur la construction
              de villes plus résilientes, durables et saines.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Nouvelle date limite de soumission : 31 mai 2026</strong>
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

          {/* Confirmed Speakers */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Intervenants confirmés au WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Le WGIC26 continue de rassembler des voix internationales de premier
              plan qui façonnent l&apos;avenir de l&apos;infrastructure verte, de la durabilité urbaine,
              de l&apos;architecture et des solutions basées sur la nature.
            </p>
            <p className="text-lg leading-relaxed">
              Les intervenants confirmés à ce jour incluent :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Marcos Ros", role: "Architecte, universitaire et membre du Parlement européen" },
                { name: "Salvador Rueda", role: "Fondateur de la Fondation d'Écologie Urbaine et Territoriale (FEUT) et créateur du modèle des Superblocs" },
                { name: "Alberto T. Estévez", role: "Fondateur de l'ESARQ-UIC Barcelone et pionnier de l'architecture biodigitale" },
                { name: "Vicente Guallart", role: "Fondateur de l'IAAC et co-fondateur d'Urbanitree" },
                { name: "Enric Batlle", role: "Partenaire fondateur de Batlleiroig" },
                { name: "Wendy Y. Chen", role: "Professeur à l'Université de Hong Kong, spécialisé dans l'infrastructure urbaine verte-bleue" },
                { name: "Dorothy Aseyo", role: "Directrice exécutive du Green Belt Movement" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white">{speaker.name}</div>
                  <div className="text-sm text-white/60">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Ensemble, ils reflètent le caractère multidisciplinaire et international du
              WGIC26, reliant politique, recherche, design, écologie et innovation.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                D&apos;autres intervenants et mises à jour du programme seront bientôt annoncés ici.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Barcelone, Capitale Mondiale de l&apos;Architecture 2026
            </h3>
            <p className="text-lg leading-relaxed">
              En 2026, Barcelone deviendra officiellement la Capitale Mondiale de
              l&apos;Architecture, reconnaissant le leadership mondial de la ville en matière
              d&apos;architecture, d&apos;urbanisme et de transformation urbaine durable.
            </p>
            <p className="text-lg leading-relaxed">
              Cette désignation met en avant la capacité unique de Barcelone à
              connecter design, innovation, espace public et responsabilité
              environnementale, renforçant sa position en tant que référence
              internationale pour les villes du futur.
            </p>
            <p className="text-lg leading-relaxed">
              Dans ce contexte, le WGIC26 Barcelone Lleida contribuera à la
              conversation mondiale sur la manière dont l&apos;infrastructure verte et les
              solutions basées sur la nature peuvent aider à créer des environnements
              urbains plus résilients, vivables et sains.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Découvrez plus sur le programme et les détails d&apos;inscription ici.
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
              et{" "}
              <a
                href="https://x.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Twitter
              </a>{" "}
              pour rester informé des dernières annonces, intervenants, mises à jour du programme
              et jalons clés menant au congrès.
            </p>
            <p className="text-lg leading-relaxed">
              Participez à la conversation et faites partie de la communauté mondiale qui
              façonne l&apos;avenir de l&apos;infrastructure verte et des solutions basées sur la
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

export default May2026Newsletter4French;
