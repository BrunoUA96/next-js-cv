/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'myfreedo.in',
      'upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
