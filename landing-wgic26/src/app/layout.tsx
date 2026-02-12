import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "WGIC26 Barcelona",
  description: "World Green Infrastructure Congress 2026 - Barcelona",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <body className="bg-monstera text-white font-light" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
        <Navigation />
        <main className="flex flex-col gap-10 mt-28 lg:mt-40 mb-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
