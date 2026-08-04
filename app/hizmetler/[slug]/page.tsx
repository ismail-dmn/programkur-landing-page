import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ContentBody } from "@/components/content-body"
import { CtaBand } from "@/components/cta-band"
import { getService, services } from "@/lib/content"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: { title: service.metaTitle, description: service.description },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <PageShell
      crumbs={[
        { label: "Hizmetler", href: "/hizmetler" },
        { label: service.title },
      ]}
    >
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
        meta={[
          { label: "Ortalama süre", value: service.duration },
          { label: "Kapsam", value: "Türkiye geneli uzaktan" },
          { label: "Ödeme", value: "Kurulum sonrası" },
        ]}
        whatsappMessage={`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`}
      />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <ContentBody
          intro={service.intro}
          highlights={service.highlights}
          blocks={service.blocks}
          faqs={service.faqs}
        />

        <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
          <h2 className="text-lg font-semibold text-navy">Diğer hizmetler</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/hizmetler/${other.slug}`}
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

      <CtaBand message={`Merhaba, ${service.title} için destek almak istiyorum.`} />
    </PageShell>
  )
}
