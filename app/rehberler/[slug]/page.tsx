import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ContentBody } from "@/components/content-body"
import { CtaBand } from "@/components/cta-band"
import { getGuide, guides } from "@/lib/content"

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `/rehberler/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.description,
    },
  }
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const related = guides
    .filter((g) => g.slug !== guide.slug && g.category === guide.category)
    .concat(guides.filter((g) => g.slug !== guide.slug && g.category !== guide.category))
    .slice(0, 4)

  return (
    <PageShell crumbs={[{ label: "Rehberler", href: "/rehberler" }, { label: guide.title }]}>
      <PageHero
        eyebrow={guide.category}
        title={guide.title}
        description={guide.description}
        meta={[
          { label: "Okuma süresi", value: guide.readingTime },
          { label: "Güncellenme", value: guide.updated },
        ]}
        whatsappMessage={`Merhaba, "${guide.title}" rehberindeki konuda destek almak istiyorum.`}
      />

      <article className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden="true" />
            Güncellenme: {guide.updated}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden="true" />
            {guide.readingTime} okuma
          </span>
        </div>

        <ContentBody
          intro={guide.intro}
          highlights={guide.highlights}
          blocks={guide.blocks}
          faqs={guide.faqs}
        />

        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-navy">Diğer rehberler</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/rehberler/${item.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30"
                  >
                    <span className="text-[15px] font-medium text-navy">{item.title}</span>
                    <ArrowRight
                      className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <CtaBand message={`Merhaba, "${guide.title}" konusunda yardım almak istiyorum.`} />
    </PageShell>
  )
}
