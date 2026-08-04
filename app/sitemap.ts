import type { MetadataRoute } from "next"
import { getAllSitemapEntries } from "@/lib/sitemap"

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries()
}
