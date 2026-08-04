import type { Metadata } from "next"
import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { whatsappLink, PHONE_DISPLAY } from "@/lib/utils"

export const metadata: Metadata = {
  title: "İletişim | ProgramKur.com.tr Destek Hattı",
  description:
    "WhatsApp, telefon veya e-posta ile bize ulaşın. Ortalama 15 dakikada dönüş, Türkiye genelinde uzaktan yazılım kurulum desteği.",
  alternates: { canonical: "/iletisim" },
}

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "En hızlı yol",
    description: "Sorununuzu ve yazılım adını yazın; ortalama 15 dakikada dönüş yapıyoruz.",
    href: whatsappLink("Merhaba, uzaktan yazılım kurulumu için destek almak istiyorum."),
    action: "WhatsApp'tan yaz",
    external: true,
  },
  {
    icon: Phone,
    title: "Telefon",
    value: PHONE_DISPLAY,
    description: "Doğrudan konuşmak isterseniz destek hattımızı arayabilirsiniz.",
    href: "tel:+905385050002",
    action: "Hemen ara",
    external: false,
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "destek@programkur.com.tr",
    description: "Kurumsal talepler, fatura ve çoklu kurulum teklifleri için yazın.",
    href: "mailto:destek@programkur.com.tr",
    action: "E-posta gönder",
    external: false,
  },
]

const info = [
  {
    icon: Clock,
    title: "Çalışma saatleri",
    lines: ["Hafta içi 09:00 - 21:00", "Hafta sonu 10:00 - 20:00", "Acil talepler için WhatsApp"],
  },
  {
    icon: MapPin,
    title: "Hizmet bölgesi",
    lines: [
      "Türkiye'nin tamamı, uzaktan bağlantı ile",
      "Yurt dışından bağlanan kullanıcılar dahil",
      "Fiziksel servise gerek yok",
    ],
  },
]

const askFor = [
  "Kurulmasını istediğiniz yazılım ve sürüm (örn. AutoCAD 2025)",
  "Windows sürümünüz (Windows 10 / 11) ve 64-bit olup olmadığı",
  "Varsa aldığınız hata mesajının ekran görüntüsü",
  "Uygun olduğunuz zaman aralığı",
]

export default function IletisimPage() {
  return (
    <PageShell crumbs={[{ label: "İletişim", href: "/iletisim" }]}>
      <PageHero
        eyebrow="İletişim"
        title="Yazın, aynı gün çözelim"
        description="Kurulum, aktivasyon ya da hata çözümü için bize ulaşmanın en hızlı yolu WhatsApp. Telefon ve e-posta kanallarımız da açık."
        meta={[
          { label: "Ortalama dönüş", value: "15 dakika" },
          { label: "Kapsam", value: "Türkiye geneli" },
          { label: "Ödeme", value: "Kurulum sonrası" },
        ]}
        whatsappMessage="Merhaba, uzaktan yazılım kurulumu için destek almak istiyorum."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ul className="grid gap-5 md:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.title}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <channel.icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-navy">{channel.title}</h2>
                  <p className="mt-1 text-[15px] font-medium text-primary">{channel.value}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {channel.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-navy group-hover:text-primary">
                    {channel.action}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr_1.2fr]">
            {info.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-muted/50 p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-card">
                  <item.icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-[15px] font-semibold text-navy">{item.title}</h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {item.lines.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-muted-foreground">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-navy p-6 lg:p-8">
              <h2 className="text-[15px] font-semibold text-primary-foreground">
                Mesajınızda bunları yazarsanız daha hızlı ilerler
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {askFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-light"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-primary-foreground/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(
                  "Merhaba, kurulum talebim var. Yazılım: ... / Sürüm: ... / Windows: ...",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-md"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Hazır mesajla başla
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
