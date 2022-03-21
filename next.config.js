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
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              replaceAttrValues: { '#000': 'currentColor' },
            },
          },
          'url-loader',
        ],
      }
    )

    return config
  },
}

module.exports = nextConfig
