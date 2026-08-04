import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFab } from "@/components/whatsapp-fab"

export type Crumb = { label: string; href?: string }

export function PageShell({
  children,
  crumbs,
}: {
  children: React.ReactNode
  crumbs: Crumb[]
}) {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 md:pt-18">
        <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/40">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-5 py-3.5 text-sm lg:px-8">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                Ana Sayfa
              </Link>
            </li>
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
                {crumb.href && i !== crumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-navy" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {children}
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
