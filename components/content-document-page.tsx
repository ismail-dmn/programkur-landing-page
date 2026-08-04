import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { MarkdownContent } from "@/components/markdown-content"
import { PageHero } from "@/components/page-hero"
import { PageShell } from "@/components/page-shell"
import { RelatedContent } from "@/components/related-content"
import { ContentBody } from "@/components/content-body"
import { getDocumentMetaLinks } from "@/components/content-meta-links"
import {
  getCollectionLabel,
  getContentSource,
  getRelatedContentGroups,
  type ContentDocument,
} from "@/lib/content-engine"
import { getContentBreadcrumbs } from "@/lib/seo"
import { getContentJsonLd } from "@/lib/structured-data"

function formatDate(value?: string) {
  if (!value) return undefined
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? undefined
    : new Intl.DateTimeFormat("tr-TR", { dateStyle: "long" }).format(date)
}

export async function ContentDocumentPage({ document }: { document: ContentDocument }) {
  const updated = formatDate(document.lastModified)
  const metaLinks = getDocumentMetaLinks(document)

  const updatedText = updated ? { label: "Güncellenme", value: updated } : undefined
  const textMeta = [
    document.software ? { label: "Yazılım", value: document.software } : undefined,
    document.service ? { label: "Hizmet", value: document.service } : undefined,
    document.city ? { label: "Şehir", value: document.city } : undefined,
    updatedText,
  ].filter((item): item is { label: string; value: string } => Boolean(item))

  const faqs = document.faq.map((item) => ({ q: item.question, a: item.answer }))
  const source = getContentSource(document)
  const relatedGroups = getRelatedContentGroups(document)
  const eyebrow = document.category || getCollectionLabel(document.collection)

  return (
    <PageShell crumbs={getContentBreadcrumbs(document)}>
      <JsonLd data={getContentJsonLd(document)} />
      <PageHero
        eyebrow={eyebrow}
        title={document.title}
        description={document.description}
        meta={textMeta}
        whatsappMessage={`Merhaba, "${document.title}" konusu için destek almak istiyorum.`}
      />

      <article className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <ContentBody intro={document.description} blocks={[]} faqs={faqs}>
          <MarkdownContent source={source} />
        </ContentBody>
        <RelatedContent groups={relatedGroups} />
      </article>

      <CtaBand message={`Merhaba, "${document.title}" konusu için destek almak istiyorum.`} />
    </PageShell>
  )
}
