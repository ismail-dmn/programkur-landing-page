import {
  Zap,
  Wifi,
  UserCog,
  BadgeDollarSign,
  LifeBuoy,
  Cloud,
  DraftingCompass,
  MapPin,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: Zap,
    title: "Aynı Gün Kurulum",
    description:
      "Talebinizi ilettiğiniz gün kuruluma başlıyoruz. Çoğu işlem birkaç saat içinde tamamlanır.",
  },
  {
    icon: Wifi,
    title: "Güvenli Uzaktan Bağlantı",
    description:
      "Şifreli uzaktan erişim ile bilgisayarınıza bağlanır, KVKK uyumlu süreçlerle verilerinizi koruruz.",
  },
  {
    icon: UserCog,
    title: "Deneyimli Mühendisler",
    description:
      "Mühendislik ve tasarım yazılımlarında uzmanlaşmış ekibimizle en zorlu kurulumları sorunsuz yaparız.",
  },
  {
    icon: BadgeDollarSign,
    title: "Şeffaf Fiyatlandırma",
    description:
      "Sürpriz ücret yok. İşleme başlamadan net fiyatı öğrenir, gönül rahatlığıyla devam edersiniz.",
  },
  {
    icon: LifeBuoy,
    title: "Kurulum Sonrası Destek",
    description:
      "İş bitince yalnız kalmazsınız. Kurulum sonrası ortaya çıkan sorunlarda da yanınızdayız.",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Uzmanlığı",
    description:
      "Office, Microsoft 365, Outlook, Teams, OneDrive ve SharePoint kurulum ve aktivasyonunda uzmanız.",
  },
  {
    icon: DraftingCompass,
    title: "CAD Yazılımı Uzmanlığı",
    description:
      "AutoCAD, Revit, SolidWorks, Rhino, V-Ray ve Lumion gibi profesyonel tasarım yazılımlarında deneyimliyiz.",
  },
  {
    icon: MapPin,
    title: "Türkiye Geneli Hizmet",
    description:
      "Uzaktan bağlantı sayesinde Türkiye'nin her yerinden müşterilerimize aynı hızda hizmet veriyoruz.",
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(i % 4) * 0.08}>
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
