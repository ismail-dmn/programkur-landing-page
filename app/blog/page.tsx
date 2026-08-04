import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ArticleList } from "@/components/article-list"
import { CtaBand } from "@/components/cta-band"
import { posts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog | Yazılım Kurulum Yazıları",
  description:
    "AutoCAD, Revit, Lumion, SolidWorks, CorelDRAW, EBYS ve barkod yazıcı kurulumları hakkında yazılar. Kurulum adımları, sistem gereksinimleri ve ipuçları.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <PageShell crumbs={[{ label: "Blog", href: "/blog" }]}>
      <PageHero
        eyebrow="Blog"
        title="Kurulum notları, sürüm bilgileri ve saha deneyimleri"
        description="Sahada en sık karşılaştığımız kurulum konularını yazıya döküyoruz. Kendiniz denemek isterseniz adımlar burada; takılırsanız bir mesaj yeterli."
        whatsappMessage="Merhaba, blog yazınızdaki konuyla ilgili destek almak istiyorum."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ArticleList items={posts} basePath="/blog" />
        </div>
      </section>

      <CtaBand
        title="Yazıyı okudunuz ama takıldınız mı?"
        message="Merhaba, blogdaki adımları uyguladım ama takıldım. Destek alabilir miyim?"
      />
    </PageShell>
  )
}
