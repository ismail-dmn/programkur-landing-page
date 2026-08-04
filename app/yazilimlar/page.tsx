import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { softwareList } from "@/lib/content"

export const metadata: Metadata = {
  title: "Desteklediğimiz Yazılımlar | AutoCAD, Revit, Lumion, SolidWorks",
  description:
    "AutoCAD, Revit, Lumion ve SolidWorks başta olmak üzere profesyonel yazılımlar için uzaktan kurulum, lisans aktivasyonu ve hata çözümü.",
  alternates: { canonical: "/yazilimlar" },
}

export default function YazilimlarPage() {
  return (
    <PageShell crumbs={[{ label: "Yazılımlar", href: "/yazilimlar" }]}>
      <PageHero
        eyebrow="Yazılımlar"
        title="Kurulum ve destek verdiğimiz profesyonel yazılımlar"
        description="Her yazılımın kendine özgü kurulum, lisans ve donanım gereksinimleri var. Aşağıdaki sayfalarda kapsam, sistem gereksinimleri ve sık görülen hataları bulabilirsiniz."
        whatsappMessage="Merhaba, bir yazılım kurulumu için bilgi almak istiyorum."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:px-8">
          {softwareList.map((software) => (
            <Link
              key={software.slug}
              href={`/yazilimlar/${software.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-navy">{software.title}</h2>
                <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {software.vendor}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {software.summary}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">
                  Sürümler: {software.versions}
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-5 lg:px-8">
          <p className="rounded-2xl border border-border bg-muted/50 p-6 text-[15px] leading-relaxed text-muted-foreground">
            Listede olmayan bir yazılım için de destek veriyoruz: SketchUp, V-Ray, Enscape, 3ds
            Max, Rhino, CorelDRAW, Adobe uygulamaları, Microsoft Office ve Microsoft 365, EBYS ve
            e-imza bileşenleri, barkod yazıcı sürücüleri ve daha fazlası.
          </p>
        </div>
      </section>

      <CtaBand message="Merhaba, ihtiyacım olan yazılımın kurulumu için bilgi almak istiyorum." />
    </PageShell>
  )
}
