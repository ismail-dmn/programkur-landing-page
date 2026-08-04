import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ContentBody } from "@/components/content-body"
import { CtaBand } from "@/components/cta-band"
import { getPost, posts } from "@/lib/content"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
    },
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 4)

  return (
    <PageShell crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        meta={[
          { label: "Okuma süresi", value: post.readingTime },
          { label: "Güncellenme", value: post.updated },
        ]}
        whatsappMessage={`Merhaba, "${post.title}" yazısındaki konuda destek almak istiyorum.`}
      />

      <article className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden="true" />
            Güncellenme: {post.updated}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden="true" />
            {post.readingTime} okuma
          </span>
        </div>

        <ContentBody
          intro={post.intro}
          highlights={post.highlights}
          blocks={post.blocks}
          faqs={post.faqs}
        />

        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-navy">İlgili yazılar</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
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

      <CtaBand message={`Merhaba, "${post.title}" konusunda yardım almak istiyorum.`} />
    </PageShell>
  )
}
