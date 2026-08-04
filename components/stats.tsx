import { AnimatedCounter } from "@/components/animated-counter"
import { Reveal } from "@/components/reveal"

type Stat = {
  value?: number
  suffix?: string
  text?: string
  label: string
}

const stats: Stat[] = [
 { value: 200, suffix: "+", label: "Başarılı Kurulum" },
  { value: 10, suffix: "+", label: "Desteklenen Yazılım" },
  { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
  { value: 15, suffix: " dk", label: "Ortalama İlk Yanıt" },
]

export function Stats() {
  return (
    <section aria-label="Rakamlarla ProgramKur" className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                {stat.text ? (
                  stat.text
                ) : (
                  <AnimatedCounter value={stat.value ?? 0} suffix={stat.suffix} />
                )}
              </dd>
              <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
