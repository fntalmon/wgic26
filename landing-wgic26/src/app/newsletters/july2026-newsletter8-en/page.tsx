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

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              July 2026 Newsletter #3
            </h2>
          </div>

          {/* Maria Buhigas joins WGIC26! */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Discover the confirmed speakers here.
              </a>
            </p>
          </div>

          {/* What the papers reveal: climat */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
                className="text-potus"
              >
                Explore the main topics shaping WGIC26 here.
              </a>
            </p>
          </div>

          {/* Tickets are now available: sec */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Tickets are now available: secure your place at WGIC26
            </h3>
            <p className="text-lg leading-relaxed">Registration is now open for the World Green Infrastructure Congress 2026.</p>
            <p className="text-lg leading-relaxed">From 27 to 30 October, Barcelona and Lleida will welcome researchers, practitioners, policymakers, companies, public institutions, and international experts working at the forefront of green infrastructure and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">WGIC26 will offer a unique opportunity to attend keynote lectures, scientific sessions, thematic workshops, technical visits, exhibitions, and networking activities with the global green infrastructure community.</p>
            <p className="text-lg leading-relaxed">27-29 Oct | CCIB - Parc del Fòrum, Barcelona (Spain)</p>
            <p className="text-lg leading-relaxed">30 Oct | Universitat de Lleida - Lleida (Spain)</p>
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

export default July2026Newsletter8English;
