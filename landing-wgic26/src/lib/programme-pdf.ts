const programmePdfUrls: Record<string, string> = {
  es: "/docs/wgic26-programme-es.pdf",
};

const defaultProgrammePdfUrl = "/docs/wgic26-programme-en.pdf";

export function getProgrammePdfUrl(locale: string): string {
  return programmePdfUrls[locale] ?? defaultProgrammePdfUrl;
}
