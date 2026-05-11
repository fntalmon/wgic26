import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const May2026Newsletter4English = () => {
  return (
    <div>
      <PageHeader
        title="WGIC26 Newsletter - May 2026"
        description="Call for Papers deadline extended, confirmed speakers, Barcelona World Capital of Architecture 2026, and stay connected"
        section="newsletters"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-white/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              May 2026 Newsletter
            </h2>
          </div>

          {/* Deadline Extended */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-white/50 uppercase tracking-wider">Previous Deadline</div>
                <div className="text-lg font-semibold text-white">30 April 2026</div>
              </div>
              <div className="text-potus text-2xl">→</div>
              <div className="text-center">
                <div className="text-xs text-potus uppercase tracking-wider font-semibold">New Deadline</div>
                <div className="text-lg font-semibold text-potus">31 May 2026</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Call for Papers &amp; Projects deadline extended
            </h3>
            <p className="text-lg leading-relaxed">
              We are pleased to announce that the Call for Papers &amp; Projects deadline
              has been extended until <strong>31 May 2026</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Researchers, practitioners, designers, policymakers, and industry
              professionals now have additional time to submit their contributions to the
              World Green Infrastructure Congress 2026 (WGIC26).
            </p>
            <p className="text-lg leading-relaxed">
              WGIC26 welcomes original research, case studies, and innovative
              applications related to green infrastructure and nature-based solutions in
              urban environments.
            </p>
            <p className="text-lg leading-relaxed">
              All submissions will undergo a rigorous peer-review process led by the
              Scientific Committee, with accepted papers to be included in the official
              congress proceedings.
            </p>
            <p className="text-lg leading-relaxed">
              This is an opportunity to contribute to the global dialogue on building more
              resilient, sustainable, and healthier cities.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>New submission deadline: 31 May 2026</strong>
            </p>
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

          {/* Confirmed Speakers */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Confirmed speakers at WGIC26
            </h3>
            <p className="text-lg leading-relaxed">
              WGIC26 continues to bring together leading international voices shaping
              the future of green infrastructure, urban sustainability, architecture, and
              nature-based solutions.
            </p>
            <p className="text-lg leading-relaxed">
              The confirmed speakers to date include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Marcos Ros", role: "Architect, academic, and Member of the European Parliament" },
                { name: "Salvador Rueda", role: "Founder of the Urban and Territorial Ecology Foundation (FEUT) and creator of the Superblocks model" },
                { name: "Alberto T. Estévez", role: "Founder of ESARQ-UIC Barcelona and pioneer in biodigital architecture" },
                { name: "Vicente Guallart", role: "Founder of IAAC and Co-Founder of Urbanitree" },
                { name: "Enric Batlle", role: "Founding Partner of Batlleiroig" },
                { name: "Wendy Y. Chen", role: "Professor at the University of Hong Kong, specialising in urban green-blue infrastructure" },
                { name: "Dorothy Aseyo", role: "Executive Director at The Green Belt Movement" },
              ].map((speaker) => (
                <div key={speaker.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white">{speaker.name}</div>
                  <div className="text-sm text-white/60">{speaker.role}</div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              Together, they reflect the multidisciplinary and international character of
              WGIC26, connecting policy, research, design, ecology, and innovation.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/program/program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                More speakers and programme updates will be announced soon here.
              </a>
            </p>
          </div>

          {/* Barcelona World Capital */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Barcelona, World Capital of Architecture 2026
            </h3>
            <p className="text-lg leading-relaxed">
              In 2026, Barcelona will officially become the World Capital of Architecture,
              recognising the city&apos;s global leadership in architecture, urbanism, and
              sustainable urban transformation.
            </p>
            <p className="text-lg leading-relaxed">
              This designation highlights Barcelona&apos;s unique capacity to connect design,
              innovation, public space, and environmental responsibility, reinforcing its
              position as an international reference for the cities of the future.
            </p>
            <p className="text-lg leading-relaxed">
              Within this context, WGIC26 Barcelona Lleida will contribute to the global
              conversation on how green infrastructure and nature-based solutions can
              help create more resilient, liveable, and healthier urban environments.
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-potus"
              >
                Discover more about the programme and registration details here.
              </a>
            </p>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
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
            <p className="text-lg leading-relaxed">
              Join the conversation and be part of the global community shaping
              the future of green infrastructure and nature-based solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
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
        </div>
      </section>
    </div>
  );
};

export default May2026Newsletter4English;
