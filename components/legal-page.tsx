import { CalendarDays } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import type { ContentBlock } from "@/lib/content"

export function LegalPage({
  title,
  description,
  updated,
  blocks,
  crumbLabel,
  crumbHref,
}: {
  title: string
  description: string
  updated: string
  blocks: ContentBlock[]
  crumbLabel: string
  crumbHref: string
}) {
  return (
    <PageShell crumbs={[{ label: crumbLabel, href: crumbHref }]}>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-16">
          <h1 className="text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{description}</p>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden="true" />
            Son güncellenme: {updated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10">
          {blocks.map((block, i) => (
            <section key={block.heading}>
              <h2 className="text-lg font-semibold tracking-tight text-navy sm:text-xl">
                {i + 1}. {block.heading}
              </h2>
              {block.paragraphs?.map((p) => (
                <p key={p} className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {block.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
