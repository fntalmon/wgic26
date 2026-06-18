import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import NewsletterFooter from "@/components/NewsletterFooter";

const April2026Newsletter3EnglishNewsletter = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - April 2026"
        description="Session moderator, special issue in Elsevier journal, WGIC26 at REBUILD 2026, and stay connected"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              April 2026 Newsletter
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The 12th{" "}
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                World Congress on Green Infrastructure{" "}
              </a>
              will be held in Barcelona and Lleida (Catalonia, Spain) from 27–30
              October 2026.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Session highlight:
            </h3>
            <h4 className="text-xl font-semibold text-white">
              Luigi Petito as moderator
            </h4>
            <p className="text-lg leading-relaxed">
              We are pleased to announce that Luigi Petito will join WGIC26 as a
              session moderator.
            </p>
            <p className="text-lg leading-relaxed">
              Luigi Petito is the Founder and Managing Director of Business
              Solutions Europa, as well as the Head of Secretariat for the
              European Alliance to Save Energy and the World Green
              Infrastructure Network – EU Chapter. He also serves as Secretary
              General of the European Childhood Obesity Group.
            </p>
            <p className="text-lg leading-relaxed">
              With extensive experience at the intersection of policy,
              sustainability, and European institutions, his participation will
              bring a valuable perspective to the dialogue between green
              infrastructure, energy transition, and public health.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Explore the full WGIC26 programme.
              </a>
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              Special Issue in an Elsevier journal
            </h3>
            <p className="text-lg leading-relaxed">
              The best papers presented at WGIC26 will be fast-tracked for
              publication in Special Issues of Urban Forestry & Urban Greening
              (Elsevier).
            </p>
            <p className="text-lg leading-relaxed">
              This represents a unique opportunity for authors to gain
              international visibility and contribute to one of the leading
              scientific journals in urban green infrastructure and nature-based
              solutions.
            </p>
            <p className="text-lg leading-relaxed">
              All submissions will undergo a rigorous peer-review process,
              ensuring high academic standards and impactful contributions.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              WGIC26 at REBUILD 2026
            </h3>
            <p className="text-lg leading-relaxed">
              Gabriel Pérez, Chair of WGIC26 and member of the Scientific
              Committee, recently participated in REBUILD 2026, one of the
              leading events in the building and construction sector.
            </p>
            <p className="text-lg leading-relaxed">
              He took part in the session “Green in hospitality spaces”,
              alongside Jeffrey Brock, Founding Partner of Moneo Brock.
            </p>
            <p className="text-lg leading-relaxed">
              The discussion explored how green infrastructure and nature-based
              solutions can enhance hospitality environments, contributing to
              more sustainable, resilient, and user-focused spaces.
            </p>
            <p className="text-lg leading-relaxed">
              This presence reinforces WGIC26’s role in connecting research,
              industry, and real-world applications across sectors.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/congress-committee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Discover who makes up the Congress Committee.
              </a>
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              Stay connected with WGIC26
            </h3>
            <p>Our official channels are now live.</p>
            <p>
              Follow WGIC26 on{" "}
              <a
                href="https://www.linkedin.com/company/wgic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/wgic2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://web.facebook.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Facebook
              </a>
              , and{" "}
              <a
                href="https://x.com/WGIC2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Twitter
              </a>{" "}
              to stay up to date with the latest announcements, speakers,
              programme updates, and key milestones leading up to the congress.
            </p>
            <p>
              Join the conversation and be part of the global community shaping
              the future of green infrastructure and nature-based solutions.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.wgic26.barcelona/exhibitors"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Be our sponsor
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

export default April2026Newsletter3EnglishNewsletter;
