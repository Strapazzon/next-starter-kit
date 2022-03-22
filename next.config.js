/*
This is a Next.js project bootstrapped with Strapazzon/next-starter
*/

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            replaceAttrValues: { '#000': 'currentColor' },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
