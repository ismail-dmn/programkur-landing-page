import type { MetadataRoute } from "next"
import { getSitemapEntries, getSitemapIds } from "@/lib/sitemap"

export function generateSitemaps() {
  return getSitemapIds().map((id) => ({ id }))
}

export default async function sitemap({
  id,
}: {
  id: Promise<string>
}): Promise<MetadataRoute.Sitemap> {
  const resolvedId = Number.parseInt(await id, 10)
  return getSitemapEntries(Number.isNaN(resolvedId) ? 0 : resolvedId)
}
