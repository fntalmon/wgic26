import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter4English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - May 2026"
        description="Call for Papers deadline extended, confirmed speakers, Barcelona World Capital of Architecture 2026, and stay connected"
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
              May 2026 Newsletter
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
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Previous Deadline</div>
                <div className="text-lg font-semibold text-neutral-800">30 April 2026</div>
              </div>
              <div className="text-cactus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-cactus uppercase tracking-wider font-semibold">New Deadline</div>
                <div className="text-lg font-semibold text-cactus">31 May 2026</div>
              </div>
            </div>

            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 mb-2">
              Call for Papers &amp; Projects deadline extended
            </h3>
            <p className="text-lg leading-relaxed">
              We are pleased to announce that the Call for Papers &amp; Projects deadline
              has been extended until <strong>31 May 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Researchers, practitioners, designers, policymakers, and industry
              professionals now have additional time to submit their contributions to the
              World Green Infrastructure Congress 2026 (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 welcomes original research, case studies, and innovative
              applications related to green infrastructure and nature-based solutions in
              urban environments.
            </p>
            <p className="text-lg leading-relaxed">
              All submissions will undergo a rigorous peer-review process led by the
              Scientific Committee, with accepted papers to be included in the official
              congress proceedings.
            </p>
            <p className="text-lg leading-relaxed">
              This is an opportunity to contribute to the global dialogue on building more
              resilient, sustainable, and healthier cities.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>New submission deadline: 31 May 2026</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover the submission guidelines and access the platform here.
              </a>
            </p>
          </div>

          {/* Confirmed Speakers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Confirmed speakers at WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 continues to bring together leading international voices shaping
              the future of green infrastructure, urban sustainability, architecture, and
              nature-based solutions.
            </p>
            <p className="text-lg leading-relaxed">
              The confirmed speakers to date include:
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
                { name: "Marcos Ros", role: "Architect, academic, and Member of the European Parliament" },
                { name: "Salvador Rueda", role: "Founder of the Urban and Territorial Ecology Foundation (FEUT) and creator of the Superblocks model" },
                { name: "Alberto T. Estévez", role: "Founder of ESARQ-UIC Barcelona and pioneer in biodigital architecture" },
                { name: "Vicente Guallart", role: "Founder of IAAC and Co-Founder of Urbanitree" },
                { name: "Enric Batlle", role: "Founding Partner of Batlleiroig" },
                { name: "Wendy Y. Chen", role: "Professor at the University of Hong Kong, specialising in urban green-blue infrastructure" },
                { name: "Dorothy Aseyo", role: "Executive Director at The Green Belt Movement" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-800">{speaker.name}</div>
                  <div className="text-sm text-neutral-500">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Together, they reflect the multidisciplinary and international character of
              WGIC26, connecting policy, research, design, ecology, and innovation.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                More speakers and programme updates will be announced soon here.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Barcelona, World Capital of Architecture 2026
            </h3>
            <p className="text-lg leading-relaxed">
              In 2026, Barcelona will officially become the World Capital of Architecture,
              recognising the city&apos;s global leadership in architecture, urbanism, and
              sustainable urban transformation.
            </p>
            <p className="text-lg leading-relaxed">
              This designation highlights Barcelona&apos;s unique capacity to connect design,
              innovation, public space, and environmental responsibility, reinforcing its
              position as an international reference for the cities of the future.
            </p>
            <p className="text-lg leading-relaxed">
              Within this context, WGIC26 Barcelona Lleida will contribute to the global
              conversation on how green infrastructure and nature-based solutions can
              help create more resilient, liveable, and healthier urban environments.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover more about the programme and registration details here.
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
              Stay connected with WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              Our official channels are now live.
            </p>
            <p className="text-lg leading-relaxed">
              Follow WGIC26 on{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                LinkedIn
              </a>
              and{' '}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Instagram
              </a>{' '}
              to stay up to date with the latest announcements, speakers,
              programme updates, and key milestones leading up to the congress.
            </p>
            <p className="text-lg leading-relaxed">
              Join the conversation and be part of the global community shaping
              the future of green infrastructure and nature-based solutions.
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
              Be our sponsor
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
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

export default May2026Newsletter4English;
