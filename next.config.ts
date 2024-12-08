import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        pathname: "/**",
      },
    ],
  },
}

export default withNextIntl(nextConfig)
