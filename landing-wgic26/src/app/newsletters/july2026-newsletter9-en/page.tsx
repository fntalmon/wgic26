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
              July 2026 Newsletter #4
            </h2>
          </div>

          {/* Early Bird tickets are now on  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
              Early Bird tickets are now on sale
            </h3>
            <p className="text-lg leading-relaxed">Early Bird tickets for WGIC26 - 12th World Green Infrastructure Congress are available until 30 September 2026.</p>
            <p className="text-lg leading-relaxed">Whether you are joining as an individual, an organisation or a team, WGIC26 is your opportunity to be part of the global conversation on green infrastructure, nature-based solutions and healthier urban futures.</p>
            <p className="text-lg leading-relaxed">
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Register now here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-5.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Naturbana supports WGIC26 */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Discover all WGIC26 supporters and partners here.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-6.jpg"
                alt=""
                className="w-full block"
              />
            </div>
          </div>

          {/* Poster submissions open until  */}
          <div className="px-6 sm:px-10 py-8 space-y-5">
            <h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">
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
                className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"
              >
                Submit your Poster here before 30 September.
              </a>
            </p>
            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/newsletters/img/nl9/photo-7.jpg"
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

export default July2026Newsletter9English;
