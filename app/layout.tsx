import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = "https://programkur.com.tr"
const siteName = "ProgramKur.com.tr"
const defaultTitle = "ProgramKur.com.tr | Uzaktan Yazılım Kurulum ve Teknik Destek"
const defaultDescription =
  "AutoCAD, Revit, Lumion, SolidWorks, Office, Adobe, yazıcı ve tarayıcı yazılımları dahil 20'den fazla program için aynı gün uzaktan kurulum ve teknik destek. Ortalama 15 dakikada WhatsApp yanıtı."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | ProgramKur.com.tr",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "uzaktan program kurulumu",
    "program kurdurmak",
    "AutoCAD kurulumu",
    "Revit kurulumu",
    "Lumion kurulumu",
    "SolidWorks kurulumu",
    "Office kurulumu",
    "Microsoft 365 kurulumu",
    "Adobe kurulumu",
    "yazılım teknik destek",
    "uzaktan teknik destek",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName,
    title: "Türkiye'nin Uzaktan Yazılım Kurulum Uzmanı",
    description:
      "20'den fazla program için aynı gün uzaktan kurulum ve teknik destek. Hemen WhatsApp'tan yazın.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkiye'nin Uzaktan Yazılım Kurulum Uzmanı",
    description:
      "20'den fazla program için aynı gün uzaktan kurulum ve teknik destek.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#07152f",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

const telephone = "+905385050002"

const services = [
  "Microsoft Office Kurulumu",
  "Microsoft 365 Kurulumu",
  "OneDrive Kurulumu",
  "SharePoint Kurulumu",
  "Windows Kurulumu",
  "AutoCAD Kurulumu",
  "Rhino Kurulumu",
  "V-Ray Kurulumu",
  "SolidWorks Kurulumu",
  "Lumion Kurulumu",
  "Adobe Creative Cloud Kurulumu",
  "Teknik Destek",
]

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

const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "200",
  bestRating: "5",
  worstRating: "1",
}

const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": organizationId,
      name: siteName,
      alternateName: "ProgramKur",
      url: siteUrl,
      description:
        "Uzaktan yazılım kurulumu ve teknik destek hizmeti. AutoCAD, Revit, Lumion, SolidWorks, Office, Adobe, yazıcı ve tarayıcı programları dahil 20+ program.",
      image: `${siteUrl}/opengraph-image`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon`,
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
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: r.body,
      })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      inLanguage: "tr-TR",
      publisher: { "@id": organizationId },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: defaultTitle,
      description: defaultDescription,
      inLanguage: "tr-TR",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: `${siteUrl}/opengraph-image`,
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hizmetler",
          item: `${siteUrl}/#hizmetler`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fiyat",
          item: `${siteUrl}/#fiyat`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "SSS",
          item: `${siteUrl}/#sss`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "Uzaktan yazılım kurulumu ve teknik destek",
      name: "Uzaktan Yazılım Kurulum Hizmeti",
      description:
        "Türkiye geneli uzaktan, aynı gün yazılım kurulumu, lisans aktivasyonu, yapılandırma ve teknik destek.",
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "Türkiye" },
      aggregateRating,
      offers: {
        "@type": "Offer",
        price: "1000",
        priceCurrency: "TRY",
        description: "Tek yazılım kurulumu — aktivasyon, yapılandırma ve destek dahil.",
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Yazılım Kurulum Hizmetleri",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
