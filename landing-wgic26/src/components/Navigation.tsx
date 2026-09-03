"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, Ticket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatedLogo } from "./AnimatedLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  items?: MenuItem[];
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="flex flex-col pt-4 pb-5 pl-6 pr-6 bg-black absolute whitespace-nowrap min-w-min gap-2">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="w-max hover:bg-transparent hover:text-white normal-case"
            >
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-light uppercase hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col my-3 gap-3">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      className="text-2xl font-light uppercase"
      key={item.title}
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  if (item.disabled) {
    return (
      <span
        className="flex flex-row gap-4 justify-start text-muted-foreground opacity-60 cursor-not-allowed select-none"
        aria-disabled="true"
        title="Coming soon"
      >
        <div className="flex gap-2 lg:gap-2 py-2">
          <div className="text-lg lg:text-xs lg:pl-0 pl-8">{item.title}</div>
        </div>
      </span>
    );
  }

  return (
    <a
      className="flex flex-row gap-4 justify-start rounded-none leading-none transition-none outline-none select-none normal-case lg:hover:underline lg:hover:underline-offset-8 lg:hover:decoration-2 lg:hover:decoration-potus"
      href={item.url}
    >
      <div className="flex gap-2 lg:gap-2 py-2">
        <div className="text-lg lg:text-xs lg:pl-0 pl-8">{item.title}</div>
      </div>
    </a>
  );
};

const Navigation = () => {
  const t = useTranslations("navigation");
  // La barra queda siempre fija y visible; solo cambia el fondo al hacer scroll.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const month = t("octAbbrev");

  const menu: MenuItem[] = [
    {
      title: t("about"),
      url: "/about",
      items: [
        {
          title: t("congress"),
          url: "/about/congress",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("theOrganisers"),
          url: "/about/univeristy-of-lleida",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("wgiNetwork"),
          url: "/about/wgi-network",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("committees"),
          url: "/about/committees",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("barcelonaLleida"),
          url: "/about/locations",
          description: "...",
          icon: <ArrowRight />,
        },
      ],
    },
    {
      title: t("program"),
      url: "/program",
      items: [
        {
          title: `${t("fullProgramme")} · 27-28 ${month}`,
          url: "/program/congress",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("mainTopics"),
          url: "/program/topics",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: `${t("workshops")} · 27-28 ${month}`,
          url: "/program/workshops",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: `${t("technicalVisits")} · 29 ${month}`,
          url: "/program/technical-visits",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: `${t("innovationDay")} · 30 ${month}`,
          url: "/program/innovation-day",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("wginAwards"),
          url: "/program/wgin-awards",
          description: "...",
          icon: <ArrowRight />,
        },
      ],
    },
    { title: t("keyNoteSpeakers"), url: "/key-note-speakers" },
    {
      title: t("news"),
      url: "/blog",
      items: [
        {
          title: t("blog"),
          url: "/blog",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("newsletters"),
          url: "/newsletters",
          description: "...",
          icon: <ArrowRight />,
        },
      ],
    },
    // { title: t("speakers"), url: "/speakers" },
    // { title: t("registration"), url: "/registration", disabled: true },
    {
      title: t("partnersExhibitors"),
      url: "/exhibitors",
      items: [
        {
          title: t("sponsors"),
          url: "/sponsors",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("becomeSponsor"),
          url: "/exhibitors",
          description: "...",
          icon: <ArrowRight />,
        },
      ],
    },
    {
      title: t("planYourStay"),
      url: "/plan-your-stay",
      items: [
        {
          title: t("planYourStay"),
          url: "/plan-your-stay",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("gaudiYear"),
          url: "/program/gaudi-year-2026",
          description: "...",
          icon: <ArrowRight />,
        },
      ],
    },

    // { title: t("travel"), url: "/travel" },
  ];

  return (
    <div className="fixed px-0 lg:px-4 lg:pt-1 top-0 lg:left-0 w-full z-50 transition-all duration-350 ease-in-out transform">
      {/* Franja permanente: nombre completo, fechas y sede del congreso + early bird */}
      <div
        className={`w-full bg-cactus/90 backdrop-blur-xl px-4 lg:px-6 py-1.5 flex items-center justify-between gap-4 text-[9px] lg:text-[11px] uppercase tracking-[0.15em] text-white/80 transition-all duration-350 translate-y-0`}
      >
        <span className="truncate">{t("stripName")}</span>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="hidden xl:inline">
            27–30 {month} · Barcelona &amp; Lleida
          </span>
          {/* Early bird: eliminar cuando termine la oferta (30/9) */}
          <a
            href="https://panel.helice.app/w/wgic26/214760/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-potus font-semibold hover:underline"
          >
            {t("stripCta")}
          </a>
        </div>
      </div>
      <nav
        className={`w-full px-4 py-3 transition-all duration-350 ease-in-out transform border-0 border-white/0 translate-y-0 ${
          scrolled
            ? "bg-cactus/50 backdrop-blur-xl pl-4 lg:pr-6 lg:py-1 py-4 lg:rounded-2xl border-white/8-1 lg:border-1 border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="hidden lg:flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <AnimatedLogo scrolled={scrolled} visible />
          </Link>
          <NavigationMenu className="flex-1">
            <NavigationMenuList className="flex 2xl:gap-1 xl:gap-0 gap-0 justify-center">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 items-center flex-shrink-0">
            <LanguageSwitcher />
            <div className="flex items-center gap-2">
              <Button asChild variant="default" size="lg" className="text-xs 2xl:text-sm px-4 2xl:px-5 h-10">
                <a
                  href="https://panel.helice.app/w/wgic26/214760/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ticket size={18} />
                  <span className="ml-1">{t("tickets")}</span>
                </a>
              </Button>
              {/* Badge early bird: eliminar cuando termine la oferta (30/9) */}
              <a
                href="https://panel.helice.app/w/wgic26/214760/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:inline-flex items-center bg-potus text-black text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1.5 animate-pulse hover:animate-none"
              >
                {t("ticketsUrgency")}
              </a>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden justify-between w-full items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/wgic26_logo/wgic26_logo.svg"
              alt="logo"
              height={64}
              width={108}
              className="max-h-16"
            />
          </Link>
          <div className="flex gap-1 sm:gap-1.5">
            <div className="flex gap-1 sm:gap-2">
              <Button
                asChild
                variant="default"
                size="lg"
                className="hidden sm:flex"
              >
                <a
                  href="https://panel.helice.app/w/wgic26/214760/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ticket size={24} />
                  {t("tickets")}
                </a>
              </Button>
              <Button
                asChild
                className="sm:hidden"
                variant="default"
                size="icon"
              >
                <a
                  href="https://panel.helice.app/w/wgic26/214760/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ticket size={24} />
                </a>
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-cactus/50 backdrop-blur-xl rounded-3xl text-white border-1 border-white/8 m-6 pt-32 pb-16 px-8 sm:px-16 md:px-24 w-[calc(100%-24px*2)] h-[calc(100%-24px*2)] sm:max-w-full">
                <SheetTitle className="sr-only">
                  {t("mobileMenuTitle")}
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t("mobileMenuDescription")}
                </SheetDescription>
                <div className="flex flex-col gap-6 justify-between h-full">
                  <Accordion
                    type="multiple"
                    className="flex w-full flex-col gap-6 text-regular"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3 items-center pb-12">
                    <LanguageSwitcher />
                    <Button asChild variant="default" size="lg">
                      <a
                        href="https://panel.helice.app/w/wgic26/214760/registration"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Ticket size={24} />
                        {t("tickets")}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navigation };
