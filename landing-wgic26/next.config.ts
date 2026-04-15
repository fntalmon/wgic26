import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hzimzrtjurnxavnbvzmv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "ars.els-cdn.com",
        port: "",
        pathname: "/content/image/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/content/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com https://*.youtube-nocookie.com https://youtu.be https://drive.google.com https://docs.google.com https://*.google.com https://*.googleusercontent.com https://panel.helice.app https://*.helice.app https://www.google.com https://www.gstatic.com; frame-ancestors 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://panel.helice.app https://*.helice.app https://www.google.com https://www.gstatic.com https://*.googleapis.com https://www.googletagmanager.com https://*.youtube.com https://*.ytimg.com; connect-src 'self' https://panel.helice.app https://*.helice.app https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.youtube.com;",
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          }
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
