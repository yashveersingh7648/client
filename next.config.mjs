/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  output: 'standalone',
    images: {
        domains: ['yourdomain.com'],
      },
};

export default nextConfig;
