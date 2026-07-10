import type { Metadata } from "next";
import ExhibitorsClient from "./ExhibitorsClient";

export const metadata: Metadata = {
  title: "Partners & Exhibitors | WGIC26 Barcelona-Lleida",
  description:
    "Sponsor or exhibit at WGIC26, the green infrastructure conference 2026 in Barcelona. Reach an international audience of urban sustainability leaders and researchers.",
};

export default function Exhibitors() {
  return <ExhibitorsClient />;
}
