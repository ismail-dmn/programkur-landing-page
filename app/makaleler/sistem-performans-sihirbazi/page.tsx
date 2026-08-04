"use client"

import { useState, useEffect, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { MessageCircle, TerminalSquare, Cpu, Monitor, HardDrive, Database, Zap, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react"
import { whatsappLink } from "@/lib/utils"
import Link from "next/link"

// Chart.js dynamically imported for SSR compatibility
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CPU_DB = {
  "i5_6500": { name: "Intel Core i5-6500 (6. Nesil, 2015)", score: 35, single: 40, multi: 30, gen: "old" },
  "i7_6700": { name: "Intel Core i7-6700 (6. Nesil, 2015)", score: 45, single: 45, multi: 45, gen: "old" },
  "i7_7700": { name: "Intel Core i7-7700 (7. Nesil, 2017)", score: 50, single: 50, multi: 50, gen: "old" },
  "ryzen5_2400g": { name: "AMD Ryzen 5 2400G (Zen+, 2018)", score: 40, single: 40, multi: 40, gen: "old" },
  "ryzen5_2600": { name: "AMD Ryzen 5 2600 (Zen+, 2018)", score: 55, single: 45, multi: 65, gen: "old" },
  "i5_8500": { name: "Intel Core i5-8500 (8. Nesil, 2018)", score: 55, single: 55, multi: 55, gen: "mid" },
  "i7_8700": { name: "Intel Core i7-8700 (8. Nesil, 2017)", score: 65, single: 60, multi: 70, gen: "mid" },
  "i5_9500": { name: "Intel Core i5-9500 (9. Nesil, 2018)", score: 58, single: 58, multi: 58, gen: "mid" },
  "i7_9700": { name: "Intel Core i7-9700 (9. Nesil, 2018)", score: 70, single: 65, multi: 75, gen: "mid" },
  "ryzen5_3600": { name: "AMD Ryzen 5 3600 (Zen 2, 2019)", score: 68, single: 62, multi: 75, gen: "mid" },
  "ryzen7_3700x": { name: "AMD Ryzen 7 3700X (Zen 2, 2019)", score: 75, single: 65, multi: 85, gen: "mid" },
  "ryzen5_5600": { name: "AMD Ryzen 5 5600 (Zen 3, 2021)", score: 82, single: 85, multi: 80, gen: "new" },
  "ryzen7_5800x": { name: "AMD Ryzen 7 5800X (Zen 3, 2020)", score: 88, single: 88, multi: 88, gen: "new" },
  "i5_12400": { name: "Intel Core i5-12400 (12. Nesil, 2021)", score: 85, single: 90, multi: 80, gen: "new" },
  "i7_12700": { name: "Intel Core i7-12700 (12. Nesil, 2021)", score: 92, single: 92, multi: 92, gen: "new" },
  "i5_13400": { name: "Intel Core i5-13400 (13. Nesil, 2023)", score: 88, single: 90, multi: 86, gen: "new" },
  "i7_14700": { name: "Intel Core i7-14700 (14. Nesil, 2023)", score: 98, single: 98, multi: 98, gen: "new" },
  "ryzen7_7700": { name: "AMD Ryzen 7 7700 (Zen 4, 2022)", score: 94, single: 94, multi: 94, gen: "new" },
  "ryzen9_7900x": { name: "AMD Ryzen 9 7900X (Zen 4, 2022)", score: 99, single: 96, multi: 100, gen: "new" },
  "ryzen7_8845hs": { name: "AMD Ryzen 7 8845HS (Zen 4, 2024)", score: 90, single: 92, multi: 88, gen: "new" },
  "ultra7_155h": { name: "Intel Core Ultra 7 155H (Meteor Lake, 2023)", score: 89, single: 90, multi: 88, gen: "new" },
  "ryzen_ai9_hx370": { name: "AMD Ryzen AI 9 HX 370 (Zen 5, 2024)", score: 96, single: 97, multi: 95, gen: "new" },
  "xeon_e5_2680v4": { name: "Intel Xeon E5-2680 v4 (2016)", score: 60, single: 40, multi: 85, gen: "ws" },
  "xeon_w2245": { name: "Intel Xeon W-2245 (2019)", score: 75, single: 70, multi: 80, gen: "ws" },
  "threadripper_3960x": { name: "AMD Threadripper 3960X (2019)", score: 95, single: 80, multi: 100, gen: "ws" },
  "threadripper_pro_5975wx": { name: "AMD Threadripper PRO 5975WX (2022)", score: 100, single: 90, multi: 100, gen: "ws" }
};

const GPU_DB = {
  "quadro_k620": { name: "NVIDIA Quadro K620 (2 GB, 2014)", score: 15, vram: 2, rtx: false, gen: "old" },
  "quadro_p620": { name: "NVIDIA Quadro P620 (2 GB, 2017)", score: 25, vram: 2, rtx: false, gen: "old" },
  "gtx_1050ti": { name: "NVIDIA GeForce GTX 1050 Ti (4 GB, 2016)", score: 30, vram: 4, rtx: false, gen: "old" },
  "gtx_1650": { name: "NVIDIA GeForce GTX 1650 (4 GB, 2019)", score: 40, vram: 4, rtx: false, gen: "old" },
  "rx_580": { name: "AMD Radeon RX 580 (8 GB, 2017)", score: 45, vram: 8, rtx: false, gen: "old" },
  "gtx_1660s": { name: "NVIDIA GeForce GTX 1660 Super (6 GB, 2019)", score: 55, vram: 6, rtx: false, gen: "mid" },
  "rtx_2060": { name: "NVIDIA GeForce RTX 2060 (6 GB, 2019)", score: 65, vram: 6, rtx: true, gen: "mid" },
  "rtx_3050": { name: "NVIDIA GeForce RTX 3050 (8 GB, 2022)", score: 60, vram: 8, rtx: true, gen: "mid" },
  "rtx_3060": { name: "NVIDIA GeForce RTX 3060 (12 GB, 2021)", score: 75, vram: 12, rtx: true, gen: "mid" },
  "rx_6600": { name: "AMD Radeon RX 6600 (8 GB, 2021)", score: 70, vram: 8, rtx: true, gen: "mid" },
  "rx_6700xt": { name: "AMD Radeon RX 6700 XT (12 GB, 2021)", score: 80, vram: 12, rtx: true, gen: "mid" },
  "rtx_4060": { name: "NVIDIA GeForce RTX 4060 (8 GB, 2023)", score: 85, vram: 8, rtx: true, gen: "new" },
  "rtx_4070": { name: "NVIDIA GeForce RTX 4070 (12 GB, 2023)", score: 92, vram: 12, rtx: true, gen: "new" },
  "rtx_4080": { name: "NVIDIA GeForce RTX 4080 (16 GB, 2022)", score: 98, vram: 16, rtx: true, gen: "new" },
  "rx_7800xt": { name: "AMD Radeon RX 7800 XT (16 GB, 2023)", score: 90, vram: 16, rtx: true, gen: "new" },
  "rtx_a2000": { name: "NVIDIA RTX A2000 (12 GB, 2021)", score: 78, vram: 12, rtx: true, gen: "ws" },
  "rtx_a4000": { name: "NVIDIA RTX A4000 (16 GB, 2021)", score: 88, vram: 16, rtx: true, gen: "ws" },
  "radeon_pro_w6600": { name: "AMD Radeon PRO W6600 (8 GB, 2021)", score: 75, vram: 8, rtx: true, gen: "ws" }
};

const PROGRAMS = [
  { id: 'autocad', name: 'AutoCAD', icon: '📐', weight: { cpu: 0.6, gpu: 0.2, ram: 0.1, disk: 0.1 } },
  { id: 'revit', name: 'Revit', icon: '🏢', weight: { cpu: 0.5, gpu: 0.2, ram: 0.2, disk: 0.1 } },
  { id: 'lumion', name: 'Lumion', icon: '🌳', weight: { cpu: 0.2, gpu: 0.6, ram: 0.1, disk: 0.1 } },
  { id: 'solidworks', name: 'SolidWorks', icon: '⚙️', weight: { cpu: 0.4, gpu: 0.4, ram: 0.1, disk: 0.1 } },
  { id: 'corel', name: 'CorelDRAW', icon: '🎨', weight: { cpu: 0.5, gpu: 0.2, ram: 0.2, disk: 0.1 } }
];

export default function WizardPage() {
  const [cpuKey, setCpuKey] = useState("")
  const [gpuKey, setGpuKey] = useState("")
  const [ramVal, setRamVal] = useState(16)
  const [diskVal, setDiskVal] = useState("ssd")
  const [results, setResults] = useState<any[] | null>(null)
  const [bottleneck, setBottleneck] = useState<any>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleAnalyze = () => {
    if (!cpuKey || !gpuKey) {
      alert("Lütfen işlemci ve ekran kartı seçimi yapın.")
      return
    }

    const cpu = (CPU_DB as any)[cpuKey]
    const gpu = (GPU_DB as any)[gpuKey]

    let diskScore = 30
    if (diskVal === 'ssd') diskScore = 80
    if (diskVal === 'nvme') diskScore = 100

    let ramScore = 40
    if (ramVal === 16) ramScore = 75
    if (ramVal === 32) ramScore = 95
    if (ramVal >= 64) ramScore = 100

    const programResults = PROGRAMS.map(p => {
      let score = (cpu.score * p.weight.cpu) + (gpu.score * p.weight.gpu) + (ramScore * p.weight.ram) + (diskScore * p.weight.disk)
      
      if (p.id === 'lumion' && gpu.vram < 6) score *= 0.6 
      if (p.id === 'revit' && ramVal < 16) score *= 0.7
      if (p.id === 'autocad' && cpu.single < 50) score *= 0.8

      return { ...p, score: Math.round(score) }
    })

    setResults(programResults)

    // Bottleneck Logic
    let bType = 'success'
    let bTitle = '✅ Dengeli Sistem'
    let bText = 'Bileşenleriniz birbiriyle uyumlu görünüyor.'

    if (cpu.score > gpu.score + 30) {
      bType = 'warning'; bTitle = '⚠️ GPU Darboğazı'; bText = 'İşlemciniz çok güçlü ancak ekran kartınız render performansını kısıtlıyor.'
    } else if (gpu.score > cpu.score + 30) {
      bType = 'warning'; bTitle = '⚠️ CPU Darboğazı'; bText = 'Ekran kartınız güçlü ancak işlemciniz veri akışına yetişemeyebilir.'
    }
    if (ramVal < 16) {
      bType = 'danger'; bTitle = '🚨 RAM Kısıtlaması'; bText = 'Düşük RAM miktarı nedeniyle en güçlü işlemci bile tam performans veremez.'
    }
    if (diskVal === 'hdd') {
      bType = 'danger'; bTitle = '🚨 Disk Darboğazı'; bText = 'HDD kullanımı tüm sistem performansını %50\'ye kadar aşağı çeker.'
    }

    setBottleneck({ type: bType, title: bTitle, text: bText })

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const getScoreColor = (s: number) => {
    if (s >= 85) return 'text-green-600 bg-green-50 border-green-200'
    if (s >= 70) return 'text-green-500 bg-green-50/50 border-green-100'
    if (s >= 50) return 'text-amber-500 bg-amber-50 border-amber-200'
    return 'text-red-500 bg-red-50 border-red-200'
  }

  const getScoreLabel = (s: number) => {
    if (s >= 85) return 'Mükemmel'
    if (s >= 70) return 'Çok İyi'
    if (s >= 50) return 'Yeterli'
    return 'Zayıf'
  }

  return (
    <PageShell
      crumbs={[
        { label: "Sihirbaz" }
      ]}
    >
      <main className="pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              title="Sistem Performans Sihirbazı"
              subtitle="İşlemcinizi, ekran kartınızı, RAM ve diskinizi seçin — AutoCAD, Revit, Lumion ve daha fazlası için anlık uyumluluk skoru alın."
            />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* SOL PANEL: SEÇİMLER */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-navy">
                  <TerminalSquare className="size-5 text-primary" />
                  Sistem Bileşenlerini Seçin
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      İşlemci (CPU)
                    </label>
                    <select
                      value={cpuKey}
                      onChange={(e) => setCpuKey(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="">-- İşlemci Seçin --</option>
                      {Object.entries(CPU_DB).map(([key, cpu]) => (
                        <option key={key} value={key}>{cpu.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Ekran Kartı (GPU)
                    </label>
                    <select
                      value={gpuKey}
                      onChange={(e) => setGpuKey(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="">-- Ekran Kartı Seçin --</option>
                      {Object.entries(GPU_DB).map(([key, gpu]) => (
                        <option key={key} value={key}>{gpu.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      RAM Miktarı
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[8, 16, 32, 64].map((v) => (
                        <button
                          key={v}
                          onClick={() => setRamVal(v)}
                          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                            ramVal === v
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {v} GB{v === 64 && "+"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Depolama (Disk)
                    </label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {[
                        { id: "hdd", label: "HDD (Yavaş)" },
                        { id: "ssd", label: "SATA SSD" },
                        { id: "nvme", label: "NVMe (Hızlı)" },
                      ].map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setDiskVal(d.id)}
                          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                            diskVal === d.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleAnalyze}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
                  >
                    Sistemi Analiz Et 🚀
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-navy p-8 text-white shadow-xl">
                <h3 className="mb-2 text-xl font-bold">Daha Güçlü Bir Sisteme mi İhtiyacınız Var?</h3>
                <p className="mb-6 text-navy-200">
                  Yazılımlarınızın tam performans çalışması için profesyonel kurulum ve optimizasyon desteği sunuyoruz.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappLink("Merhaba, sistem performansımı artırmak için destek almak istiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-green-600"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Destek
                  </a>
                  <Link
                    href="/#fiyat"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/20"
                  >
                    Hizmetleri Gör
                  </Link>
                </div>
              </div>
            </div>

            {/* SAĞ PANEL: SONUÇLAR */}
            <div ref={resultsRef} className={`space-y-6 transition-all duration-500 ${results ? "opacity-100" : "opacity-0 pointer-events-none lg:opacity-30"}`}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-navy">
                  <Monitor className="size-5 text-primary" />
                  Analiz Sonuçları
                </h2>

                {!results ? (
                  <div className="flex h-[400px] flex-col items-center justify-center text-center text-muted-foreground">
                    <Zap className="mb-4 size-12 opacity-20" />
                    <p>Sisteminizi analiz etmek için yandaki formu doldurun ve butona tıklayın.</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                      {results.map((r) => (
                        <div key={r.id} className={`flex flex-col items-center rounded-xl border p-3 text-center ${getScoreColor(r.score)}`}>
                          <span className="mb-1 text-2xl">{r.icon}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">{r.name}</span>
                          <span className="my-1 text-2xl font-black">{r.score}</span>
                          <span className="text-[10px] font-bold">{getScoreLabel(r.score)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="h-[250px] w-full">
                      <Bar
                        data={{
                          labels: results.map(r => r.name),
                          datasets: [{
                            label: 'Performans Skoru',
                            data: results.map(r => r.score),
                            backgroundColor: results.map(r => {
                              if (r.score >= 85) return '#16a34a'
                              if (r.score >= 70) return '#22c55e'
                              if (r.score >= 50) return '#f59e0b'
                              return '#ef4444'
                            }),
                            borderRadius: 8
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: { legend: { display: false } },
                          scales: { y: { beginAtZero: true, max: 100 } }
                        }}
                      />
                    </div>

                    {bottleneck && (
                      <div className={`rounded-xl border p-4 ${
                        bottleneck.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
                        bottleneck.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                        'bg-red-50 border-red-200 text-red-800'
                      }`}>
                        <div className="mb-1 flex items-center gap-2 font-bold">
                          {bottleneck.type === 'success' ? <CheckCircle2 className="size-5" /> : 
                           bottleneck.type === 'warning' ? <AlertTriangle className="size-5" /> : 
                           <AlertTriangle className="size-5" />}
                          {bottleneck.title}
                        </div>
                        <p className="text-sm opacity-90">{bottleneck.text}</p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <h3 className="flex items-center gap-2 font-bold text-navy">
                        <Database className="size-4 text-primary" />
                        Teknik Detaylar
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-border">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-muted/50 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            <tr>
                              <th className="px-4 py-3">Bileşen</th>
                              <th className="px-4 py-3">Durum</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            <tr>
                              <td className="px-4 py-3 font-medium">İşlemci</td>
                              <td className="px-4 py-3">{(CPU_DB as any)[cpuKey]?.score}/100</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium">Ekran Kartı</td>
                              <td className="px-4 py-3">{(GPU_DB as any)[gpuKey]?.score}/100</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium">Bellek (RAM)</td>
                              <td className="px-4 py-3">{ramVal} GB</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium">Depolama</td>
                              <td className="px-4 py-3">{diskVal.toUpperCase()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="flex items-center gap-2 font-bold text-navy">
                        <Lightbulb className="size-4 text-primary" />
                        Uzman Önerileri
                      </h3>
                      <ul className="space-y-2">
                        {diskVal === 'hdd' && (
                          <li className="flex items-start gap-2 text-sm text-red-600">
                            <Zap className="mt-0.5 size-4 flex-shrink-0" />
                            <span>Acilen SSD'ye geçiş yapın, HDD tüm sistemi yavaşlatır.</span>
                          </li>
                        )}
                        {ramVal < 16 && (
                          <li className="flex items-start gap-2 text-sm text-amber-600">
                            <Zap className="mt-0.5 size-4 flex-shrink-0" />
                            <span>RAM miktarını en az 16GB yapmanız önerilir.</span>
                          </li>
                        )}
                        {results.find(r => r.id === 'lumion')?.score < 60 && (
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Zap className="mt-0.5 size-4 flex-shrink-0" />
                            <span>Lumion performansı için daha yüksek VRAM'li bir kart seçin.</span>
                          </li>
                        )}
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Zap className="mt-0.5 size-4 flex-shrink-0" />
                          <span>Yazılım optimizasyonları ile %20'ye kadar performans artışı sağlayabilirsiniz.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
// Build trigger: Updated layout to match site theme and fixed TS errors.
