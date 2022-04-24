/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FAUNA_ADMIN_KEY: process.env.FAUNA_ADMIN_KEY
  }
}

module.exports = nextConfig
