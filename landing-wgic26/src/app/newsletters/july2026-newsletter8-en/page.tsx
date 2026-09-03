import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter8English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - July 2026 #3"
        description="Maria Buhigas joins WGIC26, climate resilience leads the conversation, and tickets are now available"
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
              July 2026 Newsletter #3
            </h2>
          </div>

          {/* Maria Buhigas joins WGIC26! */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Maria Buhigas joins WGIC26!
            </h3>
            <p className="text-lg leading-relaxed">We are pleased to announce Maria Buhigas as a speaker at the World Green Infrastructure Congress 2026 (WGIC26).</p>
            <p className="text-lg leading-relaxed">As Chief Architect of Barcelona City Council, Buhigas brings a strategic perspective on urban planning, public space, architecture, and the transformation of cities in response to today&apos;s social and environmental challenges.</p>
            <p className="text-lg leading-relaxed">Her participation is especially relevant in a year when Barcelona stands at the centre of the global architectural conversation, reinforcing the connection between urban innovation, green infrastructure, and healthier city-making.</p>
            <p className="text-lg leading-relaxed">At WGIC26, her contribution will help frame the role of cities in advancing more resilient, inclusive, and nature-integrated urban futures.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover the confirmed speakers here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl8/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl8/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* What the papers reveal: climat */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              What the papers reveal: climate resilience leads the conversation
            </h3>
            <p className="text-lg leading-relaxed">The analysis of papers submitted to WGIC26 confirms a clear trend: climate resilience is one of the leading priorities for the international green infrastructure community.</p>
            <p className="text-lg leading-relaxed">Among the most recurrent topics, submissions highlight the growing importance of water management, nature-based solutions, urban sustainability, health and well-being, biodiversity, air quality, technologies, and project design.</p>
            <p className="text-lg leading-relaxed">More than half of the analysed contributions focus on the impacts of green infrastructure, showing how researchers and practitioners are working to measure, design, and implement solutions that respond to real urban challenges.</p>
            <p className="text-lg leading-relaxed">This thematic diversity reinforces WGIC26 as a global meeting point for those working to shape healthier, safer, and more resilient cities.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Explore the main topics shaping WGIC26 here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl8/photo-7.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Tickets are now available: sec */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Tickets are now available: secure your place at WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Registration is now open for the World Green Infrastructure Congress 2026.</p>
            <p className="text-lg leading-relaxed">From 27 to 30 October, Barcelona and Lleida will welcome researchers, practitioners, policymakers, companies, public institutions, and international experts working at the forefront of green infrastructure and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">WGIC26 will offer a unique opportunity to attend keynote lectures, scientific sessions, thematic workshops, technical visits, exhibitions, and networking activities with the global green infrastructure community.</p>
            <p className="text-lg leading-relaxed">27-29 Oct | CCIB - Parc del Fòrum, Barcelona (Spain)</p>
            <p className="text-lg leading-relaxed">30 Oct | Universitat de Lleida - Lleida (Spain)</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Secure your ticket and discover the registration options here.
              </a>
            </p>
          </div>

          {/* Stay connected with WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Stay connected with WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Our official channels are now live.</p>
            <p className="text-lg leading-relaxed">Follow WGIC26 on LinkedIn and Instagram to stay up to date with the latest announcements, speakers, programme updates, and key milestones leading up to the congress.</p>
            <p className="text-lg leading-relaxed">Join the conversation and be part of the global community shaping the future of green infrastructure and nature-based solutions.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">
            <a
              href="https://panel.helice.app/w/wgic26/214760/registration"
              className="inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"
            >
              Buy your early bird ticket
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

export default July2026Newsletter8English;
