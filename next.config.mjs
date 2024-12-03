/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.flaticon.es",
      }
    ],
  }
};

export default nextConfig;
