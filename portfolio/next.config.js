/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'images',
        hostname: 'unsplash.com'
      }
    ]
  }
};

module.exports = nextConfig;
