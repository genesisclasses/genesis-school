/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ✅ allow Cloudinary images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rkdyofxkdnakiosdyjis.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;   // ✅ REQUIRED IN .mjs
