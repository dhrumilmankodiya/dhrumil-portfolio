/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // Removed - needed for API routes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;