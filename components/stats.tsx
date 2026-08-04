import { AnimatedCounter } from "@/components/animated-counter"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: 200, suffix: "+", label: "Başarılı Kurulum" },
  { value: 20, suffix: "+", label: "Desteklenen Yazılım" },
  { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
  { value: 15, suffix: " dk", label: "Ortalama İlk Yanıt" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
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
