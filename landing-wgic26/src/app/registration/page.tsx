import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Registration | WGIC26 Barcelona-Lleida",
  description:
    "Registration for WGIC26 is closed.",
};

const Registration = async () => {
  const t = await getTranslations("registrationPage");

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("closed")}
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />
    </div>
  );
};

export default Registration;
