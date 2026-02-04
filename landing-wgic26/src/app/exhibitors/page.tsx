import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";

const Exhibitors = () => {
  return (
    <div>
      <PageHeader
        title="Partners & Exhibitors — Sponsorship opportunities"
        description="Showcase your participation in the green infrastructures sector and ensure visibility and exposure to an international audience at our World Green Infrastructure Congress 2026 in Barcelona and Lleida.

For more information and a detailed breakdown of packages and benefits, you can download the info pack below. To become a partner, sponsor or exhibitor, fill out the interest form (coming soon) "
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl text-white uppercase">
              Partner: Elite Global or Event
            </h3>
            <p className="text-white/80">
              If what you want is to participate actively in the conference,
              collaborating in decision-making, contributing knowledge, and
              assuming shared responsibilities, choose one of the partner
              options, Global or Event. In these typologies you will have the
              maximum benefits of visibility and participation.
            </p>
            <p className="text-white/80">
              The Elite Partners will contribute strategically to the
              development of the congress and its promotion and will have all
              the benefits of the Global partners plus, those that can be
              finally defined, as for example, branding on the footer of
              conference emails, standees in the ballroom/foyer area, etc. and
              those that can be considered. Your financial contribution will be
              specifically agreed with the congress organization team.
            </p>

            <h3 className="text-xl text-white uppercase">
              Sponsor: Tree or Leaf
            </h3>
            <p className="text-white/80">
              If you are looking to maximize visibility, publicity or benefits
              for your brand or company in the green infrastructure sector,
              without the need to be involved in the management or
              decision-making of the event, your option is to be a sponsor,
              either as a Tree or as a Leaf.
            </p>

            <div className="mt-6">
              <h3 className="text-xl text-white uppercase mb-6">
                Exhibitors (limited to first 40)
              </h3>
              <p className="text-white/80 mb-4">
                Whether you are a partner or sponsor, you have the possibility
                of showing your company or products to attendees as an
                exhibitor, in two options, as a Garden and as a Flower. Being an
                exhibitor will allow you to be physically visible during the
                congress and network with potential customers interested in your
                brand.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/30">
                    <th
                      rowSpan={2}
                      className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base"
                    >
                      Benefits
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      Partners
                    </th>
                    <th
                      colSpan={2}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      Sponsors
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      Exhibitors
                    </th>
                  </tr>

                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Elite</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Global</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Event</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Tree</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Leaf</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Garden Big</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Garden Medium</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Flower</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Congress Invitations</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">15</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">10</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">4</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Gala Dinner at CCIB</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">10</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">5</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Speaking Slot</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Rooms naming</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Workshops</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base" >Roll up (brought by you) + Table + 3 Chairs</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Space</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">Island 12x6m (72sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">6x6m (36sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x9m (27sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x6m (18sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x3m (9sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x1.5m (4.5sqm)</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Visibility & Social Media</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Newsletter</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Social Media</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Logo Visibility</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Special Content</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Ad page in Proceedings</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">List of Attendees</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="bg-cactus/10 font-bold">
                    <td className="border border-white/20 px-4 py-3 text-white text-base">Total Cost</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">30.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">15.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">10.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">8.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">6.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">5.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">3.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">2.000€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 className="text-lg text-white uppercase mb-3">The Venue</h4>
              <p className="text-white/80 mb-4">
                The venue where WGIC26 will be held is perfect for creating the networking atmosphere that sponsors, attendees and exhibitors expect from a global event. The International Barcelona Convention Center of Barcelona is an iconic venue located in the Barcelona district of Sant Martí, inside the 22@ of Poblenou neighbourhood.
              </p>
              <p className="text-white/80 mb-4">
                The CCIB comprises two buildings of great architectural value: the Convention Centre and the Auditorium CCIB Forum, joined by an underground connecting walkway. With a gross surface area of 100,000 m² and a capacity for up to 15,000 attendees, both buildings stand out for their size, natural light, and the great versatility of their spaces.
              </p>
              <p className="text-white/80 mb-4">
                The CCIB enjoys a privileged location just 500 metres from the beach, 6 km from the historic centre and 22 km from the airport, with excellent links to the most important highways and roads, and by the public transport network.
              </p>
              <Carousel
                images={[
                  "/img/1.Exterior.jpg",
                  "/img/escaleras.jpg",
                  "/img/Banquet Hall.1.jpg",
                  "/img/Exterior_15.jpg",
                  "/img/sala_polivalente.jpg",
                ]}
                alt="Venue images"
              />
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6 flex flex-col gap-4">
              <div className="font-medium text-white text-base">
                Interest form (coming soon)
              </div>
              <div className="text-white/70 text-base">
                We are preparing the interest form and it will be available
                shortly. If you want to be notified as soon as the form opens,
                leave your email below and we will contact you.
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="https://drive.google.com/uc?export=download&id=1w62XZagr7RhDoR4fhyT8vfnhga0CWnHR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-yellow-600 text-black px-4 py-2 font-medium"
                >
                  Download info pack
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white"
                >
                  Interest form (coming soon)
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitors;
