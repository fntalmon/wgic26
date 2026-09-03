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
              July 2026 Newsletter
            </h2>
          </div>

          {/* Thank you for your submissions */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Thank you for your submissions: the review process begins
            </h3>
            <p className="text-lg leading-relaxed">The WGIC26 Call for Papers &amp; Projects has now concluded. We would like to thank all researchers, practitioners, designers, and professionals who shared their work with us.</p>
            <p className="text-lg leading-relaxed">The Scientific Committee is now reviewing each submission. Once the evaluation process is complete, each author will be contacted directly and informed whether their paper or project has been selected to be part of WGIC26.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://www.wgic26.barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover the submission guidelines and access the platform here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-1.jpg"
                alt=""
                className="w-full block"
              />
            </div>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* A global response from 32 coun */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover more about the international community gathering at WGIC26 here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Discover the CCIB: the main ve */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Plan your visit to Barcelona and discover more about the destination here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl6/photo-7.jpg"
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

export default July2026Newsletter6English;
