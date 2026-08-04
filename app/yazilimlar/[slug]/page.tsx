import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ContentBody } from "@/components/content-body"
import { CtaBand } from "@/components/cta-band"
import { getSoftware, softwareList } from "@/lib/content"

export function generateStaticParams() {
  return softwareList.map((software) => ({ slug: software.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const software = getSoftware(slug)
  if (!software) return {}
  return {
    title: software.metaTitle,
    description: software.description,
    alternates: { canonical: `/yazilimlar/${software.slug}` },
    openGraph: { title: software.metaTitle, description: software.description },
  }
}

export default async function SoftwareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const software = getSoftware(slug)
  if (!software) notFound()

  const others = softwareList.filter((s) => s.slug !== software.slug)

  return (
    <PageShell
      crumbs={[{ label: "Yazılımlar", href: "/yazilimlar" }, { label: software.title }]}
    >
      <PageHero
        eyebrow={software.eyebrow}
        title={software.title}
        description={software.summary}
        meta={[
          { label: "Üretici", value: software.vendor },
          { label: "Desteklenen sürümler", value: software.versions },
          { label: "Ödeme", value: "Kurulum sonrası" },
        ]}
        whatsappMessage={`Merhaba, ${software.title} için destek almak istiyorum.`}
      />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <ContentBody intro={software.intro} blocks={software.blocks} faqs={software.faqs}>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-semibold text-navy">Kullanım alanları</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {software.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-semibold text-navy">Sistem gereksinimleri</h2>
              <dl className="mt-4 flex flex-col gap-3">
                {software.requirements.map((req) => (
                  <div key={req.label} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {req.label}
                    </dt>
                    <dd className="text-sm text-navy">{req.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </ContentBody>

        <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
          <h2 className="text-lg font-semibold text-navy">Diğer yazılımlar</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/yazilimlar/${other.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30"
                >
                  <span className="text-[15px] font-medium text-navy">{other.title}</span>
                  <ArrowRight
                    className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CtaBand message={`Merhaba, ${software.title} kurulumu için destek almak istiyorum.`} />
    </PageShell>
  )
}
