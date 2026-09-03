import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026EnglishNewsletter = () => {
 return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - February 2026"
        description="Updates, first confirmed speakers and key dates for WGIC26"
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
              February 2026 Newsletter
            </h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl1/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          <div className="px-6 sm:px-10 pt-8 space-y-6">
            <p className="text-lg leading-relaxed">
              The 12th{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                World Congress on Green Infrastructure{" "}
              </a>
              will be held in Barcelona and Lleida (Catalonia, Spain) from 27-30
              October 2026.
            </p>

            <div className="pt-8 mt-2 border-t border-neutral-200 space-y-5">
              <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
                Call for papers and projects registration is open
              </h3>

              <p className="text-lg leading-relaxed">
                Promoted by the{" "}
                <a
                  href="https://worldgreeninfrastructurenetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
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
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
                >
                  {" "}
                  World Capital of Architecture
                </a>{" "}
                and the{" "}
                <a
                  href="https://consellantonigaudi.cat/programa-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
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

          <div className="px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
                Green Infrastructure and Nature-based Solutions
              </h3>
              <ul className="list-disc list-inside mb-4 text-neutral-800">
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

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-semibold text-cactus mb-4">
                Save the Key Dates
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">First draft paper:</span>
                  <span className="font-semibold text-neutral-800">
                    30 April 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">
                    Early-bird registration:
                  </span>
                  <span className="font-semibold text-neutral-800">
                    30 April 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Partners & Exhibitors:</span>
                  <span className="font-semibold text-neutral-800">
                    30 April 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Sponsors deadline:</span>
                  <span className="font-semibold text-neutral-800">30 Sept 2026</span>
                </li>
                <li className="flex justify-between items-start pt-2 border-t border-neutral-200 mt-2">
                  <span className="text-cactus font-bold">Congress Dates:</span>
                  <span className="font-bold text-cactus">27-30 Oct 2026</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
              2026: A Year Commemorating Antoni Gaudí
            </h3>
            <p>
              The Council for the Promotion and Dissemination of Gaudí&apos;s
              Work has driven the celebration of the{" "}
              <a
                href="https://web.gencat.cat/en/generalitat/accio-govern/commemoracions/2026/any-gaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
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
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-5 py-3 rounded-lg mb-4">
              The first WGIC speakers are already confirmed!
            </h3>
            <p className="mb-6">
              We are pleased to announce that the first speakers for WGIC 2026
              are now confirmed—leading voices shaping the future of cities,
              territory, architecture, and public policy:
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-7.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-8.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-9.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl1/photo-10.jpg"
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/marcosrossempere/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marcos Ros
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Architect, academic, and Member of the European Parliament,
                  working on urban policy, sustainability, and the built
                  environment at the EU level.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/vicente-guallart-49a94315/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Vicente Guallart{" "}
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Architect and urbanist, Co‑founder of Urbanitree and Founder
                  of the Institute for Advanced Architecture of Catalonia.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/alberto-t-est%C3%A9vez-17319876/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Alberto Estévez{" "}
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Founder and Director of ESARQ‑UIC Barcelona, known for
                  experimental and biodigital architecture.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-bold text-cactus mb-2">
                  <a
                    href="https://www.linkedin.com/in/salvador-rueda-552706240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Salvador Rueda{" "}
                  </a>
                </h4>
                <p className="text-sm text-neutral-600">
                  Founder and Director of the Urban and Territorial Ecology
                  Foundation (FEUT), pioneer of urban ecology and creator of the
                  “superblock” model.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-500 italic">
              This first group of speakers underscores the ambition, depth, and
              multidisciplinary vision of WGIC 2026.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl1/photo-11.jpg"
              alt=""
              className="w-full block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Be our sponsor
            </a>
            <Link
              href="/#newsletter"
              className="inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Subscribe to newsletter
            </Link>
          </div>
        
          <NewsletterFooter language="en" light />
        </div>
        </section>
    </div>
  );
};


export default March2026EnglishNewsletter;
