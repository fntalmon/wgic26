"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface HonourMember {
  role: string;
  name: string;
}
interface OrgMember {
  role: string;
  name: string;
}
interface SciMember {
  name: string;
  institution: string;
  country: string;
}

function Group({
  title,
  subtitle,
  index,
  children,
}: {
  title: string;
  subtitle: string;
  index: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-white/10 bg-white/[0.02]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 lg:p-8 text-left cursor-pointer group"
      >
        <div className="flex flex-col gap-1">
          <span className="text-lg lg:text-xl text-white font-light uppercase tracking-wide">
            {title}
          </span>
          <span className="text-xs text-white/50">{subtitle}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ${open ? "text-potus" : "text-white/40"} group-hover:text-potus transition-colors`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CommitteesClient() {
  const t = useTranslations("committeesPage");
  const tOrg = useTranslations("aboutOrganisationCommittee");
  const tSci = useTranslations("aboutCongressCommittee");

  const honourCommittee: HonourMember[] = [
    { role: tOrg("roles.wginPresident"), name: "Mr. Steeven Peck" },
    { role: tOrg("roles.udlRector"), name: "Maria Àngels Balsells" },
    { role: tOrg("roles.catalanGov"), name: "" },
    { role: tOrg("roles.barcelonaMunicipality"), name: "" },
    { role: tOrg("roles.provincialCouncilBarcelona"), name: "" },
    { role: tOrg("roles.lleidaMunicipality"), name: "" },
    { role: tOrg("roles.provincialCouncilLleida"), name: "" },
    { role: tOrg("roles.chairCongress"), name: "Dr. Gabriel Pérez" },
  ];

  const organizingCommittee: OrgMember[] = [
    { role: "University of Lleida / BIG4LIFE", name: "Gabriel Pérez" },
    { role: "University of Lleida / BIG4LIFE", name: "Julià Coma" },
    { role: "University of Lleida / BIG4LIFE", name: "Laura Herrera" },
    { role: "WGIN", name: "David Brasfield" },
    { role: "WGIN", name: "Hemma Kumar" },
    { role: "WGIN", name: "Zoe Averi" },
    { role: "WGIN", name: "Tanya Muller" },
    { role: "Private sector / BIG4LIFE", name: "Toni Amich" },
  ];

  const scientificCommittee: SciMember[] = [
    { name: "Gabriel Pérez", institution: "University of Lleida", country: "Spain" },
    { name: "Julià Coma", institution: "University of Lleida", country: "Spain" },
    { name: "Katia Perini", institution: "University of Genoa", country: "Italy" },
    { name: "Selim Bayraktar", institution: "Istanbul University Cerrahpaşa", country: "Turkey" },
    { name: "Cristina Matos", institution: "University of Lisbon", country: "Portugal" },
    { name: "Marta Weber - Siwirska", institution: "Wrocław University of Environmental and Life Sciences", country: "Poland" },
    { name: "Elaise Gabriel", institution: "Universidade Federal de Santa Maria em Cachoeira do Sul", country: "Brazil" },
    { name: "Bert Belmans", institution: "Vrije University Brussel - University of Antwerp", country: "Belgium" },
    { name: "Stephan Brenneisen", institution: "Zurich University of Applied Sciences", country: "Switzerland" },
    { name: "John Rayner", institution: "University of Melbourne", country: "Australia" },
    { name: "Oleksandra Strashok", institution: "Wrocław University of Environmental and Life Sciences", country: "Ukraine" },
    { name: "Jennifer Bousselot", institution: "Colorado State University", country: "USA" },
    { name: "Olyssa Starry", institution: "Bucknell University", country: "USA" },
    { name: "Kamil Rawski", institution: "Białystok University of Technology", country: "Poland" },
    { name: "Beatriz Urbano", institution: "Universidad de Valladolid", country: "Spain" },
    { name: "Leila Tolderlund", institution: "University of Copenhagen", country: "Denmark" },
    { name: "Julián Briz", institution: "Polytechnic University of Madrid", country: "Spain" },
    { name: "Marc Teixidó", institution: "Spanish National Research Council (CSIC). Institute of Environmental Assessment and Water Research", country: "Spain" },
    { name: "Efthimios Zervas", institution: "Hellenic Open University", country: "Greece" },
    { name: "Marianne Saba", institution: "University of Balamand", country: "Lebanon" },
  ];

  const professionalCommittee: SciMember[] = [
    { name: "Toni Amich", institution: "Sempergreen", country: "Spain" },
    { name: "Ignasi Pérez", institution: "BIM Academy", country: "Spain" },
    { name: "Aslam Jonoubi", institution: "Architect and urban engineer, CEO company", country: "Iran" },
    { name: "Linda Velázquez", institution: "greenroofs.com", country: "USA" },
    { name: "Audrey Timm", institution: "AIPH Green City initiative", country: "United Kingdom" },
    { name: "Steven Peck", institution: "President WGIN/GRHC", country: "USA" },
    { name: "Hema Kumar", institution: "ZTC International Landscape Solution", country: "India" },
  ];

  const thClass =
    "border border-white/20 px-4 py-3 text-left text-white font-medium";
  const tdClass = "border border-white/20 px-4 py-3 text-white/80";

  return (
    <section className="w-full justify-start text-xs">
      <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">
        <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base">
          <p>{t("introP1")}</p>
          <p>{t("introP2")}</p>
        </div>

        <div className="flex flex-col gap-4">
          <Group title={t("honourTitle")} subtitle={t("honourSubtitle")} index={0}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/20">
                    <th className={thClass}>{tOrg("role")}</th>
                    <th className={thClass}>{tOrg("representative")}</th>
                  </tr>
                </thead>
                <tbody>
                  {honourCommittee.map((m, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className={tdClass}>{m.role}</td>
                      <td className={tdClass}>
                        {m.name || (
                          <span className="italic text-white/40">
                            {tOrg("toBeConfirmed")}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Group>

          <Group title={t("organisingTitle")} subtitle={t("organisingSubtitle")} index={1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/20">
                    <th className={thClass}>{tOrg("role")}</th>
                    <th className={thClass}>{tOrg("representative")}</th>
                  </tr>
                </thead>
                <tbody>
                  {organizingCommittee.map((m, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className={tdClass}>{m.role}</td>
                      <td className={tdClass}>{m.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Group>

          <Group title={t("scientificTitle")} subtitle={t("scientificSubtitle")} index={2}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/20">
                    <th className={thClass}>{tSci("name")}</th>
                    <th className={thClass}>{tSci("institution")}</th>
                    <th className={thClass}>{tSci("country")}</th>
                  </tr>
                </thead>
                <tbody>
                  {scientificCommittee.map((m, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className={tdClass}>{m.name}</td>
                      <td className={tdClass}>{m.institution}</td>
                      <td className={tdClass}>{m.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Group>

          <Group title={t("professionalTitle")} subtitle={t("professionalSubtitle")} index={3}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/20">
                    <th className={thClass}>{tSci("name")}</th>
                    <th className={thClass}>{tSci("institutionRole")}</th>
                    <th className={thClass}>{tSci("country")}</th>
                  </tr>
                </thead>
                <tbody>
                  {professionalCommittee.map((m, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className={tdClass}>{m.name}</td>
                      <td className={tdClass}>{m.institution}</td>
                      <td className={tdClass}>{m.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Group>
        </div>
      </div>
    </section>
  );
}
