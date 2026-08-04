import { MessageCircle, Phone } from "lucide-react"
import { whatsappLink, PHONE_DISPLAY } from "@/lib/utils"

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  whatsappMessage,
}: {
  eyebrow: string
  title: string
  description: string
  meta?: { label: string; value: string }[]
  whatsappMessage?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <span className="inline-flex items-center rounded-full border border-cyan-light/30 bg-cyan-light/10 px-3.5 py-1 text-sm font-semibold text-cyan-light">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
          {description}
        </p>

        {meta && meta.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/50">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-primary-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={whatsappLink(whatsappMessage ?? "Merhaba, destek almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp&apos;tan Yaz
          </a>
          <a
            href="tel:+905385050002"
            className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
