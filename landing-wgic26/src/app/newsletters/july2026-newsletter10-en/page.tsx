import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter10English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - July 2026 #5"
        description="Early Bird tickets available until 30 September, explore Barcelona through WGIC26 Technical Visits, and IDAEA supports WGIC26"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              July 2026 Newsletter #5
            </h2>
          </div>

          {/* Early Bird tickets available u */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Early Bird tickets available until 30 September
            </h3>
            <p className="text-lg leading-relaxed">Early Bird tickets for WGIC26 are now available through the official event website.</p>
            <p className="text-lg leading-relaxed">From 27 to 30 October 2026, Barcelona and Lleida will welcome the international green infrastructure community for four days of keynotes, scientific sessions, technical visits, exhibitions and networking.</p>
            <p className="text-lg leading-relaxed">Join researchers, practitioners, companies, public institutions, and industry leaders working to shape healthier, safer, and more resilient cities.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Buy your Early Bird tickets until 30 September here.
              </a>
            </p>
          </div>

          {/* Explore Barcelona through WGIC */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Explore Barcelona through WGIC26 Technical Visits
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 participants will have the opportunity to visit some of Barcelona&apos;s most emblematic green roofs and green façades.</p>
            <p className="text-lg leading-relaxed">These technical visits will offer first-hand access to green infrastructure projects across the city, connecting theory, practice and real urban transformation.</p>
            <p className="text-lg leading-relaxed">Groups will be limited, with specialised guides at each location.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Discover the technical visits here.
              </a>
            </p>
          </div>

          {/* IDAEA supports WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              IDAEA supports WGIC26
            </h3>
            <p className="text-lg leading-relaxed">We are pleased to announce the support of IDAEA, the Institute of Environmental Assessment and Water Research, for WGIC26.</p>
            <p className="text-lg leading-relaxed">IDAEA brings a strong scientific perspective on environmental assessment, water quality, air quality, and the impact of human activity on ecosystems.</p>
            <p className="text-lg leading-relaxed">Its support reinforces the interdisciplinary character of WGIC26 and its connection with key challenges such as climate resilience, water management and healthier urban environments.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Meet all our sponsors and supporters here.
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

export default July2026Newsletter10English;
