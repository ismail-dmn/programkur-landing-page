import type { MetadataRoute } from "next"

const siteUrl = "https://programkur.com.tr"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const sections = [
    "neden-biz",
    "yazilimlar",
    "hizmetler",
    "nasil-calisir",
    "uzak-baglanti",
    "fiyat",
    "sss",
  ]

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sections.map((id) => ({
      url: `${siteUrl}/#${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
