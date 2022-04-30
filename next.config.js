/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.casamentoanneecaio.com/:path*'
      }
    ]
  },
  env: {
    AWS_SECRETKEY: process.env.AWS_SECRETKEY,
    AWS_ACCESSKEY: process.env.AWS_ACCESSKEY,
    AWSREGION: process.env.AWSREGION,
    AWSBUCKET: process.env.AWSBUCKET,
    FAUNA_ADMIN_KEY: process.env.FAUNA_ADMIN_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  }
}

module.exports = nextConfig
