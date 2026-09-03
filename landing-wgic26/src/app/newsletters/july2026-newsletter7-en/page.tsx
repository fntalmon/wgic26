import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter7English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - July 2026 #2"
        description="Registration is now open, scientific publication opportunities, sponsor WGIC26, and stay connected"
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
              July 2026 Newsletter #2
            </h2>
          </div>

          {/* Your gateway to WGIC26 starts  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Your gateway to WGIC26 starts here!
            </h3>
            <p className="text-lg leading-relaxed">Registration is now open for the World Green Infrastructure Congress 2026.</p>
            <p className="text-lg leading-relaxed">From 27 to 30 October, Barcelona and Lleida will welcome researchers, practitioners, policymakers, companies, and international experts working at the forefront of green infrastructure and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">The congress will offer a unique opportunity to attend keynote lectures, scientific sessions, thematic workshops, technical visits, exhibitions, and networking activities with the global green infrastructure community.</p>
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
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-1.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* WGIC26 opens the door to scien */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              WGIC26 opens the door to scientific publication opportunities
            </h3>
            <p className="text-lg leading-relaxed">Authors whose papers have been accepted for presentation at WGIC26 will have the opportunity to gain further visibility through leading scientific publications in the field.</p>
            <p className="text-lg leading-relaxed">Among these opportunities, selected contributions may be considered for fast-track publication in a Special Issue of the Journal of Living Architecture (JLIV), the peer-reviewed journal of the Green Infrastructure Foundation (GIF), affiliated with Green Roofs for Healthy Cities (GRHC).</p>
            <p className="text-lg leading-relaxed">JLIV is written, reviewed, and edited by living architecture professionals and shares original research, educational applications, scholarly perspectives, resources, and critical discussions related to the living architecture sector.</p>
            <p className="text-lg leading-relaxed">This opportunity reinforces WGIC26&apos;s commitment to supporting high-quality research and helping accepted authors extend the impact of their work beyond the congress.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover more about the Journal of Living Architecture here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Sponsor WGIC26 and connect wit */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Sponsor WGIC26 and connect with the leaders of urban sustainability
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continues to build an international ecosystem of companies, organisations, and institutions committed to advancing green infrastructure, urban sustainability, and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">Becoming a sponsor is an opportunity to connect your brand with a global audience of researchers, architects, engineers, landscape professionals, public institutions, industry leaders, and decision-makers who are shaping the future of greener, more resilient cities.</p>
            <p className="text-lg leading-relaxed">Sponsors and partners will gain visibility throughout the congress and become part of a platform designed to foster collaboration, innovation, and long-term impact across the sector.</p>
            <p className="text-lg leading-relaxed">Interested in joining WGIC26 as a sponsor or partner?</p>
            <p className="text-lg leading-relaxed">Contact us at: sponsorship@wgic26.org</p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl7/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
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

export default July2026Newsletter7English;
