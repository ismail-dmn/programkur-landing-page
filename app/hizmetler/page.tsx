import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Gauge, KeyRound, MonitorSmartphone, Wrench } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { services } from "@/lib/content"

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Uzaktan Kurulum, Aktivasyon, Hata Çözümü",
  description:
    "Uzaktan program kurulumu, lisans aktivasyon desteği, yazılım hata çözümü ve performans optimizasyonu. Türkiye geneli aynı gün uzaktan destek.",
  alternates: { canonical: "/hizmetler" },
}

const icons = {
  monitor: MonitorSmartphone,
  key: KeyRound,
  wrench: Wrench,
  gauge: Gauge,
}

export default function HizmetlerPage() {
  return (
    <PageShell crumbs={[{ label: "Hizmetler", href: "/hizmetler" }]}>
      <PageHero
        eyebrow="Hizmetler"
        title="Uzaktan yazılım kurulumu ve teknik destek hizmetleri"
        description="Kurulumdan aktivasyona, hata çözümünden performans ayarlarına kadar tüm süreci uzaktan, aynı gün tamamlıyoruz."
        whatsappMessage="Merhaba, hizmetleriniz hakkında bilgi almak istiyorum."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:px-8">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-navy">{service.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="size-4" aria-hidden="true" />
                    {service.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Detaylar
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CtaBand message="Merhaba, hangi hizmetin bana uygun olduğunu öğrenmek istiyorum." />
    </PageShell>
  )
}
