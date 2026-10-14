import { redirect } from "next/navigation";

// Former API test page; the live speakers list now lives at /program/speakers.
export default function SpeakersTestPage() {
  redirect("/program/speakers");
}
