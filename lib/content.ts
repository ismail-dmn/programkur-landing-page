export type ContentBlock = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type FaqItem = {
  q: string
  a: string
}

export type Doc = {
  slug: string
  title: string
  metaTitle: string
  description: string
  eyebrow: string
  intro: string
  highlights?: string[]
  blocks: ContentBlock[]
  faqs?: FaqItem[]
  updated: string
}

/* ------------------------------------------------------------------ */
/* Hizmetler                                                          */
/* ------------------------------------------------------------------ */

export type Service = Doc & {
  icon: "monitor" | "key" | "wrench" | "gauge"
  summary: string
  duration: string
}

export const services: Service[] = [
  {
    slug: "uzaktan-kurulum",
    icon: "monitor",
    title: "Uzaktan Program Kurulumu",
    metaTitle: "Uzaktan Program Kurulumu | AnyDesk ve TeamViewer ile Destek",
    description:
      "Türkiye'nin her yerine uzaktan program kurulumu. AnyDesk veya TeamViewer ile güvenli bağlantı, aynı gün kurulum, kurulum sonrası ödeme.",
    eyebrow: "Hizmet",
    summary:
      "Bilgisayarınızı bir yere götürmenize gerek yok. Şifreli uzaktan bağlantı ile ihtiyacınız olan tüm programları kuruyoruz.",
    duration: "20-60 dakika",
    intro:
      "Format sonrası bilgisayarınıza program kurmakta zorlanıyor ya da hangi sürümü kuracağınıza karar veremiyor musunuz? Uzaktan program kurulumu hizmetimizle Türkiye'nin neresinde olursanız olun, uzman ekibimiz bilgisayarınıza bağlanarak gerekli tüm yazılımları kurar, lisanslar ve çalıştığını sizinle birlikte test eder.",
    highlights: [
      "Aynı gün, çoğu işlem 20-60 dakikada",
      "Tek kullanımlık şifre ile bağlantı",
      "Ödeme kurulum tamamlandıktan sonra",
    ],
    blocks: [
      {
        heading: "Hangi programları kuruyoruz?",
        paragraphs: [
          "Mühendislik, mimarlık ve tasarım yazılımlarında uzmanız; ancak ofis ve günlük kullanım programları da kapsamımızda.",
        ],
        bullets: [
          "CAD & BIM: AutoCAD, Revit, SolidWorks, 3ds Max, Rhino",
          "Render: Lumion, V-Ray, Enscape, Corona Renderer",
          "Tasarım: Photoshop, Illustrator, Premiere Pro, CorelDRAW",
          "Ofis & sistem: Microsoft Office, Microsoft 365, Windows, PDF araçları, WinRAR",
          "Kurumsal: EBYS, e-imza (Java/AKİS), DYS, barkod yazıcı sürücüleri",
        ],
      },
      {
        heading: "Kurulum nasıl ilerliyor?",
        bullets: [
          "WhatsApp'tan ihtiyacınızı ve bilgisayar özelliklerinizi iletiyorsunuz.",
          "Sistem uygunluğunu kontrol edip doğru sürümü öneriyoruz.",
          "AnyDesk veya TeamViewer ile tek kullanımlık şifreyle bağlanıyoruz.",
          "Kurulum, lisans/aktivasyon ve gerekli eklentiler tamamlanıyor.",
          "Program birlikte açılıp test ediliyor, ardından ödeme alınıyor.",
        ],
      },
      {
        heading: "Güvenli bağlantı",
        paragraphs: [
          "Bağlantı tamamen sizin kontrolünüzdedir. Ekranda yapılan tüm işlemleri canlı olarak izleyebilir, dilediğiniz an bağlantıyı sonlandırabilirsiniz. İşlem bittiğinde erişim otomatik olarak kapanır; tekrar bağlanmamız mümkün olmaz.",
          "Süreç boyunca kişisel dosyalarınıza dokunulmaz, veri kopyalanmaz ve KVKK uyumlu çalışılır.",
        ],
      },
    ],
    faqs: [
      {
        q: "Uzaktan bağlantı güvenli mi?",
        a: "Evet. AnyDesk veya TeamViewer üzerinden tek seferlik şifre ile bağlanıyoruz. İşlem bitince erişimimiz tamamen kesilir.",
      },
      {
        q: "Kurulum ne kadar sürer?",
        a: "Kurulacak programın boyutuna ve internet hızınıza bağlı olarak genellikle 20-60 dakika sürer.",
      },
      {
        q: "Ödemeyi ne zaman yapıyorum?",
        a: "Kurulum tamamlanıp program birlikte test edildikten sonra. Sorun çözülmezse ücret alınmaz.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "aktivasyon-destegi",
    icon: "key",
    title: "Lisans ve Aktivasyon Desteği",
    metaTitle: "Lisans Aktivasyon Desteği | Office, Autodesk, SolidWorks",
    description:
      "Office etkinleştirme hatası, Autodesk lisans sorunları, SolidWorks SNL yapılandırması ve daha fazlası için uzaktan aktivasyon desteği.",
    eyebrow: "Hizmet",
    summary:
      "Programınız kurulu ama lisans adımında takıldıysanız, aktivasyonu doğru şekilde tamamlıyor ve kalıcı hale getiriyoruz.",
    duration: "15-40 dakika",
    intro:
      "Kurulum tamamlanmasına rağmen lisans ekranını geçemeyen kullanıcılar en sık bize aktivasyon için başvuruyor. Office etkinleştirme hataları, Autodesk oturum/lisans döngüleri ve SolidWorks lisans sunucusu yapılandırması gibi konuları uzaktan bağlanarak çözüyoruz.",
    highlights: [
      "Office ve Microsoft 365 etkinleştirme",
      "Autodesk oturum ve lisans yapılandırması",
      "SolidWorks SNL / ağ lisansı ayarları",
    ],
    blocks: [
      {
        heading: "Sık çözdüğümüz aktivasyon sorunları",
        bullets: [
          "Microsoft Office ürün etkinleştirme başarısız uyarısı ve KMS kaynaklı hatalar",
          "Autodesk ürünlerinde tekrar tekrar açılan oturum ekranı",
          "SolidWorks 'Activation Failed' / 'Could not obtain a license' hatası",
          "Lisans dosyası veya lisans sunucusu adresinin yanlış tanımlanması",
          "Format veya donanım değişikliği sonrası düşen aktivasyonlar",
        ],
      },
      {
        heading: "Nasıl çalışıyoruz?",
        paragraphs: [
          "Önce hatanın kaynağını tespit ediyoruz: yanlış sürüm, eksik bileşen, bozuk lisans kaydı ya da sistem servisleri. Ardından gereken onarımı yapıyor, aktivasyonu tamamlıyor ve programın yeniden başlatma sonrası da sorunsuz açıldığını doğruluyoruz.",
        ],
      },
      {
        heading: "Kurumsal lisanslar",
        paragraphs: [
          "Şirket ve okul ortamlarında çok kullanıcılı lisans dağıtımı, ağ lisans sunucusu kurulumu ve istemci yapılandırması konusunda da destek veriyoruz. Toplu kurulumlar için özel planlama yapıyoruz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Lisansım yok, temin edebilir misiniz?",
        a: "Orijinal lisans temini konusunda yönlendirme yapıyoruz; hangi lisans tipinin ihtiyacınıza uygun olduğunu birlikte belirliyoruz.",
      },
      {
        q: "Aktivasyon tekrar bozulursa ne olur?",
        a: "Aynı işlem için kurulum sonrası destek kapsamında tekrar bağlanıp kontrol ediyoruz.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "hata-cozumu",
    icon: "wrench",
    title: "Yazılım Hata Çözümü",
    metaTitle: "Yazılım Hata Çözümü | AutoCAD, Revit, Lumion, Office",
    description:
      "AutoCAD Error 1603, Revit Installation Failed, Lumion ekran kartı hatası, Office etkinleştirme hatası ve daha fazlası için uzaktan hata çözümü.",
    eyebrow: "Hizmet",
    summary:
      "Kurulum sırasında ya da program açılışında aldığınız hataları kaynağına inerek çözüyoruz; geçici yamalarla değil.",
    duration: "20-60 dakika",
    intro:
      "Kurulum hataları çoğu zaman tek bir sebepten değil, birikmiş kalıntı dosyalar, eksik sistem bileşenleri ve yetki sorunlarının birleşiminden kaynaklanır. Hata çözüm merkezimizde en sık karşılaşılan hataları adım adım gideriyor, tekrarlamaması için sistemi de düzenliyoruz.",
    highlights: [
      "Kurulum hataları (1603, ADODIS, Installation Failed)",
      "Açılışta çöken veya yanıt vermeyen programlar",
      "Ekran kartı, sürücü ve render hataları",
    ],
    blocks: [
      {
        heading: "En sık çözdüğümüz hatalar",
        bullets: [
          "AutoCAD Error 1603 — Fatal Error During Installation",
          "AutoCAD Error 5 — Access Denied yetki hatası",
          "AutoCAD Fatal Error — Unhandled Access Violation",
          "AutoCAD açılmıyor, başlangıç ekranında kalıyor",
          "Autodesk ADODIS Install Failed hatası",
          "Revit Installation Failed (Material Library, VCRUNTIME)",
          "Lumion 'Your graphics card is not supported' hatası ve düşük FPS",
          "SolidWorks Activation Failed ve lisans sunucusu hataları",
          "Microsoft Office etkinleştirme ve KMS hataları",
        ],
      },
      {
        heading: "Çözüm yaklaşımımız",
        bullets: [
          "Hata kodunu ve kurulum kayıtlarını (log) inceliyoruz.",
          "Önceki kurulumlardan kalan dosya ve kayıt defteri kalıntılarını temizliyoruz.",
          "Eksik sistem bileşenlerini (.NET, Visual C++ paketleri) tamamlıyoruz.",
          "Sürücüleri programın desteklediği sürümlere getiriyoruz.",
          "Kurulumu temiz şekilde tekrarlayıp sonucu birlikte test ediyoruz.",
        ],
      },
      {
        heading: "Çözülmezse ücret yok",
        paragraphs: [
          "Hata giderilemezse ücret almıyoruz. Bu nedenle işleme başlamadan önce durumu değerlendirip gerçekçi bir beklenti paylaşıyoruz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Format atmam gerekir mi?",
        a: "Çoğu vakada gerekmiyor. Format yalnızca sistem dosyaları ciddi şekilde bozulmuşsa son seçenek olarak önerilir.",
      },
      {
        q: "Hata kodunu bilmiyorum, sorun olur mu?",
        a: "Hayır. Ekran görüntüsü göndermeniz yeterli; gerisini bağlantı sırasında biz tespit ediyoruz.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "performans-optimizasyonu",
    icon: "gauge",
    title: "Performans Optimizasyonu",
    metaTitle: "Bilgisayar ve Yazılım Performans Optimizasyonu",
    description:
      "Lumion kasması, yavaş render, AutoCAD ve Revit'te takılma sorunları için ekran kartı, RAM ve sistem ayarlarıyla performans optimizasyonu.",
    eyebrow: "Hizmet",
    summary:
      "Programlar kurulu ama yavaş mı çalışıyor? Donanımınızdan alınabilecek en iyi performansı çıkaracak şekilde ayarlıyoruz.",
    duration: "30-60 dakika",
    intro:
      "Aynı donanım, doğru ayarlarla belirgin şekilde daha akıcı çalışabilir. Render ve CAD yazılımlarında kasma, viewport'ta takılma ve uzun render süreleri genellikle yanlış GPU seçimi, güncel olmayan sürücüler, yetersiz sanal bellek veya arka planda çalışan gereksiz servislerden kaynaklanır.",
    highlights: [
      "GPU ve sürücü yapılandırması",
      "Program içi grafik ve render ayarları",
      "Sistem, disk ve başlangıç temizliği",
    ],
    blocks: [
      {
        heading: "Neleri optimize ediyoruz?",
        bullets: [
          "Dizüstü bilgisayarlarda programın harici ekran kartını kullanmasını sağlıyoruz.",
          "Ekran kartı sürücüsünü yazılımın onayladığı sürüme getiriyoruz.",
          "Lumion, V-Ray ve Enscape içinde çözünürlük, gölge ve efekt ayarlarını dengeliyoruz.",
          "Sanal bellek (pagefile) ve disk alanını yeniden yapılandırıyoruz.",
          "Başlangıçta açılan gereksiz uygulamaları ve arka plan servislerini kapatıyoruz.",
          "AutoCAD ve Revit'te donanım hızlandırma ile görüntüleme ayarlarını düzenliyoruz.",
        ],
      },
      {
        heading: "Donanım değerlendirmesi",
        paragraphs: [
          "Optimizasyon sonrası hâlâ yetersiz kalan sistemler için gerçekçi bir yükseltme önerisi paylaşıyoruz: hangi bileşenin darboğaz oluşturduğunu ve en verimli yükseltmenin ne olduğunu belirtiyoruz. Böylece gereksiz harcama yapmadan ihtiyacınıza uygun karar veriyorsunuz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Optimizasyon dosyalarıma zarar verir mi?",
        a: "Hayır. Yalnızca sistem ve program ayarları üzerinde çalışıyoruz; kişisel dosyalarınıza dokunmuyoruz.",
      },
      {
        q: "Ne kadar hız artışı bekleyebilirim?",
        a: "Sistemin mevcut durumuna bağlı. Yanlış GPU kullanan dizüstü bilgisayarlarda fark çok belirgin olurken, zaten doğru yapılandırılmış sistemlerde kazanç daha sınırlıdır.",
      },
    ],
    updated: "2026-05-11",
  },
]

/* ------------------------------------------------------------------ */
/* Yazılımlar                                                         */
/* ------------------------------------------------------------------ */

export type Software = Doc & {
  vendor: string
  versions: string
  summary: string
  useCases: string[]
  requirements: { label: string; value: string }[]
}

export const softwareList: Software[] = [
  {
    slug: "autocad",
    vendor: "Autodesk",
    versions: "2022, 2023, 2024, 2025, 2026",
    title: "AutoCAD Kurulumu",
    metaTitle: "AutoCAD Kurulum Hizmeti | Uzaktan AutoCAD Kurulumu",
    description:
      "AutoCAD 2022-2026 uzaktan kurulumu, lisans aktivasyonu, Error 1603 ve Fatal Error çözümü. Aynı gün destek.",
    eyebrow: "Yazılım",
    summary:
      "2D çizim ve teknik resmin standardı. Tüm güncel sürümler için kurulum, aktivasyon ve hata çözümü.",
    intro:
      "AutoCAD kurulumu, doğru sürüm seçimi ve sistem hazırlığı yapılmadığında sık sık hata verir. Uzaktan bağlanarak sürüm seçiminden lisans aktivasyonuna, şablon ve çizim ayarlarından yazıcı/plot yapılandırmasına kadar tüm süreci tamamlıyoruz.",
    useCases: [
      "Mimarlık ve inşaat projeleri",
      "Makine ve imalat teknik resimleri",
      "Elektrik ve tesisat projeleri",
      "Harita ve altyapı çizimleri",
    ],
    requirements: [
      { label: "İşletim sistemi", value: "Windows 10 / 11 (64-bit)" },
      { label: "İşlemci", value: "2.5 GHz üzeri, çok çekirdekli" },
      { label: "RAM", value: "8 GB (16 GB önerilir)" },
      { label: "Disk", value: "10-15 GB boş alan (SSD önerilir)" },
      { label: "Ekran kartı", value: "1 GB üzeri, DirectX 12 destekli" },
    ],
    blocks: [
      {
        heading: "Kurulum kapsamı",
        bullets: [
          "Sistem uygunluk kontrolü ve sürüm önerisi",
          "Eski AutoCAD kalıntılarının temizlenmesi",
          "Kurulum ve lisans aktivasyonu",
          "Şablon, birim ve çizim standartlarının ayarlanması",
          "Yazıcı/plot ve PDF çıktı yapılandırması",
        ],
      },
      {
        heading: "Sık karşılaşılan AutoCAD hataları",
        bullets: [
          "Error 1603 — Fatal Error During Installation",
          "Error 5 — Access Denied yetki hatası",
          "Fatal Error — Unhandled Access Violation",
          "ADODIS Install Failed bileşen hatası",
          "Program simgesine tıklanınca açılmaması veya splash ekranında kalması",
        ],
        paragraphs: [
          "Bu hataların büyük kısmı önceki kurulumlardan kalan dosyalar ve eksik Visual C++ / .NET bileşenlerinden kaynaklanır. Temiz kurulum yaklaşımıyla kalıcı olarak çözülür.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hangi AutoCAD sürümünü kurdurmalıyım?",
        a: "Proje paylaştığınız kişilerin sürümü belirleyicidir. Eski sürümler yeni dosyaları açamayabileceği için genelde ekipteki en yüksek sürüm önerilir.",
      },
      {
        q: "Öğrenci sürümü kurulabilir mi?",
        a: "Evet, öğrenci lisansı doğrulama sürecinde de destek veriyoruz.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "revit",
    vendor: "Autodesk",
    versions: "2022, 2023, 2024, 2025",
    title: "Revit Kurulumu",
    metaTitle: "Revit Kurulum Hizmeti | Uzaktan Autodesk Revit Kurulumu",
    description:
      "Autodesk Revit 2022-2025 kurulumu, Installation Failed hatası çözümü, lisans aktivasyonu, Enscape ve V-Ray eklenti kurulumu.",
    eyebrow: "Yazılım",
    summary:
      "BIM projeleri için Revit kurulumu; mimari, statik ve MEP disiplinleri için eksiksiz yapılandırma.",
    intro:
      "Revit, kurulumu en hassas Autodesk ürünlerinden biridir; Material Library ve VCRUNTIME kaynaklı 'Installation Failed' hatası çok yaygındır. Kurulumu doğru sırayla yapıp gerekli eklentileri de ekleyerek çalışmaya hazır bir ortam teslim ediyoruz.",
    useCases: [
      "Mimari BIM modelleme ve dokümantasyon",
      "Statik (yapısal) modelleme",
      "MEP — mekanik, elektrik, tesisat",
      "Metraj ve proje koordinasyonu",
    ],
    requirements: [
      { label: "İşletim sistemi", value: "Windows 10 / 11 (64-bit)" },
      { label: "İşlemci", value: "Yüksek tek çekirdek performansı" },
      { label: "RAM", value: "16 GB (büyük projeler için 32 GB)" },
      { label: "Disk", value: "30 GB boş alan, SSD" },
      { label: "Ekran kartı", value: "4 GB üzeri, DirectX 11+ destekli" },
    ],
    blocks: [
      {
        heading: "Kurulum kapsamı",
        bullets: [
          "Revit ve gerekli Autodesk bileşenlerinin kurulumu",
          "Material Library ve içerik kütüphanelerinin eklenmesi",
          "Lisans aktivasyonu ve oturum yapılandırması",
          "Enscape, V-Ray gibi render eklentilerinin kurulumu",
          "Aile (family) ve şablon dosyalarının yerleştirilmesi",
        ],
      },
      {
        heading: "Installation Failed hatası",
        paragraphs: [
          "Bu hata çoğunlukla eksik Visual C++ çalışma zamanı paketleri, yarım kalmış önceki kurulumlar veya Material Library bileşeninin yüklenememesinden kaynaklanır. Kurulum kayıtlarını inceleyip hangi bileşende durduğunu tespit ediyor, ilgili bileşeni ayrıca onarıp kurulumu tamamlıyoruz.",
        ],
      },
    ],
    faqs: [
      {
        q: "AutoCAD ile Revit aynı bilgisayarda çalışır mı?",
        a: "Evet, birlikte kullanılabilir. Disk alanı ve RAM yeterliyse sorun oluşmaz.",
      },
      {
        q: "Eklentiler ücretli mi?",
        a: "Enscape ve V-Ray gibi eklentiler ayrı lisanslıdır; kurulum ve yapılandırmayı biz yapıyoruz.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "lumion",
    vendor: "Act-3D",
    versions: "11, 12.5, 2023, 2024",
    title: "Lumion Kurulumu",
    metaTitle: "Lumion Kurulum Hizmeti | Uzaktan Lumion Kurulumu",
    description:
      "Lumion 11, 12.5, 2023 ve 2024 kurulumu, ekran kartı hatası çözümü, FPS ve render performansı optimizasyonu.",
    eyebrow: "Yazılım",
    summary:
      "Mimari görselleştirme için Lumion kurulumu, ekran kartı uyumluluğu ve render performansı ayarları.",
    intro:
      "Lumion, ekran kartına en çok yüklenen render yazılımlarından biridir. Kurulum öncesi donanım uygunluğunu değerlendirip 'Your graphics card is not supported' hatasının önüne geçiyor, kurulum sonrası akıcı çalışması için performans ayarlarını yapıyoruz.",
    useCases: [
      "Mimari iç ve dış mekân görselleştirme",
      "Peyzaj ve kentsel tasarım sunumları",
      "Animasyon ve yürüyüş turu videoları",
      "Proje sunum panoları",
    ],
    requirements: [
      { label: "İşletim sistemi", value: "Windows 10 / 11 (64-bit)" },
      { label: "İşlemci", value: "Yüksek saat hızlı çok çekirdekli" },
      { label: "RAM", value: "16 GB (büyük sahneler için 32 GB+)" },
      { label: "Disk", value: "40 GB üzeri boş alan, SSD" },
      { label: "Ekran kartı", value: "6 GB+ VRAM, yüksek GPU puanı" },
    ],
    blocks: [
      {
        heading: "Kurulum kapsamı",
        bullets: [
          "Donanım uygunluk analizi ve sürüm önerisi",
          "Lumion kurulumu ve içerik kütüphanesinin yüklenmesi",
          "Ekran kartı sürücüsünün uyumlu sürüme getirilmesi",
          "Dizüstü bilgisayarlarda harici GPU'nun etkinleştirilmesi",
          "Render kalitesi ve FPS dengesinin ayarlanması",
        ],
      },
      {
        heading: "Lumion kasma sorunu",
        paragraphs: [
          "Kasmanın en yaygın sebepleri: programın dahili ekran kartıyla çalışması, güncel olmayan GPU sürücüsü, yetersiz VRAM ve sahnedeki ağır model/malzeme kullanımı.",
        ],
        bullets: [
          "GPU sürücüsünü temiz kurulumla güncelliyoruz.",
          "Editör çözünürlüğünü ve gölge kalitesini dengeliyoruz.",
          "Sahne içi yüksek poligonlu nesneleri optimize etme yöntemlerini gösteriyoruz.",
          "Sanal belleği sahne boyutuna göre yeniden ayarlıyoruz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ekran kartım desteklenmiyor uyarısı alıyorum, çözülür mü?",
        a: "Çoğu durumda sürücü ve GPU seçimi kaynaklıdır ve çözülür. Kart gerçekten minimum gereksinimin altındaysa yükseltme öneriyoruz.",
      },
      {
        q: "Hangi Lumion sürümü donanımıma uygun?",
        a: "Ekran kartı ve VRAM miktarına göre öneri yapıyoruz; yeni sürümler daha güçlü GPU ister.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "solidworks",
    vendor: "Dassault Systèmes",
    versions: "2021, 2022, 2023, 2024",
    title: "SolidWorks Kurulumu",
    metaTitle: "SolidWorks Kurulum Hizmeti | Uzaktan SolidWorks Kurulumu",
    description:
      "SolidWorks 2021-2024 kurulumu, lisans aktivasyonu, Activation Failed ve Installation Manager hatalarının çözümü.",
    eyebrow: "Yazılım",
    summary:
      "Makine mühendisliği ve endüstriyel tasarım için SolidWorks kurulumu, eklentiler ve performans ayarları.",
    intro:
      "SolidWorks kurulumu, Installation Manager üzerinden ilerlediği için ağ ve lisans yapılandırmasına duyarlıdır. Kurulumu tamamlıyor, Simulation ve Toolbox gibi eklentileri ekliyor, lisans sunucusu kullanılıyorsa istemci ayarlarını da yapıyoruz.",
    useCases: [
      "Makine ve parça tasarımı",
      "Montaj ve mekanizma çalışmaları",
      "Teknik resim ve imalat dokümantasyonu",
      "Simulation ile mukavemet analizleri",
    ],
    requirements: [
      { label: "İşletim sistemi", value: "Windows 10 / 11 (64-bit)" },
      { label: "İşlemci", value: "Yüksek tek çekirdek performansı" },
      { label: "RAM", value: "16 GB (büyük montajlar için 32 GB)" },
      { label: "Disk", value: "20-30 GB boş alan, SSD" },
      { label: "Ekran kartı", value: "Sertifikalı profesyonel GPU önerilir" },
    ],
    blocks: [
      {
        heading: "Kurulum kapsamı",
        bullets: [
          "Installation Manager ile eksiksiz kurulum",
          "Seri numarası tanımlama ve aktivasyon",
          "Toolbox, Simulation, Visualize eklentilerinin kurulumu",
          "SNL (ağ lisansı) sunucu ve istemci yapılandırması",
          "Performans ve görüntüleme ayarlarının optimize edilmesi",
        ],
      },
      {
        heading: "Activation Failed hatası",
        paragraphs: [
          "'Activation Failed' veya 'Could not obtain a license' hataları genellikle lisans sunucusu adresinin yanlış tanımlanması, sistem saati/bölge ayarları veya bozuk lisans kaydından kaynaklanır. Lisans yapılandırmasını sıfırlayıp doğru şekilde tanımlayarak kalıcı çözüm sağlıyoruz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Toolbox ayarlarını da yapıyor musunuz?",
        a: "Evet. Ortak ağ klasörü kullanımı dahil Toolbox yapılandırmasını sizin çalışma düzeninize göre ayarlıyoruz.",
      },
      {
        q: "Eski sürümde açılmayan dosya sorunu çözülür mü?",
        a: "SolidWorks dosyaları geriye dönük açılmaz; bu durumda sürüm planlaması için öneri sunuyoruz.",
      },
    ],
    updated: "2026-05-11",
  },
]

/* ------------------------------------------------------------------ */
/* Blog                                                               */
/* ------------------------------------------------------------------ */

export type Post = Doc & {
  category: string
  readingTime: string
}

export const posts: Post[] = [
  {
    slug: "autocad-kurulumu",
    category: "Kurulum",
    readingTime: "6 dk",
    title: "AutoCAD Kurulumu (2022, 2023, 2024, 2025, 2026)",
    metaTitle: "AutoCAD Kurulumu (2022-2026) Rehberi",
    description:
      "AutoCAD 2022, 2023, 2024, 2025 ve 2026 sürümlerinin kurulumu, lisans yapılandırması ve sistem gereksinimleri.",
    eyebrow: "Blog",
    intro:
      "AutoCAD kurulumunda en çok zaman kaybettiren aşama, kurulumun ortasında alınan hatalardır. Bu rehberde sürüm seçiminden lisans yapılandırmasına kadar sağlıklı bir kurulumun adımlarını topladık.",
    blocks: [
      {
        heading: "Kurulum öncesi hazırlık",
        bullets: [
          "Windows güncellemelerini tamamlayın ve bilgisayarı yeniden başlatın.",
          "Diskte en az 15 GB boş alan bırakın; kurulum geçici dosyalar için yer ister.",
          "Antivirüs yazılımını kurulum süresince duraklatın.",
          "Önceki AutoCAD sürümlerini denetim masasından tamamen kaldırın.",
        ],
      },
      {
        heading: "Sürüm seçimi",
        paragraphs: [
          "Yeni sürümler eski dosyaları açar, ancak eski sürümler yeni sürümde kaydedilmiş dosyaları açamaz. Ekip halinde çalışıyorsanız ortak bir sürümde buluşmak en güvenlisidir. Donanımı sınırlı bilgisayarlarda bir alt sürüm belirgin şekilde daha akıcı çalışabilir.",
        ],
      },
      {
        heading: "Kurulum adımları",
        bullets: [
          "Kurulum dosyasını yönetici olarak çalıştırın.",
          "Bileşen seçiminde gerekmeyen ek araçları işaretlemeyin; kurulum süresi kısalır.",
          "Kurulum tamamlanana kadar bilgisayarı uyku moduna almayın.",
          "İlk açılışta lisans türünü seçip aktivasyonu tamamlayın.",
          "Birim, şablon ve otomatik kaydetme aralığını ayarlayın.",
        ],
      },
      {
        heading: "Kurulum sonrası kontrol listesi",
        bullets: [
          "Örnek bir çizim açıp kaydetmeyi test edin.",
          "PDF çıktısı alarak plot ayarlarını doğrulayın.",
          "Programı kapatıp yeniden açarak lisansın kalıcı olduğunu görün.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kurulum ne kadar sürer?",
        a: "İnternet hızına ve diske bağlı olarak 20-45 dakika arası sürer.",
      },
      {
        q: "Kurulum yarıda hata verirse ne yapmalıyım?",
        a: "Kalıntı dosyaların temizlenmesi gerekir. Aynı kurulumu tekrar denemek çoğu zaman aynı hatayı verir.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "revit-kurulumu",
    category: "Kurulum",
    readingTime: "5 dk",
    title: "Autodesk Revit Kurulumu ve Lisanslama",
    metaTitle: "Autodesk Revit Kurulumu ve Lisanslama Rehberi",
    description:
      "BIM projeleri için Autodesk Revit kurulumu. Mimari, yapısal ve MEP disiplinleri için 2024 ve 2025 sürümleri.",
    eyebrow: "Blog",
    intro:
      "Revit kurulumu, tek bir çalıştırılabilir dosyadan çok, birden fazla bileşenin sırayla yüklenmesi anlamına gelir. Bu yüzden kurulum hatalarının kaynağını bulmak için hangi bileşende durduğunu bilmek gerekir.",
    blocks: [
      {
        heading: "Revit hangi disiplinler için kullanılır?",
        bullets: [
          "Mimari: plan, kesit, görünüş ve detay üretimi",
          "Yapısal: taşıyıcı sistem modelleme ve donatı",
          "MEP: mekanik, elektrik ve tesisat sistemleri",
          "Koordinasyon: disiplinler arası çakışma kontrolü",
        ],
      },
      {
        heading: "Kurulum adımları",
        bullets: [
          "Sistem gereksinimlerini kontrol edin; Revit RAM'e duyarlıdır.",
          "Kurulumu yönetici olarak başlatın ve içerik kütüphanesi için Türkiye/uygun bölgeyi seçin.",
          "Material Library bileşeninin kurulduğunu doğrulayın.",
          "Autodesk hesabınızla oturum açıp lisansı etkinleştirin.",
          "Şablon ve family klasörlerini tanımlayın.",
        ],
      },
      {
        heading: "Installation Failed hatası",
        paragraphs: [
          "En sık sebepleri: eksik veya bozuk Visual C++ paketleri, yarım kalmış önceki kurulum, Material Library yüklenememesi ve disk alanı yetersizliği. Kurulum log dosyasında hatanın geçtiği bileşen açıkça görülür; onarım o bileşenden başlar.",
        ],
      },
    ],
    faqs: [
      {
        q: "Revit için 16 GB RAM yeterli mi?",
        a: "Orta ölçekli projeler için yeterlidir; büyük ve çok disiplinli modellerde 32 GB belirgin fark yaratır.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "lumion-kurulumu",
    category: "Render",
    readingTime: "5 dk",
    title: "Lumion 3D Render Kurulumu",
    metaTitle: "Lumion Kurulumu ve Sistem Gereksinimleri",
    description:
      "Mimari görselleştirme için Lumion 11, 12 ve 2023 kurulumu. Sistem gereksinimleri analizi ve performans optimizasyonu.",
    eyebrow: "Blog",
    intro:
      "Lumion kurulumunda başarı, büyük ölçüde kurulum öncesi yapılan donanım değerlendirmesine bağlıdır. Doğru sürümü seçmek, kurulum sonrası yaşanacak pek çok performans sorununu baştan engeller.",
    blocks: [
      {
        heading: "Donanım değerlendirmesi",
        paragraphs: [
          "Lumion'da belirleyici bileşen ekran kartıdır. VRAM miktarı sahne büyüklüğünü, GPU gücü ise render süresini doğrudan etkiler. İşlemci ve RAM ikinci planda kalsa da büyük sahnelerde 32 GB RAM rahatlık sağlar.",
        ],
      },
      {
        heading: "Kurulum adımları",
        bullets: [
          "GPU sürücüsünü güncel ve uyumlu sürüme getirin.",
          "Kurulumu SSD üzerine yapın; içerik kütüphanesi büyüktür.",
          "Kurulum tamamlandıktan sonra benchmark ile GPU puanını ölçün.",
          "Editör kalitesini donanımınıza göre ayarlayın.",
        ],
      },
      {
        heading: "İlk render öncesi ayarlar",
        bullets: [
          "Çıktı çözünürlüğünü sunum ihtiyacına göre belirleyin.",
          "Gölge ve yansıma efektlerini seçici kullanın.",
          "Ağır bitki ve kalabalık nesne gruplarını sınırlayın.",
        ],
      },
    ],
    faqs: [
      {
        q: "Dizüstü bilgisayarda Lumion çalışır mı?",
        a: "Güçlü harici ekran kartı olan modellerde çalışır. Programın dahili GPU'yu değil harici kartı kullandığından emin olmak şarttır.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "solidworks-kurulumu",
    category: "Kurulum",
    readingTime: "4 dk",
    title: "SolidWorks Kurulumu ve Teknik Destek",
    metaTitle: "SolidWorks Kurulumu, Eklentiler ve Performans Ayarları",
    description:
      "Makine mühendisliği ve endüstriyel tasarım için SolidWorks 2022, 2023, 2024 kurulumu. Eklentiler ve performans ayarları.",
    eyebrow: "Blog",
    intro:
      "SolidWorks kurulumu Installation Manager üzerinden yürür ve seçilen eklentilere göre süre uzayabilir. Doğru bileşen seçimi, gereksiz yükleme yapmadan ihtiyaca uygun bir kurulum sağlar.",
    blocks: [
      {
        heading: "Bileşen seçimi",
        bullets: [
          "Toolbox: standart bağlantı elemanları kütüphanesi",
          "Simulation: mukavemet ve hareket analizleri",
          "Visualize: fotogerçekçi görselleştirme",
          "eDrawings: dosya paylaşımı ve görüntüleyici",
        ],
      },
      {
        heading: "Kurulum adımları",
        bullets: [
          "Seri numarasını hazır bulundurun.",
          "Installation Manager'ı yönetici olarak çalıştırın.",
          "Yalnızca kullanacağınız eklentileri seçin.",
          "Kurulum sonrası aktivasyonu tamamlayıp programı yeniden başlatın.",
        ],
      },
      {
        heading: "Performans ayarları",
        bullets: [
          "Gerçek zamanlı önizlemeyi büyük montajlarda kapatın.",
          "Görüntüleme kalitesini donanıma göre dengeleyin.",
          "Yedekleme klasörünü SSD dışında bir diskte tutun.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "sketchup-vray-kurulumu",
    category: "Render",
    readingTime: "4 dk",
    title: "SketchUp ve V-Ray Kurulumu",
    metaTitle: "SketchUp Pro ve V-Ray Kurulumu, Eklenti Yüklemeleri",
    description:
      "3D modelleme için SketchUp Pro 2023, 2024 ve fotogerçekçi render için V-Ray kurulumu, eklenti yüklemeleri.",
    eyebrow: "Blog",
    intro:
      "SketchUp hızlı modelleme, V-Ray ise fotogerçekçi render için tercih edilir. İkisinin sürüm uyumu doğru kurulmadığında V-Ray araç çubuğu SketchUp içinde görünmez.",
    blocks: [
      {
        heading: "Sürüm uyumu",
        paragraphs: [
          "V-Ray sürümü, kurulu SketchUp sürümüne göre seçilmelidir. Uyumsuz eşleşmelerde eklenti yüklenir ancak programda etkinleşmez. Kurulum sırasında ilk adım her zaman SketchUp sürümünü doğrulamaktır.",
        ],
      },
      {
        heading: "Kurulum sırası",
        bullets: [
          "Önce SketchUp Pro kurulur ve lisanslanır.",
          "Ardından uyumlu V-Ray sürümü kurulur.",
          "SketchUp açılıp V-Ray araç çubuğunun görünürlüğü kontrol edilir.",
          "Render ön ayarları ve çıktı klasörü tanımlanır.",
        ],
      },
      {
        heading: "Faydalı eklentiler",
        bullets: [
          "Modelleme hızını artıran şekil ve yüzey araçları",
          "Bileşen kütüphaneleri",
          "Malzeme ve doku yönetimi eklentileri",
        ],
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "coreldraw-kurulumu",
    category: "Tasarım",
    readingTime: "4 dk",
    title: "CorelDRAW Graphics Suite Kurulumu",
    metaTitle: "CorelDRAW Graphics Suite Kurulumu (2022, 2023, 2024)",
    description:
      "Vektörel grafik tasarımı ve matbaa/baskı sektörü için CorelDRAW 2022, 2023, 2024 kurulumu ve renk ayarları.",
    eyebrow: "Blog",
    intro:
      "CorelDRAW, matbaa ve tabela sektöründe yaygın kullanılır. Kurulumun ardından renk profili ve yazı tipi yönetimi doğru yapılandırılmazsa baskıda beklenmeyen renk farkları ortaya çıkar.",
    blocks: [
      {
        heading: "Kurulum kapsamı",
        bullets: [
          "CorelDRAW ve Photo-Paint kurulumu",
          "Yazı tipi paketlerinin yüklenmesi",
          "CMYK renk profillerinin tanımlanması",
          "Baskı için çıktı ön ayarlarının hazırlanması",
        ],
      },
      {
        heading: "Baskı öncesi ayarlar",
        bullets: [
          "Belge renk modunu CMYK olarak seçin.",
          "Yazıları eğriye dönüştürerek yazı tipi kaymalarını önleyin.",
          "Taşma payı (bleed) değerini matbaa ile teyit edin.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "ebys-kurulumu",
    category: "Kurumsal",
    readingTime: "5 dk",
    title: "EBYS Kurulumu ve E-İmza (Java) Ayarları",
    metaTitle: "EBYS Kurulumu ve E-İmza (Java) Ayarları Nasıl Yapılır?",
    description:
      "Kamu ve özel sektör için EBYS kurulumu, Java yapılandırması, AKİS e-imza entegrasyonu ve tarayıcı ayarları.",
    eyebrow: "Blog",
    intro:
      "EBYS ve e-imza kurulumunda sorunların büyük kısmı Java sürümü, kart okuyucu sürücüsü ve tarayıcı güvenlik ayarlarının uyumsuzluğundan çıkar. Doğru sırayla yapılan kurulum bu sorunların çoğunu ortadan kaldırır.",
    blocks: [
      {
        heading: "Kurulum sırası",
        bullets: [
          "Kart okuyucu sürücüsü kurulur ve cihaz tanınır.",
          "AKİS veya ilgili akıllı kart yazılımı yüklenir.",
          "EBYS'nin istediği Java sürümü kurulur.",
          "İmzalama uygulaması kurulur ve sertifika okunur.",
          "Tarayıcı güvenlik ve site izinleri tanımlanır.",
        ],
      },
      {
        heading: "Sık yaşanan sorunlar",
        bullets: [
          "Kart takılı olduğu hâlde sertifikanın görünmemesi",
          "Java güncellemesi sonrası imzalama ekranının açılmaması",
          "Tarayıcının imza eklentisini engellemesi",
          "PIN girişi sonrası işlem tamamlanamaması",
        ],
      },
    ],
    faqs: [
      {
        q: "Java'yı güncellemem sorun çıkarır mı?",
        a: "EBYS uygulamaları belirli Java sürümleriyle çalışır; otomatik güncelleme imzalamayı bozabilir. Uygun sürümü sabitlemek gerekir.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "okul-meb-program-kurulumu",
    category: "Kurumsal",
    readingTime: "4 dk",
    title: "Okul ve MEB Programları Kurulumu (DYS, e-Okul, Zil Programı)",
    metaTitle: "Okul ve MEB Programları Kurulumu (DYS, e-Okul, Zil Programı)",
    description:
      "Öğretmenler ve okul idarecileri için DYS kurulumu, e-Okul ayarları, AKİS e-imza ve zil programı kurulum hizmetleri.",
    eyebrow: "Blog",
    intro:
      "Okul bilgisayarlarında DYS, e-Okul ve e-imza uygulamaları birbirine bağlı çalışır. Bir bileşendeki eksik ayar, diğer uygulamaların da açılmamasına yol açabilir.",
    blocks: [
      {
        heading: "Kurulum kapsamı",
        bullets: [
          "DYS erişimi için gerekli Java ve imza bileşenleri",
          "AKİS e-imza kurulumu ve kart okuyucu tanıtımı",
          "e-Okul için tarayıcı uyumluluk ayarları",
          "Otomatik zil programı kurulumu ve zaman tablosu tanımı",
        ],
      },
      {
        heading: "Öneriler",
        bullets: [
          "Ortak kullanılan bilgisayarlarda yönetici hesabını ayrı tutun.",
          "Zil programı için bilgisayarın uyku moduna geçmesini engelleyin.",
          "İmza bileşenlerini güncelleme sonrası mutlaka test edin.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "barkod-yazici-kurulumu",
    category: "Donanım",
    readingTime: "4 dk",
    title: "Barkod Yazıcı Kurulumu ve Sürücü Ayarları",
    metaTitle: "Barkod Yazıcı Kurulumu (Zebra, Argox, TSC) ve Sürücü Ayarları",
    description:
      "Zebra, Argox, TSC ve tüm barkod yazıcı markaları için uzaktan kurulum, sensör kalibrasyonu ve etiket ayarı.",
    eyebrow: "Blog",
    intro:
      "Barkod yazıcılarda kaçık baskı, boş etiket atlama ve bulanık çıktı sorunlarının kaynağı genellikle sürücü değil, kalibrasyon ve etiket boyutu ayarlarıdır.",
    blocks: [
      {
        heading: "Kurulum adımları",
        bullets: [
          "Marka ve modele uygun sürücünün kurulması",
          "Bağlantı türünün (USB, ağ, seri) tanımlanması",
          "Etiket genişlik/yükseklik ve boşluk değerlerinin girilmesi",
          "Sensör kalibrasyonunun yapılması",
          "Isı ve baskı hızı ayarlarının etiket türüne göre dengelenmesi",
        ],
      },
      {
        heading: "Sık sorunlar",
        bullets: [
          "Her baskıda bir etiketin boş çıkması: kalibrasyon gerekir.",
          "Baskının kayması: etiket boyutu ayarı hatalıdır.",
          "Soluk baskı: ısı ayarı düşük veya ribbon uyumsuzdur.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
]

/* ------------------------------------------------------------------ */
/* Rehberler (makaleler + hata çözüm)                                 */
/* ------------------------------------------------------------------ */

export type Guide = Doc & {
  category: string
  readingTime: string
}

export const guides: Guide[] = [
  {
    slug: "autocad-mi-revit-mi",
    category: "Karşılaştırma",
    readingTime: "6 dk",
    title: "AutoCAD mı Revit mi? Hangisi Daha İyi?",
    metaTitle: "AutoCAD mı Revit mi? Kapsamlı Karşılaştırma",
    description:
      "AutoCAD ve Revit arasındaki farklar, hangi proje için hangisi kullanılmalı? Mimar, mühendis ve tasarımcılar için karşılaştırma.",
    eyebrow: "Rehber",
    intro:
      "Bu iki program aynı işi yapmaz. AutoCAD çizim odaklı, Revit ise model odaklıdır. Doğru seçim, projenizin türüne ve ekip iş akışınıza bağlıdır.",
    blocks: [
      {
        heading: "Temel fark",
        paragraphs: [
          "AutoCAD'de çizgiler çizersiniz; Revit'te duvar, kapı, döşeme gibi gerçek yapı elemanları modellersiniz. Revit'te plan, kesit ve görünüş aynı modelden türetildiği için bir değişiklik tüm paftaları günceller.",
        ],
      },
      {
        heading: "AutoCAD hangi durumlarda daha uygun?",
        bullets: [
          "2D teknik resim ve detay çizimleri",
          "Makine, elektrik ve tesisat imalat çizimleri",
          "Hızlı revizyon gereken küçük işler",
          "DWG tabanlı iş akışına bağlı ekipler",
        ],
      },
      {
        heading: "Revit hangi durumlarda daha uygun?",
        bullets: [
          "BIM gerektiren orta ve büyük ölçekli projeler",
          "Metraj ve maliyet çıkarımı yapılacak işler",
          "Disiplinler arası koordinasyon gereken projeler",
          "Paftaların otomatik güncel kalması istenen işler",
        ],
      },
      {
        heading: "Öğrenme eğrisi ve donanım",
        paragraphs: [
          "AutoCAD'e başlamak daha kolaydır. Revit ise mantığını kavramak için zaman ister ve daha güçlü donanım bekler, özellikle RAM konusunda.",
        ],
      },
    ],
    faqs: [
      {
        q: "İkisini birlikte kullanmak mantıklı mı?",
        a: "Evet, yaygın bir yaklaşımdır. Model Revit'te kurulur, bazı detay çizimleri AutoCAD'de tamamlanır.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "lumion-enscape-vray-karsilastirma",
    category: "Karşılaştırma",
    readingTime: "6 dk",
    title: "Lumion mu, Enscape mi, V-Ray mi?",
    metaTitle: "Lumion, Enscape ve V-Ray Karşılaştırması",
    description:
      "Mimari görselleştirme için Lumion, Enscape ve V-Ray arasındaki farklar. Hangisi daha hızlı, hangisi daha gerçekçi?",
    eyebrow: "Rehber",
    intro:
      "Üç program da mimari görselleştirme için kullanılır, ancak çalışma mantıkları farklıdır. Seçim; hız, gerçekçilik ve iş akışı tercihiniz arasındaki dengeye göre yapılır.",
    blocks: [
      {
        heading: "Lumion",
        bullets: [
          "Zengin hazır içerik kütüphanesi (bitki, insan, araç)",
          "Hızlı sonuç ve etkileyici animasyon üretimi",
          "Ekran kartına yüksek bağımlılık",
        ],
      },
      {
        heading: "Enscape",
        bullets: [
          "Revit ve SketchUp içinde gerçek zamanlı çalışır",
          "Model ile render arasında sürekli senkronizasyon",
          "Sunum ve müşteri toplantıları için pratik",
        ],
      },
      {
        heading: "V-Ray",
        bullets: [
          "En yüksek kontrol ve fotogerçekçilik",
          "Malzeme ve ışık ayarlarında derin özelleştirme",
          "Daha uzun render süresi ve öğrenme eğrisi",
        ],
      },
      {
        heading: "Hangisini seçmelisiniz?",
        paragraphs: [
          "Hızlı sunum ve animasyon önceliğinizse Lumion; model üzerinde anında geri bildirim istiyorsanız Enscape; portföy kalitesinde tek kare görsel hedefliyorsanız V-Ray uygundur.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "lumion-neden-kasiyor",
    category: "Performans",
    readingTime: "5 dk",
    title: "Neden Lumion Kasıyor? Çözüm Yolları",
    metaTitle: "Lumion Neden Kasıyor? Çözüm ve Performans İpuçları",
    description:
      "Lumion kasma, yavaş çalışma ve render sorunlarının nedenleri ile ekran kartı, RAM ve sürücü ayarlarıyla çözümleri.",
    eyebrow: "Rehber",
    intro:
      "Lumion'da kasma neredeyse her zaman ölçülebilir bir sebebe dayanır. Aşağıdaki başlıkları sırayla kontrol ettiğinizde sorunun kaynağını daraltabilirsiniz.",
    blocks: [
      {
        heading: "1. Program yanlış ekran kartını kullanıyor",
        paragraphs: [
          "Dizüstü bilgisayarlarda Lumion, harici ekran kartı yerine işlemcinin dahili grafik birimiyle açılabilir. Windows grafik ayarlarından Lumion'u yüksek performanslı GPU'ya sabitlemek en hızlı kazancı sağlar.",
        ],
      },
      {
        heading: "2. Ekran kartı sürücüsü uygun değil",
        paragraphs: [
          "Çok yeni veya çok eski sürücüler render hatalarına yol açar. Sürücüyü temiz kurulum seçeneğiyle, yazılımın önerdiği sürüme getirmek gerekir.",
        ],
      },
      {
        heading: "3. Sahne fazla ağır",
        bullets: [
          "Yüksek poligonlu mobilya ve bitki gruplarını azaltın.",
          "Çok yüksek çözünürlüklü dokuları küçültün.",
          "Görünmeyen katmanları sahneden çıkarın.",
        ],
      },
      {
        heading: "4. Bellek ve disk darboğazı",
        bullets: [
          "16 GB RAM büyük sahnelerde yetersiz kalır.",
          "Sanal belleği elle artırın.",
          "Projeyi SSD üzerinde tutun.",
        ],
      },
    ],
    faqs: [
      {
        q: "Editörde akıcı ama render çok uzun sürüyor, normal mi?",
        a: "Evet. Editör düşük kalitede çalışır, final render tüm efektleri hesaplar. Süreyi kısaltmak için çözünürlük ve efekt sayısı dengelenir.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "temiz-autocad-kurulumu",
    category: "Kurulum",
    readingTime: "5 dk",
    title: "Temiz AutoCAD Kurulumu Nasıl Yapılır?",
    metaTitle: "Temiz AutoCAD Kurulumu Rehberi",
    description:
      "Hatalardan kaçınmak için format sonrası temiz AutoCAD kurulumu, eski dosyaları kaldırma ve kayıt defteri temizliği.",
    eyebrow: "Rehber",
    intro:
      "AutoCAD kurulum hatalarının çoğu, önceki kurulumdan kalan dosya ve kayıtlardan kaynaklanır. Temiz kurulum, bu kalıntıları ortadan kaldırarak hatasız bir başlangıç sağlar.",
    blocks: [
      {
        heading: "Adım 1: Mevcut kurulumu kaldırın",
        bullets: [
          "Autodesk ürünlerini denetim masasından kaldırın.",
          "Autodesk yardımcı bileşenlerini de listeden temizleyin.",
          "Bilgisayarı yeniden başlatın.",
        ],
      },
      {
        heading: "Adım 2: Kalan dosyaları temizleyin",
        bullets: [
          "Program Files içindeki Autodesk klasörlerini kontrol edin.",
          "ProgramData ve AppData altındaki Autodesk klasörlerini temizleyin.",
          "Geçici dosya klasörünü boşaltın.",
        ],
      },
      {
        heading: "Adım 3: Sistemi hazırlayın",
        bullets: [
          "Windows güncellemelerini tamamlayın.",
          "Visual C++ ve .NET bileşenlerinin kurulu olduğundan emin olun.",
          "Antivirüsü kurulum boyunca duraklatın.",
        ],
      },
      {
        heading: "Adım 4: Kurulumu yapın",
        paragraphs: [
          "Kurulumu yönetici olarak başlatın, gereksiz bileşenleri seçmeyin ve kurulum bitene kadar başka ağır uygulama çalıştırmayın. Kurulum sonrası bilgisayarı yeniden başlatıp lisans aktivasyonunu tamamlayın.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kayıt defterine elle dokunmam gerekir mi?",
        a: "Deneyimsiz kullanıcıların kayıt defterinde manuel değişiklik yapması risklidir. Bu adımı uzaktan destekle yapmak daha güvenlidir.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "windows-format-sonrasi-programlar",
    category: "Kurulum",
    readingTime: "4 dk",
    title: "Format Sonrası Kurulması Gereken Programlar",
    metaTitle: "Format Sonrası Kurulması Gereken Programlar Listesi",
    description:
      "Bilgisayara format attıktan sonra hangi programlar kurulmalı? Eksiksiz format sonrası kurulum rehberi.",
    eyebrow: "Rehber",
    intro:
      "Format sonrası doğru sırayla kurulum yapmak, ilerideki sürücü ve uyumluluk sorunlarını önler. Önce sistem katmanı, sonra uygulamalar kurulmalıdır.",
    blocks: [
      {
        heading: "1. Sürücüler",
        bullets: [
          "Yonga seti (chipset) sürücüsü",
          "Ekran kartı sürücüsü",
          "Ses ve ağ sürücüleri",
          "Yazıcı ve tarayıcı sürücüleri",
        ],
      },
      {
        heading: "2. Sistem bileşenleri",
        bullets: [
          "Visual C++ Redistributable paketleri",
          ".NET Framework / .NET Runtime",
          "DirectX bileşenleri",
          "Windows güncellemeleri",
        ],
      },
      {
        heading: "3. Günlük uygulamalar",
        bullets: [
          "Tarayıcı ve arşiv programı",
          "Microsoft Office veya Microsoft 365",
          "PDF okuyucu",
          "Yedekleme / bulut istemcisi",
        ],
      },
      {
        heading: "4. Profesyonel yazılımlar",
        paragraphs: [
          "AutoCAD, Revit, SolidWorks, Lumion ve Adobe programları en son kurulmalıdır. Böylece gerekli tüm sistem bileşenleri hazır olur ve kurulum hataları belirgin şekilde azalır.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "autocad-kurulum-hatalari",
    category: "Hata Çözümü",
    readingTime: "6 dk",
    title: "AutoCAD Kurulum Hataları: 1603, Error 5, Fatal Error",
    metaTitle: "AutoCAD Error 1603, Error 5 ve Fatal Error Çözümleri",
    description:
      "AutoCAD kurulumunda alınan Error 1603, Error 5 Access Denied ve Fatal Error hatalarının adım adım kesin çözümleri.",
    eyebrow: "Rehber",
    intro:
      "AutoCAD'in en sık görülen üç hatası farklı görünse de ortak sebeplere dayanır: yetki sorunları, kalıntı dosyalar ve eksik sistem bileşenleri.",
    blocks: [
      {
        heading: "Error 1603 — Fatal Error During Installation",
        bullets: [
          "Kurulumu yönetici olarak başlatın.",
          "Önceki Autodesk kurulumlarını ve kalıntı klasörleri temizleyin.",
          "Windows Installer servisinin çalıştığını doğrulayın.",
          "Geçici dosya klasörünü boşaltıp kurulumu tekrarlayın.",
        ],
      },
      {
        heading: "Error 5 — Access Denied",
        bullets: [
          "Kullanıcı hesabınızın yönetici yetkisi olduğundan emin olun.",
          "Kurulum klasörü izinlerini kontrol edin.",
          "Antivirüs ve güvenlik yazılımını geçici olarak duraklatın.",
        ],
      },
      {
        heading: "Fatal Error — Unhandled Access Violation",
        bullets: [
          "Ekran kartı sürücüsünü uyumlu sürüme getirin.",
          "Bozuk kullanıcı profili ayarlarını sıfırlayın.",
          "Programı onarım (repair) seçeneğiyle yeniden yapılandırın.",
        ],
      },
      {
        heading: "AutoCAD açılmıyor",
        paragraphs: [
          "Simgeye tıklandığında hiçbir şey olmuyorsa veya başlangıç ekranında kalıyorsa; lisans servisi, bozuk kullanıcı ayarları veya eklenti çakışması söz konusudur. Ayarları sıfırlamak ve eklentileri devre dışı bırakarak açmak sorunu daraltır.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bu adımları denedim, hâlâ kurulamıyor.",
        a: "Bu noktada kurulum log dosyasının incelenmesi gerekir. Uzaktan bağlanıp hatanın durduğu bileşeni tespit ediyoruz.",
      },
    ],
    updated: "2026-05-11",
  },
  {
    slug: "office-etkinlestirme-hatasi",
    category: "Hata Çözümü",
    readingTime: "4 dk",
    title: "Office Etkinleştirme Hatası Çözümü",
    metaTitle: "Microsoft Office Etkinleştirme Hatası Çözümü",
    description:
      "Microsoft Office ürün etkinleştirme başarısız hatası, KMS hataları ve lisans sorunları için kesin çözümler.",
    eyebrow: "Rehber",
    intro:
      "Office'in 'Ürün etkinleştirilemedi' uyarısı; yanlış lisans tipi, hesap uyumsuzluğu, sistem tarih/saat hatası veya bozuk lisans kaydından kaynaklanabilir.",
    blocks: [
      {
        heading: "Önce kontrol edilecekler",
        bullets: [
          "Sistem tarih, saat ve saat dilimi doğru mu?",
          "Doğru Microsoft hesabıyla oturum açılmış mı?",
          "Lisans tipi (perakende, Microsoft 365, kurumsal) kurulan sürümle uyumlu mu?",
          "İnternet bağlantısı ve güvenlik duvarı etkinleştirmeyi engelliyor mu?",
        ],
      },
      {
        heading: "Çözüm adımları",
        bullets: [
          "Office'te oturumu kapatıp yeniden açın.",
          "Office'i çevrimiçi onarım seçeneğiyle onarın.",
          "Kayıtlı eski lisans bilgilerini temizleyip yeniden etkinleştirin.",
          "Kurumsal ortamda KMS sunucu tanımını doğrulayın.",
        ],
      },
      {
        heading: "Tekrarlayan hatalar",
        paragraphs: [
          "Etkinleştirme birkaç gün sonra tekrar düşüyorsa, genellikle birden fazla lisans kaydı çakışmaktadır. Bu durumda temiz kaldırma aracı ile Office kalıntılarını temizleyip yeniden kurmak kalıcı çözüm sağlar.",
        ],
      },
    ],
    updated: "2026-05-11",
  },
]

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getSoftware(slug: string) {
  return softwareList.find((s) => s.slug === slug)
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}
