import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import CommitteesClient from "./CommitteesClient";

export const metadata: Metadata = {
  title: "Committees | WGIC26 Barcelona-Lleida",
  description:
    "The honour, organising, scientific and professional committees behind WGIC26, the World Green Infrastructure Congress 2026 in Barcelona and Lleida.",
};

const CommitteesPage = async () => {
  const t = await getTranslations("committeesPage");
  const nav = await getTranslations("navigation");

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        section={nav("about")}
      />
      <CommitteesClient />
    </div>
  );
};

export default CommitteesPage;
