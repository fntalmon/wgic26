import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";

const OrganisationCommittee = async () => {
  const t = await getTranslations("aboutOrganisationCommittee");
  const nav = await getTranslations("navigation");

  const honourCommittee = [
    {
      role: t("roles.wginPresident"),
      name: "Mr. Steeven Peck",
      institution: t("roles.wginPresident"),
    },
    {
      role: t("roles.udlRector"),
      name: "Maria Àngels Balsells",
      institution: t("roles.udlRector"),
    },
    {
      role: t("roles.catalanGov"),
      name: "",
      institution: t("roles.catalanGov"),
    },
    {
      role: t("roles.barcelonaMunicipality"),
      name: "",
      institution: t("roles.barcelonaMunicipality"),
    },
    {
      role: t("roles.provincialCouncilBarcelona"),
      name: "",
      institution: t("roles.provincialCouncil"),
    },
    {
      role: t("roles.lleidaMunicipality"),
      name: "",
      institution: t("roles.lleidaMunicipality"),
    },
    {
      role: t("roles.provincialCouncilLleida"),
      name: "",
      institution: t("roles.provincialCouncil"),
    },
    {
      role: t("roles.chairCongress"),
      name: "Dr. Gabriel Pérez",
      institution: t("roles.chairCongress"),
    },
  ];

  const organizingCommittee = [
    { role: "University of Lleida / BIG4LIFE", name: "Gabriel Pérez" },
    { role: "University of Lleida / BIG4LIFE", name: "Julià Coma" },
    { role: "University of Lleida / BIG4LIFE", name: "Laura Herrera" },
    { role: "WGIN", name: "David Brasfield" },
    { role: "WGIN", name: "Hemma Kumar" },
    { role: "WGIN", name: "Zoe Averi" },
    { role: "WGIN", name: "Tanya Muller" },
    { role: "Private sector / BIG4LIFE", name: "Toni Amich" },
  ];

  return (
    <div>
      <PageHeader title={t("title")} description={t("description")} section={nav("about")} />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">{t("honourCommittee")}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("role")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("representative")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("institution")}</th>
                  </tr>
                </thead>
                <tbody>
                  {honourCommittee.map((member, index) => (
                    <tr key={`${member.role}-${index}`} className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.role}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {member.name || <span className="italic text-white/40">{t("toBeConfirmed")}</span>}
                      </td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {member.institution || <span className="italic text-white/40">{t("toBeConfirmed")}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">{t("organizingCommittee")}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("role")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("representative")}</th>
                  </tr>
                </thead>
                <tbody>
                  {organizingCommittee.map((member, index) => (
                    <tr key={`${member.name}-${index}`} className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.role}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">
                        {member.name || <span className="italic text-white/40">{t("toBeConfirmed")}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganisationCommittee;
