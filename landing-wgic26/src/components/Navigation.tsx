"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, FileUp, Menu, Ticket } from "lucide-react";
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 80);
      setShowNavbar(!(currentScrollY > 1400 && currentScrollY > lastScrollY));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          title: t("wgiNetwork"),
          url: "/about/wgi-network",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("universityLleida"),
          url: "/about/univeristy-of-lleida",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("locations"),
          url: "/about/locations",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("organisationCommittee"),
          url: "/about/organisation-committee",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("congressCommittee"),
          url: "/about/congress-committee",
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
          title: t("gaudiYear"),
          url: "/program/gaudi-year-2026",
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
          title: t("program"),
          url: "/program/program",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("programCongress"),
          url: "/program/congress",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("specialIssues"),
          url: "/program/special-issues",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("workshops"),
          url: "/program/workshops",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("technicalVisits"),
          url: "/program/technical-visits",
          description: "...",
          icon: <ArrowRight />,
        },
        {
          title: t("innovationDay"),
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
    { title: t("newsletters"), url: "/newsletters" },
    { title: t("blog"), url: "/blog" },
    { title: t("keyNoteSpeakers"), url: "/key-note-speakers" },
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
    { title: t("planYourStay"), url: "/plan-your-stay" },

    // { title: t("travel"), url: "/travel" },
  ];

  return (
    <div className="fixed px-0 lg:px-4 lg:pt-1 top-0 lg:left-0 w-full z-50 transition-all duration-350 ease-in-out transform">
      <nav
        className={`w-full px-4 py-3 transition-all duration-350 ease-in-out transform border-0 border-white/0 ${
          showNavbar ? "translate-y-0" : "-translate-y-[160%]"
        } ${
          scrolled
            ? "bg-cactus/50 backdrop-blur-xl pl-4 lg:pr-6 lg:py-1 py-4 lg:rounded-2xl border-white/8-1 lg:border-1 border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="hidden lg:flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <AnimatedLogo scrolled={scrolled} visible={showNavbar} />
          </Link>
          <NavigationMenu className="flex-1">
            <NavigationMenuList className="flex 2xl:gap-1 xl:gap-0 gap-0 justify-center">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 items-center flex-shrink-0">
            <LanguageSwitcher />
            <div className="flex gap-1 items-center">
              <Button asChild variant="yellow" size="sm" className="text-[10px] 2xl:text-xs px-2 py-1 h-8 2xl:px-3">
                <a href="/speakers">
                  <FileUp size={16} />
                  <span className="hidden 2xl:inline ml-1">{t("papersProjects")}</span>
                </a>
              </Button>
              <Button asChild variant="default" size="sm" className="text-[10px] 2xl:text-xs px-2 py-1 h-8 2xl:px-3">
                <a href="/registration">
                  <Ticket size={16} />
                  <span className="hidden 2xl:inline ml-1">{t("tickets")}</span>
                </a>
              </Button>
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
                variant="yellow"
                size="lg"
                className="hidden sm:flex"
              >
                <a href="/speakers">
                  <FileUp size={24} />
                  {t("papersProjects")}
                </a>
              </Button>
              <Button
                asChild
                className="sm:hidden"
                variant="yellow"
                size="icon"
              >
                <a href="/speakers">
                  <FileUp size={24} />
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                size="lg"
                className="hidden sm:flex"
              >
                <a href="/registration">
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
                <a href="/registration">
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
                    <Button asChild variant="yellow" size="lg">
                      <a href="/speakers">
                        <FileUp size={24} />
                        {t("papersProjects")}
                      </a>
                    </Button>
                    <Button asChild variant="default" size="lg">
                      <a href="/registration">
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
