import Link from "next/link"

type MetaLink = {
  label: string
  href: string
}

const COLLECTION_HOME: Record<string, string> = {
  yazılımlar: "/yazilimlar",
  yazılım: "/yazilimlar",
  hizmet: "/hizmetler",
  hizmetler: "/hizmetler",
  şehir: "/hizmetler",
  şehirler: "/hizmetler",
  rehber: "/rehberler",
  rehberler: "/rehberler",
}

export function getDocumentMetaLinks(document: {
  software?: string
  service?: string
  city?: string
  category?: string
  collection: string
}) {
  const links: MetaLink[] = []

  const toSlug = (value: string) =>
    value
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/ı/g, "i")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  if (document.software) {
    const slug = toSlug(document.software)
    links.push({ label: "Yazılım", href: `/yazilimlar/${slug}` })
  }

  if (document.service) {
    const slug = toSlug(document.service)
    links.push({ label: "Hizmet", href: `/hizmetler/${slug}` })
  }

  if (document.city) {
    links.push({ label: "Şehir", href: "/hizmetler" })
  }

  if (document.category && COLLECTION_HOME[document.category.toLocaleLowerCase("tr-TR")]) {
    links.push({ label: "Kategori", href: COLLECTION_HOME[document.category.toLocaleLowerCase("tr-TR")] })
  }

  return links
}

export function ContentMetaLink({ label, href }: MetaLink) {
  const absoluteHref = href.startsWith("/") || href.startsWith("http") ? href : `/${href}`

  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/50">
        {label}
      </dt>
      <dd className="mt-1 text-[15px] font-medium text-primary-foreground">
        <Link
          href={absoluteHref}
          className="underline underline-offset-4 transition-colors hover:text-cyan-light"
        >
          {label === "Yazılım" ? (href.split("/").pop() ?? href) : href}
        </Link>
      </dd>
    </div>
  )
}
