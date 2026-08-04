import type { ContentDocument } from "@/lib/content-engine"
import { getContentSchemaBreadcrumbs } from "@/lib/seo"
import {
  DEFAULT_DESCRIPTION,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
  isoDate,
} from "@/lib/site"

const telephone = "+905385050002"

const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "200",
  bestRating: "5",
  worstRating: "1",
}

const reviews = [
  {
    author: "Mehmet Aksoy",
    body: "AutoCAD ve Revit kurulumunu aynı gün içinde uzaktan hallettiler. Ofise gelmelerine gerek kalmadı, işlem sonrası ödeme yapmak da çok güven verdi.",
  },
  {
    author: "Zeynep Yıldız",
    body: "Lumion kurulumunda başka yerlerde çözülemeyen bir hatayı 15 dakikada çözdüler. Gerçekten işini bilen bir ekip. Kesinlikle tavsiye ederim.",
  },
  {
    author: "Emre Demir",
    body: "SolidWorks lisans aktivasyonumda takılmıştım. WhatsApp'tan yazdım, birkaç dakika içinde bağlandılar ve sorunu çözdüler. Süper hızlı.",
  },
]

export function getGlobalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        alternateName: SITE_SHORT_NAME,
        url: SITE_URL,
        description:
          "Uzaktan yazılım kurulumu ve teknik destek hizmeti. AutoCAD, Revit, Lumion, SolidWorks, Office, Adobe, yazıcı ve tarayıcı programları dahil 20+ program.",
        image: absoluteUrl("/opengraph-image"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icon"),
          width: 512,
          height: 512,
        },
        telephone,
        email: "destek@programkur.com.tr",
        priceRange: "₺₺",
        currenciesAccepted: "TRY",
        areaServed: { "@type": "Country", name: "Türkiye" },
        address: {
          "@type": "PostalAddress",
          addressCountry: "TR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone,
          contactType: "customer service",
          availableLanguage: ["Turkish"],
          areaServed: "TR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "22:00",
        },
        aggregateRating,
        review: reviews.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.author },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody: review.body,
        })),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "tr-TR",
        publisher: { "@id": ORGANIZATION_ID },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }
}

function getArticleType(document: ContentDocument) {
  return document.collection === "blog" ? "BlogPosting" : "Article"
}

function getDocumentAbout(document: ContentDocument) {
  const values = [document.software, document.service, document.city, document.category].filter(
    (value): value is string => Boolean(value),
  )

  return values.map((name) => ({ "@type": "Thing", name }))
}

function getDocumentSchema(document: ContentDocument) {
  const pageUrl = absoluteUrl(document.pathname)
  const description = document.description || DEFAULT_DESCRIPTION
  const modifiedTime = isoDate(document.lastModified)
  const about = getDocumentAbout(document)
  const common = {
    "@id": `${pageUrl}#content`,
    name: document.title,
    headline: document.title,
    description,
    url: pageUrl,
    inLanguage: "tr-TR",
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    publisher: { "@id": ORGANIZATION_ID },
    author: document.author
      ? { "@type": "Person", name: document.author }
      : { "@id": ORGANIZATION_ID },
    dateModified: modifiedTime,
    image: document.image ? absoluteUrl(document.image) : undefined,
    about: about.length > 0 ? about : undefined,
    keywords: document.keywords.length > 0 ? document.keywords.join(", ") : undefined,
  }

  switch (document.collection) {
    case "services":
      return {
        "@type": "Service",
        ...common,
        serviceType: document.service || document.title,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: document.city
          ? { "@type": "City", name: document.city }
          : { "@type": "Country", name: "Türkiye" },
      }
    case "software":
      return {
        "@type": "SoftwareApplication",
        ...common,
        applicationCategory: document.category || "BusinessApplication",
        operatingSystem: "Windows",
        applicationSubCategory: document.software,
      }
    case "cities":
      return {
        "@type": "Service",
        ...common,
        serviceType: document.service || "Uzaktan yazılım kurulumu ve teknik destek",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "City", name: document.city || document.title },
      }
    default:
      return {
        "@type": getArticleType(document),
        ...common,
      }
  }
}

function getFaqSchema(document: ContentDocument) {
  if (document.faq.length === 0) return undefined

  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(document.pathname)}#faq`,
    mainEntity: document.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

function getHowToSchema(document: ContentDocument) {
  if (!document.howTo) return undefined

  return {
    "@type": "HowTo",
    "@id": `${absoluteUrl(document.pathname)}#howto`,
    name: document.howTo.name || document.title,
    description: document.howTo.description || document.description || DEFAULT_DESCRIPTION,
    inLanguage: "tr-TR",
    provider: { "@id": ORGANIZATION_ID },
    totalTime: document.howTo.totalTime,
    step: document.howTo.steps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.name,
      text: item.text,
    })),
  }
}

export function getContentJsonLd(document: ContentDocument) {
  const pageUrl = absoluteUrl(document.pathname)
  const breadcrumbs = getContentSchemaBreadcrumbs(document)
  const faqSchema = getFaqSchema(document)
  const howToSchema = getHowToSchema(document)

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: document.title,
        description: document.description || DEFAULT_DESCRIPTION,
        inLanguage: "tr-TR",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        dateModified: isoDate(document.lastModified),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href,
        })),
      },
      getDocumentSchema(document),
      faqSchema,
      howToSchema,
    ].filter(Boolean),
  }
}

export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Türkiye'nin Uzaktan Yazılım Kurulum Uzmanı",
        description: DEFAULT_DESCRIPTION,
        inLanguage: "tr-TR",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        serviceType: "Uzaktan yazılım kurulumu ve teknik destek",
        name: "Uzaktan Yazılım Kurulum Hizmeti",
        description:
          "Türkiye geneli uzaktan, aynı gün yazılım kurulumu, lisans aktivasyonu, yapılandırma ve teknik destek.",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "Türkiye" },
        aggregateRating,
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/#howto`,
        name: "Uzaktan program nasıl kurdurulur?",
        description:
          "ProgramKur.com.tr ile uzaktan yazılım kurdurmanın beş adımı. Türkiye'nin her yerinden, aynı gün ve ödeme kurulum sonrası.",
        totalTime: "PT45M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "TRY",
          value: "1000",
        },
        supply: {
          "@type": "HowToSupply",
          name: "İnternet bağlantısı olan bir bilgisayar",
        },
        tool: {
          "@type": "HowToTool",
          name: "Şifreli uzaktan erişim uygulaması",
        },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "WhatsApp'tan yazın",
            text: "İhtiyacınız olan yazılımı ve durumu WhatsApp'tan iletin. Ortalama 15 dakikada dönüş yapılır.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Güvenli bağlantıyı onaylayın",
            text: "Şifreli, KVKK uyumlu uzaktan erişim aracıyla bilgisayarınıza bağlanılır. Bağlantıyı siz başlatır ve dilediğiniz an sonlandırabilirsiniz.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Kurulum yapılır",
            text: "Yazılım kurulur, lisans ve aktivasyon işlemleri eksiksiz tamamlanır.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Birlikte test edilir",
            text: "Programın sorunsuz çalıştığı sizinle birlikte test edilir ve kontrol edilir.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Kurulum sonrası ödeme",
            text: "Ödeme yalnızca işlem başarıyla tamamlandıktan sonra alınır. Sorun çözülmezse ücret alınmaz.",
          },
        ],
      },
    ],
  }
}
