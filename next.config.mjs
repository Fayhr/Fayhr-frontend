/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
        NEXT_PUBLIC_SECRET:process.env.NEXT_PUBLIC_SECRET,
        NEXT_PUBLIC_BASE_URL:process.env.NEXT_PUBLIC_BASE_URL
  }
};

export default nextConfig;
