import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const software = [
  { name: "Microsoft Office", short: "OF", color: "#d83b01" },
  { name: "Microsoft 365", short: "365", color: "#e74225" },
  { name: "Outlook", short: "Ou", color: "#0072c6" },
  { name: "Teams", short: "Tm", color: "#5059c9" },
  { name: "OneDrive", short: "OD", color: "#0364b8" },
  { name: "SharePoint", short: "SP", color: "#036c70" },
  { name: "Windows", short: "Win", color: "#0078d4" },
  { name: "AutoCAD", short: "AC", color: "#e51050" },
  { name: "Rhino", short: "Rh", color: "#801000" },
  { name: "V-Ray", short: "VR", color: "#00a2e0" },
  { name: "SolidWorks", short: "SW", color: "#e2231a" },
  { name: "Lumion", short: "LU", color: "#00a8b0" },
  { name: "SketchUp", short: "SU", color: "#e6592b" },
  { name: "Revit", short: "RV", color: "#186ee0" },
  { name: "Adobe Creative Cloud", short: "Cc", color: "#ff3366" },
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
