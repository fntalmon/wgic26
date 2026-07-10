import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "WGIC26 – Green Infrastructure Conference 2026 | Barcelona-Lleida",
  description:
    "Join the World Green Infrastructure Congress 2026, the leading green infrastructure conference 2026 in Barcelona and Lleida, Spain, Oct 27–30. Nature-based solutions, urban resilience and global experts.",
};

export default function Home() {
  return <HomeClient />;
}
