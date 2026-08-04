"use client"

import { motion } from "framer-motion"
import {
  MessageCircle,
  Phone,
  FileText,
  ShieldCheck,
  Clock,
  Zap,
  Wifi,
  Star,
  Wrench,
  MapPin,
  CalendarCheck,
} from "lucide-react"
import { whatsappLink } from "@/lib/utils"

const floatingCards = [
  { icon: Zap, label: "Aynı Gün Kurulum", className: "left-0 top-10", delay: 0.2 },
  { icon: Clock, label: "Ortalama 15 dk Yanıt", className: "right-0 top-24", delay: 0.35 },
  { icon: Wifi, label: "Güvenli Uzaktan Bağlantı", className: "left-2 bottom-24", delay: 0.5 },
  { icon: ShieldCheck, label: "Aynı Gün Destek", className: "right-2 bottom-10", delay: 0.65 },
]

const trustBadges = [
  { icon: Star, label: "4.9 Puan" },
  { icon: CalendarCheck, label: "12+ Yıl Tecrübe" },
  { icon: MapPin, label: "Dünya Genelinde Hizmet" },
  { icon: Clock, label: "200+ Kurulum" },
]

const softwareTabs = ["AutoCAD", "Lumion", "Revit", "SolidWorks", "Office", "Adobe"]

export function Hero() {
  return (
    <section
      aria-label="Uzaktan program kurulumu — özet ve iletişim"
      className="relative overflow-hidden pt-28 md:pt-32 lg:pt-36"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-28">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-sm font-medium text-navy"
          >
            <span className="flex size-2 items-center justify-center">
              <span className="size-2 animate-ping rounded-full bg-cyan/70" />
              <span className="absolute size-2 rounded-full bg-cyan" />
            </span>
            Şu an aktif · Ortalama 15 dk içinde yanıt
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-navy text-balance sm:text-5xl lg:text-6xl"
          >
            Bilgisayarınıza Uzaktan{" "}
            <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
              Program Kurulumu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            AutoCAD, Revit, Lumion, SolidWorks, Microsoft Office, Microsoft 365, Adobe Creative
            Cloud ve daha fazlası için aynı gün uzaktan kurulum ve teknik destek.
          </motion.p>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 inline-flex items-baseline gap-2.5 rounded-2xl border border-border bg-card px-5 py-3.5 shadow-sm"
          >
            <span className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">1000 TL</span>
            <span className="text-sm font-medium text-muted-foreground">Tek Seferlik Kurulum</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={whatsappLink("Merhaba, yazılım kurulumu için hemen destek almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30"
            >
              <MessageCircle className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="tel:+905385050002"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-base font-semibold text-navy transition-all hover:border-navy/20 hover:bg-muted"
            >
              <Phone className="size-5 text-primary" aria-hidden="true" />
              Telefon
            </a>
            <a
              href="/#fiyat"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-base font-semibold text-navy transition-all hover:border-navy/20 hover:bg-muted"
            >
              <FileText className="size-5 text-primary" aria-hidden="true" />
              Teklif Al
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground"
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <li key={badge.label} className="flex items-center gap-1.5">
                  <Icon
                    className={`size-4 ${badge.icon === Star ? "fill-cyan text-cyan" : "text-primary"}`}
                    aria-hidden="true"
                  />
                  <span className="font-medium text-navy">{badge.label}</span>
                </li>
              )
            })}
          </motion.ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ perspective: 1200 }}
            className="relative"
          >
            {/* Laptop */}
            <div className="relative rounded-2xl border border-navy-700 bg-navy p-2.5 shadow-2xl shadow-navy/30">
              <div className="overflow-hidden rounded-xl bg-navy-800">
                {/* window chrome */}
                <div className="flex items-center gap-2 border-b border-white/5 bg-navy-700/60 px-4 py-3">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#febc2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex gap-1.5 overflow-hidden">
                    {softwareTabs.map((tab, i) => (
                      <span
                        key={tab}
                        className={`hidden rounded-md px-2.5 py-1 text-xs font-medium sm:inline ${
                          i === 0
                            ? "bg-white/10 text-white"
                            : "text-white/40"
                        }`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* content mock */}
                <div className="grid grid-cols-3 gap-2 p-4">
                  <div className="col-span-2 space-y-2">
                    <div className="h-24 rounded-lg bg-gradient-to-br from-primary/30 to-cyan/20 ring-1 ring-white/10" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-lg bg-white/[0.06] ring-1 ring-white/5" />
                      <div className="h-14 rounded-lg bg-white/[0.06] ring-1 ring-white/5" />
                      <div className="h-14 rounded-lg bg-white/[0.06] ring-1 ring-white/5" />
                    </div>
                    <div className="h-3 w-3/4 rounded bg-white/10" />
                    <div className="h-3 w-1/2 rounded bg-white/[0.07]" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 rounded-lg bg-primary/40" />
                    <div className="h-3 rounded bg-white/10" />
                    <div className="h-3 w-4/5 rounded bg-white/[0.07]" />
                    <div className="h-3 rounded bg-white/[0.07]" />
                    <div className="mt-3 h-16 rounded-lg bg-gradient-to-br from-cyan/25 to-transparent ring-1 ring-white/10" />
                    <div className="flex items-center gap-1.5 rounded-lg bg-[#28c840]/15 px-2 py-1.5 text-[10px] font-medium text-[#3ddc63]">
                      <span className="size-1.5 rounded-full bg-[#3ddc63]" />
                      Kurulum tamamlandı
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* laptop base */}
            <div className="mx-auto h-3 w-[85%] rounded-b-xl bg-navy-700 shadow-lg" />

            {/* Floating cards */}
            {floatingCards.map((card) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: card.delay + 0.5 }}
                  className={`absolute ${card.className} hidden sm:block`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: card.delay,
                    }}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-background/90 px-3.5 py-2.5 shadow-lg shadow-navy/10 backdrop-blur-md"
                  >
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-navy">{card.label}</span>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
