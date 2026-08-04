/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: "/lisans-key.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hizmetler/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hata-cozum/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/makaleler/:path*",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
