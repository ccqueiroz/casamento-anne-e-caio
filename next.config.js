/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FAUNA_ADMIN_KEY: process.env.FAUNA_ADMIN_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  }
}

module.exports = nextConfig
