"use client"

import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <section className="lg:pt-24">
        <div className="uppercase text-3xl xs:text-4xl pr-8 sm:text-5xl w-full md:text-6xl lg:text-5xl lg:w-3/5 xl:text-6xl leading-tight tracking-tight">
          World <strong>Green</strong><br />Infrastructure<br />Congress 2026<br /><strong>Barcelona</strong>
        </div>
        <div className="flex flex-col h-auto content-between gap-10 w-full lg:w-2/5">
          <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white/50">
            <h6 className="flex w-full h-full">27-29 OCT 2026</h6>
            <h6 className="flex w-full h-full">CCIB - Parc del Forum, Barcelona (Spain)</h6>
          </div>
          <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white/50">
            <h6 className="flex w-full h-full">30 OCT 2026</h6>
            <h6 className="flex w-full h-full">Universitat de Lleida - Lleida (Spain)</h6>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-0">
        <div className="bg-[url(/img/hero.jpg)] bg-no-repeat bg-cover bg-center w-full h-[700px]"></div>
        <Countdown />
        <div id="banner" className="bg-cement text-mortar w-full h-[500px] pl-12 pr-14 py-12 flex flex-col justify-between items-end">
          <div className="flex flex-col gap-3 uppercase text-3xl md:text-5xl w-full">
            <div>Talks</div>
            <div>Exhibitions</div>
            <div>Networking</div>
            <div>Content</div>
          </div>
          <Image
            src="/img/wgic26_logo/wgic26_logo.svg"
            alt={"WGIC26_logo"}
            width={200}
            height={80}
            className="max-h-32" />
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
      <section id="newsletter" className="flex flex-col lg:flex-row gap-0">
        <div className="bg-[url(/img/image.png)] bg-no-repeat bg-cover bg-center w-full xl:w-1/3"></div>

        <div className="flex flex-col gap-20 bg-cement text-mortar w-full p-10 lg:p-18 flex flex-col justify-between items-end">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 uppercase text-3xl md:text-4xl">
              <div>Stay up to date</div>
              <h4>Register to our Newsletter</h4>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row w-full items-center gap-20 lg:justify-between">
            {/* Newsletter form */}
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
