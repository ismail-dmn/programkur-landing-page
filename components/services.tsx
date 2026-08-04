import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { whatsappLink } from "@/lib/utils"

const services = [
  {
    short: "OF",
    color: "#d83b01",
    name: "Microsoft Office Kurulumu",
    description:
      "Word, Excel, PowerPoint ve Outlook dahil tüm Office paketlerinin uzaktan kurulumu ve lisans aktivasyonu.",
  },
  {
    short: "365",
    color: "#e74225",
    name: "Microsoft 365 Kurulumu",
    description:
      "Microsoft 365 aboneliği kurulumu, hesap yapılandırması ve tüm cihazlarınızda senkronizasyon desteği.",
  },
  {
    short: "OD",
    color: "#0364b8",
    name: "OneDrive Kurulumu",
    description:
      "OneDrive kurulumu, bulut yedekleme ayarları ve dosyalarınızın güvenli senkronizasyonu için tam destek.",
  },
  {
    short: "SP",
    color: "#036c70",
    name: "SharePoint Kurulumu",
    description:
      "SharePoint yapılandırması, ekip siteleri ve belge kütüphaneleri kurulumu ile kurumsal iş birliği çözümleri.",
  },
  {
    short: "Win",
    color: "#0078d4",
    name: "Windows Kurulumu",
    description:
      "Windows işletim sistemi kurulumu, güncelleme, sürücü yapılandırması ve performans optimizasyonu.",
  },
  {
    short: "AC",
    color: "#e51050",
    name: "AutoCAD Kurulumu",
    description:
      "AutoCAD kurulumu, lisans aktivasyonu ve proje dosyalarınızla sorunsuz çalışması için eksiksiz yapılandırma.",
  },
  {
    short: "Rh",
    color: "#801000",
    name: "Rhino Kurulumu",
    description:
      "Rhino 3D modelleme yazılımı kurulumu, eklenti entegrasyonu ve lisanslama süreçlerinde profesyonel destek.",
  },
  {
    short: "VR",
    color: "#00a2e0",
    name: "V-Ray Kurulumu",
    description:
      "V-Ray render motoru kurulumu ve AutoCAD, SketchUp, 3ds Max gibi programlarla eklenti entegrasyonu.",
  },
  {
    short: "SW",
    color: "#e2231a",
    name: "SolidWorks Kurulumu",
    description:
      "SolidWorks kurulumu, lisans aktivasyonu ve mühendislik projeleriniz için tam performanslı yapılandırma.",
  },
  {
    short: "LU",
    color: "#00a8b0",
    name: "Lumion Kurulumu",
    description:
      "Lumion mimari görselleştirme yazılımı kurulumu, ekran kartı optimizasyonu ve lisanslama desteği.",
  },
  {
    short: "Cc",
    color: "#ff3366",
    name: "Adobe Creative Cloud Kurulumu",
    description:
      "Photoshop, Illustrator, Premiere ve tüm Adobe uygulamalarının kurulumu ile hesap aktivasyon desteği.",
  },
  {
    short: "TS",
    color: "#2563eb",
    name: "Teknik Destek",
    description:
      "Kurulum sonrası hata giderme, güncelleme, performans ve uyumluluk sorunları için uzaktan teknik destek.",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-20 bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Uzaktan yazılım kurulum hizmetleri"
          description="İhtiyacınız olan programı seçin, WhatsApp üzerinden yazın; aynı gün uzaktan kurulumla teslim edelim."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) * 0.08}>
              <a
                href={whatsappLink(`Merhaba, ${service.name} hizmeti için destek almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex size-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ backgroundColor: service.color }}
                    aria-hidden="true"
                  >
                    {service.short}
                  </span>
                  <ArrowUpRight
                    className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{service.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
