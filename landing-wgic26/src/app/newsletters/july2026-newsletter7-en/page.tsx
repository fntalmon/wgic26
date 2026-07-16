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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              July 2026 Newsletter #2
            </h2>
          </div>

          {/* Your gateway to WGIC26 starts  */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Your gateway to WGIC26 starts here!
            </h3>
            <p className="text-lg leading-relaxed">Registration is now open for the World Green Infrastructure Congress 2026.</p>
            <p className="text-lg leading-relaxed">From 27 to 30 October, Barcelona and Lleida will welcome researchers, practitioners, policymakers, companies, and international experts working at the forefront of green infrastructure and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">The congress will offer a unique opportunity to attend keynote lectures, scientific sessions, thematic workshops, technical visits, exhibitions, and networking activities with the global green infrastructure community.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Secure your ticket and discover the registration options here.
              </a>
            </p>
          </div>

          {/* WGIC26 opens the door to scien */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Discover more about the Journal of Living Architecture here.
              </a>
            </p>
          </div>

          {/* Sponsor WGIC26 and connect wit */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Sponsor WGIC26 and connect with the leaders of urban sustainability
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 continues to build an international ecosystem of companies, organisations, and institutions committed to advancing green infrastructure, urban sustainability, and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">Becoming a sponsor is an opportunity to connect your brand with a global audience of researchers, architects, engineers, landscape professionals, public institutions, industry leaders, and decision-makers who are shaping the future of greener, more resilient cities.</p>
            <p className="text-lg leading-relaxed">Sponsors and partners will gain visibility throughout the congress and become part of a platform designed to foster collaboration, innovation, and long-term impact across the sector.</p>
            <p className="text-lg leading-relaxed">Interested in joining WGIC26 as a sponsor or partner?</p>
            <p className="text-lg leading-relaxed">Contact us at: sponsorship@wgic26.org</p>
          </div>

          {/* Stay connected with WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Stay connected with WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Our official channels are now live.</p>
            <p className="text-lg leading-relaxed">Follow WGIC26 on LinkedIn and Instagram to stay up to date with the latest announcements, speakers, programme updates, and key milestones leading up to the congress.</p>
            <p className="text-lg leading-relaxed">Join the conversation and be part of the global community shaping the future of green infrastructure and nature-based solutions.</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
            <a
              href="https://www.wgic26.barcelona/registration"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Buy your early bird ticket
            </a>
            <Link
              href="https://wgic26.barcelona/#newsletter"
              className="inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
            >
              Subscribe to newsletter
            </Link>
          </div>

          <NewsletterFooter language="en" />
        </div>
      </section>
    </div>
  );
};

export default July2026Newsletter7English;
