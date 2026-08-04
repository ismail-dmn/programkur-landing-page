import { MessageSquareText, PlugZap, DownloadCloud, CheckCircle2, Wallet } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    icon: MessageSquareText,
    title: "WhatsApp",
    description: "İhtiyacınız olan yazılımı ve durumu kısaca iletin. Ortalama 15 dakikada dönüş yapıyoruz.",
  },
  {
    icon: PlugZap,
    title: "Güvenli Bağlantı",
    description: "Şifreli uzaktan erişim aracıyla bilgisayarınıza güvenle bağlanıyoruz.",
  },
  {
    icon: DownloadCloud,
    title: "Kurulum",
    description: "Yazılımı kurar, lisans ve aktivasyon işlemlerini eksiksiz tamamlarız.",
  },
  {
    icon: CheckCircle2,
    title: "Test",
    description: "Programın sorunsuz çalıştığını sizinle birlikte test eder, kontrol ederiz.",
  },
  {
    icon: Wallet,
    title: "Ödeme",
    description: "Yalnızca işlem başarıyla tamamlandıktan sonra ödeme alıyoruz. Risk tamamen bizde.",
  },
]

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nasıl Çalışır?"
          title="Beş basit adımda çözüm"
          description="Karmaşık süreçler yok. Yazın, bağlanalım, kuralım, test edelim ve en sonda ödeyin."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {/* connector line */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={i * 0.12}>
                <li className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-md shadow-navy/5">
                    <Icon className="size-6" aria-hidden="true" />
                    <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground md:max-w-xs">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
