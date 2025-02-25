'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {

  return (
    <AnimatePresence mode="wait" initial={false}>

        {children}
    </AnimatePresence>
  )
} 