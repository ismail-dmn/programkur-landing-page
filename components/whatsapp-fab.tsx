"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/utils"

export function WhatsappFab() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink("Merhaba, yazılım kurulumu için destek almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-primary-foreground shadow-xl shadow-[#25D366]/30 transition-all hover:pr-5 sm:bottom-7 sm:right-7"
          aria-label="WhatsApp'tan destek al"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 [animation:ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" aria-hidden="true" />
          <span className="relative flex size-8 items-center justify-center">
            <MessageCircle className="size-6" aria-hidden="true" />
          </span>
          <span className="relative text-sm font-semibold">WhatsApp Destek</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
