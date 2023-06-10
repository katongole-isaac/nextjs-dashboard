/** @type {import('next').NextConfig} */
const nextConfig = {}

nextConfig.images = {
  domains: ["img.icons8.com"],
};

nextConfig.redirects = async () => [
  {
    source: "/",
    destination: "/dashboard",
    permanent: false,
  },
];

module.exports = nextConfig;
