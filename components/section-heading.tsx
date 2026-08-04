import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-sm font-semibold text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  )
}
