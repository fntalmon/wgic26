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

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/30">
                    <th
                      rowSpan={2}
                      className="border border-white/20 px-4 py-3 text-left text-white font-medium"
                    >
                      Benefits
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium"
                    >
                      Partners
                    </th>
                    <th
                      colSpan={2}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium"
                    >
                      Sponsors
                    </th>
                  </tr>

                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                      Elite
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                      Global
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                      Event
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                      Tree
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                      Leaf
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Congress Invitations
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      4
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      4
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      4
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      2
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Gala Dinner at CCIB
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      4
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      4
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      2
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      2
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Meetings B2B
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Speaking Slot
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Rooms naming
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Workshops (15 min)
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      ✔
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Visibility & Social Media
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Newsletter, Social Media, Logo, Special Content
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Newsletter, Social Media, Logo, Special Content
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Newsletter, Social Media, Logo, Special Content
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Newsletter, Social Media, Logo, Special Content
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Newsletter, Social Media, Logo
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      Costs
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      To agree with organization{" "}
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      15.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      10.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      8.000€
                    </td>
                    <td className="border border-white/20 px-4 py-3 text-white/80">
                      6.000€
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/20">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                        Exhibitor
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                        Benefits
                      </th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        Garden (10 available)
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        2 Congress Invitations, Modular stand (6-12 mq), Gala
                        Dinner 1, B2B meetings, Visibility
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        3.000€ - 5.000€ (stand not included)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        Flower (30 available)
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        2 Congress Invitations, Roll up + table + 2 chairs, Gala
                        Dinner 1, B2B meetings, Visibility
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        2.000€ (stand not included)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg text-white uppercase mb-3">The Venue</h4>
              <p className="text-white/80 mb-4">
                The International Barcelona Convention Center (CCIB) offers an
                iconic and flexible setting for the congress, with excellent
                transport links and facilities to host a worldwide audience. The
                venue combines sunlight, space and modular areas ideal for
                exhibitions and networking.
              </p>
              <Carousel
                images={[
                  "/img/1.Exterior.jpg",
                  "/img/1_Auditori - Platea.jpg",
                  "/img/Banquet Hall.1.jpg",
                  "/img/Exterior_15.jpg",
                ]}
                alt="Venue images"
              />
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6 flex flex-col gap-4">
              <div className="font-medium text-white">
                Interest form (coming soon)
              </div>
              <div className="text-white/70">
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
