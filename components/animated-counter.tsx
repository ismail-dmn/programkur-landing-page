"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("tr-TR")

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
