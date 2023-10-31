/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
  images: {
    domains: ['naru396-aws-storage.s3-ap-northeast-1.amazonaws.com']
  },
}

module.exports = nextConfig
