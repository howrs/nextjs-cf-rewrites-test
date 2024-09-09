/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `/abc/:path`,
        destination: `/abc?g=:path`,
      },
    ];
  },
};

export default nextConfig;
