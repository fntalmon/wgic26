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
            value: "frame-src 'self' https://drive.google.com https://docs.google.com https://*.google.com https://*.googleusercontent.com https://panel.helice.app https://*.helice.app; frame-ancestors 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://panel.helice.app https://*.helice.app; connect-src 'self' https://panel.helice.app https://*.helice.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
