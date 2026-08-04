import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    name: "Mehmet Aksoy",
    role: "Mimar",
    company: "Aksoy Mimarlık",
    initials: "MA",
    color: "#2563eb",
    review:
      "AutoCAD ve Revit kurulumunu aynı gün içinde uzaktan hallettiler. Ofise gelmelerine gerek kalmadı, işlem sonrası ödeme yapmak da çok güven verdi.",
  },
  {
    name: "Zeynep Yıldız",
    role: "İnşaat Mühendisi",
    company: "YDZ İnşaat",
    initials: "ZY",
    color: "#06b6d4",
    review:
      "Lumion kurulumunda başka yerlerde çözülemeyen bir hatayı 15 dakikada çözdüler. Gerçekten işini bilen bir ekip. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Emre Demir",
    role: "Endüstriyel Tasarımcı",
    company: "Freelance",
    initials: "ED",
    color: "#e51050",
    review:
      "SolidWorks lisans aktivasyonumda takılmıştım. WhatsApp'tan yazdım, birkaç dakika içinde bağlandılar ve sorunu çözdüler. Süper hızlı.",
  },
  {
    name: "Selin Kaya",
    role: "Muhasebe Ofisi",
    company: "Kaya Mali Müşavirlik",
    initials: "SK",
    color: "#54b948",
    review:
      "Logo ve Office kurulumlarını her sene onlarla yapıyoruz. Şeffaf fiyat, hızlı çözüm ve nazik ekip. Artık başka yere bakmıyoruz.",
  },
  {
    name: "Burak Şahin",
    role: "Mimarlık Öğrencisi",
    company: "İTÜ",
    initials: "BŞ",
    color: "#d83b01",
    review:
      "Öğrenci bütçesine uygun, hızlı ve güvenilir. SketchUp ve AutoCAD'i sorunsuz kurdular, kullanmayı da kısaca anlattılar. Teşekkürler!",
  },
  {
    name: "Ayşe Toprak",
    role: "Grafik Tasarımcı",
    company: "Toprak Studio",
    initials: "AT",
    color: "#ff3366",
    review:
      "Adobe Creative Cloud kurulumunu ve performans optimizasyonunu birlikte yaptılar. Bilgisayarım şimdi çok daha hızlı çalışıyor.",
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-cyan text-cyan" aria-hidden="true" />
          ))}
        </div>
        <Quote className="size-7 text-primary/15" aria-hidden="true" />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/80">
        {t.review}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          className="flex size-11 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: t.color }}
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <div>
          <div className="text-sm font-semibold text-navy">{t.name}</div>
          <div className="text-xs text-muted-foreground">
            {t.role} · {t.company}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const row = [...testimonials, ...testimonials]
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Referanslar"
          title="200+ mutlu müşterinin güvendiği hizmet"
          description="Mimarlardan öğrencilere, kurumsal firmalardan serbest çalışanlara kadar herkes için."
        />
      </div>

      <div className="marquee-paused relative mt-14 flex flex-col gap-5">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32"
          aria-hidden="true"
        />
        <div
          className="flex w-max gap-5 animate-marquee"
          style={{ "--marquee-duration": "50s" } as React.CSSProperties}
        >
          {row.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
