import type { Metadata } from "next"
import type { ContentDocument } from "@/lib/content-engine"
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  isoDate,
} from "@/lib/site"

export type BreadcrumbItem = {
  label: string
  href?: string
}

const COLLECTION_ROUTES = {
  software: { label: "Yazılımlar", href: "/yazilimlar" },
  services: { label: "Hizmetler", href: "/hizmetler" },
  blog: { label: "Blog", href: "/blog" },
  faq: { label: "Sık Sorulan Sorular", href: "/#sss" },
  guides: { label: "Rehberler", href: "/rehberler" },
  errors: { label: "Hata Çözümleri", href: "/hizmetler/hata-cozumu" },
  licenses: { label: "Lisans Rehberleri", href: "/hizmetler/aktivasyon-destegi" },
  comparisons: { label: "Karşılaştırmalar", href: "/rehberler" },
  cities: { label: "Şehirler", href: "/hizmetler" },
} as const

function getOpenGraphType(document: ContentDocument) {
  return document.collection === "services" || document.collection === "cities" ? "website" : "article"
}

export function getContentMetadata(document: ContentDocument): Metadata {
  const title = document.metaTitle || document.title
  const description = document.metaDescription || document.description || DEFAULT_DESCRIPTION
  const image = document.image ? [{ url: absoluteUrl(document.image) }] : undefined
  const modifiedTime = isoDate(document.lastModified)

  return {
    title,
    description,
    keywords: document.keywords,
    authors: document.author ? [{ name: document.author }] : undefined,
    alternates: { canonical: document.pathname },
    robots: {
      index: document.published,
      follow: document.published,
      googleBot: {
        index: document.published,
        follow: document.published,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: getOpenGraphType(document),
      locale: "tr_TR",
      url: document.pathname,
      siteName: SITE_NAME,
      title,
      description,
      images: image,
      modifiedTime,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image?.map((item) => item.url.toString()),
    },
    other: {
      "article:modified_time": modifiedTime ?? "",
      "content-language": "tr",
      "x-content-type": document.collection,
    },
  }
}

export function getContentBreadcrumbs(document: ContentDocument): BreadcrumbItem[] {
  const collectionRoute = COLLECTION_ROUTES[document.collection]
  const breadcrumbs: BreadcrumbItem[] = [
    { label: collectionRoute.label, href: collectionRoute.href },
  ]

  if (document.collection === "software" && document.routeSegments.length === 2) {
    const [software] = document.routeSegments
    breadcrumbs.push({ label: software, href: `/software/${software}` })
  }

  breadcrumbs.push({ label: document.title })
  return breadcrumbs
}

export function getContentSchemaBreadcrumbs(document: ContentDocument) {
  const items = getContentBreadcrumbs(document)
  return [
    { label: "Ana Sayfa", href: SITE_URL },
    ...items.map((item, index) => ({
      label: item.label,
      href: item.href ? absoluteUrl(item.href) : index === items.length - 1 ? absoluteUrl(document.pathname) : undefined,
    })),
  ]
}
