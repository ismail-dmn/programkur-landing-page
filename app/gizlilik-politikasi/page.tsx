import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { privacyBlocks, LEGAL_UPDATED } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "ProgramKur.com.tr gizlilik politikası: topladığımız veriler, uzaktan bağlantı gizliliği, çerezler ve haklarınız.",
  alternates: { canonical: "/gizlilik-politikasi" },
}

export default function GizlilikPage() {
  return (
    <LegalPage
      crumbLabel="Gizlilik Politikası"
      crumbHref="/gizlilik-politikasi"
      title="Gizlilik Politikası"
      description="Hangi verileri topluyoruz, neden işliyoruz ve uzaktan bağlantı sırasında gizliliğinizi nasıl koruyoruz?"
      updated={LEGAL_UPDATED}
      blocks={privacyBlocks}
    />
  )
}
