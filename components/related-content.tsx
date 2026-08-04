import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { RelatedContentGroup } from "@/lib/content-engine"

export function RelatedContent({ groups }: { groups: RelatedContentGroup[] }) {
  if (groups.length === 0) return null

  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-border pt-10" aria-labelledby="related-content-heading">
      <h2 id="related-content-heading" className="text-lg font-semibold text-navy">
        İlgili içerikler
      </h2>
      <div className="mt-6 flex flex-col gap-8">
        {groups.map((group) => (
          <section key={group.collection} aria-labelledby={`related-${group.collection}`}>
            <h3 id={`related-${group.collection}`} className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-col gap-3">
              {group.documents.map((document) => (
                <li key={document.id}>
                  <Link
                    href={document.pathname}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30"
                  >
                    <span className="text-[15px] font-medium text-navy">{document.title}</span>
                    <ArrowRight
                      className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
