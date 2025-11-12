import { useEffect } from 'react'

// Lightweight smooth scrolling using native CSS + minor JS damping.
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    document.documentElement.style.scrollBehavior = 'smooth'

    // Minimal damping on wheel to emulate ease-out without heavy libs.
    let ticking = false
    const onWheel = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    return () => {
      document.documentElement.style.scrollBehavior = ''
      window.removeEventListener('wheel', onWheel)
    }
  }, [])

  return children
}
