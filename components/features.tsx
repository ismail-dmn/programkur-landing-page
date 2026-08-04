import {
  Zap,
  KeyRound,
  Cpu,
  Gauge,
  Wrench,
  Check,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    icon: Zap,
    title: "Aynı Gün Kurulum",
    description:
      "Acil ihtiyaçlarınızda beklemeyin. Uygun olduğumuz an bağlanıp yazılımınızı aynı gün içinde kullanıma hazır hale getiriyoruz.",
    points: ["Öncelikli randevu", "Hızlı indirme & kurulum", "Anında kullanıma hazır"],
    accent: "#2563eb",
  },
  {
    icon: KeyRound,
    title: "Profesyonel Aktivasyon Desteği",
    description:
      "Lisans ve aktivasyon adımlarında takılmayın. Yazılımın doğru şekilde etkinleştirilmesini uçtan uca yönetiyoruz.",
    points: ["Lisans doğrulama", "Aktivasyon sorunları", "Güncelleme yapılandırması"],
    accent: "#06b6d4",
  },
  {
    icon: Cpu,
    title: "Sürücü Kurulumu",
    description:
      "Ekran kartı, yazıcı ve diğer donanım sürücülerini doğru sürümlerle kurup sistem uyumunu sağlıyoruz.",
    points: ["GPU sürücüleri", "Donanım uyumu", "Kararlı performans"],
    accent: "#2563eb",
  },
  {
    icon: Gauge,
    title: "Performans Optimizasyonu",
    description:
      "Yavaşlayan bilgisayarınızı hızlandırıyor, ağır tasarım yazılımları için sistemi en verimli hale getiriyoruz.",
    points: ["Başlangıç temizliği", "Bellek optimizasyonu", "Hız iyileştirmesi"],
    accent: "#06b6d4",
  },
  {
    icon: Wrench,
    title: "Kurulum Hatalarının Giderilmesi",
    description:
      "Yarım kalan veya hata veren kurulumları temizleyip sorunsuz bir kurulum ile problemi kökünden çözüyoruz.",
    points: ["Hata analizi", "Temiz kurulum", "Kalıcı çözüm"],
    accent: "#2563eb",
  },
]

function FeatureVisual({ accent, Icon }: { accent: string; Icon: typeof Zap }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-background p-8 shadow-sm">
      <div
        className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-15 blur-2xl"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-4">
        <span
          className="flex size-16 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{ backgroundColor: accent }}
        >
          <Icon className="size-8" aria-hidden="true" />
        </span>
        <div className="space-y-2">
          <div className="h-3 w-28 rounded-full bg-navy/10" />
          <div className="h-3 w-20 rounded-full bg-navy/5" />
        </div>
      </div>
      <div className="relative mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
          <span className="h-2.5 w-24 rounded-full bg-navy/10" />
          <span className="flex items-center gap-1 text-xs font-semibold text-[#28a745]">
            <Check className="size-3.5" aria-hidden="true" /> Hazır
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
          <span className="h-2.5 w-32 rounded-full bg-navy/10" />
          <span className="h-2.5 w-10 rounded-full" style={{ backgroundColor: accent }} />
        </div>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section className="border-t border-border bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Sadece kurulum değil, eksiksiz çözüm"
          description="Kurulumdan optimizasyona kadar bilgisayarınızın ihtiyaç duyduğu her teknik desteği sağlıyoruz."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const reversed = i % 2 === 1
            return (
              <div
                key={feature.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Özellik {i + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-[15px] font-medium text-navy">
                        <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" aria-hidden="true" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <FeatureVisual accent={feature.accent} Icon={Icon} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
