import type { MetadataRoute } from "next"
import { guides, posts, services, softwareList } from "@/lib/content"
import { getAllContentDocuments } from "@/lib/content-engine"
import { SITE_URL, absoluteUrl } from "@/lib/site"

export const SITEMAP_PAGE_SIZE = 50_000

type SitemapEntry = MetadataRoute.Sitemap[number]

const staticRoutes: SitemapEntry[] = [
  { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
  { url: absoluteUrl("/hakkimizda"), changeFrequency: "yearly", priority: 0.4 },
  { url: absoluteUrl("/iletisim"), changeFrequency: "yearly", priority: 0.5 },
  { url: absoluteUrl("/gizlilik-politikasi"), changeFrequency: "yearly", priority: 0.3 },
  { url: absoluteUrl("/kullanim-sartlari"), changeFrequency: "yearly", priority: 0.3 },
  { url: absoluteUrl("/kvkk-aydinlatma-metni"), changeFrequency: "yearly", priority: 0.3 },
  { url: absoluteUrl("/hizmetler"), changeFrequency: "monthly", priority: 0.8 },
  { url: absoluteUrl("/yazilimlar"), changeFrequency: "monthly", priority: 0.8 },
  { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.8 },
  { url: absoluteUrl("/rehberler"), changeFrequency: "weekly", priority: 0.7 },
]

function legacyContentEntries(): SitemapEntry[] {
  return [
    ...services.map((item) => ({
      url: absoluteUrl(`/hizmetler/${item.slug}`),
      lastModified: item.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...softwareList.map((item) => ({
      url: absoluteUrl(`/yazilimlar/${item.slug}`),
      lastModified: item.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((item) => ({
      url: absoluteUrl(`/blog/${item.slug}`),
      lastModified: item.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...guides.map((item) => ({
      url: absoluteUrl(`/rehberler/${item.slug}`),
      lastModified: item.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}

function markdownContentEntries(): SitemapEntry[] {
  return getAllContentDocuments().map((document) => ({
    url: absoluteUrl(document.pathname),
    lastModified: document.lastModified,
    changeFrequency: document.collection === "blog" ? "weekly" : "monthly",
    priority: document.priority,
    images: document.image ? [absoluteUrl(document.image)] : undefined,
  }))
}

export function getAllSitemapEntries() {
  const byUrl = new Map<string, SitemapEntry>()

  for (const entry of [...staticRoutes, ...legacyContentEntries(), ...markdownContentEntries()]) {
    byUrl.set(entry.url, entry)
  }

  return Array.from(byUrl.values())
}

export function getSitemapIds() {
  const pageCount = Math.max(1, Math.ceil(getAllSitemapEntries().length / SITEMAP_PAGE_SIZE))
  return Array.from({ length: pageCount }, (_, id) => id)
}

export function getSitemapEntries(id: number) {
  const safeId = Number.isInteger(id) && id >= 0 ? id : 0
  const start = safeId * SITEMAP_PAGE_SIZE
  return getAllSitemapEntries().slice(start, start + SITEMAP_PAGE_SIZE)
}

export function getSitemapLocations() {
  return getSitemapIds().map((id) => `${SITE_URL}/sitemap/${id}.xml`)
}
