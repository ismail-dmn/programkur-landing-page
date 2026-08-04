import {
  MonitorSmartphone,
  UserCog,
  KeyRound,
  BadgeDollarSign,
  Lock,
  ShieldCheck,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: MonitorSmartphone,
    title: "Uzaktan Kurulum",
    description:
      "Bilgisayarınıza gelmemize gerek yok. Güvenli uzaktan bağlantı ile tüm kurulumları hızlıca tamamlıyoruz.",
  },
  {
    icon: UserCog,
    title: "Deneyimli Teknisyenler",
    description:
      "Mühendislik ve tasarım yazılımlarında uzmanlaşmış ekibimizle en zorlu kurulumları sorunsuz yapıyoruz.",
  },
  {
    icon: KeyRound,
    title: "Lisans & Aktivasyon Desteği",
    description:
      "Lisanslı yazılımlarınızın aktivasyon süreçlerinde uçtan uca profesyonel destek sağlıyoruz.",
  },
  {
    icon: BadgeDollarSign,
    title: "Şeffaf Fiyatlandırma",
    description:
      "Sürpriz ücret yok. İşleme başlamadan önce net fiyatı öğrenir, gönül rahatlığıyla devam edersiniz.",
  },
  {
    icon: Lock,
    title: "Güvenli Bağlantı",
    description:
      "Şifreli oturumlar ve KVKK uyumlu süreçlerle verileriniz her zaman güvende kalır.",
  },
  {
    icon: ShieldCheck,
    title: "Memnuniyet Garantisi",
    description:
      "Sorun çözülmezse ödeme almıyoruz. Para iade garantisi ile risksiz hizmet sunuyoruz.",
  },
]

export function WhyUs() {
  return (
    <section id="neden-biz" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Neden Biz?"
          title="Binlerce profesyonelin tercih ettiği kurulum deneyimi"
          description="Hız, güven ve şeffaflık üzerine kurulu bir hizmet. Her adımda yanınızdayız."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
