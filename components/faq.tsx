"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Uzaktan kurulum güvenli mi?",
    a: "Evet. Şifreli ve onaylı uzaktan erişim araçları kullanıyoruz. Bağlantıyı siz başlatırsınız, ekranı anlık görebilir ve dilediğiniz an sonlandırabilirsiniz. Süreç tamamen KVKK uyumludur.",
  },
  {
    q: "Kurulum ne kadar sürüyor?",
    a: "Çoğu yazılım kurulumu internet hızınıza bağlı olarak 15-45 dakika arasında tamamlanır. Acil durumlarda aynı gün içinde işleme başlıyoruz.",
  },
  {
    q: "Ödeme ne zaman yapılıyor?",
    a: "Ödemeyi yalnızca kurulum başarıyla tamamlanıp yazılımın çalıştığını birlikte test ettikten sonra alıyoruz. Sorun çözülmezse ücret alınmaz.",
  },
  {
    q: "Hangi yazılımları kurabiliyorsunuz?",
    a: "AutoCAD, Revit, Lumion, SketchUp, SolidWorks, Office, Adobe Creative Cloud, CorelDRAW, Windows, SQL Server, Logo, ETA, yazıcı ve tarayıcı programları dahil 20'den fazla profesyonel yazılımı kurabiliyoruz.",
  },
  {
    q: "Lisans sağlıyor musunuz?",
    a: "Lisanslı yazılımlarınızın kurulum ve aktivasyon süreçlerinde teknik destek veriyoruz. Elinizdeki lisansların doğru şekilde etkinleştirilmesine yardımcı oluyoruz.",
  },
  {
    q: "Kurulum sonrası destek var mı?",
    a: "Evet, her kurulumdan sonra 30 gün boyunca oluşabilecek sorunlar için ücretsiz teknik destek sağlıyoruz.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border bg-card px-5 shadow-sm transition-colors hover:border-primary/20 sm:px-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-navy sm:text-lg">{q}</span>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-navy transition-all duration-300",
            open && "rotate-45 bg-primary text-primary-foreground",
          )}
        >
          <Plus className="size-4" aria-hidden="true" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export function Faq() {
  return (
    <section id="sss" className="scroll-mt-20 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="SSS" title="Sıkça sorulan sorular" />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <FaqItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
