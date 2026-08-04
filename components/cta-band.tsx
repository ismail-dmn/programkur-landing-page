import { MessageCircle, Phone } from "lucide-react"
import { whatsappLink, PHONE_DISPLAY } from "@/lib/utils"

export function CtaBand({
  title = "Bu işlemi sizin için uzaktan yapalım",
  description = "WhatsApp'tan yazın, ortalama 15 dakikada dönüş yapıyoruz. Ödeme kurulum tamamlandıktan sonra.",
  message = "Merhaba, destek almak istiyorum.",
}: {
  title?: string
  description?: string
  message?: string
}) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-7 rounded-3xl border border-border bg-muted/60 p-8 lg:flex-row lg:items-center lg:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-navy text-balance">
              {title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-md"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Destek
            </a>
            <a
              href="tel:+905385050002"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
