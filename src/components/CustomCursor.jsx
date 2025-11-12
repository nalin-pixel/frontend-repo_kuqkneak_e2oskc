import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) return

    const el = dot.current
    const text = label.current

    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      text.style.transform = `translate3d(${x + 16}px, ${y + 16}px, 0)`
    }

    const setLabel = (content) => {
      text.textContent = content || ''
      text.style.opacity = content ? 1 : 0
    }

    const onOver = (e) => {
      const t = e.target
      if (t && t.getAttribute) {
        const intent = t.getAttribute('data-cursor')
        if (intent) setLabel(intent)
      }
    }
    const onOut = () => setLabel('')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('[data-cursor]').forEach((n) => {
      n.addEventListener('mouseenter', onOver)
      n.addEventListener('mouseleave', onOut)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('[data-cursor]').forEach((n) => {
        n.removeEventListener('mouseenter', onOver)
        n.removeEventListener('mouseleave', onOut)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(185,151,91,0.9)] mix-blend-multiply shadow-[0_0_16px_rgba(185,151,91,0.5)] hidden md:block"
      />
      <div
        ref={label}
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-wide text-[#222] bg-[rgba(253,251,245,0.85)] px-2 py-1 rounded hidden md:block"
        style={{ opacity: 0 }}
      />
    </>
  )
}
