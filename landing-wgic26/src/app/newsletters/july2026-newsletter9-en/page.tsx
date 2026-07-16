import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter9English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - July 2026 #4"
        description="Early Bird tickets are now on sale, Naturbana supports WGIC26, and poster submissions are open until 30 September"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              July 2026 Newsletter #4
            </h2>
          </div>

          {/* Early Bird tickets are now on  */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Early Bird tickets are now on sale
            </h3>
            <p className="text-lg leading-relaxed">Early Bird tickets for WGIC26 - 12th World Green Infrastructure Congress are available until 30 September 2026.</p>
            <p className="text-lg leading-relaxed">Whether you are joining as an individual, an organisation or a team, WGIC26 is your opportunity to be part of the global conversation on green infrastructure, nature-based solutions and healthier urban futures.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Register now here.
              </a>
            </p>
          </div>

          {/* Naturbana supports WGIC26 */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Naturbana supports WGIC26
            </h3>
            <p className="text-lg leading-relaxed">We are pleased to announce that Naturbana supports WGIC26 and will join us at the congress.</p>
            <p className="text-lg leading-relaxed">Its participation is a highly relevant milestone, especially given its connection with the ministerial area linked to the scope of WGIC26.</p>
            <p className="text-lg leading-relaxed">This support strengthens WGIC26 as a meeting point between institutions, professionals, researchers and organisations working to advance green infrastructure and urban resilience.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Discover all WGIC26 supporters and partners here.
              </a>
            </p>
          </div>

          {/* Poster submissions open until  */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Poster submissions open until 30 September
            </h3>
            <p className="text-lg leading-relaxed">Poster submissions will remain open until 30 September 2026, creating a new opportunity for professionals, researchers, students, organisations and project teams to present their work at the congress.</p>
            <p className="text-lg leading-relaxed">All Posters submitted by the deadline will have the opportunity to be included in the printed and digital WGIC26 Proceedings.</p>
            <p className="text-lg leading-relaxed">The Proceedings are the official congress publication, bringing together the accepted Papers and Posters from WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Submit your Poster here before 30 September.
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

export default July2026Newsletter9English;
