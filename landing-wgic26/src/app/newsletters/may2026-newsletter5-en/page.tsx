import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const May2026Newsletter5English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - May 2026"
        description="Last week to submit your paper, new confirmed speaker Dorothy Aseyo, sponsors, and stay connected"
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
              src="/newsletters/img/nl5/photo-1.jpg"
              alt=""
              className="w-full block"
            />
          </div>

          {/* Call for Papers */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Last week to submit your paper to WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              The Call for Papers &amp; Projects for the World Green Infrastructure Congress
              2026 (WGIC26) is entering its final week.
            </p>
            <p className="text-lg leading-relaxed">
              Researchers, practitioners, designers, policymakers, and industry
              professionals are invited to submit their contributions on green
              infrastructure and nature-based solutions before the official deadline.
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 welcomes original research, case studies, and innovative
              applications in short paper format (maximum 5 pages, MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              All submissions will undergo a rigorous peer-review process, and accepted
              papers will be published in the official congress proceedings. Selected
              contributions will also be considered for Special Issues in Urban Forestry &amp;
              Urban Greening (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Final deadline: 31 May 2026</strong>
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

          {/* Confirmed Speaker */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              New confirmed speaker: Dorothy Aseyo
            </h3>
            <p className="text-lg leading-relaxed">
              Dorothy Aseyo works on environmental conservation, community
              empowerment, sustainable livelihoods, and climate resilience, promoting
              nature-based solutions and grassroots action to build more resilient and
              inclusive societies.
            </p>
            <p className="text-lg leading-relaxed">
              As Executive Director of The Green Belt Movement, founded by Nobel
              Peace Prize laureate Wangari Maathai, her work contributes to advancing
              the global dialogue on sustainability, environmental justice, and community-led transformation.
            </p>
            <p className="text-lg leading-relaxed">
              At WGIC26, she will bring valuable insights to the discussion on how green
              infrastructure can support healthier and more resilient communities
              worldwide.
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
              Join WGIC26 as a Sponsor
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 continues to grow thanks to the support of leading organisations
              committed to the future of green infrastructure and nature-based solutions.
            </p>
            <p className="text-lg leading-relaxed">
              We are proud to count on the support of companies and organisations such
              as:
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
              Become part of an international platform connecting researchers,
              policymakers, architects, engineers, industry leaders, and innovators from
              around the world.
            </p>
            <p className="text-lg leading-relaxed">
              For sponsorship opportunities and partnership information, contact{" "}
              <a href="mailto:sponsorship@wgic26.org" className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera">
                sponsorship@wgic26.org
              </a>
            </p>
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

export default May2026Newsletter5English;
