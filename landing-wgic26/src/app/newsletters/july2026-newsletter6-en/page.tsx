import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const July2026Newsletter6English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - July 2026"
        description="Thank you for your submissions, the review process begins, a global response from 32 countries, and discover the CCIB"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              July 2026 Newsletter
            </h2>
          </div>

          {/* Thank you for your submissions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Thank you for your submissions: the review process begins
            </h3>
            <p className="text-lg leading-relaxed">The WGIC26 Call for Papers &amp; Projects has now concluded. We would like to thank all researchers, practitioners, designers, and professionals who shared their work with us.</p>
            <p className="text-lg leading-relaxed">The Scientific Committee is now reviewing each submission. Once the evaluation process is complete, each author will be contacted directly and informed whether their paper or project has been selected to be part of WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Discover the submission guidelines and access the platform here.
              </a>
            </p>
          </div>

          {/* A global response from 32 coun */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              A global response from 32 countries
            </h3>
            <p className="text-lg leading-relaxed">WGIC26 has received papers and projects from authors representing 32 countries across Europe, Asia, North America, South America, and Oceania.</p>
            <p className="text-lg leading-relaxed">The countries with the highest number of submissions include:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>Spain: 20</li>
              <li>Austria: 14</li>
              <li>United States: 10</li>
              <li>Italy: 7</li>
              <li>Australia: 6</li>
              <li>France: 6</li>
              <li>Netherlands: 6</li>
              <li>Germany: 6</li>
              <li>Belgium: 6</li>
            </ul>
            <p className="text-lg leading-relaxed">This geographic diversity reflects the international reach of WGIC26 and the growing global interest in green infrastructure and nature-based solutions.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Discover more about the international community gathering at WGIC26 here.
              </a>
            </p>
          </div>

          {/* Discover the CCIB: the main ve */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Discover the CCIB: the main venue for WGIC26
            </h3>
            <p className="text-lg leading-relaxed">From 27 to 29 October, WGIC26 will take place at the International Barcelona Convention Centre (CCIB), located in Parc del Fòrum.</p>
            <p className="text-lg leading-relaxed">With versatile spaces, natural light, and capacity for large-scale international events, the CCIB will provide the setting for keynote speeches, scientific sessions, exhibitions, and networking opportunities.</p>
            <p className="text-lg leading-relaxed">Located close to the beach and well connected to Barcelona&apos;s city centre and airport, it offers an ideal environment to welcome the global green infrastructure community.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Plan your visit to Barcelona and discover more about the destination here.
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

export default July2026Newsletter6English;
