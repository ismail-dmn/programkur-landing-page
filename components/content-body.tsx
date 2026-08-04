import { Check } from "lucide-react"
import type { ContentBlock, FaqItem } from "@/lib/content"

export function ContentBody({
  intro,
  highlights,
  blocks,
  faqs,
  children,
}: {
  intro: string
  highlights?: string[]
  blocks: ContentBlock[]
  faqs?: FaqItem[]
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-lg leading-relaxed text-navy text-pretty">{intro}</p>

      {highlights && highlights.length > 0 && (
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-2xl border border-border bg-muted/50 p-4 text-sm font-medium leading-relaxed text-navy"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {children}

      <div className="mt-12 flex flex-col gap-11">
        {blocks.map((block) => (
          <section key={block.heading}>
            <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
              {block.heading}
            </h2>
            {block.paragraphs?.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
            {block.bullets && (
              <ul className="mt-5 flex flex-col gap-3">
                {block.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-navy">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {faqs && faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-[15px] font-semibold text-navy marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
