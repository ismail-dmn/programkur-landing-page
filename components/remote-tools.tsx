import { Download, ShieldCheck, MonitorSmartphone } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const tools = [
  {
    name: "AnyDesk",
    short: "AD",
    color: "#ef443b",
    description:
      "Hızlı ve hafif uzaktan bağlantı programı. İndirip çalıştırın, size ilettiğiniz kodla bağlanalım.",
    href: "https://anydesk.com/tr/downloads/windows",
  },
  {
    name: "TeamViewer",
    short: "TV",
    color: "#0e8ee9",
    description:
      "Dünyaca kullanılan güvenli uzaktan destek aracı. QuickSupport sürümü kurulum gerektirmez.",
    href: "https://www.teamviewer.com/tr/download/windows/?",
  },
]

export function RemoteTools() {
  return (
    <section id="uzak-baglanti" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Uzak Bağlantı Programları"
          title="Bağlantı için gerekli programı indirin"
          description="Destek almadan önce aşağıdaki programlardan birini indirin. Bağlantıyı her zaman siz başlatırsınız ve dilediğiniz an sonlandırabilirsiniz."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/5">
                <div className="flex items-center gap-4">
                  <span
                    className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: tool.color }}
                    aria-hidden="true"
                  >
                    {tool.short}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-navy">{tool.name}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MonitorSmartphone className="size-4" aria-hidden="true" />
                      Windows için
                    </p>
                  </div>
                </div>

                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>

                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Download className="size-5" aria-hidden="true" />
                  {tool.name} İndir
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Hangisini indireceğinizden emin değilseniz WhatsApp&apos;tan yazın, birlikte
            ilerleyelim.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
