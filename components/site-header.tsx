"use client"

import { useEffect, useState } from "react"
import { Menu, X, MessageCircle, TerminalSquare } from "lucide-react"
import Link from "next/link"
import { cn, whatsappLink } from "@/lib/utils"

const navLinks = [
  { href: "/#neden-biz", label: "Neden Biz" },
  { href: "/#yazilimlar", label: "Yazılımlar" },
  { href: "/#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/#uzak-baglanti", label: "Uzak Bağlantı" },
  { href: "/#fiyat", label: "Fiyat" },
  { href: "/#sss", label: "SSS" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-18 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ProgramKur.com.tr ana sayfa">
          <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-primary-foreground">
            <TerminalSquare className="size-5 text-cyan-light" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-navy">
            ProgramKur<span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/makaleler/sistem-performans-sihirbazi.html"
              className="animate-blink ml-2 flex items-center gap-1.5 rounded-lg bg-primary/10 px-3.5 py-2 text-sm font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all"
            >
              <span>Sihirbaz</span>
              <span className="hidden xl:inline">🔮</span>
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+905385050002"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
          >
            +90 538 505 00 02
          </a>
          <a
            href={whatsappLink("Merhaba, yazılım kurulumu için destek almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-md hover:shadow-primary/30"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp Destek
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-muted lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-navy transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/makaleler/sistem-performans-sihirbazi.html"
                onClick={() => setOpen(false)}
                className="animate-blink flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-3 text-base font-bold text-primary"
              >
                <span>🔮 Sistem Performans Sihirbazı</span>
              </Link>
            </li>
            <li className="mt-2">
              <a
                href={whatsappLink("Merhaba, yazılım kurulumu için destek almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp Destek Al
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
