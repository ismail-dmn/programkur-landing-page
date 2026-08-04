import { TerminalSquare, MessageCircle, Phone, Mail } from "lucide-react"
import { whatsappLink, PHONE_DISPLAY } from "@/lib/utils"

const columns = [
  {
    title: "Hizmetler",
    links: [
      { label: "Uzaktan Kurulum", href: "#yazilimlar" },
      { label: "Aktivasyon Desteği", href: "#neden-biz" },
      { label: "Hata Çözümü", href: "#neden-biz" },
      { label: "Performans Optimizasyonu", href: "#neden-biz" },
    ],
  },
  {
    title: "Yazılımlar",
    links: [
      { label: "AutoCAD", href: "#yazilimlar" },
      { label: "Revit", href: "#yazilimlar" },
      { label: "Lumion", href: "#yazilimlar" },
      { label: "SolidWorks", href: "#yazilimlar" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { label: "Blog", href: "#" },
      { label: "Rehberler", href: "#" },
      { label: "Nasıl Çalışır", href: "#nasil-calisir" },
      { label: "SSS", href: "#sss" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "#" },
      { label: "İletişim", href: "#" },
      { label: "Gizlilik Politikası", href: "#" },
      { label: "KVKK Aydınlatma Metni", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2.5" aria-label="ProgramKur.com.tr">
              <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-primary-foreground">
                <TerminalSquare className="size-5 text-cyan-light" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-navy">
                ProgramKur<span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Türkiye&apos;nin uzaktan yazılım kurulum ve teknik destek uzmanı. 100&apos;den
              fazla profesyonel yazılıma aynı gün destek.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={whatsappLink("Merhaba, destek almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-medium text-navy transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                WhatsApp Destek
              </a>
              <a
                href="tel:+905385050002"
                className="flex items-center gap-2.5 font-medium text-navy transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="mailto:destek@programkur.com.tr"
                className="flex items-center gap-2.5 font-medium text-navy transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                destek@programkur.com.tr
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-navy">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ProgramKur.com.tr · Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Gizlilik
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              KVKK
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
