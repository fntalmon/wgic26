import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RegistrationClient from "./RegistrationClient";
import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Registration | WGIC26 Barcelona-Lleida",
  description:
    "Register now for WGIC26, the green infrastructure conference 2026 in Barcelona. Early-bird pricing available until September 2026.",
};

const Registration = async () => {
  const t = await getTranslations("registrationPage");

  return (
    <div>
      <PageHeader
        title={t("title")}
        description={t("description")}
        buttonText=""
        buttonUrl=""
        buttonIcon={<FileText size={18} />}
        buttonVariant="yellow"
      />
      <RegistrationClient />
    </div>
  );
};

export default Registration;
