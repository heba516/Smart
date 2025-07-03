import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdnprod.mafretailproxy.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.amazon.com", 
                pathname: "/**",
              },
        ],
        // domains: ['i.ibb.co'],
    },
};

export default nextConfig;
