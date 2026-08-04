import { Star, BadgeCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}

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
      <figcaption className="flex items-center gap-3">
        <span
          className="flex size-11 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: t.color }}
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-sm font-semibold text-navy">{t.name}</span>
            <BadgeCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
          </div>
          <div className="truncate text-xs text-muted-foreground">
            {t.role} · {t.company}
          </div>
        </div>
        <GoogleG className="size-5 shrink-0" />
      </figcaption>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-[#fbbc05] text-[#fbbc05]" aria-hidden="true" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">Google&apos;da doğrulandı</span>
      </div>

      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-navy/80">
        {t.review}
      </blockquote>
    </figure>
  )
}

export function Testimonials() {
  const row = [...testimonials, ...testimonials]
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Binlerce mutlu müşterinin güvendiği hizmet"
          description="Mimarlardan öğrencilere, kurumsal firmalardan serbest çalışanlara kadar herkesin tercihi. Gerçek, doğrulanmış yorumlar."
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
