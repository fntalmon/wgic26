import type { Metadata } from "next";
import NewslettersClient from "./NewslettersClient";

export const metadata: Metadata = {
  title: "Newsletters | WGIC26 Barcelona-Lleida",
  description:
    "Catch up on the latest WGIC26 newsletters — news and updates from the green infrastructure conference 2026 in Barcelona and Lleida.",
};

export default function Newsletters() {
  return <NewslettersClient />;
}
