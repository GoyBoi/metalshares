/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable image optimization
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'via.placeholder.com',
      // Add any other domains where images will be hosted
    ],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different resolutions
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Quality setting for optimized images
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;