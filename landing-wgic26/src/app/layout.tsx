import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PopupManager } from "@/components/PopupManager";
import { SocialSidebar } from "@/components/SocialSidebar";
import { EarlyBirdBanner } from "@/components/EarlyBirdBanner";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata = {
  title: "WGIC26 Barcelona-Lleida",
  description: "World Green Infrastructure Congress 2026 - Barcelona",
  icons: {
    icon: [
      { url: "/img/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/icons/favicon.ico" },
    ],
    apple: "/img/icons/apple-touch-icon.png",
  },
  manifest: "/img/icons/site.webmanifest",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-38ME4KFC4N"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-38ME4KFC4N', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-monstera text-white font-light" style={{ fontFamily: "Century Gothic, sans-serif" }}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <EarlyBirdBanner compact fixedBottom />
          <SocialSidebar />
          <main className="flex flex-col gap-10 mt-24 lg:mt-32 mb-24 min-h-screen">
            {children}
          </main>
          <Footer />
          <PopupManager />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
