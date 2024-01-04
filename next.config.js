/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
