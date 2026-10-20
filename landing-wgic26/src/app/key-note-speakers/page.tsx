import { redirect } from "next/navigation";

// Old URL kept so existing links do not break. The full speakers list lives at /program/speakers
// (keynotes are shown on the home page).
export default function KeyNoteSpeakersRedirect() {
  redirect("/program/speakers");
}
