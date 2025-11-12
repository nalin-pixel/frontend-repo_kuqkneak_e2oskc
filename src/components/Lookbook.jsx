import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const looks = [
  {
    id: 'look-1',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1800&auto=format&fit=crop',
    hotspots: [
      { x: '42%', y: '55%', product: { id: 'kurti-emerald', name: 'Emerald Kurti', price: 6490 } },
      { x: '60%', y: '68%', product: { id: 'pant-gold', name: 'Gold Silk Pants', price: 4890 } },
      { x: '48%', y: '32%', product: { id: 'dupatta-chinnon', name: 'Chinnon Dupatta', price: 3290 } },
    ],
  },
]

export default function Lookbook() {
  const [active, setActive] = useState(null)

  return (
    <section id="lookbook" className="relative bg-[#FDFBF5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-4xl text-[#222] text-center mb-10">Interactive Lookbook</h2>
        <div className="relative rounded-2xl overflow-hidden">
          <img src={looks[0].image} alt="Editorial look" className="w-full h-[60vh] object-cover" />
          {looks[0].hotspots.map((spot, idx) => (
            <button
              key={idx}
              onClick={() => setActive(spot.product)}
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9975B] shadow ring-4 ring-[#FDFBF5]/70 animate-pulse"
              style={{ left: spot.x, top: spot.y }}
              aria-label={`Quick shop ${spot.product.name}`}
              data-cursor="View"
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-md w-full mx-4 rounded-2xl overflow-hidden bg-white shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#222]">{active.name}</h3>
                <p className="text-[#2E534B] mt-1">₹{active.price.toLocaleString('en-IN')}</p>

                <div className="mt-5 grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L'].map((s) => (
                    <button key={s} className="border border-[#B9975B]/60 rounded py-2 text-sm hover:bg-[#FDFBF5]">
                      {s}
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-full bg-[#B9975B] text-[#222] py-3" data-cursor="Add">
                    Add to Cart
                  </button>
                  <button className="rounded-full border border-[#B9975B] text-[#222] px-4" aria-label="Wishlist">
                    ♥
                  </button>
                </div>

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black/70 text-white"
                  aria-label="Close"
                >
                  Esc
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
