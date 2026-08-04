import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { kvkkBlocks, LEGAL_UPDATED } from "@/lib/legal"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı KVKK kapsamında ProgramKur.com.tr aydınlatma metni: işlenen veriler, amaçlar, hukuki sebepler ve ilgili kişi hakları.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
}

export default function KvkkPage() {
  return (
    <LegalPage
      crumbLabel="KVKK Aydınlatma Metni"
      crumbHref="/kvkk-aydinlatma-metni"
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin bilgilendirme."
      updated={LEGAL_UPDATED}
      blocks={kvkkBlocks}
    />
  )
}
