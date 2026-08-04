import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { WhyUs } from "@/components/why-us"
import { SupportedSoftware } from "@/components/supported-software"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { RemoteTools } from "@/components/remote-tools"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFab } from "@/components/whatsapp-fab"
import { JsonLd } from "@/components/json-ld"
import { getHomeJsonLd } from "@/lib/structured-data"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <SupportedSoftware />
        <Services />
        <HowItWorks />
        <RemoteTools />
        <Features />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsappFab />
      <JsonLd data={getHomeJsonLd()} />
    </>
  )
}
