import { Check, MessageCircle, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { whatsappLink } from "@/lib/utils"

const included = [
  "Uzaktan yazılım kurulumu",
  "Lisans & aktivasyon desteği",
  "Kurulum hatalarının giderilmesi",
  "7 gün teknik destek",
  "Para iade garantisi",
]

export function Pricing() {
  return (
    <section id="fiyat" className="scroll-mt-20 border-t border-border bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Fiyatlandırma"
          title="Tek ve şeffaf fiyat"
          description="Gizli maliyet yok. Her şey dahil, net fiyat. Yalnızca sorun çözüldüğünde ödersiniz."
        />

        <Reveal className="mx-auto mt-14 max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-navy-700 bg-navy p-8 text-primary-foreground shadow-2xl shadow-navy/30 sm:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-cyan/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-sm font-semibold text-cyan-light">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Her şey dahil
              </span>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight sm:text-6xl">1.000</span>
                <span className="mb-2 text-2xl font-semibold text-white/70">TL</span>
                <span className="mb-2 ml-1 text-sm text-white/50">/ işlem başına</span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                Kurulum, aktivasyon ve destek dahil sabit fiyat. Sürpriz ücret yoktur.
              </p>

              <ul className="mt-8 space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px]">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-cyan-light">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink("Merhaba, 1000 TL'lik kurulum hizmeti için destek almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary-600 hover:shadow-xl"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp&apos;tan Hemen Başla
              </a>
              <p className="mt-4 text-center text-xs text-white/50">
                İşlem tamamlanmadan ödeme almıyoruz.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
