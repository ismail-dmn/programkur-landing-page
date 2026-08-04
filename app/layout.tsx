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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProgramKur.com.tr | Uzaktan Yazılım Kurulum ve Teknik Destek",
    template: "%s | ProgramKur.com.tr",
  },
  description:
    "AutoCAD, Revit, Lumion, SolidWorks, Office, Adobe, yazıcı ve tarayıcı yazılımları dahil 20'den fazla program için aynı gün uzaktan kurulum ve teknik destek. Ortalama 15 dakikada WhatsApp yanıtı.",
  keywords: [
    "uzaktan program kurulumu",
    "program kurdurmak",
    "AutoCAD kurulumu",
    "Revit kurulumu",
    "Lumion kurulumu",
    "SolidWorks kurulumu",
    "Office kurulumu",
    "Adobe kurulumu",
    "yazılım teknik destek",
  ],
  authors: [{ name: "ProgramKur.com.tr" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "ProgramKur.com.tr",
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
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#07152f",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProgramKur.com.tr",
  description:
    "Uzaktan yazılım kurulumu ve teknik destek hizmeti. AutoCAD, Revit, Lumion, SolidWorks, Office, Adobe, yazıcı ve tarayıcı programları dahil 20+ program.",
  url: siteUrl,
  telephone: "+905385050002",
  areaServed: "TR",
  priceRange: "₺₺",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
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
