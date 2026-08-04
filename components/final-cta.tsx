import { MessageCircle, Phone, ShieldCheck, Clock, Lock } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { whatsappLink, PHONE_DISPLAY } from "@/lib/utils"

const badges = [
  { icon: ShieldCheck, label: "Para İade Garantisi" },
  { icon: Clock, label: "Aynı Gün Kurulum" },
  { icon: Lock, label: "Güvenli Bağlantı" },
]

export function FinalCta() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-primary-foreground shadow-2xl shadow-navy/30 sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-10 size-56 rounded-full bg-cyan/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Yazılım probleminizi bugün çözelim
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
              WhatsApp&apos;tan yazın, ortalama 15 dakika içinde dönüş yapalım. Kurulumdan
              sonra ödeyin, gerisini bize bırakın.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink("Merhaba, yazılım problemimi çözmek için hemen destek almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary-600 hover:shadow-xl sm:w-auto"
              >
                <MessageCircle className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                WhatsApp Destek Al
              </a>
              <a
                href="tel:+905385050002"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
              >
                <Phone className="size-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {badges.map((badge) => {
                const Icon = badge.icon
                return (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-white/70">
                    <Icon className="size-4 text-cyan-light" aria-hidden="true" />
                    {badge.label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
