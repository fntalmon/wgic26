import type { NextConfig } from "next";

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
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://drive.google.com https://docs.google.com https://*.google.com https://*.googleusercontent.com https://panel.helice.app https://*.helice.app https://www.google.com https://www.gstatic.com; frame-ancestors 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://panel.helice.app https://*.helice.app https://www.google.com https://www.gstatic.com https://*.googleapis.com https://www.googletagmanager.com; connect-src 'self' https://panel.helice.app https://*.helice.app https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com;",
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

export default nextConfig;
