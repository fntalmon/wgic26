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
              Newsletter de Mai 2026
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Deadline Extended */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Date limite précédente</div>
                <div className="text-lg font-semibold text-neutral-800">30 avril 2026</div>
              </div>
              <div className="text-cactus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-cactus uppercase tracking-wider font-semibold">Nouvelle date limite</div>
                <div className="text-lg font-semibold text-cactus">31 mai 2026</div>
              </div>
            </div>

            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez les directives de soumission et accédez à la plateforme ici.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-5.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-6.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-11.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
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
                <div key={speaker.name} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-800">{speaker.name}</div>
                  <div className="text-sm text-neutral-500">{speaker.role}</div>
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                D&apos;autres intervenants et mises à jour du programme seront bientôt annoncés ici.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Découvrez plus sur le programme et les détails d&apos;inscription ici.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl4/photo-12.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Stay Connected */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl4/photo-13.jpg"
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

export default May2026Newsletter4French;
