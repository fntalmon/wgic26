import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Congress Committee | WGIC26 Barcelona-Lleida",
  description:
    "Meet the scientific committee behind WGIC26, reviewing research for this nature-based solutions conference bringing together green infrastructure experts from around the world.",
};

const CongressCommittee = async () => {
  const t = await getTranslations("aboutCongressCommittee");
  const nav = await getTranslations("navigation");

  const scientificCommittee = [
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

  const professionalCommittee = [
    { name: "Toni Amich", institution: "Sempergreen", country: "Spain" },
    { name: "Ignasi Pérez", institution: "BIM Academy", country: "Spain" },
    { name: "Aslam Jonoubi", institution: "Architect and urban engineer, CEO company", country: "Iran" },
    { name: "Linda Velázquez", institution: "greenroofs.com", country: "USA" },
    { name: "Audrey Timm", institution: "AIPH Green City initiative", country: "United Kingdom" },
    { name: "Steven Peck", institution: "President WGIN/GRHC", country: "USA" },
    { name: "Hema Kumar", institution: "ZTC International Landscape Solution", country: "India" },
  ];

  return (
    <div>
      <PageHeader title={t("title")} description={t("description")} section={nav("about")} />

      <section className="w-full justify-start text-sm">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-sm lg:text-base text-justify">
            <p>{t("introP1")}</p>
            <p>{t("introP2")}</p>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">{t("scientificCommittee")}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20 table-fixed">
                <colgroup>
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                </colgroup>
                <thead>
                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("name")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("institution")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("country")}</th>
                  </tr>
                </thead>
                <tbody>
                  {scientificCommittee.map((member, i) => (
                    <tr key={`${member.name}-${i}`} className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.name}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.institution}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-medium text-white uppercase mb-6">{t("professionalCommittee")}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20 table-fixed">
                <colgroup>
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                </colgroup>
                <thead>
                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("name")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("institutionRole")}</th>
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium">{t("country")}</th>
                  </tr>
                </thead>
                <tbody>
                  {professionalCommittee.map((member, i) => (
                    <tr key={`${member.name}-${i}`} className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.name}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.institution}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80">{member.country}</td>
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

export default CongressCommittee;
