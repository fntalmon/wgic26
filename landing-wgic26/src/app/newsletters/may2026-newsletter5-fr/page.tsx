import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter5French = () => {
  return (
    <div>
      <PageHeader
        title="Newsletter WGIC26 - Mai 2026"
        description="Dernière semaine pour soumettre votre article, nouvelle intervenante confirmée Dorothy Aseyo, sponsors et restez connecté"
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
              src="/newsletters/img/nl5/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Call for Papers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Dernière semaine pour soumettre votre article au WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              L&apos;appel à contributions pour le Congrès Mondial sur les Infrastructures
              Vertes 2026 (WGIC26) entre dans sa dernière semaine.
            </p>
            <p className="text-lg leading-relaxed">
              Les chercheurs, praticiens, designers, décideurs et professionnels de
              l&apos;industrie sont invités à soumettre leurs contributions sur les infrastructures
              vertes et les solutions basées sur la nature avant la date limite officielle.
            </p>
            <p className="text-lg leading-relaxed">
              Le WGIC26 accueille des recherches originales, des études de cas et des
              applications innovantes sous forme de courts articles (maximum 5 pages,
              MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              Toutes les soumissions passeront par un processus d&apos;évaluation par les
              pairs rigoureux, et les articles acceptés seront publiés dans les actes
              officiels du congrès. Les contributions sélectionnées seront également
              considérées pour des numéros spéciaux dans Urban Forestry &amp; Urban
              Greening (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Date limite finale : 31 mai 2026</strong>
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

          {/* Confirmed Speaker */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Nouvelle intervenante confirmée : Dorothy Aseyo
            </h3>
            <p className="text-lg leading-relaxed">
              Dorothy Aseyo travaille sur la conservation de l&apos;environnement,
              l&apos;autonomisation des communautés, les moyens de subsistance durables
              et la résilience climatique, en promouvant des solutions basées sur la
              nature et l&apos;action de base pour construire des sociétés plus résilientes et
              inclusives.
            </p>
            <p className="text-lg leading-relaxed">
              En tant que Directrice Exécutive du Mouvement de la Ceinture Verte, fondé
              par la lauréate du Prix Nobel de la Paix Wangari Maathai, son travail
              contribue à faire avancer le dialogue mondial sur la durabilité, la justice
              environnementale et la transformation dirigée par la communauté.
            </p>
            <p className="text-lg leading-relaxed">
              Au WGIC26, elle apportera des perspectives précieuses à la discussion sur
              la manière dont les infrastructures vertes peuvent soutenir des
              communautés plus saines et plus résilientes dans le monde entier.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                D&apos;autres intervenants et mises à jour du programme seront annoncés bientôt ici.
              </a>
            </p>
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/photo-5.jpg"
                alt=""
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Sponsors */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Rejoignez le WGIC26 en tant que sponsor
            </h3>
            <p className="text-lg leading-relaxed">
              Le WGIC26 continue de croître grâce au soutien d&apos;organisations leaders
              engagées pour l&apos;avenir des infrastructures vertes et des solutions basées
              sur la nature.
            </p>
            <p className="text-lg leading-relaxed">
              Nous sommes fiers de compter sur le soutien d&apos;entreprises et
              d&apos;organisations telles que :
            </p>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl5/sponsors-strip.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Hunter",
                "Sempergreen",
                "ZinCo",
                "JardínMóvil",
                "Eixverd",
                "Verdtical",
                "Greenroofs",
                "ASESCUVE",
                "PRONATUR",
              ].map((sponsor) => (
                <div key={sponsor} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center">
                  <div className="font-semibold text-neutral-800">{sponsor}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Devenez partie d&apos;une plateforme internationale connectant chercheurs,
              décideurs, architectes, ingénieurs, leaders de l&apos;industrie et innovateurs du
              monde entier.
            </p>
            <p className="text-lg leading-relaxed">
              Pour des opportunités de parrainage et des informations sur les
              partenariats, contactez{" "}
              <a href="mailto:sponsorship@wgic26.org" className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera">
                sponsorship@wgic26.org
              </a>
            </p>
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
              pour rester informé des dernières annonces, intervenants, mises à jour du programme et
              jalons clés menant au congrès.
            </p>
            <p className="text-lg leading-relaxed">
              Participez à la conversation et faites partie de la communauté mondiale qui
              façonne l&apos;avenir des infrastructures vertes et des solutions basées sur la
              nature.
            </p>
          </div>

          {/* CTA Buttons */}
                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl5/photo-11.jpg"
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

export default May2026Newsletter5French;
