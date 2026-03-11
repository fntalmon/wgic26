import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const March2026EnglishNewsletter = () => {
 return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - March 2026"
        description="Updates, first confirmed speakers and key dates for WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              March 2026 Newsletter
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The 12th{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                World Congress on Green Infrastructure{" "}
              </a>
              will be held in Barcelona and Lleida (Catalonia, Spain) from 27-30
              October 2026.
            </p>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Call for papers and projects registration is open
              </h3>

              <p className="text-lg leading-relaxed">
                Promoted by the{" "}
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  {" "}
                  World Green Infrastructure Network{" "}
                </a>{" "}
                (WGIN) and organized by the University of Lleida (UdL), this
                occasion will celebrate the{" "}
                <a
                  href="https://www.barcelona.cat/capitalmundialarquitectura/en/presentation/barcelona-2026-world-capital-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  {" "}
                  World Capital of Architecture
                </a>{" "}
                and the{" "}
                <a
                  href="https://consellantonigaudi.cat/programa-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-potus"
                >
                  {" "}
                  Year of Antoni Gaudí
                </a>
                , in Barcelona 2026. The program will be structured into two
                days of parallel sessions and posters in Barcelona.
              </p>

              <p className="text-lg leading-relaxed">
                Among the classic topics (policies, technologies, impacts,
                education, etc.), three featured topics will be addressed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Green Infrastructure and Nature-based Solutions
              </h3>
              <ul className="list-disc list-inside mb-4 text-white">
                <li>For human health and well being</li>
                <li>In post conflict / disaster recovery</li>
                <li>And the Global South</li>
              </ul>
              <p className="mb-4">
                The congress includes a fair area where leading companies will
                show their products and latest innovations. The third day of the
                congress will be dedicated to fantastic technical visits to
                projects throughout Barcelona, in an innovative ​ open doors
                format. An optional fourth day will include workshops on
                research and innovation in Lleida. Since WGIC26 is the only
                annual forum where researchers, professionals and industry
                converge, both types of papers, whether research, projects or
                case studies, can be submitted.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cactus/20 to-monstera/20 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Save the Key Dates
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-white/60">First draft paper:</span>
                  <span className="font-semibold text-white">
                    30 April 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">
                    Early-bird registration:
                  </span>
                  <span className="font-semibold text-white">
                    15 April 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Partners & Exhibitors:</span>
                  <span className="font-semibold text-white">
                    30 April 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-white/60">Sponsors deadline:</span>
                  <span className="font-semibold text-white">30 Sept 2026</span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-white/10 mt-2">
                  <span className="text-potus font-bold">Congress Dates:</span>
                  <span className="font-bold text-potus">27-30 Oct 2026</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              2026: A Year Commemorating Antoni Gaudí
            </h3>
            <p>
              The Council for the Promotion and Dissemination of Gaudí&apos;s
              Work has driven the celebration of the{" "}
              <a
                href="https://web.gencat.cat/en/generalitat/accio-govern/commemoracions/2026/any-gaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                {" "}
                Gaudí Year 2026
              </a>{" "}
              , to bring Antoni Gaudí&apos;s work closer to the general public.
              Gaudí is one of Catalonia&apos;s most universal architects.
            </p>
            <p>
              The initiative will be coordinated by a commission led by Núria
              Poch and Galdric Santana, and will involve the participation of
              the main Gaudí buildings, including the Expiatory Temple of the
              Sagrada Família, as well as public and private institutions and
              experts dedicated to the conservation, study, and dissemination of
              his legacy.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              The first WGIC speakers are already confirmed!
            </h3>
            <p className="mb-6">
              We are pleased to announce that the first speakers for WGIC 2026
              are now confirmed—leading voices shaping the future of cities,
              territory, architecture, and public policy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/marcosrossempere/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marcos Ros
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Architect, academic, and Member of the European Parliament,
                  working on urban policy, sustainability, and the built
                  environment at the EU level.
                </p>
              </div>

              <div className="bg-monstera/10 p-6 rounded-lg border border-white/5 hover:bg-monstera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Vicente Guallart{" "}
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Architect and urbanist, Co‑founder of Urbanitree and Founder
                  of the Institute for Advanced Architecture of Catalonia.
                </p>
              </div>

              <div className="bg-sansiviera/10 p-6 rounded-lg border border-white/5 hover:bg-sansiviera/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Alberto Estévez{" "}
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Founder and Director of ESARQ‑UIC Barcelona, known for
                  experimental and biodigital architecture.
                </p>
              </div>

              <div className="bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors">
                <h4 className="text-lg font-bold text-potus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Salvador Rueda{" "}
                  </a>
                </h4>
                <p className="text-sm text-white/70">
                  Founder and Director of the Urban and Territorial Ecology
                  Foundation (FEUT), pioneer of urban ecology and creator of the
                  “superblock” model.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/60 italic">
              This first group of speakers underscores the ambition, depth, and
              multidisciplinary vision of WGIC 2026.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Be our sponsor
            </a>
            <Link
              href="/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Subscribe to newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


export default March2026EnglishNewsletter;