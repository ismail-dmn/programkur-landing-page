import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { termsBlocks, LEGAL_UPDATED } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "ProgramKur.com.tr hizmet kullanım şartları: hizmet kapsamı, ödeme, 7 gün garanti, sorumluluk sınırları ve lisans uyumu.",
  alternates: { canonical: "/kullanim-sartlari" },
}

export default function KullanimSartlariPage() {
  return (
    <LegalPage
      crumbLabel="Kullanım Şartları"
      crumbHref="/kullanim-sartlari"
      title="Kullanım Şartları"
      description="Uzaktan kurulum ve teknik destek hizmetlerimizin kapsamı, ödeme koşulları ve karşılıklı sorumluluklar."
      updated={LEGAL_UPDATED}
      blocks={termsBlocks}
    />
  )
}
