/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'buffer.com',
      'upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
