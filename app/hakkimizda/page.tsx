import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, Wallet, Users } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { services } from "@/lib/content"

export const metadata: Metadata = {
  title: "Hakkımızda | ProgramKur.com.tr",
  description:
    "12 yılı aşkın tecrübeyle uzaktan yazılım kurulumu ve teknik destek. Kim olduğumuzu, nasıl çalıştığımızı ve neden kurulum sonrası ödeme aldığımızı anlatıyoruz.",
  alternates: { canonical: "/hakkimizda" },
}

const values = [
  {
    icon: ShieldCheck,
    title: "Onaya dayalı erişim",
    description:
      "Bağlantı yalnızca sizin verdiğiniz tek kullanımlık şifre ile kurulur. Ekranı siz de görürsünüz, dilediğiniz an sonlandırırsınız.",
  },
  {
    icon: Wallet,
    title: "Kurulum sonrası ödeme",
    description:
      "Ücreti işlem tamamlanıp yazılımın çalıştığını birlikte test ettikten sonra alıyoruz. Risk bizde kalıyor.",
  },
  {
    icon: Clock,
    title: "Aynı gün çözüm",
    description:
      "Talebinize ortalama 15 dakikada dönüyor, çoğu kurulumu 20-60 dakikada tamamlıyoruz.",
  },
  {
    icon: Users,
    title: "Uzman ekip",
    description:
      "Mühendislik, mimarlık ve tasarım yazılımlarında saha deneyimi olan teknik ekiple çalışıyoruz.",
  },
]

const milestones = [
  {
    period: "2013",
    title: "İlk kurulum destekleri",
    description:
      "Mimarlık ve mühendislik öğrencilerine yerinde kurulum desteği vererek başladık.",
  },
  {
    period: "2016",
    title: "Uzaktan desteğe geçiş",
    description:
      "AnyDesk ve TeamViewer ile şehir sınırını kaldırdık; Türkiye genelinde hizmet vermeye başladık.",
  },
  {
    period: "2020",
    title: "Kapsam genişledi",
    description:
      "CAD ve BIM yazılımlarının yanına render, CAM, ofis ve EBYS/e-imza çözümleri eklendi.",
  },
  {
    period: "Bugün",
    title: "200'den fazla başarılı kurulum",
    description:
      "Bireysel kullanıcıların yanında ofis ve şirket ekiplerine çoklu kurulum desteği sağlıyoruz.",
  },
]

export default function HakkimizdaPage() {
  return (
    <PageShell crumbs={[{ label: "Hakkımızda", href: "/hakkimizda" }]}>
      <PageHero
        eyebrow="Hakkımızda"
        title="Program kurulumunu bir sorun olmaktan çıkarıyoruz"
        description="ProgramKur.com.tr, profesyonel yazılımların kurulumunu, lisanslanmasını ve sorunlarının çözümünü uzaktan bağlantı ile üstlenen teknik destek ekibidir."
        meta={[
          { label: "Tecrübe", value: "12+ yıl" },
          { label: "Kapsam", value: "Türkiye geneli" },
          { label: "Kurulum", value: "200+ başarılı işlem" },
        ]}
        whatsappMessage="Merhaba, hizmetleriniz hakkında bilgi almak istiyorum."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-navy text-balance sm:text-3xl">
                Neden bu işi yapıyoruz?
              </h2>
              <div className="mt-5 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                <p className="text-pretty">
                  AutoCAD, Revit, Lumion ya da SolidWorks gibi programlar iş üretmek için var; ancak
                  kurulum aşaması çoğu kullanıcı için saatler alan bir engele dönüşüyor. Uyumsuz
                  sürümler, yarıda kalan kurulumlar, anlaşılmayan lisans ekranları ve internette
                  dolaşan yanlış yönlendirmeler zaman kaybettiriyor.
                </p>
                <p className="text-pretty">
                  Biz bu adımı sizin yerinize üstleniyoruz. Bilgisayarınızı bir yere götürmeden,
                  şifreli uzaktan bağlantı ile programı kuruyor, gerekli yapılandırmayı yapıyor ve
                  çalıştığını sizinle birlikte test ediyoruz. Amacımız işlemi bitirmek değil,
                  programın gerçekten açılıp iş yapabilir hâle gelmesini sağlamak.
                </p>
                <p className="text-pretty">
                  Kurulum sonrası ödeme modelimiz de bu yüzden var: sonuç ortaya çıkmadan ücret
                  talep etmiyoruz.
                </p>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-navy text-balance sm:text-3xl">
            Kısa bir geçmiş
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <li key={item.period} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-sm font-semibold text-primary">{item.period}</span>
                <h3 className="mt-3 text-[15px] font-semibold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-navy text-balance sm:text-3xl">
            Ne yapıyoruz?
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <h3 className="text-[15px] font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Detaylar
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Sorununuzu birlikte çözelim"
        message="Merhaba, ProgramKur ekibinden destek almak istiyorum."
      />
    </PageShell>
  )
}
