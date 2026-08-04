import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { JsonLd } from "@/components/json-ld"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"
import { getGlobalJsonLd } from "@/lib/structured-data"
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | ProgramKur.com.tr",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "uzaktan program kurulumu",
    "program kurdurmak",
    "uzaktan yazılım kurulumu",
    "program kurdurma servisi",
    "program kurulum sitesi",
    "online program kurulumu",
    "uzaktan bağlantı ile kurulum",
    "AutoCAD kurulumu",
    "AutoCAD kurdurmak",
    "Revit kurulumu",
    "Lumion kurulumu",
    "SolidWorks kurulumu",
    "Rhino kurulumu",
    "V-Ray kurulumu",
    "SketchUp kurulumu",
    "Office kurulumu",
    "Microsoft Office kurdurmak",
    "Microsoft 365 kurulumu",
    "Windows kurulumu",
    "Adobe kurulumu",
    "lisans aktivasyonu",
    "aktivasyon hatası çözümü",
    "yazılım teknik destek",
    "uzaktan teknik destek",
    "İstanbul program kurulumu",
    "Ankara program kurulumu",
    "İzmir program kurulumu",
    "Türkiye geneli yazılım kurulumu",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <JsonLd data={getGlobalJsonLd()} />
      </body>
    </html>
  )
}
