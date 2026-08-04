import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const software = [
  { name: "AutoCAD", short: "AC", color: "#e51050" },
  { name: "Revit", short: "RV", color: "#186ee0" },
  { name: "Lumion", short: "LU", color: "#00a8b0" },
  { name: "SketchUp", short: "SU", color: "#e6592b" },
  { name: "SolidWorks", short: "SW", color: "#e2231a" },
  { name: "Office", short: "OF", color: "#d83b01" },
  { name: "Adobe CC", short: "Ai", color: "#ff3366" },
  { name: "CorelDRAW", short: "CD", color: "#54b948" },
  { name: "Windows", short: "Win", color: "#0078d4" },
  { name: "SQL Server", short: "SQL", color: "#a4373a" },
  { name: "Logo", short: "Lg", color: "#e30613" },
  { name: "ETA", short: "ETA", color: "#1f6feb" },
  { name: "3ds Max", short: "3ds", color: "#37a5cc" },
  { name: "Photoshop", short: "Ps", color: "#31a8ff" },
  { name: "ArchiCAD", short: "AR", color: "#2f6f4e" },
  { name: "Yazıcı Programları", short: "Yz", color: "#0f766e" },
  { name: "Tarayıcı Programları", short: "Tr", color: "#7c3aed" },
  { name: "Ve daha fazlası", short: "+", color: "#2563eb" },
]

export function SupportedSoftware() {
  return (
    <section id="yazilimlar" className="scroll-mt-20 border-y border-border bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Desteklenen Yazılımlar"
          title="20'den fazla profesyonel yazılıma tam destek"
          description="Mimari, mühendislik, tasarım, ofis, yazıcı ve tarayıcı yazılımlarında ihtiyacınız olan her şey tek adreste."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {software.map((item, i) => (
            <Reveal key={item.name} delay={(i % 4) * 0.06}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-navy/5">
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                >
                  {item.short}
                </span>
                <span className="text-[15px] font-semibold text-navy">{item.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
