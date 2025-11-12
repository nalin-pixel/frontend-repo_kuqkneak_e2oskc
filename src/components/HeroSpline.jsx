import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function HeroSpline() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#FDFBF5]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF5] opacity-80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-[#222] tracking-wide">
            Ethereal Elegance
          </h1>
          <p className="mt-4 text-[#2E534B] text-base md:text-lg">
            Artisanal womenswear, crafted with quiet luxury and modern grace.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#lookbook"
              data-cursor="View"
              className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[#222] bg-[#B9975B]/90 hover:bg-[#B9975B] transition-colors shadow-sm"
            >
              <span className="relative">
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#b08949] to-[#d6b77f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Explore Editorial
              </span>
            </a>
            <a
              href="#new"
              data-cursor="Shop"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[#222] border border-[#B9975B] hover:bg-[#B9975B]/10 transition-colors"
            >
              Shop New Arrivals
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
