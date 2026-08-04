import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ArticleList } from "@/components/article-list"
import { CtaBand } from "@/components/cta-band"
import { guides } from "@/lib/content"

export const metadata: Metadata = {
  title: "Rehberler | Hata Çözümleri ve Karşılaştırmalar",
  description:
    "Yazılım karşılaştırmaları, sistem gereksinimleri ve sık görülen kurulum hatalarının çözümleri. AutoCAD, Revit, Lumion ve SolidWorks rehberleri.",
  alternates: { canonical: "/rehberler" },
}

export default function RehberlerPage() {
  const categories = Array.from(new Set(guides.map((g) => g.category)))

  return (
    <PageShell crumbs={[{ label: "Rehberler", href: "/rehberler" }]}>
      <PageHero
        eyebrow="Rehberler"
        title="Hata çözümleri, karşılaştırmalar ve sistem gereksinimleri"
        description="Kurulum sırasında karşılaştığınız hataların çözümlerini ve hangi yazılımın size uygun olduğunu anlatan rehberleri bir araya topladık."
        whatsappMessage="Merhaba, rehberlerdeki bir konuda destek almak istiyorum."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ul className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-sm font-medium text-navy"
              >
                {category}
              </li>
            ))}
          </ul>
          <ArticleList items={guides} basePath="/rehberler" />
        </div>
      </section>

      <CtaBand
        title="Hatanız listede yok mu?"
        message="Merhaba, kurulumda aldığım hatayı çözmek için destek almak istiyorum."
      />
    </PageShell>
  )
}
