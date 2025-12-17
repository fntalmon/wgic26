"use client"

import Countdown from "@/components/Countdown";
import { MapPin } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <section className="lg:pt-24">
        <div className="uppercase text-3xl xs:text-4xl pr-8 sm:text-5xl w-full md:text-6xl lg:text-5xl lg:w-3/5 xl:text-6xl leading-tight tracking-tight">
          World <strong>Green</strong><br />Infrastructure<br />Congress 2026<br /><strong>Barcelona</strong>
        </div>
        <div className="flex flex-col h-auto content-between gap-8 w-full lg:w-2/5">
          <div className="w-full pt-7 border-t-1 border-white/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h6 className="text-base sm:text-xl">27–29 Oct 2026</h6>
              <p className="text-sm sm:text-lg text-white/80 sm:text-right">CCIB - Parc del Forum, Barcelona (Spain)</p>
            </div>
          </div>

          <div className="w-full pt-7 border-t-1 border-white/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h6 className="text-base sm:text-xl">30 Oct 2026</h6>
              <p className="text-sm sm:text-lg text-white/80 sm:text-right">Universitat de Lleida - Lleida (Spain)</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-0">
        <div className="bg-[url(/img/hero.jpg)] bg-no-repeat bg-cover bg-center w-full h-[700px]"></div>
        <Countdown />
        <div id="banner" className="bg-cement text-mortar w-full py-12 pl-6 pr-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 prose prose-invert max-w-none text-base sm:text-lg leading-relaxed md:max-h-[420px] overflow-y-auto pr-4">
              <h2 className="uppercase text-3xl md:text-5xl lg:text-6xl mb-3">WGIC26 Barcelona-Lleida</h2>
              <p>Welcome to the WGIC26 – 12th World Green Infrastructure Congress, which will be held from October 27th to 30th, 2026, at the International Convention Centre of Barcelona (CCIB), Catalonia, Spain. WGIC2026 aims to provide a dynamic and interdisciplinary platform for addressing the challenges of the urban green infrastructure sector contributing to climate change mitigation and adaptation on the way to a safer and healthier future.</p>

              <p>As global society strives for resilient, healthy and fair cities, WGIC26 brings together researchers, engineers, architects and landscape architects, policymakers, industry leaders, and innovators from across the world to exchange cutting-edge research, practical solutions, and forward-thinking ideas. The conference fosters collaboration across disciplines and sectors, emphasizing the role of green infrastructure and nature-based solutions in driving transformative change.</p>

              <p>The program will feature keynote speeches, invited talks, plenary sessions, panel discussions, thematic workshops, technical exhibitions, and oral/poster presentations. Participants will engage with a broad spectrum of topics ranging from Strategies, Policies and Funding programs, Technologies, Market GI/NBS sector and Standards, to Design and Projects, Execution, Maintenance and Quality, but also Education and Training.</p>

              <p>An important part of the congress will be dedicated to the impacts of green infrastructure, i.e. the benefits for society, with the following sections: Climate resilience; Water management; Natural and Climate Hazards; Green Space Management; Biodiversity; Air Quality; Place Regeneration; Knowledge and Social Capacity Building for Sustainable Urban Transformation; Participatory Planning and Governance; Social Justice and Social Cohesion; Health and Well-being; New Economic Opportunities and Green Jobs.</p>

              <p>Three themes will be highlighted during WGIC26: improving people&apos;s health and well-being; recovering society and places after post-conflict or post-disaster situations; and building resilient, healthy and just cities in the Global South.</p>

              <p>The program will be structured in two days of parallel sessions and a third day of technical visits to examples of green infrastructure in Barcelona. In addition, an additional fourth day has been planned dedicated to innovation and research processes in the green infrastructure sector, which will be hosted by the University of Lleida.</p>

              <p>WGIC26 warmly welcomes submissions of original research, case studies, and innovative applications that align with our mission to accelerate the integration of green infrastructure in urban planning, globally. Companies will play a very important role in the congress: the exhibition space will provide a unique exchange place to consolidate future projects, showcase innovative solutions and foster collaborations.</p>

              <p>Located on the coast and with a Mediterranean climate, the city of Barcelona breathes life throughout the year—discover the Gothic Quarter, the legacy of Antoni Gaudí and an outstanding gastronomic scene. Join us in Barcelona and Lleida to co-design urban green infrastructure solutions that allow future generations to enjoy more sustainable, resilient and healthy cities.</p>

              <p className="mt-6">We look forward to meeting you at CCIB in October 2026!</p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-8">
                  <div>
                    <div className="font-medium text-black">Professor Gabriel Pérez</div>
                    <div className="text-black/70 text-sm">University of Lleida — Chair of WGIC26</div>
                  </div>
                  <div>
                    <div className="font-medium text-black">Steven Peck</div>
                    <div className="text-black/70 text-sm">President of WGIN</div>
                  </div>
                </div>
                <Image
                  src="/img/wgic26_logo/wgic26_logo.svg"
                  alt={"WGIC26_logo"}
                  width={180}
                  height={72}
                  className="max-h-20" />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id="locations" className="flex flex-col gap-6">
        <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">Locations</div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div id="location-barcelona" className="flex flex-col bg-cactus text-white uppercase text-4xl gap-0 lg:aspect-auto flex-1">
            <div className="bg-[url(/img/ccib.jpg)] bg-no-repeat bg-cover bg-center w-full h-[320px]"></div>
            <div className="flex flex-col gap-2 px-10 pt-10">
              <div className="text-xs text-white/70 mb-2">Main activities:</div>
              <div>Congress</div>
              <div>Visits</div>
              <div className="flex gap-2 items-center mt-8">
                <MapPin />
                <h6>CCIB - Parc del Forum, Barcelona (Spain)</h6>
              </div>
            </div>
            <Image
              src="/img/logos/Barcelona.svg"
              alt={"Barcelona"}
              width={320}
              height={240}
              className="w-auto self-end justify-self-end mt-16" />
          </div>

          <div id="location-lleida" className="flex flex-col bg-sansiviera text-white uppercase text-4xl gap-0 lg:aspect-auto flex-1">
            <div className="bg-[url(/img/univ_lleida.jpg)] bg-no-repeat bg-cover bg-center w-full h-[320px]"></div>
            <div className="flex flex-col gap-2 px-10 pt-10">
              <div className="text-xs text-white/70 mb-2">Main activities:</div>
              <div>Workshops</div>
              <div>Visits</div>
              <div className="flex gap-2 items-center mt-8">
                <MapPin />
                <h6>Universitat de Lleida - Lleida (Spain)</h6>
              </div>
            </div>
            <Image
              src="/img/logos/Lleida.svg"
              alt={"Lleida"}
              width={320}
              height={240}
              className="w-auto self-end justify-self-end mt-16" />
          </div>

        </div>
      </section>
 {/*   
      <section id="newsletter" className="flex flex-col lg:flex-row gap-0">
        <div className="bg-[url(/img/image.png)] bg-no-repeat bg-cover bg-center w-full xl:w-1/3"></div>

        <div className="flex flex-col gap-20 bg-cement text-mortar w-full p-10 lg:p-18  justify-between items-end">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 uppercase text-3xl md:text-4xl">
              <div>Stay up to date</div>
              <h4>Register to our Newsletter</h4>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row w-full items-center gap-20 lg:justify-between">
            
            <form
              className="flex flex-col xl:flex-row gap-8 w-full 2xl:w-1/2 xl:w-2/3"
              onSubmit={(e) => {
                e.preventDefault()
                const email = e.currentTarget.email.value
                console.log("Newsletter registration:", email)
                // Handle API request here
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-mortar text-sm focus:outline-none focus:ring-2 focus:ring-cactus"
              />
              <Button
                type="submit"
                size={"lg"}
              >Subscribe</Button>
            </form>
            <Image
              src="/img/wgic26_logo/wgic26_logo.svg"
              alt="WGIC26_logo"
              width={200}
              height={80}
              className="max-h-24"
            />
          </div>

        </div>
      </section>
     */}
      <section id="logo-strip-img" className="flex flex-col gap-32 w-auto mt-8 items-center">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-16">
          <a
            href="https://worldgreeninfrastructurenetwork.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/logos/WGIN.svg"
              alt="WGI Network"
              width={320}
              height={240}
              className="max-h-28 opacity-70 hover:opacity-90"
            />
          </a>
          <a
            href="http://udl.cat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/logos/UDL_horizontal.svg"
              alt="Universitat de Lleida"
              width={320}
              height={240}
              className="max-h-28 opacity-70 hover:opacity-90"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 sm:gap-16">
          <Image
            src="/img/logos/Life.svg"
            alt="Life EU"
            width={320}
            height={240}
            className="max-h-20 opacity-70 hover:opacity-90"
          />
          <a
            href="https://www.sempergreen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/logos/SemperGreen.svg"
              alt="Semper Green"
              width={320}
              height={240}
              className="max-h-24 opacity-70 hover:opacity-90"
            />
          </a>
          <Image
            src="/img/logos/IT4S.svg"
            alt="IT4S"
            width={320}
            height={240}
            className="max-h-20 opacity-70 hover:opacity-90"
          />
          <a
            href="http://big4life.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/logos/BIG4LIFE_horizontal.svg"
              alt="BIG4LIFE"
              width={320}
              height={240}
              className="max-h-20 opacity-70 hover:opacity-90"
            />
          </a>
        </div>
      </section>

    </div>
  );
}
