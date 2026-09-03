import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const March2026Newsletter2EnglishNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - March 2026"
        description="Updates on Health & Well-being track, new speaker, and extended deadline"
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
              March 2026 Newsletter
            </h2>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
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
              will be held in Barcelona and Lleida (Catalonia, Spain) from 27–30
              October 2026.
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Health & Well-being: a core theme of WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              How can we better assess the impact of biophilic design on human
              health and well-being?
            </p>
            <p className="text-lg leading-relaxed">
              What role can initiatives such as Green Social Prescribing play in
              shaping healthier cities?
            </p>
            <p className="text-lg leading-relaxed">
              These are some of the key questions driving one of the three main
              thematic tracks of WGIC26 Barcelona – Lleida.
            </p>
            <p className="text-lg leading-relaxed">
              The World Green Infrastructure Network (WGIN) has long promoted
              the integration of green infrastructure in urban environments,
              benefiting both people and the planet. Yet today, a clear
              challenge remains: strengthening the connection between urban
              nature and human health.
            </p>
            <p className="text-lg leading-relaxed">
              At WGIC26, this topic will be explored through a dedicated track on
              Health & Well-being, inspired by the latest WHO report “Nature-based
              solutions and health” (May 2025).
            </p>
            <p className="text-lg leading-relaxed">
              This track will focus on the practical integration of nature-based
              solutions into health frameworks, public policies, and urban
              planning strategies, fostering stronger collaboration between the
              green infrastructure and health sectors.
            </p>
            <p className="text-lg leading-relaxed">
              The goal is to advance research, inform policy, and reinforce the
              role of urban nature in improving quality of life.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Explore the full WGIC26 programme.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              New confirmed speaker
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl2/photo-5.jpg"
                alt=""
                className="w-full max-w-xs mx-auto rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-cactus mb-2">

                  Wendy Y. Chen
                
              </h4>
              <p className="text-sm text-neutral-600">
                Professor at HKU in green-blue infrastructure.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Professor Wendy Y. Chen specialises in urban green-blue
                infrastructure, with a strong focus on evaluating and modelling
                its impact on urban sustainability and quality of life.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Her research addresses key challenges in understanding how
                green-blue spaces are designed, transformed, and integrated into
                urban systems, combining environmental, economic, and social
                perspectives.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Through her work, she contributes to advancing the quantitative
                assessment of nature-based solutions, helping to inform more
                effective urban planning and policy-making.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                At WGIC26, she will bring valuable insights to the dialogue on
                green infrastructure and nature-based solutions.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Submission deadline extended
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-start">
                  <span className="text-neutral-500">Previous deadline:</span>
                  <span className="font-semibold text-neutral-800">
                    15 March 2026
                  </span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="text-cactus font-bold">New deadline:</span>
                  <span className="font-bold text-cactus">30 April 2026</span>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              We are pleased to announce that the Call for Papers & Projects
              deadline has been extended.
            </p>
            <p className="text-lg leading-relaxed">
              Researchers, practitioners, designers, and policymakers now have
              additional time to submit their work.
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 welcomes original research, case studies, and innovative
              applications in green infrastructure and nature-based solutions.
              Submissions must be presented in short paper format (maximum 5
              pages, MS Word).
            </p>
            <p className="text-lg leading-relaxed">
              All submitted papers will undergo a rigorous peer-review process,
              led by the Scientific Committee, which will determine acceptance
              and presentation format (oral or poster).
            </p>
            <p className="text-lg leading-relaxed">
              Accepted contributions will be published in the official WGIC26
              proceedings, offering international visibility within the global
              green infrastructure community.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/speakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Learn how to properly submit your paper or project for WGIC26.
              </a>
            </p>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Stay connected with WGIC26
            </h3>
            <p>Our official channels are now live.</p>
            <p>
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
            <p>
              Join the conversation and be part of the global community shaping
              the future of green infrastructure and nature-based solutions.
            </p>
          </div>

                    <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/newsletters/img/nl2/photo-6.jpg"
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

export default March2026Newsletter2EnglishNewsletter;
