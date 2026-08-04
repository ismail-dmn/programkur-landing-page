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
    q: "Uzaktan bağlantı sırasında bilgilerim güvende mi?",
    a: "Kesinlikle. Oturum boyunca yalnızca kurulum için gerekli işlemleri yaparız, kişisel dosyalarınıza erişmeyiz. Tüm bağlantı şifrelenir ve işlem bitince erişim tamamen kapanır.",
  },
  {
    q: "Kurulum ne kadar sürüyor?",
    a: "Çoğu yazılım kurulumu internet hızınıza bağlı olarak 15-45 dakika arasında tamamlanır. Acil durumlarda aynı gün içinde işleme başlıyoruz.",
  },
  {
    q: "Kurulum için bilgisayarımın başında olmam gerekiyor mu?",
    a: "Başlangıçta bağlantıyı onaylamanız için birkaç dakika başında olmanız yeterli. Sonrasında kurulum devam ederken işinize bakabilirsiniz, bitince sizinle birlikte test ederiz.",
  },
  {
    q: "Ödeme ne zaman yapılıyor?",
    a: "Ödemeyi yalnızca kurulum başarıyla tamamlanıp yazılımın çalıştığını birlikte test ettikten sonra alıyoruz. Sorun çözülmezse ücret alınmaz.",
  },
  {
    q: "Kurulum ücreti ne kadar?",
    a: "Tek bir yazılım kurulumu 1000 TL'dir. Bu fiyata kurulum, aktivasyon, güncellemeler, yapılandırma ve teknik destek dahildir. Aynı işlemde eklenen her ek yazılım için +500 TL uygulanır.",
  },
  {
    q: "Fiyata neler dahil?",
    a: "Kurulum, aktivasyon, güncellemeler, program yapılandırması ve kurulum sonrası teknik destek fiyata dahildir. Sürpriz ek ücret çıkmaz.",
  },
  {
    q: "Birden fazla program kurdurursam indirim var mı?",
    a: "Aynı oturumda birden fazla program kurdurduğunuzda her ek yazılım yalnızca +500 TL olur. Böylece tek seferde çok sayıda programı avantajlı fiyata kurdurabilirsiniz.",
  },
  {
    q: "Hangi yazılımları kurabiliyorsunuz?",
    a: "Microsoft Office, Microsoft 365, Outlook, Teams, OneDrive, SharePoint, Windows, AutoCAD, Revit, SolidWorks, Rhino, V-Ray, Lumion, SketchUp ve Adobe Creative Cloud dahil çok sayıda profesyonel yazılımı kurabiliyoruz.",
  },
  {
    q: "Microsoft Office kurulumu yapıyor musunuz?",
    a: "Evet. Word, Excel, PowerPoint ve Outlook dahil tüm Microsoft Office paketlerini kurup lisans aktivasyonunu tamamlıyoruz. Eski sürümden yeni sürüme geçişte de destek veriyoruz.",
  },
  {
    q: "Microsoft 365 aboneliğimi nasıl kuruyorsunuz?",
    a: "Microsoft 365 hesabınızla oturum açar, uygulamaları bilgisayarınıza kurar ve lisansınızı etkinleştiririz. Birden fazla cihaza kurulum ve OneDrive senkronizasyonu da yapabiliriz.",
  },
  {
    q: "Outlook e-posta hesabımı kurabilir misiniz?",
    a: "Evet. Outlook kurulumunu yapar, e-posta hesaplarınızı (kurumsal, Gmail, Microsoft 365) sorunsuz şekilde tanımlar ve senkronizasyonu ayarlarız.",
  },
  {
    q: "Microsoft Teams kurulumu ve ayarlarını yapıyor musunuz?",
    a: "Teams'i kurar, hesabınızla giriş yapar ve bildirim, kamera, mikrofon ayarlarını çalışır hale getiririz. Kurumsal ekip yapılandırmalarında da yardımcı oluyoruz.",
  },
  {
    q: "OneDrive kurulumu ve yedekleme ayarını yapabilir misiniz?",
    a: "Evet. OneDrive'ı kurar, hesabınıza bağlar ve masaüstü, belgeler gibi klasörlerin otomatik yedeklenmesini ve senkronizasyonunu ayarlarız.",
  },
  {
    q: "SharePoint kurulumu ve erişim ayarlarında destek veriyor musunuz?",
    a: "SharePoint bağlantısı, kütüphane senkronizasyonu ve erişim yapılandırması konusunda destek sağlıyoruz. Ekip sitelerinize sorunsuz erişmenizi sağlıyoruz.",
  },
  {
    q: "Windows kurulumu veya yeniden yükleme yapıyor musunuz?",
    a: "Evet. Windows kurulumu, sürüm yükseltme, lisans aktivasyonu ve temel sürücü ayarlarını uzaktan yapabiliyoruz. Kurulum öncesi verilerinizi korumak için gerekli önlemleri birlikte planlıyoruz.",
  },
  {
    q: "Windows lisansımı etkinleştirebilir misiniz?",
    a: "Elinizdeki geçerli Windows lisans anahtarının doğru şekilde etkinleştirilmesinde teknik destek veriyoruz ve aktivasyon hatalarını gideriyoruz.",
  },
  {
    q: "AutoCAD kurulumu yapıyor musunuz?",
    a: "Evet. AutoCAD kurulumunu, lisans aktivasyonunu ve gerekli yapılandırmayı tamamlıyoruz. Kurulum sırasında karşılaşılan hataları da çözüyoruz.",
  },
  {
    q: "Rhino kurulumu ve lisans aktivasyonu yapabilir misiniz?",
    a: "Evet. Rhino 3D'yi kurar, lisansınızı etkinleştirir ve programın sorunsuz açıldığını sizinle test ederiz. Eklenti kurulumlarında da destek veriyoruz.",
  },
  {
    q: "V-Ray kurulumu ve render ayarlarını yapıyor musunuz?",
    a: "V-Ray'i uyumlu olduğu programa (SketchUp, Rhino, 3ds Max vb.) kurar, lisansını etkinleştirir ve temel render ayarlarının çalıştığını doğrularız.",
  },
  {
    q: "Adobe Creative Cloud kurulumu yapıyor musunuz?",
    a: "Evet. Photoshop, Illustrator, Premiere gibi Adobe Creative Cloud uygulamalarını kurar, hesabınızla oturum açar ve aktivasyonu tamamlarız.",
  },
  {
    q: "Lisans sağlıyor musunuz?",
    a: "Lisanslı yazılımlarınızın kurulum ve aktivasyon süreçlerinde teknik destek veriyoruz. Elinizdeki lisansların doğru şekilde etkinleştirilmesine yardımcı oluyoruz.",
  },
  {
    q: "Lisansım yoksa ne yapmalıyım?",
    a: "Hangi yazılıma ihtiyacınız olduğunu bize iletin; uygun ve resmi lisanslama seçenekleri konusunda sizi doğru şekilde yönlendirelim.",
  },
  {
    q: "Aktivasyon hatası alıyorum, çözebilir misiniz?",
    a: "Evet. Aktivasyon ve lisans doğrulama hataları en sık çözdüğümüz sorunlardandır. Uzaktan bağlanıp sorunun kaynağını tespit eder ve gideriz.",
  },
  {
    q: "Kurulum sonrası destek var mı?",
    a: "Evet, her kurulumdan sonra oluşabilecek sorunlar için teknik destek sağlıyoruz. Kurduğumuz yazılımla ilgili bir aksaklıkta bize tekrar ulaşabilirsiniz.",
  },
  {
    q: "Türkiye'nin her yerinden hizmet alabilir miyim?",
    a: "Evet. Tüm işlemler uzaktan yapıldığı için Türkiye'nin neresinde olursanız olun aynı hız ve kalitede hizmet alırsınız.",
  },
  {
    q: "Kurulum başarısız olursa ne olur?",
    a: "Sorunu çözemezsek ücret almıyoruz. Para iade garantisi ile risk tamamen bizde; siz yalnızca çalışan bir kurulum için ödeme yaparsınız.",
  },
  {
    q: "Nasıl başlayabilirim?",
    a: "WhatsApp'tan yazmanız veya bizi aramanız yeterli. İhtiyacınızı iletin, ortalama 15 dakika içinde dönüş yapıp aynı gün kuruluma başlayalım.",
  },
  {
    q: "Uzaktan program nasıl kurdurulur?",
    a: "Beş adımda: WhatsApp'tan yazın, şifreli uzaktan bağlantıyı onaylayın, yazılımı kuralım ve aktivasyonu tamamlayalım, birlikte test edelim ve en sonda ödemeyi yapın. Tüm süreç ortalama 15-45 dakika sürer.",
  },
  {
    q: "İstanbul, Ankara veya İzmir'de program kurdurabilir miyim?",
    a: "Evet. İstanbul, Ankara, İzmir, Bursa, Antalya dahil Türkiye'nin 81 ilinin tamamına hizmet veriyoruz. İşlemler uzaktan yapıldığı için bulunduğunuz şehir fark etmez, aynı hız ve kalitede kurulum yaparız.",
  },
  {
    q: "Program kurdurmak için en iyi site hangisi?",
    a: "ProgramKur.com.tr, uzaktan yazılım kurulumunda Türkiye geneli hizmet veren, 4.9 puanlı ve 200'den fazla başarılı kurulum yapmış güvenilir bir servistir. Ödeme kurulum sonrası alınır ve sorun çözülmezse ücret alınmaz.",
  },
  {
    q: "Bilgisayara gelmeden kurulum yapılıyor mu?",
    a: "Evet, tüm kurulumlar tamamen uzaktan yapılır. Teknisyenin adrese gelmesine gerek yoktur; şifreli uzaktan bağlantı ile bilgisayarınıza bağlanıp işlemi tamamlıyoruz.",
  },
  {
    q: "Hafta sonu veya akşam kurulum yapabilir misiniz?",
    a: "Evet. Her gün 09:00 - 22:00 saatleri arasında, hafta sonu dahil hizmet veriyoruz. Acil ihtiyaçlarda aynı gün içinde kuruluma başlıyoruz.",
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
