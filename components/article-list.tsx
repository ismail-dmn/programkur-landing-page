import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export type ArticleCard = {
  slug: string
  title: string
  description: string
  category: string
  readingTime: string
}

export function ArticleList({
  items,
  basePath,
}: {
  items: ArticleCard[]
  basePath: string
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.slug} className="h-full">
          <Link
            href={`${basePath}/${item.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              {item.category}
            </span>
            <h2 className="mt-4 text-[17px] font-semibold leading-snug text-navy text-pretty">
              {item.title}
            </h2>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                {item.readingTime} okuma
              </span>
              <ArrowRight
                className="size-4 text-primary transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
