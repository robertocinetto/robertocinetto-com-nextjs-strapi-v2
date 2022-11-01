/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['localhost', 'robertocinetto-com-strapi.herokuapp.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
