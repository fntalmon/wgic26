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
              July 2026 Newsletter #5
            </h2>
          </div>

          {/* Early Bird tickets available u */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Early Bird tickets available until 30 September
            </h3>
            <p className="text-lg leading-relaxed">Early Bird tickets for WGIC26 are now available through the official event website.</p>
            <p className="text-lg leading-relaxed">From 27 to 30 October 2026, Barcelona and Lleida will welcome the international green infrastructure community for four days of keynotes, scientific sessions, technical visits, exhibitions and networking.</p>
            <p className="text-lg leading-relaxed">Join researchers, practitioners, companies, public institutions, and industry leaders working to shape healthier, safer, and more resilient cities.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Buy your Early Bird tickets until 30 September here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/collage.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Explore Barcelona through WGIC */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover the technical visits here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-10.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* IDAEA supports WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Meet all our sponsors and supporters here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl10/photo-11.jpg"
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

export default July2026Newsletter10English;
